<script setup lang="ts">
import './Alert.css'

interface Props {
  variant?: 'info' | 'success' | 'warning' | 'danger'
  title?: string
  icon?: boolean
  dismissible?: boolean
  modelValue?: boolean
}

withDefaults(defineProps<Props>(), {
  variant: 'info',
  icon: true,
  dismissible: false,
  modelValue: true,
})

const emit = defineEmits<{
  'update:modelValue': [visible: boolean]
  close: []
}>()

defineSlots<{ default?: () => unknown; title?: () => unknown; icon?: () => unknown }>()

function dismiss() {
  emit('update:modelValue', false)
  emit('close')
}
</script>

<template>
  <Transition name="neu-alert">
    <div
      v-if="modelValue"
      role="alert"
      :class="['neu-alert', `neu-alert--${variant}`]"
    >
      <!-- Icon -->
      <span v-if="icon" class="neu-alert__icon" aria-hidden="true">
        <slot name="icon">
          <!-- info -->
          <svg v-if="variant === 'info'" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <circle cx="12" cy="12" r="10" />
            <line x1="12" y1="8" x2="12" y2="12" />
            <line x1="12" y1="16" x2="12.01" y2="16" />
          </svg>
          <!-- success -->
          <svg v-else-if="variant === 'success'" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
            <polyline points="22 4 12 14.01 9 11.01" />
          </svg>
          <!-- warning -->
          <svg v-else-if="variant === 'warning'" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z" />
            <line x1="12" y1="9" x2="12" y2="13" />
            <line x1="12" y1="17" x2="12.01" y2="17" />
          </svg>
          <!-- danger -->
          <svg v-else viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <circle cx="12" cy="12" r="10" />
            <line x1="15" y1="9" x2="9" y2="15" />
            <line x1="9" y1="9" x2="15" y2="15" />
          </svg>
        </slot>
      </span>

      <!-- Body -->
      <div class="neu-alert__body">
        <p v-if="title || $slots.title" class="neu-alert__title">
          <slot name="title">{{ title }}</slot>
        </p>
        <div v-if="$slots.default" class="neu-alert__content">
          <slot />
        </div>
      </div>

      <!-- Dismiss button -->
      <button
        v-if="dismissible"
        type="button"
        class="neu-alert__close"
        aria-label="Cerrar alerta"
        @click="dismiss"
      >
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
          <line x1="18" y1="6" x2="6" y2="18" />
          <line x1="6" y1="6" x2="18" y2="18" />
        </svg>
      </button>
    </div>
  </Transition>
</template>
