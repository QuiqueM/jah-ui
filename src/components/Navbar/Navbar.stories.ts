import type { Meta, StoryObj } from '@storybook/vue3'
import { ref } from 'vue'
import Navbar from './Navbar.vue'
import type { NavItem } from './Navbar.vue'

const meta: Meta<typeof Navbar> = {
  title: 'Components/Navbar',
  component: Navbar,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
    backgrounds: {
      default: 'neumorphic',
      values: [{ name: 'neumorphic', value: '#e0e5ec' }],
    },
  },
  argTypes: {
    sticky: { control: 'boolean' },
  },
}

export default meta
type Story = StoryObj<typeof meta>

const baseItems: NavItem[] = [
  { label: 'Inicio',     href: '#', active: true },
  { label: 'Productos',  href: '#' },
  { label: 'Precios',    href: '#' },
  { label: 'Nosotros',   href: '#' },
  { label: 'Contacto',   href: '#', disabled: true },
]

/* ─────────────────────────────────────
   SOLO BRAND
───────────────────────────────────── */
export const SoloBrand: Story = {
  name: 'Solo brand',
  render: () => ({
    components: { Navbar },
    template: `
      <Navbar>
        <template #brand>
          <span style="font-size:1.25rem;font-weight:800;color:#3b82f6;letter-spacing:-0.03em;">
            jah<span style="color:#374151;">·ui</span>
          </span>
        </template>
      </Navbar>
    `,
  }),
}

/* ─────────────────────────────────────
   CON LINKS
───────────────────────────────────── */
export const ConLinks: Story = {
  name: 'Con links',
  render: (args) => ({
    components: { Navbar },
    setup() {
      const items = ref<NavItem[]>(baseItems.map(i => ({ ...i })))
      function onItemClick(item: NavItem) {
        items.value = items.value.map(i => ({ ...i, active: i.label === item.label }))
      }
      return { args, items, onItemClick }
    },
    template: `
      <Navbar :items="items" v-bind="args" @item-click="onItemClick">
        <template #brand>
          <span style="font-size:1.125rem;font-weight:800;color:#3b82f6;letter-spacing:-0.03em;">
            jah<span style="color:#374151;">·ui</span>
          </span>
        </template>
      </Navbar>
      <div style="padding:2rem 1.5rem;font-family:inherit;font-size:0.875rem;color:#9ca3af;">
        Haz clic en un enlace para cambiar el activo.
      </div>
    `,
  }),
  args: { sticky: false },
}

/* ─────────────────────────────────────
   CON ACCIONES
───────────────────────────────────── */
export const ConAcciones: Story = {
  name: 'Con acciones',
  render: (args) => ({
    components: { Navbar },
    setup() {
      return { args, items: baseItems }
    },
    template: `
      <Navbar :items="items" v-bind="args">
        <template #brand>
          <span style="font-size:1.125rem;font-weight:800;color:#3b82f6;letter-spacing:-0.03em;">
            jah<span style="color:#374151;">·ui</span>
          </span>
        </template>
        <template #actions>
          <button style="
            padding: 0 1rem; height: 2.25rem; border: none; border-radius: 0.625rem;
            background: #e0e5ec; font-family: inherit; font-size: 0.875rem;
            font-weight: 500; color: #6b7280; cursor: pointer;
            box-shadow: 4px 4px 9px #b8bec7, -4px -4px 9px #fff;">
            Iniciar sesión
          </button>
          <button style="
            padding: 0 1rem; height: 2.25rem; border: none; border-radius: 0.625rem;
            background: #3b82f6; font-family: inherit; font-size: 0.875rem;
            font-weight: 600; color: #fff; cursor: pointer;
            box-shadow: 4px 4px 9px #b8bec7, -4px -4px 9px #fff;">
            Registrarse
          </button>
        </template>
      </Navbar>
    `,
  }),
  args: { sticky: false },
}

/* ─────────────────────────────────────
   CON AVATAR
───────────────────────────────────── */
export const ConAvatar: Story = {
  name: 'Con avatar y búsqueda',
  render: (args) => ({
    components: { Navbar },
    setup() {
      return { args, items: baseItems }
    },
    template: `
      <Navbar :items="items" v-bind="args">
        <template #brand>
          <span style="font-size:1.125rem;font-weight:800;color:#3b82f6;letter-spacing:-0.03em;">
            jah<span style="color:#374151;">·ui</span>
          </span>
        </template>
        <template #actions>
          <!-- Search input -->
          <div style="position:relative;display:flex;align-items:center;">
            <svg style="position:absolute;left:0.625rem;width:1rem;height:1rem;color:#9ca3af;"
              viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
              stroke-linecap="round" stroke-linejoin="round">
              <circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/>
            </svg>
            <input placeholder="Buscar…" style="
              padding: 0.4rem 0.75rem 0.4rem 2rem;
              border: none; border-radius: 0.625rem;
              background: #e0e5ec; font-family: inherit; font-size: 0.875rem;
              color: #374151; width: 11rem; outline: none;
              box-shadow: inset 3px 3px 7px #b8bec7, inset -3px -3px 7px #fff;" />
          </div>
          <!-- Avatar -->
          <div style="
            width: 2.25rem; height: 2.25rem; border-radius: 50%;
            background: linear-gradient(135deg,#3b82f6,#8b5cf6);
            display: flex; align-items: center; justify-content: center;
            font-size: 0.875rem; font-weight: 700; color: #fff; cursor: pointer;
            box-shadow: 4px 4px 9px #b8bec7, -4px -4px 9px #fff; flex-shrink: 0;">
            JA
          </div>
        </template>
      </Navbar>
    `,
  }),
  args: { sticky: false },
}

/* ─────────────────────────────────────
   STICKY
───────────────────────────────────── */
export const Sticky: Story = {
  name: 'Sticky (con scroll)',
  render: (args) => ({
    components: { Navbar },
    setup() {
      return { args, items: baseItems }
    },
    template: `
      <div style="height:600px;overflow-y:auto;">
        <Navbar :items="items" sticky v-bind="args">
          <template #brand>
            <span style="font-size:1.125rem;font-weight:800;color:#3b82f6;letter-spacing:-0.03em;">
              jah<span style="color:#374151;">·ui</span>
            </span>
          </template>
          <template #actions>
            <button style="
              padding:0 1rem;height:2.25rem;border:none;border-radius:0.625rem;
              background:#3b82f6;font-family:inherit;font-size:0.875rem;
              font-weight:600;color:#fff;cursor:pointer;
              box-shadow:4px 4px 9px #b8bec7,-4px -4px 9px #fff;">
              Registrarse
            </button>
          </template>
        </Navbar>
        <div style="padding:2rem 1.5rem;font-family:inherit;">
          <p v-for="n in 20" :key="n" style="color:#6b7280;margin:0.75rem 0;font-size:0.9375rem;">
            Contenido de la página — línea {{ n }}. Desplázate para ver el efecto sticky.
          </p>
        </div>
      </div>
    `,
  }),
  args: { sticky: true },
}
