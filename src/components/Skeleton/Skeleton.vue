<script setup lang="ts">
import { computed } from 'vue'
import './Skeleton.css'

interface Props {
  variant?: 'text' | 'circle' | 'rect' | 'button'
  lines?: number
  width?: string
  height?: string
  rounded?: string
  animated?: boolean
}

const props = withDefaults(defineProps<Props>(), {
  variant: 'text',
  lines: 1,
  animated: true,
})

const isMultiline = computed(() => props.variant === 'text' && props.lines > 1)

function lineStyle(index: number, total: number): Record<string, string> {
  const style: Record<string, string> = {}
  // Last line is shorter for a natural look
  if (index === total - 1 && total > 1) style.width = '65%'
  if (props.width)  style.width  = props.width
  if (props.height) style.height = props.height
  if (props.rounded) style.borderRadius = props.rounded
  return style
}

const singleStyle = computed((): Record<string, string> => {
  const style: Record<string, string> = {}
  if (props.width)   style.width        = props.width
  if (props.height)  style.height       = props.height
  if (props.rounded) style.borderRadius = props.rounded
  return style
})
</script>

<template>
  <!-- Multi-line text -->
  <div v-if="isMultiline" class="neu-skeleton-group" role="status" aria-busy="true" aria-label="Cargando…">
    <div
      v-for="i in lines"
      :key="i"
      :class="['neu-skeleton', 'neu-skeleton--text', { 'neu-skeleton--animated': animated }]"
      :style="lineStyle(i - 1, lines)"
    />
  </div>

  <!-- Single element -->
  <div
    v-else
    role="status"
    aria-busy="true"
    aria-label="Cargando…"
    :class="['neu-skeleton', `neu-skeleton--${variant}`, { 'neu-skeleton--animated': animated }]"
    :style="singleStyle"
  />
</template>
