<script setup lang="ts">
import './Badge.css'

export interface BadgeProps {
  variant?: 'primary' | 'secondary' | 'success' | 'warning' | 'danger'
  size?: 'sm' | 'md' | 'lg'
  rounded?: 'none' | 'sm' | 'md' | 'full'
  dot?: boolean
  outline?: boolean
}

withDefaults(defineProps<BadgeProps>(), {
  variant: 'primary',
  size: 'md',
  rounded: 'full',
  dot: false,
  outline: false,
})

defineSlots<{ default?: () => unknown }>()
</script>

<template>
  <span
    :class="[
      'neu-badge',
      `neu-badge--${variant}`,
      `neu-badge--${size}`,
      `neu-badge--rounded-${rounded}`,
      { 'neu-badge--dot': dot, 'neu-badge--outline': outline },
    ]"
  >
    <slot v-if="!dot" />
  </span>
</template>
