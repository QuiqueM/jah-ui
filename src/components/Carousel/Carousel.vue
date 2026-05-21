<script setup lang="ts">
import { computed, onUnmounted, provide, ref, toRef, watch } from 'vue'
import './Carousel.css'

export interface CarouselProps {
  modelValue?: number
  transition?: 'slide' | 'fade'
  autoplay?: boolean
  interval?: number
  loop?: boolean
  showArrows?: boolean
  showDots?: boolean
  height?: string
}

const props = withDefaults(defineProps<CarouselProps>(), {
  modelValue: 0,
  transition: 'slide',
  autoplay: false,
  interval: 4000,
  loop: true,
  showArrows: true,
  showDots: true,
})

const emit = defineEmits<{
  'update:modelValue': [index: number]
  change: [index: number]
}>()

defineSlots<{ default?: () => unknown }>()

// ── Slide registry ──────────────────────────────────────────────
const slideIds  = ref<number[]>([])
let   nextId    = 0
const total     = computed(() => slideIds.value.length)

// ── Current index ───────────────────────────────────────────────
const current = ref(props.modelValue)
watch(() => props.modelValue, (v) => { current.value = v })

function goTo(index: number) {
  let next = index
  if (props.loop) {
    next = ((index % total.value) + total.value) % total.value
  } else {
    next = Math.min(Math.max(index, 0), total.value - 1)
  }
  current.value = next
  emit('update:modelValue', next)
  emit('change', next)
}

function prev() { goTo(current.value - 1) }
function next() { goTo(current.value + 1) }

const isFirst = computed(() => !props.loop && current.value === 0)
const isLast  = computed(() => !props.loop && current.value === total.value - 1)

// ── Autoplay ────────────────────────────────────────────────────
let autoplayTimer: ReturnType<typeof setInterval> | null = null

function startAutoplay() {
  if (!props.autoplay || total.value <= 1) return
  autoplayTimer = setInterval(next, props.interval)
}

function stopAutoplay() {
  if (autoplayTimer) { clearInterval(autoplayTimer); autoplayTimer = null }
}

watch([() => props.autoplay, total], () => {
  stopAutoplay()
  startAutoplay()
}, { immediate: true })

onUnmounted(stopAutoplay)

// ── Swipe ───────────────────────────────────────────────────────
let touchStartX = 0

function onTouchStart(e: TouchEvent) {
  touchStartX = e.touches[0].clientX
}

function onTouchEnd(e: TouchEvent) {
  const dx = e.changedTouches[0].clientX - touchStartX
  if (Math.abs(dx) > 50) dx > 0 ? prev() : next()
}

// ── Provide context to CarouselSlide ────────────────────────────
provide('neu-carousel', {
  register(): number {
    const id = nextId++
    slideIds.value = [...slideIds.value, id]
    return id
  },
  unregister(id: number) {
    slideIds.value = slideIds.value.filter((s) => s !== id)
  },
  getPosition(id: number): number {
    return slideIds.value.indexOf(id)
  },
  current,
  transition: toRef(props, 'transition'),
})

const trackStyle = computed(() =>
  props.transition === 'slide'
    ? { transform: `translateX(-${current.value * 100}%)` }
    : {},
)
</script>

<template>
  <div
    class="neu-carousel"
    :style="height ? { height } : {}"
    @mouseenter="stopAutoplay"
    @mouseleave="startAutoplay"
    @touchstart.passive="onTouchStart"
    @touchend.passive="onTouchEnd"
  >
    <!-- Track -->
    <div
      :class="['neu-carousel__track', `neu-carousel__track--${transition}`]"
      :style="trackStyle"
    >
      <slot />
    </div>

    <!-- Arrows -->
    <template v-if="showArrows && total > 1">
      <button
        type="button"
        :disabled="isFirst"
        :class="['neu-carousel__arrow', 'neu-carousel__arrow--prev', { 'neu-carousel__arrow--disabled': isFirst }]"
        aria-label="Anterior"
        @click="prev"
      >
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
          <polyline points="15 18 9 12 15 6" />
        </svg>
      </button>

      <button
        type="button"
        :disabled="isLast"
        :class="['neu-carousel__arrow', 'neu-carousel__arrow--next', { 'neu-carousel__arrow--disabled': isLast }]"
        aria-label="Siguiente"
        @click="next"
      >
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
          <polyline points="9 18 15 12 9 6" />
        </svg>
      </button>
    </template>

    <!-- Dots -->
    <div v-if="showDots && total > 1" class="neu-carousel__dots" role="tablist">
      <button
        v-for="i in total"
        :key="i"
        type="button"
        role="tab"
        :aria-selected="i - 1 === current"
        :aria-label="`Ir a la diapositiva ${i}`"
        :class="['neu-carousel__dot', { 'neu-carousel__dot--active': i - 1 === current }]"
        @click="goTo(i - 1)"
      />
    </div>
  </div>
</template>
