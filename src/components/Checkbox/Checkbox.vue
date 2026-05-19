<script setup lang="ts">
import { computed } from 'vue'
import './Checkbox.css'

interface Props {
  modelValue?: boolean | (string | number)[]
  value?: string | number
  label?: string
  hint?: string
  size?: 'sm' | 'md' | 'lg'
  disabled?: boolean
  indeterminate?: boolean
  error?: boolean
}

const props = withDefaults(defineProps<Props>(), {
  size: 'md',
  disabled: false,
  indeterminate: false,
  error: false,
})

const emit = defineEmits<{
  'update:modelValue': [value: boolean | (string | number)[]]
}>()

const isArray = computed(() => Array.isArray(props.modelValue))

const isChecked = computed(() => {
  if (isArray.value) return (props.modelValue as (string | number)[]).includes(props.value!)
  return !!props.modelValue
})

function toggle() {
  if (props.disabled) return
  if (isArray.value) {
    const current = props.modelValue as (string | number)[]
    const next = isChecked.value
      ? current.filter((v) => v !== props.value)
      : [...current, props.value!]
    emit('update:modelValue', next)
  } else {
    emit('update:modelValue', !isChecked.value)
  }
}
</script>

<template>
  <label
    :class="[
      'neu-checkbox',
      `neu-checkbox--${size}`,
      { 'neu-checkbox--disabled': disabled, 'neu-checkbox--error': error },
    ]"
  >
    <input
      type="checkbox"
      class="neu-checkbox__native"
      :checked="isChecked"
      :disabled="disabled"
      :indeterminate="indeterminate"
      @change="toggle"
    />

    <span
      :class="[
        'neu-checkbox__box',
        `neu-checkbox__box--${size}`,
        {
          'neu-checkbox__box--checked': isChecked || indeterminate,
          'neu-checkbox__box--indeterminate': indeterminate,
          'neu-checkbox__box--error': error,
        },
      ]"
    >
      <svg v-if="indeterminate && !isChecked" class="neu-checkbox__icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round">
        <line x1="5" y1="12" x2="19" y2="12" />
      </svg>
      <svg v-else-if="isChecked" class="neu-checkbox__icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round">
        <polyline points="20 6 9 17 4 12" />
      </svg>
    </span>

    <span v-if="label || hint" class="neu-checkbox__content">
      <span v-if="label" class="neu-checkbox__label">{{ label }}</span>
      <span v-if="hint" :class="['neu-checkbox__hint', { 'neu-checkbox__hint--error': error }]">{{ hint }}</span>
    </span>
  </label>
</template>
