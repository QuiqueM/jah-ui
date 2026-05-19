<script setup lang="ts">
import { computed, useSlots } from 'vue'
import Avatar from './Avatar.vue'
import './AvatarGroup.css'

interface Props {
  max?: number
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl'
  overlap?: 'sm' | 'md' | 'lg'
}

const props = withDefaults(defineProps<Props>(), {
  size: 'md',
  overlap: 'md',
})

const slots = useSlots()

const overlapMap = { sm: '-0.375rem', md: '-0.75rem', lg: '-1.125rem' }
const offset = computed(() => overlapMap[props.overlap])

const children = computed(() => slots.default?.() ?? [])
const visible = computed(() => props.max ? children.value.slice(0, props.max) : children.value)
const surplus = computed(() => props.max ? Math.max(0, children.value.length - props.max) : 0)
</script>

<template>
  <div class="neu-avatar-group">
    <component
      :is="child"
      v-for="(child, i) in visible"
      :key="i"
      :style="{ marginLeft: i === 0 ? '0' : offset }"
      class="neu-avatar-group__item"
    />
    <Avatar
      v-if="surplus > 0"
      :name="`+${surplus}`"
      :size="size"
      variant="secondary"
      :style="{ marginLeft: offset }"
      class="neu-avatar-group__item"
    />
  </div>
</template>
