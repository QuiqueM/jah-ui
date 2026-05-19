<script setup lang="ts">
import { ref } from 'vue'
import './Navbar.css'

export interface NavItem {
  label: string
  href?: string
  active?: boolean
  disabled?: boolean
}

interface Props {
  items?:  NavItem[]
  sticky?: boolean
}

withDefaults(defineProps<Props>(), {
  items:  () => [],
  sticky: false,
})

const emit = defineEmits<{
  'item-click': [item: NavItem]
}>()

defineSlots<{
  brand?():    unknown
  actions?():  unknown
}>()

const mobileOpen = ref(false)

function onItemClick(item: NavItem) {
  if (item.disabled) return
  emit('item-click', item)
  mobileOpen.value = false
}
</script>

<template>
  <nav :class="['neu-navbar', { 'neu-navbar--sticky': sticky }]">
    <div class="neu-navbar__inner">

      <!-- Brand -->
      <div class="neu-navbar__brand">
        <slot name="brand">
          <span class="neu-navbar__brand-text">Brand</span>
        </slot>
      </div>

      <!-- Desktop links -->
      <ul v-if="items.length" class="neu-navbar__links" role="list">
        <li v-for="item in items" :key="item.label">
          <a
            :href="item.disabled ? undefined : (item.href ?? '#')"
            :class="[
              'neu-navbar__link',
              {
                'neu-navbar__link--active':   item.active,
                'neu-navbar__link--disabled': item.disabled,
              },
            ]"
            :aria-current="item.active ? 'page' : undefined"
            :aria-disabled="item.disabled ? 'true' : undefined"
            @click.prevent="onItemClick(item)"
          >
            {{ item.label }}
          </a>
        </li>
      </ul>

      <!-- Actions -->
      <div class="neu-navbar__actions">
        <slot name="actions" />
      </div>

      <!-- Hamburger -->
      <button
        v-if="items.length"
        type="button"
        :class="['neu-navbar__hamburger', { 'neu-navbar__hamburger--open': mobileOpen }]"
        :aria-expanded="mobileOpen"
        aria-label="Menú de navegación"
        @click="mobileOpen = !mobileOpen"
      >
        <span class="neu-navbar__ham-line" />
        <span class="neu-navbar__ham-line" />
        <span class="neu-navbar__ham-line" />
      </button>

    </div>

    <!-- Mobile menu -->
    <Transition name="neu-navbar-mobile">
      <div v-if="mobileOpen" class="neu-navbar__mobile">
        <ul class="neu-navbar__mobile-links" role="list">
          <li v-for="item in items" :key="item.label">
            <a
              :href="item.disabled ? undefined : (item.href ?? '#')"
              :class="[
                'neu-navbar__mobile-link',
                {
                  'neu-navbar__mobile-link--active':   item.active,
                  'neu-navbar__mobile-link--disabled': item.disabled,
                },
              ]"
              :aria-current="item.active ? 'page' : undefined"
              :aria-disabled="item.disabled ? 'true' : undefined"
              @click.prevent="onItemClick(item)"
            >
              {{ item.label }}
            </a>
          </li>
        </ul>
        <div v-if="$slots.actions" class="neu-navbar__mobile-actions">
          <slot name="actions" />
        </div>
      </div>
    </Transition>
  </nav>
</template>
