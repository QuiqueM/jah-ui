<script setup lang="ts">
import './Toggle.css'

export interface ToggleProps {
  modelValue?: boolean
  label?: string
  hint?: string
  labelPosition?: 'left' | 'right'
  size?: 'sm' | 'md' | 'lg'
  disabled?: boolean
  error?: boolean
}

const props = withDefaults(defineProps<ToggleProps>(), {
  modelValue: false,
  labelPosition: 'right',
  size: 'md',
  disabled: false,
  error: false,
})

const emit = defineEmits<{
  'update:modelValue': [value: boolean]
  change: [value: boolean]
}>()

function toggle() {
  if (props.disabled) return
  emit('update:modelValue', !props.modelValue)
  emit('change', !props.modelValue)
}
</script>

<template>
  <label
    :class="[
      'neu-toggle',
      `neu-toggle--${size}`,
      `neu-toggle--label-${labelPosition}`,
      { 'neu-toggle--disabled': disabled, 'neu-toggle--error': error },
    ]"
  >
    <span v-if="(label || hint) && labelPosition === 'left'" class="neu-toggle__content">
      <span v-if="label" class="neu-toggle__label">{{ label }}</span>
      <span v-if="hint" :class="['neu-toggle__hint', { 'neu-toggle__hint--error': error }]">{{ hint }}</span>
    </span>

    <input type="checkbox" class="neu-toggle__native" :checked="modelValue" :disabled="disabled" @change="toggle" />

    <span
      :class="[
        'neu-toggle__track',
        `neu-toggle__track--${size}`,
        { 'neu-toggle__track--on': modelValue, 'neu-toggle__track--error': error },
      ]"
    >
      <span :class="['neu-toggle__thumb', `neu-toggle__thumb--${size}`, { 'neu-toggle__thumb--on': modelValue }]" />
    </span>

    <span v-if="(label || hint) && labelPosition === 'right'" class="neu-toggle__content">
      <span v-if="label" class="neu-toggle__label">{{ label }}</span>
      <span v-if="hint" :class="['neu-toggle__hint', { 'neu-toggle__hint--error': error }]">{{ hint }}</span>
    </span>
  </label>
</template>
