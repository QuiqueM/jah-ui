<script setup lang="ts">
import { computed, inject, onMounted, onUnmounted, ref } from 'vue'

interface CarouselContext {
  register(): number
  unregister(id: number): void
  getPosition(id: number): number
  current: { value: number }
  transition: { value: 'slide' | 'fade' }
}

defineSlots<{ default?: () => unknown }>()

const ctx = inject<CarouselContext>('neu-carousel')

const myId       = ref(-1)
const myPosition = computed(() => (myId.value === -1 ? -1 : ctx?.getPosition(myId.value) ?? -1))
const isActive   = computed(() => myPosition.value === ctx?.current.value)
const isFade     = computed(() => ctx?.transition.value === 'fade')

onMounted(() => {
  myId.value = ctx?.register() ?? -1
})

onUnmounted(() => {
  if (myId.value !== -1) ctx?.unregister(myId.value)
})
</script>

<template>
  <div
    :class="[
      'neu-carousel__slide',
      {
        'neu-carousel__slide--active': isActive,
        'neu-carousel__slide--fade': isFade,
      },
    ]"
  >
    <slot />
  </div>
</template>
