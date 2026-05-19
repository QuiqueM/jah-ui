<script setup lang="ts">
import { computed } from 'vue'
import './Radio.css'

interface Props {
  modelValue?: string | number | null
  value: string | number
  label?: string
  hint?: string
  name?: string
  size?: 'sm' | 'md' | 'lg'
  disabled?: boolean
  error?: boolean
}

const props = withDefaults(defineProps<Props>(), {
  modelValue: null,
  size: 'md',
  disabled: false,
  error: false,
})

const emit = defineEmits<{
  'update:modelValue': [value: string | number]
}>()

const isSelected = computed(() => props.modelValue === props.value)

function select() {
  if (props.disabled || isSelected.value) return
  emit('update:modelValue', props.value)
}
</script>

<template>
  <label
    :class="[
      'neu-radio',
      `neu-radio--${size}`,
      { 'neu-radio--disabled': disabled, 'neu-radio--error': error },
    ]"
  >
    <input
      type="radio"
      class="neu-radio__native"
      :name="name"
      :value="value"
      :checked="isSelected"
      :disabled="disabled"
      @change="select"
    />

    <span
      :class="[
        'neu-radio__ring',
        `neu-radio__ring--${size}`,
        { 'neu-radio__ring--selected': isSelected, 'neu-radio__ring--error': error },
      ]"
    >
      <span v-if="isSelected" class="neu-radio__dot" />
    </span>

    <span v-if="label || hint" class="neu-radio__content">
      <span v-if="label" class="neu-radio__label">{{ label }}</span>
      <span v-if="hint" :class="['neu-radio__hint', { 'neu-radio__hint--error': error }]">{{ hint }}</span>
    </span>
  </label>
</template>
