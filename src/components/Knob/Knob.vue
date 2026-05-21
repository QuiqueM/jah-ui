<script setup lang="ts">
import { computed, ref } from 'vue'
import './Knob.css'

export interface KnobProps {
  modelValue?: number
  min?: number
  max?: number
  step?: number
  size?: 'sm' | 'md' | 'lg'
  label?: string
  suffix?: string
  color?: string
  disabled?: boolean
}

const props = withDefaults(defineProps<KnobProps>(), {
  modelValue: 0,
  min: 0,
  max: 100,
  step: 1,
  size: 'md',
  color: '#3b82f6',
  disabled: false,
})

const emit = defineEmits<{ 'update:modelValue': [value: number] }>()

// ── SVG constants ────────────────────────────────────────────────
const CX        = 50
const CY        = 50
const R         = 37    // arc radius
const SW        = 5     // stroke width
const START_DEG = 225   // 7 o'clock (degrees clockwise from 12)
const SWEEP     = 270   // total rotation range

// ── Geometry helpers ─────────────────────────────────────────────
function toRad(deg: number) {
  return (deg * Math.PI) / 180
}

function angleToPoint(deg: number, r = R) {
  return {
    x: CX + r * Math.sin(toRad(deg)),
    y: CY - r * Math.cos(toRad(deg)),
  }
}

function arcPath(startDeg: number, sweepDeg: number): string {
  if (sweepDeg <= 0) return ''
  const s = angleToPoint(startDeg)
  const e = angleToPoint(startDeg + Math.min(sweepDeg, 359.99))
  const large = sweepDeg > 180 ? 1 : 0
  return `M ${s.x.toFixed(3)} ${s.y.toFixed(3)} A ${R} ${R} 0 ${large} 1 ${e.x.toFixed(3)} ${e.y.toFixed(3)}`
}

// ── Value mapping ────────────────────────────────────────────────
const clamped = computed(() =>
  Math.min(Math.max(props.modelValue ?? props.min, props.min), props.max),
)

const percent = computed(() =>
  (clamped.value - props.min) / (props.max - props.min),
)

const valueSweep = computed(() => percent.value * SWEEP)

const trackPath    = computed(() => arcPath(START_DEG, SWEEP))
const valuePath    = computed(() => arcPath(START_DEG, valueSweep.value))
const tipPoint     = computed(() => angleToPoint(START_DEG + valueSweep.value, R))
const startPoint   = computed(() => angleToPoint(START_DEG, R))

const displayValue = computed(() => {
  const v = clamped.value
  return Number.isInteger(props.step) ? String(v) : v.toFixed(String(props.step).split('.')[1]?.length ?? 1)
})

// ── Dragging ─────────────────────────────────────────────────────
const knobRef    = ref<HTMLElement>()
const isDragging = ref(false)

function pointerAngle(clientX: number, clientY: number): number {
  if (!knobRef.value) return 0
  const rect = knobRef.value.getBoundingClientRect()
  const dx = clientX - (rect.left + rect.width  / 2)
  const dy = clientY - (rect.top  + rect.height / 2)
  let angle = Math.atan2(dx, -dy) * (180 / Math.PI)
  if (angle < 0) angle += 360
  return angle
}

function angleToValue(angle: number): number {
  let norm = angle - START_DEG
  if (norm < 0) norm += 360
  norm = Math.max(0, Math.min(SWEEP, norm))
  const raw     = props.min + (norm / SWEEP) * (props.max - props.min)
  const stepped = Math.round(raw / props.step) * props.step
  return parseFloat(Math.min(Math.max(stepped, props.min), props.max).toFixed(10))
}

function push(val: number) {
  if (val !== props.modelValue) emit('update:modelValue', val)
}

function onPointerDown(e: PointerEvent) {
  if (props.disabled) return
  e.preventDefault()
  isDragging.value = true
  ;(e.target as HTMLElement).setPointerCapture(e.pointerId)
  push(angleToValue(pointerAngle(e.clientX, e.clientY)))
}

function onPointerMove(e: PointerEvent) {
  if (!isDragging.value || props.disabled) return
  push(angleToValue(pointerAngle(e.clientX, e.clientY)))
}

function onPointerUp() {
  isDragging.value = false
}

// ── Keyboard ─────────────────────────────────────────────────────
function onKeydown(e: KeyboardEvent) {
  if (props.disabled) return
  const big = props.step * 10
  const moves: Record<string, number> = {
    ArrowUp: props.step, ArrowRight: props.step,
    ArrowDown: -props.step, ArrowLeft: -props.step,
    PageUp: big, PageDown: -big,
  }
  if (e.key === 'Home') { e.preventDefault(); push(props.min); return }
  if (e.key === 'End')  { e.preventDefault(); push(props.max); return }
  const d = moves[e.key]
  if (d !== undefined) {
    e.preventDefault()
    const next = Math.round((clamped.value + d) / props.step) * props.step
    push(parseFloat(Math.min(Math.max(next, props.min), props.max).toFixed(10)))
  }
}

// ── Sizes ────────────────────────────────────────────────────────
const sizeStyle = computed(() => {
  const map = { sm: '5rem', md: '7rem', lg: '9rem' }
  return { width: map[props.size], height: map[props.size] }
})

const valueFontSize = computed(() => {
  const map = { sm: '0.8125rem', md: '1rem', lg: '1.25rem' }
  return map[props.size]
})
</script>

<template>
  <div :class="['neu-knob-root', `neu-knob-root--${size}`]">
    <!-- Dial -->
    <div
      ref="knobRef"
      :class="['neu-knob', { 'neu-knob--disabled': disabled, 'neu-knob--dragging': isDragging }]"
      :style="sizeStyle"
      :tabindex="disabled ? -1 : 0"
      role="slider"
      :aria-valuemin="min"
      :aria-valuemax="max"
      :aria-valuenow="clamped"
      :aria-label="label"
      :aria-disabled="disabled"
      @pointerdown="onPointerDown"
      @pointermove="onPointerMove"
      @pointerup="onPointerUp"
      @pointercancel="onPointerUp"
      @keydown="onKeydown"
    >
      <!-- Neumorphic base -->
      <div class="neu-knob__base" />

      <!-- SVG arcs -->
      <svg class="neu-knob__svg" viewBox="0 0 100 100" aria-hidden="true">
        <!-- Background track -->
        <path
          :d="trackPath"
          class="neu-knob__track"
          :stroke-width="SW"
          fill="none"
          stroke-linecap="round"
        />

        <!-- Value arc -->
        <path
          v-if="valueSweep > 0"
          :d="valuePath"
          class="neu-knob__value-arc"
          :stroke="color"
          :stroke-width="SW"
          fill="none"
          stroke-linecap="round"
        />

        <!-- Start dot -->
        <circle
          :cx="startPoint.x"
          :cy="startPoint.y"
          :r="SW / 2"
          class="neu-knob__start-dot"
        />

        <!-- Indicator tip -->
        <circle
          :cx="tipPoint.x"
          :cy="tipPoint.y"
          :r="SW / 2 + 1"
          :fill="percent > 0 ? color : undefined"
          :class="['neu-knob__tip', { 'neu-knob__tip--empty': percent === 0 }]"
        />
      </svg>

      <!-- Center label -->
      <div class="neu-knob__center" :style="{ fontSize: valueFontSize }">
        <span class="neu-knob__value">{{ displayValue }}</span>
        <span v-if="suffix" class="neu-knob__suffix">{{ suffix }}</span>
      </div>
    </div>

    <!-- Label below dial -->
    <span v-if="label" class="neu-knob__label">{{ label }}</span>
  </div>
</template>
