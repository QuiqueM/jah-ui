<script setup lang="ts">
import { computed, ref } from 'vue'
import './Rating.css'

export interface RatingProps {
  modelValue?: number
  max?: number
  size?: 'sm' | 'md' | 'lg'
  color?: string
  allowHalf?: boolean
  clearable?: boolean
  readonly?: boolean
  disabled?: boolean
  label?: string
}

const props = withDefaults(defineProps<RatingProps>(), {
  modelValue: 0,
  max: 5,
  size: 'md',
  color: '#fbbf24',
  allowHalf: false,
  clearable: false,
  readonly: false,
  disabled: false,
})

const emit = defineEmits<{ 'update:modelValue': [value: number] }>()

const hoverValue = ref<number | null>(null)
const isInteractive = computed(() => !props.readonly && !props.disabled)
const displayValue  = computed(() => hoverValue.value ?? props.modelValue ?? 0)

// ── Star state helpers ───────────────────────────────────────────
type StarState = 'full' | 'half' | 'empty'

function starState(index: number): StarState {
  const v = displayValue.value
  if (v >= index) return 'full'
  if (props.allowHalf && v >= index - 0.5) return 'half'
  return 'empty'
}

function starFill(index: number): string {
  const s = starState(index)
  if (s === 'full') return props.color
  if (s === 'half') return `url(#neu-half-${index})`
  return '#c4cad4'
}

// ── Mouse interaction ────────────────────────────────────────────
function resolveValue(e: MouseEvent, index: number): number {
  if (props.allowHalf) {
    const rect = (e.currentTarget as HTMLElement).getBoundingClientRect()
    return e.clientX - rect.left < rect.width / 2 ? index - 0.5 : index
  }
  return index
}

function onMouseMove(e: MouseEvent, index: number) {
  if (!isInteractive.value) return
  hoverValue.value = resolveValue(e, index)
}

function onMouseLeave() {
  hoverValue.value = null
}

function onClick(e: MouseEvent, index: number) {
  if (!isInteractive.value) return
  const val = resolveValue(e, index)
  emit('update:modelValue', props.clearable && val === props.modelValue ? 0 : val)
}

// ── Keyboard ─────────────────────────────────────────────────────
function onKeydown(e: KeyboardEvent) {
  if (!isInteractive.value) return
  const step    = props.allowHalf ? 0.5 : 1
  const current = props.modelValue ?? 0

  const moves: Record<string, number> = {
    ArrowRight: step, ArrowUp: step,
    ArrowLeft: -step, ArrowDown: -step,
  }

  if (e.key === 'Home') { e.preventDefault(); emit('update:modelValue', 0); return }
  if (e.key === 'End')  { e.preventDefault(); emit('update:modelValue', props.max); return }

  const delta = moves[e.key]
  if (delta !== undefined) {
    e.preventDefault()
    const next = Math.min(Math.max(current + delta, 0), props.max)
    emit('update:modelValue', next)
  }
}
</script>

<template>
  <div
    :class="[
      'neu-rating',
      `neu-rating--${size}`,
      {
        'neu-rating--readonly':  readonly,
        'neu-rating--disabled':  disabled,
        'neu-rating--half':      allowHalf,
      },
    ]"
    role="slider"
    :aria-label="label ?? 'Calificación'"
    :aria-valuemin="0"
    :aria-valuemax="max"
    :aria-valuenow="modelValue"
    :aria-disabled="disabled"
    :tabindex="isInteractive ? 0 : -1"
    @mouseleave="onMouseLeave"
    @keydown="onKeydown"
  >
    <button
      v-for="i in max"
      :key="i"
      type="button"
      :disabled="!isInteractive"
      :aria-label="`${allowHalf && displayValue === i - 0.5 ? i - 0.5 : i} de ${max}`"
      :class="[
        'neu-rating__btn',
        {
          'neu-rating__btn--filled': starState(i) === 'full',
          'neu-rating__btn--half':   starState(i) === 'half',
        },
      ]"
      @mousemove="(e) => onMouseMove(e, i)"
      @click="(e) => onClick(e, i)"
    >
      <svg
        class="neu-rating__star"
        viewBox="0 0 24 24"
        aria-hidden="true"
      >
        <defs>
          <linearGradient :id="`neu-half-${i}`" x1="0" x2="1" y1="0" y2="0">
            <stop offset="50%" :stop-color="color" />
            <stop offset="50%" stop-color="#c4cad4" />
          </linearGradient>
        </defs>
        <path
          d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"
          :fill="starFill(i)"
          stroke="none"
        />
      </svg>
    </button>
  </div>
</template>
