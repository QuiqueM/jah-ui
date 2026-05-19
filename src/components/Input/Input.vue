<script setup lang="ts">
import { ref, computed } from 'vue'
import './Input.css'

interface Props {
  modelValue?: string | number
  type?: 'text' | 'number' | 'password'
  placeholder?: string
  prefix?: string
  suffix?: string
  size?: 'sm' | 'md' | 'lg'
  rounded?: 'none' | 'sm' | 'md' | 'lg' | 'xl' | 'full'
  disabled?: boolean
  error?: boolean
  label?: string
  hint?: string
}

const props = withDefaults(defineProps<Props>(), {
  type: 'text',
  size: 'md',
  rounded: 'lg',
  disabled: false,
  error: false,
})

const emit = defineEmits<{
  'update:modelValue': [value: string | number]
  focus: [event: FocusEvent]
  blur: [event: FocusEvent]
}>()

const slots = defineSlots<{
  'icon-left'?: () => unknown
  'icon-right'?: () => unknown
}>()

const showPassword = ref(false)
const isFocused = ref(false)

const resolvedType = computed(() => {
  if (props.type === 'password') return showPassword.value ? 'text' : 'password'
  return props.type
})

function onInput(event: Event) {
  const target = event.target as HTMLInputElement
  emit('update:modelValue', props.type === 'number' ? Number(target.value) : target.value)
}
</script>

<template>
  <div class="neu-input-root">
    <label v-if="label" class="neu-input__label">{{ label }}</label>

    <div
      :class="[
        'neu-input__wrapper',
        `neu-input__wrapper--${size}`,
        `neu-input__wrapper--rounded-${rounded}`,
        {
          'neu-input__wrapper--focused': isFocused,
          'neu-input__wrapper--error': error,
          'neu-input__wrapper--disabled': disabled,
        },
      ]"
    >
      <span v-if="slots['icon-left']" class="neu-input__icon neu-input__icon--left">
        <slot name="icon-left" />
      </span>

      <span v-if="prefix" class="neu-input__affix neu-input__affix--prefix">{{ prefix }}</span>

      <input
        :type="resolvedType"
        :value="modelValue"
        :placeholder="placeholder"
        :disabled="disabled"
        class="neu-input__field"
        @input="onInput"
        @focus="isFocused = true; $emit('focus', $event)"
        @blur="isFocused = false; $emit('blur', $event)"
      />

      <span v-if="suffix" class="neu-input__affix neu-input__affix--suffix">{{ suffix }}</span>

      <span v-if="slots['icon-right'] && type !== 'password'" class="neu-input__icon neu-input__icon--right">
        <slot name="icon-right" />
      </span>

      <button
        v-if="type === 'password'"
        type="button"
        class="neu-input__password-toggle"
        :tabindex="disabled ? -1 : 0"
        @click="showPassword = !showPassword"
      >
        <svg v-if="!showPassword" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/>
          <circle cx="12" cy="12" r="3"/>
        </svg>
        <svg v-else viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94"/>
          <path d="M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19"/>
          <line x1="1" y1="1" x2="23" y2="23"/>
        </svg>
      </button>
    </div>

    <span v-if="hint" :class="['neu-input__hint', { 'neu-input__hint--error': error }]">
      {{ hint }}
    </span>
  </div>
</template>
