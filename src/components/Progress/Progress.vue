<script setup lang="ts">
import { computed } from 'vue'
import './Progress.css'

interface Props {
  value?: number
  max?: number
  variant?: 'primary' | 'success' | 'warning' | 'danger'
  size?: 'sm' | 'md' | 'lg'
  rounded?: 'none' | 'sm' | 'md' | 'full'
  label?: string
  showValue?: boolean
  indeterminate?: boolean
  animated?: boolean
}

const props = withDefaults(defineProps<Props>(), {
  value: 0,
  max: 100,
  variant: 'primary',
  size: 'md',
  rounded: 'full',
  showValue: false,
  indeterminate: false,
  animated: false,
})

const percentage = computed(() => {
  if (props.indeterminate) return 40
  const clamped = Math.min(Math.max(props.value, 0), props.max)
  return Math.round((clamped / props.max) * 100)
})

const displayValue = computed(() => `${percentage.value}%`)
</script>

<template>
  <div class="neu-progress-root">
    <div v-if="label || showValue" class="neu-progress__header">
      <span v-if="label" class="neu-progress__label">{{ label }}</span>
      <span v-if="showValue && !indeterminate" class="neu-progress__value">{{ displayValue }}</span>
    </div>

    <div
      :class="['neu-progress__track', `neu-progress__track--${size}`, `neu-progress__track--rounded-${rounded}`]"
      role="progressbar"
      :aria-valuenow="indeterminate ? undefined : value"
      :aria-valuemin="0"
      :aria-valuemax="max"
      :aria-label="label"
    >
      <div
        :class="[
          'neu-progress__fill',
          `neu-progress__fill--${variant}`,
          `neu-progress__fill--rounded-${rounded}`,
          { 'neu-progress__fill--indeterminate': indeterminate, 'neu-progress__fill--animated': animated && !indeterminate },
        ]"
        :style="indeterminate ? undefined : { width: `${percentage}%` }"
      />
    </div>
  </div>
</template>
