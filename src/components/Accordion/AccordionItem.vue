<script setup lang="ts">
import { computed, inject } from 'vue'

export interface AccordionItemProps {
  value: string
  title?: string
  disabled?: boolean
}

const props = withDefaults(defineProps<AccordionItemProps>(), { disabled: false })

defineSlots<{ default?: () => unknown; title?: () => unknown }>()

interface AccordionCtx {
  toggle: (value: string) => void
  isOpen:  (value: string) => boolean
}

const ctx = inject<AccordionCtx>('neu-accordion')!

const open = computed(() => ctx.isOpen(props.value))

function handleToggle() {
  if (!props.disabled) ctx.toggle(props.value)
}

// ── Height animation helpers ─────────────────────────────────────
function onEnter(el: Element) {
  const h = el as HTMLElement
  h.style.height   = '0'
  h.style.overflow = 'hidden'
  requestAnimationFrame(() =>
    requestAnimationFrame(() => { h.style.height = h.scrollHeight + 'px' }),
  )
}

function onAfterEnter(el: Element) {
  const h = el as HTMLElement
  h.style.height   = 'auto'
  h.style.overflow = ''
}

function onLeave(el: Element) {
  const h = el as HTMLElement
  h.style.height   = h.scrollHeight + 'px'
  h.style.overflow = 'hidden'
  requestAnimationFrame(() =>
    requestAnimationFrame(() => { h.style.height = '0' }),
  )
}

function onAfterLeave(el: Element) {
  const h = el as HTMLElement
  h.style.height   = ''
  h.style.overflow = ''
}
</script>

<template>
  <div
    :class="[
      'neu-accordion-item',
      { 'neu-accordion-item--open': open, 'neu-accordion-item--disabled': disabled },
    ]"
  >
    <!-- Header -->
    <button
      type="button"
      :disabled="disabled"
      :aria-expanded="open"
      class="neu-accordion-item__header"
      @click="handleToggle"
    >
      <span class="neu-accordion-item__title">
        <slot name="title">{{ title }}</slot>
      </span>

      <span
        class="neu-accordion-item__chevron"
        :class="{ 'neu-accordion-item__chevron--open': open }"
        aria-hidden="true"
      >
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
          <polyline points="6 9 12 15 18 9" />
        </svg>
      </span>
    </button>

    <!-- Body (animado) -->
    <Transition
      @enter="onEnter"
      @after-enter="onAfterEnter"
      @leave="onLeave"
      @after-leave="onAfterLeave"
    >
      <div v-if="open" class="neu-accordion-item__body">
        <div class="neu-accordion-item__content">
          <slot />
        </div>
      </div>
    </Transition>
  </div>
</template>
