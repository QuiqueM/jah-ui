<script setup lang="ts">
import { computed, ref, watch } from 'vue'
import './Datepicker.css'

interface Props {
  modelValue?: string
  label?: string
  placeholder?: string
  size?: 'sm' | 'md' | 'lg'
  rounded?: 'none' | 'sm' | 'md' | 'lg' | 'xl'
  disabled?: boolean
  error?: string
  hint?: string
  min?: string
  max?: string
  locale?: string
}

const props = withDefaults(defineProps<Props>(), {
  size: 'md',
  rounded: 'lg',
  disabled: false,
  locale: 'es',
})

const emit = defineEmits<{ 'update:modelValue': [value: string] }>()

const isOpen = ref(false)
const rootRef = ref<HTMLElement>()

const today = new Date()
const viewYear = ref(today.getFullYear())
const viewMonth = ref(today.getMonth())

watch(
  () => props.modelValue,
  (val) => {
    if (val) {
      const [y, m] = val.split('-').map(Number)
      viewYear.value = y
      viewMonth.value = m - 1
    }
  },
  { immediate: true },
)

function onDocClick(e: MouseEvent) {
  if (rootRef.value && !rootRef.value.contains(e.target as Node)) {
    isOpen.value = false
    document.removeEventListener('click', onDocClick)
  }
}

function open() {
  if (props.disabled) return
  isOpen.value = true
  setTimeout(() => document.addEventListener('click', onDocClick), 0)
}

function close() {
  isOpen.value = false
  document.removeEventListener('click', onDocClick)
}

function toggle() {
  isOpen.value ? close() : open()
}

function onKeydown(e: KeyboardEvent) {
  if (e.key === 'Escape') close()
}

// ── Date helpers ──────────────────────────────────────────────
function toISO(date: Date): string {
  const y = date.getFullYear()
  const m = String(date.getMonth() + 1).padStart(2, '0')
  const d = String(date.getDate()).padStart(2, '0')
  return `${y}-${m}-${d}`
}

function isSelected(date: Date) {
  return toISO(date) === props.modelValue
}

function isToday(date: Date) {
  return toISO(date) === toISO(today)
}

function isOutOfRange(date: Date) {
  const iso = toISO(date)
  return (!!props.min && iso < props.min) || (!!props.max && iso > props.max)
}

// ── Calendar grid ─────────────────────────────────────────────
const calendarDays = computed(() => {
  const year = viewYear.value
  const month = viewMonth.value

  // Week starts on Monday — convert getDay() (0=Sun) to Mon-based offset
  const firstDow = new Date(year, month, 1).getDay()
  const startOffset = (firstDow + 6) % 7

  const daysInMonth = new Date(year, month + 1, 0).getDate()
  const prevMonthLast = new Date(year, month, 0).getDate()

  const days: { date: Date; currentMonth: boolean }[] = []

  for (let i = startOffset - 1; i >= 0; i--)
    days.push({ date: new Date(year, month - 1, prevMonthLast - i), currentMonth: false })

  for (let d = 1; d <= daysInMonth; d++)
    days.push({ date: new Date(year, month, d), currentMonth: true })

  const remaining = 42 - days.length
  for (let d = 1; d <= remaining; d++)
    days.push({ date: new Date(year, month + 1, d), currentMonth: false })

  return days
})

// Jan 6 2025 is a Monday — use as anchor for weekday names
const weekdays = computed(() => {
  const fmt = new Intl.DateTimeFormat(props.locale, { weekday: 'short' })
  return Array.from({ length: 7 }, (_, i) => fmt.format(new Date(2025, 0, 6 + i)))
})

const monthYearLabel = computed(() =>
  new Intl.DateTimeFormat(props.locale, { month: 'long', year: 'numeric' }).format(
    new Date(viewYear.value, viewMonth.value),
  ),
)

const displayValue = computed(() => {
  if (!props.modelValue) return ''
  const [y, m, d] = props.modelValue.split('-').map(Number)
  return new Intl.DateTimeFormat(props.locale, {
    day: '2-digit',
    month: 'long',
    year: 'numeric',
  }).format(new Date(y, m - 1, d))
})

function prevMonth() {
  if (viewMonth.value === 0) { viewMonth.value = 11; viewYear.value-- }
  else viewMonth.value--
}

function nextMonth() {
  if (viewMonth.value === 11) { viewMonth.value = 0; viewYear.value++ }
  else viewMonth.value++
}

function selectDay(date: Date) {
  if (isOutOfRange(date)) return
  emit('update:modelValue', toISO(date))
  close()
}
</script>

<template>
  <div ref="rootRef" class="neu-dp-root" @keydown="onKeydown">
    <label v-if="label" class="neu-dp__label">{{ label }}</label>

    <!-- Trigger -->
    <button
      type="button"
      :disabled="disabled"
      :class="[
        'neu-dp__trigger',
        `neu-dp__trigger--${size}`,
        `neu-dp__trigger--rounded-${rounded}`,
        {
          'neu-dp__trigger--open': isOpen,
          'neu-dp__trigger--error': !!error,
          'neu-dp__trigger--disabled': disabled,
          'neu-dp__trigger--placeholder': !modelValue,
        },
      ]"
      @click="toggle"
    >
      <svg
        class="neu-dp__cal-icon"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        stroke-width="1.75"
        stroke-linecap="round"
        stroke-linejoin="round"
      >
        <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
        <line x1="16" y1="2" x2="16" y2="6" />
        <line x1="8" y1="2" x2="8" y2="6" />
        <line x1="3" y1="10" x2="21" y2="10" />
      </svg>

      <span class="neu-dp__value">{{ displayValue || placeholder || 'Selecciona una fecha' }}</span>

      <svg
        class="neu-dp__chevron"
        :class="{ 'neu-dp__chevron--open': isOpen }"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      >
        <polyline points="6 9 12 15 18 9" />
      </svg>
    </button>

    <!-- Calendar panel -->
    <Transition name="neu-dp-drop">
      <div
        v-if="isOpen"
        :class="['neu-dp__panel', `neu-dp__panel--rounded-${rounded}`]"
      >
        <!-- Header -->
        <div class="neu-dp__header">
          <button type="button" class="neu-dp__nav-btn" @click.stop="prevMonth">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <polyline points="15 18 9 12 15 6" />
            </svg>
          </button>
          <span class="neu-dp__month-label">{{ monthYearLabel }}</span>
          <button type="button" class="neu-dp__nav-btn" @click.stop="nextMonth">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <polyline points="9 18 15 12 9 6" />
            </svg>
          </button>
        </div>

        <!-- Weekday headers -->
        <div class="neu-dp__weekdays">
          <span v-for="wd in weekdays" :key="wd" class="neu-dp__weekday">{{ wd }}</span>
        </div>

        <!-- Day grid -->
        <div class="neu-dp__grid">
          <button
            v-for="({ date, currentMonth }, i) in calendarDays"
            :key="i"
            type="button"
            :disabled="isOutOfRange(date)"
            :class="[
              'neu-dp__day',
              {
                'neu-dp__day--other-month': !currentMonth,
                'neu-dp__day--today': isToday(date),
                'neu-dp__day--selected': isSelected(date),
                'neu-dp__day--disabled': isOutOfRange(date),
              },
            ]"
            @click.stop="selectDay(date)"
          >
            {{ date.getDate() }}
          </button>
        </div>
      </div>
    </Transition>

    <span
      v-if="error || hint"
      :class="['neu-dp__hint', { 'neu-dp__hint--error': !!error }]"
    >{{ error ?? hint }}</span>
  </div>
</template>
