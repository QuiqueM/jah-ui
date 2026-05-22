<script setup lang="ts">
import { computed } from 'vue'
import './Card.css'

export interface CardProps {
  title?: string
  subtitle?: string
  padding?: 'none' | 'sm' | 'md' | 'lg'
  rounded?: 'none' | 'sm' | 'md' | 'lg' | 'xl'
  hoverable?: boolean
  clickable?: boolean
  coverPosition?: 'top' | 'left' | 'right'
}

const props = withDefaults(defineProps<CardProps>(), {
  padding: 'md',
  rounded: 'xl',
  hoverable: false,
  clickable: false,
  coverPosition: 'top',
})

defineEmits<{ click: [event: MouseEvent] }>()

const slots = defineSlots<{
  default?: () => unknown
  cover?: () => unknown
  header?: () => unknown
  footer?: () => unknown
}>()

const isSideCover = computed(() => !!slots.cover && props.coverPosition !== 'top')

const coverClasses = computed(() => {
  if (!slots.cover) return []
  const pos = isSideCover.value ? props.coverPosition : 'top'
  return ['neu-card__cover', `neu-card__cover--${pos}-${props.rounded}`]
})
</script>

<template>
  <component
    :is="clickable ? 'button' : 'div'"
    :class="[
      'neu-card',
      `neu-card--rounded-${rounded}`,
      { 'neu-card--hoverable': hoverable || clickable, 'neu-card--clickable': clickable },
      isSideCover ? `neu-card--cover-${coverPosition}` : '',
    ]"
    v-bind="clickable ? { type: 'button' } : {}"
    @click="clickable && $emit('click', $event)"
  >
    <div v-if="slots.cover" :class="coverClasses">
      <slot name="cover" />
    </div>

    <div class="neu-card__content">
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
    </div>
  </component>
</template>
