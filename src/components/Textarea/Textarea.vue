<script setup lang="ts">
import { computed, ref } from 'vue'
import './Textarea.css'

interface Props {
  modelValue?: string
  label?: string
  placeholder?: string
  rows?: number
  size?: 'sm' | 'md' | 'lg'
  rounded?: 'none' | 'sm' | 'md' | 'lg' | 'xl'
  resize?: 'none' | 'vertical' | 'horizontal' | 'both'
  disabled?: boolean
  readonly?: boolean
  error?: string
  hint?: string
  maxlength?: number
  showCount?: boolean
}

const props = withDefaults(defineProps<Props>(), {
  modelValue: '',
  rows: 4,
  size: 'md',
  rounded: 'lg',
  resize: 'vertical',
  disabled: false,
  readonly: false,
  showCount: false,
})

const emit = defineEmits<{ 'update:modelValue': [value: string] }>()

const focused = ref(false)
const charCount = computed(() => props.modelValue?.length ?? 0)
</script>

<template>
  <div class="neu-textarea-root">
    <label v-if="label" class="neu-textarea__label">{{ label }}</label>

    <div
      :class="[
        'neu-textarea__wrapper',
        `neu-textarea__wrapper--${size}`,
        `neu-textarea__wrapper--rounded-${rounded}`,
        {
          'neu-textarea__wrapper--focused': focused,
          'neu-textarea__wrapper--error': !!error,
          'neu-textarea__wrapper--disabled': disabled,
        },
      ]"
    >
      <textarea
        class="neu-textarea__field"
        :style="{ resize }"
        :value="modelValue"
        :placeholder="placeholder"
        :rows="rows"
        :disabled="disabled"
        :readonly="readonly"
        :maxlength="maxlength"
        @input="emit('update:modelValue', ($event.target as HTMLTextAreaElement).value)"
        @focus="focused = true"
        @blur="focused = false"
      />
    </div>

    <div v-if="error || hint || (showCount && maxlength)" class="neu-textarea__footer">
      <span
        v-if="error || hint"
        :class="['neu-textarea__hint', { 'neu-textarea__hint--error': !!error }]"
      >{{ error ?? hint }}</span>
      <span v-if="showCount && maxlength" class="neu-textarea__count">
        {{ charCount }}&thinsp;/&thinsp;{{ maxlength }}
      </span>
    </div>
  </div>
</template>
