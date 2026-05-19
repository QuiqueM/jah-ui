<script setup lang="ts">
import './Card.css'

interface Props {
  title?: string
  subtitle?: string
  padding?: 'none' | 'sm' | 'md' | 'lg'
  rounded?: 'none' | 'sm' | 'md' | 'lg' | 'xl'
  hoverable?: boolean
  clickable?: boolean
}

withDefaults(defineProps<Props>(), {
  padding: 'md',
  rounded: 'xl',
  hoverable: false,
  clickable: false,
})

defineEmits<{ click: [event: MouseEvent] }>()

const slots = defineSlots<{
  default?: () => unknown
  cover?: () => unknown
  header?: () => unknown
  footer?: () => unknown
}>()
</script>

<template>
  <component
    :is="clickable ? 'button' : 'div'"
    :class="[
      'neu-card',
      `neu-card--rounded-${rounded}`,
      { 'neu-card--hoverable': hoverable || clickable, 'neu-card--clickable': clickable },
    ]"
    v-bind="clickable ? { type: 'button' } : {}"
    @click="clickable && $emit('click', $event)"
  >
    <div v-if="slots.cover" :class="['neu-card__cover', `neu-card__cover--rounded-${rounded}`]">
      <slot name="cover" />
    </div>

    <div :class="['neu-card__inner', `neu-card__inner--${padding}`]">
      <div v-if="slots.header" class="neu-card__header">
        <slot name="header" />
      </div>
      <div v-else-if="title || subtitle" class="neu-card__header">
        <p v-if="title" class="neu-card__title">{{ title }}</p>
        <p v-if="subtitle" class="neu-card__subtitle">{{ subtitle }}</p>
      </div>

      <div v-if="slots.default" class="neu-card__body">
        <slot />
      </div>
    </div>

    <div v-if="slots.footer" :class="['neu-card__footer', `neu-card__footer--${padding}`]">
      <slot name="footer" />
    </div>
  </component>
</template>
