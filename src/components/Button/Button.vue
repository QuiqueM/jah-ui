<script setup lang="ts">
import './Button.css'

export interface ButtonProps {
  label: string
  variant?: 'primary' | 'secondary' | 'ghost' | 'danger'
  size?: 'sm' | 'md' | 'lg'
  rounded?: 'none' | 'sm' | 'md' | 'lg' | 'xl' | 'full'
  iconPosition?: 'left' | 'right'
  disabled?: boolean
  loading?: boolean
}

withDefaults(defineProps<ButtonProps>(), {
  variant: 'primary',
  size: 'md',
  rounded: 'lg',
  iconPosition: 'left',
  disabled: false,
  loading: false,
})

const slots = defineSlots<{ icon?: () => unknown }>()

defineEmits<{ click: [event: MouseEvent] }>()
</script>

<template>
  <button
    :disabled="disabled || loading"
    :class="[
      'neu-btn',
      `neu-btn--${variant}`,
      `neu-btn--${size}`,
      `neu-btn--rounded-${rounded}`,
      { 'neu-btn--loading': loading },
    ]"
    @click="$emit('click', $event)"
  >
    <svg
      v-if="loading"
      class="neu-spinner"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx="12" cy="12" r="10" stroke="currentColor" stroke-width="3" stroke-linecap="round" />
    </svg>
    <span :class="['neu-btn__content', { 'neu-btn__label--hidden': loading }]">
      <span v-if="slots.icon && iconPosition === 'left'" class="neu-btn__icon">
        <slot name="icon" />
      </span>
      {{ label }}
      <span v-if="slots.icon && iconPosition === 'right'" class="neu-btn__icon">
        <slot name="icon" />
      </span>
    </span>
  </button>
</template>
