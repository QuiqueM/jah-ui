<script setup lang="ts">
import { computed } from 'vue'
import './Pagination.css'

interface Props {
  modelValue: number
  totalPages: number
  siblings?: number
  size?: 'sm' | 'md' | 'lg'
  rounded?: 'none' | 'sm' | 'md' | 'lg' | 'full'
  showEdges?: boolean
  disabled?: boolean
}

const props = withDefaults(defineProps<Props>(), {
  siblings: 1,
  size: 'md',
  rounded: 'lg',
  showEdges: false,
  disabled: false,
})

const emit = defineEmits<{ 'update:modelValue': [page: number] }>()

const isFirst = computed(() => props.modelValue <= 1)
const isLast  = computed(() => props.modelValue >= props.totalPages)

function go(page: number) {
  if (props.disabled) return
  const clamped = Math.min(Math.max(page, 1), props.totalPages)
  if (clamped !== props.modelValue) emit('update:modelValue', clamped)
}

// Compute page items: numbers + '...' sentinels
const pages = computed((): (number | '...')[] => {
  const n   = props.totalPages
  const cur = props.modelValue
  const d   = props.siblings

  if (n <= 1) return [1]

  const result: (number | '...')[] = []
  let prev = 0

  for (let p = 1; p <= n; p++) {
    const isEdge       = p === 1 || p === n
    const isNearCurrent = p >= cur - d && p <= cur + d

    if (isEdge || isNearCurrent) {
      if (prev && p - prev > 1) result.push('...')
      result.push(p)
      prev = p
    }
  }

  return result
})
</script>

<template>
  <nav
    :class="['neu-pagination', `neu-pagination--${size}`]"
    aria-label="Paginación"
  >
    <!-- Primera página -->
    <button
      v-if="showEdges"
      type="button"
      :disabled="disabled || isFirst"
      :class="['neu-pagination__btn', `neu-pagination__btn--rounded-${rounded}`, { 'neu-pagination__btn--disabled': disabled || isFirst }]"
      aria-label="Primera página"
      @click="go(1)"
    >
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
        <polyline points="11 17 6 12 11 7" /><polyline points="18 17 13 12 18 7" />
      </svg>
    </button>

    <!-- Anterior -->
    <button
      type="button"
      :disabled="disabled || isFirst"
      :class="['neu-pagination__btn', `neu-pagination__btn--rounded-${rounded}`, { 'neu-pagination__btn--disabled': disabled || isFirst }]"
      aria-label="Página anterior"
      @click="go(modelValue - 1)"
    >
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
        <polyline points="15 18 9 12 15 6" />
      </svg>
    </button>

    <!-- Números y elipsis -->
    <template v-for="(item, i) in pages" :key="i">
      <span
        v-if="item === '...'"
        class="neu-pagination__ellipsis"
        aria-hidden="true"
      >…</span>

      <button
        v-else
        type="button"
        :disabled="disabled"
        :aria-current="item === modelValue ? 'page' : undefined"
        :class="[
          'neu-pagination__btn',
          `neu-pagination__btn--rounded-${rounded}`,
          'neu-pagination__btn--page',
          {
            'neu-pagination__btn--active': item === modelValue,
            'neu-pagination__btn--disabled': disabled,
          },
        ]"
        @click="go(item)"
      >
        {{ item }}
      </button>
    </template>

    <!-- Siguiente -->
    <button
      type="button"
      :disabled="disabled || isLast"
      :class="['neu-pagination__btn', `neu-pagination__btn--rounded-${rounded}`, { 'neu-pagination__btn--disabled': disabled || isLast }]"
      aria-label="Página siguiente"
      @click="go(modelValue + 1)"
    >
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
        <polyline points="9 18 15 12 9 6" />
      </svg>
    </button>

    <!-- Última página -->
    <button
      v-if="showEdges"
      type="button"
      :disabled="disabled || isLast"
      :class="['neu-pagination__btn', `neu-pagination__btn--rounded-${rounded}`, { 'neu-pagination__btn--disabled': disabled || isLast }]"
      aria-label="Última página"
      @click="go(totalPages)"
    >
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
        <polyline points="13 17 18 12 13 7" /><polyline points="6 17 11 12 6 7" />
      </svg>
    </button>
  </nav>
</template>
