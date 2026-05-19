<script setup lang="ts">
import { ref, computed, onMounted, onUnmounted } from 'vue'
import './Select.css'

export interface SelectOption {
  label: string
  value: string | number
  disabled?: boolean
}

interface Props {
  modelValue?: string | number | null
  options: SelectOption[]
  placeholder?: string
  label?: string
  hint?: string
  size?: 'sm' | 'md' | 'lg'
  rounded?: 'none' | 'sm' | 'md' | 'lg' | 'xl' | 'full'
  disabled?: boolean
  error?: boolean
}

const props = withDefaults(defineProps<Props>(), {
  modelValue: null,
  placeholder: 'Selecciona una opción',
  size: 'md',
  rounded: 'lg',
  disabled: false,
  error: false,
})

const emit = defineEmits<{
  'update:modelValue': [value: string | number | null]
  change: [value: string | number | null]
}>()

const isOpen = ref(false)
const focusedIndex = ref(-1)
const rootEl = ref<HTMLElement | null>(null)
const listEl = ref<HTMLElement | null>(null)

const selectedOption = computed(() =>
  props.options.find((o) => o.value === props.modelValue) ?? null
)

function toggle() {
  if (props.disabled) return
  isOpen.value ? close() : open()
}

function open() {
  isOpen.value = true
  focusedIndex.value = props.options.findIndex((o) => o.value === props.modelValue)
  if (focusedIndex.value === -1) focusedIndex.value = 0
}

function close() {
  isOpen.value = false
  focusedIndex.value = -1
}

function select(option: SelectOption) {
  if (option.disabled) return
  emit('update:modelValue', option.value)
  emit('change', option.value)
  close()
}

function onKeydown(event: KeyboardEvent) {
  if (!isOpen.value) {
    if (event.key === 'Enter' || event.key === ' ' || event.key === 'ArrowDown') {
      event.preventDefault()
      open()
    }
    return
  }
  if (event.key === 'Escape') { event.preventDefault(); close(); return }
  if (event.key === 'ArrowDown') { event.preventDefault(); moveFocus(1) }
  else if (event.key === 'ArrowUp') { event.preventDefault(); moveFocus(-1) }
  else if (event.key === 'Enter' || event.key === ' ') {
    event.preventDefault()
    const option = props.options[focusedIndex.value]
    if (option) select(option)
  }
}

function moveFocus(direction: 1 | -1) {
  let next = focusedIndex.value + direction
  while (next >= 0 && next < props.options.length && props.options[next].disabled) next += direction
  if (next >= 0 && next < props.options.length) {
    focusedIndex.value = next
    listEl.value?.children[next]?.scrollIntoView({ block: 'nearest' })
  }
}

function onClickOutside(event: MouseEvent) {
  if (rootEl.value && !rootEl.value.contains(event.target as Node)) close()
}

onMounted(() => document.addEventListener('mousedown', onClickOutside))
onUnmounted(() => document.removeEventListener('mousedown', onClickOutside))
</script>

<template>
  <div ref="rootEl" class="neu-select-root">
    <label v-if="label" class="neu-select__label">{{ label }}</label>

    <button
      type="button"
      :disabled="disabled"
      :aria-expanded="isOpen"
      :aria-haspopup="true"
      :class="[
        'neu-select__trigger',
        `neu-select__trigger--${size}`,
        `neu-select__trigger--rounded-${rounded}`,
        {
          'neu-select__trigger--open': isOpen,
          'neu-select__trigger--error': error,
          'neu-select__trigger--disabled': disabled,
          'neu-select__trigger--placeholder': !selectedOption,
        },
      ]"
      @click="toggle"
      @keydown="onKeydown"
    >
      <span class="neu-select__value">
        {{ selectedOption ? selectedOption.label : placeholder }}
      </span>
      <svg
        class="neu-select__chevron"
        :class="{ 'neu-select__chevron--open': isOpen }"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        stroke-width="2.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      >
        <polyline points="6 9 12 15 18 9" />
      </svg>
    </button>

    <Transition name="neu-select-drop">
      <div
        v-if="isOpen"
        ref="listEl"
        role="listbox"
        :class="['neu-select__dropdown', `neu-select__dropdown--rounded-${rounded}`]"
      >
        <div
          v-for="(option, index) in options"
          :key="option.value"
          role="option"
          :aria-selected="option.value === modelValue"
          :aria-disabled="option.disabled"
          :class="[
            'neu-select__option',
            `neu-select__option--${size}`,
            {
              'neu-select__option--selected': option.value === modelValue,
              'neu-select__option--focused': index === focusedIndex,
              'neu-select__option--disabled': option.disabled,
            },
          ]"
          @mouseenter="!option.disabled && (focusedIndex = index)"
          @mousedown.prevent="select(option)"
        >
          <span>{{ option.label }}</span>
          <svg
            v-if="option.value === modelValue"
            class="neu-select__check"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <polyline points="20 6 9 17 4 12" />
          </svg>
        </div>
      </div>
    </Transition>

    <span v-if="hint" :class="['neu-select__hint', { 'neu-select__hint--error': error }]">
      {{ hint }}
    </span>
  </div>
</template>
