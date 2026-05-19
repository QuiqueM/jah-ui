<script setup lang="ts">
import { computed, nextTick, onUnmounted, ref } from 'vue'
import './Tooltip.css'

interface Props {
  content: string
  placement?: 'top' | 'bottom' | 'left' | 'right'
  delay?: number
  disabled?: boolean
  maxWidth?: string
}

const props = withDefaults(defineProps<Props>(), {
  placement: 'top',
  delay: 300,
  disabled: false,
  maxWidth: '16rem',
})

defineSlots<{ default: () => unknown }>()

const triggerRef = ref<HTMLElement>()
const tooltipRef = ref<HTMLElement>()
const isVisible  = ref(false)
const pos        = ref({ top: '0px', left: '0px' })

let showTimer: ReturnType<typeof setTimeout> | null = null
let hideTimer: ReturnType<typeof setTimeout> | null = null

function computePos() {
  if (!triggerRef.value || !tooltipRef.value) return
  const t  = triggerRef.value.getBoundingClientRect()
  const tp = tooltipRef.value.getBoundingClientRect()
  const gap = 10

  let top  = 0
  let left = 0

  switch (props.placement) {
    case 'top':
      top  = t.top  - tp.height - gap
      left = t.left + t.width / 2 - tp.width / 2
      break
    case 'bottom':
      top  = t.bottom + gap
      left = t.left + t.width / 2 - tp.width / 2
      break
    case 'left':
      top  = t.top  + t.height / 2 - tp.height / 2
      left = t.left - tp.width - gap
      break
    case 'right':
      top  = t.top  + t.height / 2 - tp.height / 2
      left = t.right + gap
      break
  }

  // Clamp dentro del viewport
  left = Math.max(8, Math.min(left, window.innerWidth  - tp.width  - 8))
  top  = Math.max(8, Math.min(top,  window.innerHeight - tp.height - 8))

  pos.value = { top: `${Math.round(top)}px`, left: `${Math.round(left)}px` }
}

function show() {
  if (props.disabled) return
  if (hideTimer) { clearTimeout(hideTimer); hideTimer = null }
  showTimer = setTimeout(() => {
    isVisible.value = true
    nextTick(computePos)
  }, props.delay)
}

function hide() {
  if (showTimer) { clearTimeout(showTimer); showTimer = null }
  hideTimer = setTimeout(() => { isVisible.value = false }, 80)
}

onUnmounted(() => {
  if (showTimer) clearTimeout(showTimer)
  if (hideTimer) clearTimeout(hideTimer)
})

const tooltipStyle = computed(() => ({
  top:      pos.value.top,
  left:     pos.value.left,
  maxWidth: props.maxWidth,
}))
</script>

<template>
  <span
    ref="triggerRef"
    class="neu-tooltip-trigger"
    @mouseenter="show"
    @mouseleave="hide"
    @focusin="show"
    @focusout="hide"
  >
    <slot />

    <Teleport to="body">
      <Transition name="neu-tooltip">
        <div
          v-if="isVisible"
          ref="tooltipRef"
          role="tooltip"
          :data-placement="placement"
          class="neu-tooltip"
          :style="tooltipStyle"
          @mouseenter="show"
          @mouseleave="hide"
        >
          {{ content }}
        </div>
      </Transition>
    </Teleport>
  </span>
</template>
