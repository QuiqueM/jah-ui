<script setup lang="ts">
import { provide, ref } from 'vue'
import './DropdownMenu.css'

interface Props {
  placement?: 'bottom-start' | 'bottom-end' | 'top-start' | 'top-end'
  disabled?: boolean
}

const props = withDefaults(defineProps<Props>(), {
  placement: 'bottom-start',
  disabled: false,
})

defineSlots<{ trigger?: () => unknown; default?: () => unknown }>()

const isOpen = ref(false)
const rootRef = ref<HTMLElement>()

function onDocClick(e: MouseEvent) {
  if (rootRef.value && !rootRef.value.contains(e.target as Node)) {
    close()
  }
}

function open() {
  if (props.disabled) return
  isOpen.value = true
  setTimeout(() => document.addEventListener('click', onDocClick), 0)
}

function close() {
  isOpen.value = false
  document.removeEventListener('click', onDocClick)
}

function toggle() {
  isOpen.value ? close() : open()
}

function onKeydown(e: KeyboardEvent) {
  if (e.key === 'Escape') close()
}

provide('neu-dropdown-close', close)
provide('neu-dropdown-open', isOpen)
</script>

<template>
  <div ref="rootRef" class="neu-dropdown-root" @keydown="onKeydown">
    <div
      class="neu-dropdown__trigger-wrap"
      :class="{ 'neu-dropdown__trigger-wrap--disabled': disabled }"
      @click="toggle"
    >
      <slot name="trigger" />
    </div>

    <Transition name="neu-dropdown-drop">
      <div
        v-if="isOpen"
        :class="[
          'neu-dropdown__panel',
          `neu-dropdown__panel--${placement}`,
        ]"
        role="menu"
      >
        <slot />
      </div>
    </Transition>
  </div>
</template>
