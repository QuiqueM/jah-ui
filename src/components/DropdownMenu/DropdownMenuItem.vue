<script setup lang="ts">
import { inject } from 'vue'

export interface DropdownMenuItemProps {
  label?: string
  shortcut?: string
  disabled?: boolean
  danger?: boolean
}

withDefaults(defineProps<DropdownMenuItemProps>(), {
  disabled: false,
  danger: false,
})

defineSlots<{ icon?: () => unknown; default?: () => unknown }>()

const emit = defineEmits<{ click: [event: MouseEvent] }>()

const closeDropdown = inject<() => void>('neu-dropdown-close', () => {})

function handleClick(e: MouseEvent) {
  emit('click', e)
  closeDropdown()
}
</script>

<template>
  <button
    type="button"
    role="menuitem"
    :disabled="disabled"
    :class="[
      'neu-dropdown__item',
      {
        'neu-dropdown__item--danger': danger,
        'neu-dropdown__item--disabled': disabled,
      },
    ]"
    @click="handleClick"
  >
    <span v-if="$slots.icon" class="neu-dropdown__item-icon">
      <slot name="icon" />
    </span>
    <span class="neu-dropdown__item-label">
      <slot>{{ label }}</slot>
    </span>
    <span v-if="shortcut" class="neu-dropdown__item-shortcut">{{ shortcut }}</span>
  </button>
</template>
