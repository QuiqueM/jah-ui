<script setup lang="ts">
import { provide, ref, watch } from 'vue'
import './Accordion.css'

interface Props {
  modelValue?: string | string[]
  multiple?: boolean
  defaultOpen?: string | string[]
}

const props = withDefaults(defineProps<Props>(), {
  multiple: false,
})

const emit = defineEmits<{ 'update:modelValue': [value: string | string[]] }>()

defineSlots<{ default?: () => unknown }>()

function toArray(v: string | string[] | undefined): string[] {
  if (v === undefined) return []
  return Array.isArray(v) ? v : [v]
}

const openItems = ref<string[]>(
  props.modelValue !== undefined ? toArray(props.modelValue) : toArray(props.defaultOpen),
)

watch(
  () => props.modelValue,
  (val) => { if (val !== undefined) openItems.value = toArray(val) },
)

function toggle(value: string) {
  const isOpen = openItems.value.includes(value)
  if (isOpen) {
    openItems.value = openItems.value.filter((v) => v !== value)
  } else {
    openItems.value = props.multiple ? [...openItems.value, value] : [value]
  }
  emit('update:modelValue', props.multiple ? openItems.value : openItems.value[0] ?? '')
}

function isOpen(value: string) {
  return openItems.value.includes(value)
}

provide('neu-accordion', { toggle, isOpen })
</script>

<template>
  <div class="neu-accordion">
    <slot />
  </div>
</template>
