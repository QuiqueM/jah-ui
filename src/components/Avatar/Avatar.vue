<script setup lang="ts">
import { computed, ref } from 'vue'
import './Avatar.css'

interface Props {
  src?: string
  alt?: string
  name?: string
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl'
  rounded?: 'none' | 'sm' | 'md' | 'lg' | 'full'
  variant?: 'primary' | 'secondary' | 'success' | 'warning' | 'danger' | 'auto'
  status?: 'online' | 'offline' | 'busy' | 'away'
  bordered?: boolean
}

const props = withDefaults(defineProps<Props>(), {
  size: 'md',
  rounded: 'full',
  variant: 'auto',
  bordered: false,
})

const imgError = ref(false)

const initials = computed(() => {
  if (!props.name) return ''
  return props.name.trim().split(/\s+/).slice(0, 2).map((w) => w[0].toUpperCase()).join('')
})

const autoVariant = computed(() => {
  if (props.variant !== 'auto') return props.variant
  if (!props.name) return 'secondary'
  const variants = ['primary', 'success', 'warning', 'danger', 'secondary'] as const
  const hash = [...props.name].reduce((acc, c) => acc + c.charCodeAt(0), 0)
  return variants[hash % variants.length]
})

const showImage = computed(() => !!props.src && !imgError.value)
const showInitials = computed(() => !showImage.value && !!props.name)
</script>

<template>
  <span
    :class="[
      'neu-avatar',
      `neu-avatar--${size}`,
      `neu-avatar--rounded-${rounded}`,
      `neu-avatar--${autoVariant}`,
      { 'neu-avatar--bordered': bordered },
    ]"
    :title="name ?? alt"
  >
    <img v-if="showImage" :src="src" :alt="alt ?? name" class="neu-avatar__img" @error="imgError = true" />

    <span v-else-if="showInitials" class="neu-avatar__initials">{{ initials }}</span>

    <svg
      v-else
      class="neu-avatar__icon"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      stroke-width="1.75"
      stroke-linecap="round"
      stroke-linejoin="round"
    >
      <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
      <circle cx="12" cy="7" r="4" />
    </svg>

    <span v-if="status" :class="['neu-avatar__status', `neu-avatar__status--${status}`]" />
  </span>
</template>
