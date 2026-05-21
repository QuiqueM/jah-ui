<script setup lang="ts">
import { computed } from 'vue'
import './Stepper.css'

export interface StepperStep {
  label: string
  description?: string
  error?: boolean
  disabled?: boolean
}

export interface StepperProps {
  modelValue: number
  steps: StepperStep[]
  orientation?: 'horizontal' | 'vertical'
  size?: 'sm' | 'md' | 'lg'
  clickable?: boolean
  color?: string
}

const props = withDefaults(defineProps<StepperProps>(), {
  orientation: 'horizontal',
  size: 'md',
  clickable: false,
  color: '#3b82f6',
})

const emit = defineEmits<{ 'update:modelValue': [index: number] }>()

type StepState = 'completed' | 'active' | 'error' | 'pending'

function getState(index: number): StepState {
  if (props.steps[index]?.error) return 'error'
  if (index < props.modelValue)   return 'completed'
  if (index === props.modelValue) return 'active'
  return 'pending'
}

function isConnectorDone(index: number) {
  return index < props.modelValue
}

function goTo(index: number) {
  if (!props.clickable || props.steps[index]?.disabled) return
  emit('update:modelValue', index)
}

function onKeydown(e: KeyboardEvent, index: number) {
  if (!props.clickable) return
  if (e.key === 'ArrowRight' || e.key === 'ArrowDown') {
    e.preventDefault()
    const next = Math.min(index + 1, props.steps.length - 1)
    if (!props.steps[next]?.disabled) emit('update:modelValue', next)
  }
  if (e.key === 'ArrowLeft' || e.key === 'ArrowUp') {
    e.preventDefault()
    const prev = Math.max(index - 1, 0)
    if (!props.steps[prev]?.disabled) emit('update:modelValue', prev)
  }
}

const cssVars = computed(() => ({ '--stepper-color': props.color }))
</script>

<template>
  <div
    :class="['neu-stepper', `neu-stepper--${orientation}`, `neu-stepper--${size}`]"
    :style="cssVars"
  >
    <template v-for="(step, i) in steps" :key="i">

      <!-- ── Step ── -->
      <div
        :class="[
          'neu-stepper__step',
          `neu-stepper__step--${getState(i)}`,
          {
            'neu-stepper__step--clickable': clickable && !step.disabled,
            'neu-stepper__step--disabled':  step.disabled,
          },
        ]"
        :tabindex="clickable && !step.disabled ? 0 : -1"
        :role="clickable ? 'button' : undefined"
        :aria-current="i === modelValue ? 'step' : undefined"
        @click="goTo(i)"
        @keydown="(e) => onKeydown(e, i)"
      >
        <!-- Left column: indicator (+ vertical connector lives here in vertical mode) -->
        <div class="neu-stepper__indicator-col">
          <div :class="['neu-stepper__indicator', `neu-stepper__indicator--${getState(i)}`]">
            <!-- Completed: checkmark -->
            <svg v-if="getState(i) === 'completed'" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round">
              <polyline points="20 6 9 17 4 12" />
            </svg>
            <!-- Error: X -->
            <svg v-else-if="getState(i) === 'error'" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round">
              <line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" />
            </svg>
            <!-- Pending / Active: number -->
            <span v-else class="neu-stepper__number">{{ i + 1 }}</span>
          </div>

          <!-- Vertical connector (rendered inside indicator-col for alignment) -->
          <div
            v-if="orientation === 'vertical' && i < steps.length - 1"
            :class="['neu-stepper__connector', { 'neu-stepper__connector--done': isConnectorDone(i) }]"
          />
        </div>

        <!-- Content: label + description -->
        <div class="neu-stepper__content">
          <span class="neu-stepper__label">{{ step.label }}</span>
          <span v-if="step.description" class="neu-stepper__description">
            {{ step.description }}
          </span>
        </div>
      </div>

      <!-- Horizontal connector (between steps) -->
      <div
        v-if="orientation === 'horizontal' && i < steps.length - 1"
        :class="['neu-stepper__connector', { 'neu-stepper__connector--done': isConnectorDone(i) }]"
      />

    </template>
  </div>
</template>
