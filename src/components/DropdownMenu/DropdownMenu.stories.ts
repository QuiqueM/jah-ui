import type { Meta, StoryObj } from '@storybook/vue3'
import DropdownMenu from './DropdownMenu.vue'
import DropdownMenuItem from './DropdownMenuItem.vue'
import DropdownDivider from './DropdownDivider.vue'

const meta: Meta<typeof DropdownMenu> = {
  title: 'Components/DropdownMenu',
  component: DropdownMenu,
  tags: ['autodocs'],
  parameters: {
    backgrounds: {
      default: 'neumorphic',
      values: [{ name: 'neumorphic', value: '#e0e5ec' }],
    },
  },
  argTypes: {
    placement: {
      control: 'select',
      options: ['bottom-start', 'bottom-end', 'top-start', 'top-end'],
    },
  },
}

export default meta
type Story = StoryObj<typeof meta>

const triggerBtn = `
  <button style="
    display:inline-flex; align-items:center; gap:0.4rem;
    padding:0 1.25rem; height:2.75rem; border:none; border-radius:0.75rem;
    background:#e0e5ec; font-family:inherit; font-size:0.9375rem; font-weight:500;
    color:#374151; cursor:pointer;
    box-shadow: 6px 6px 12px #b8bec7, -6px -6px 12px #ffffff;
  ">
    Acciones
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <polyline points="6 9 12 15 18 9"/>
    </svg>
  </button>
`

export const Default: Story = {
  render: (args) => ({
    components: { DropdownMenu, DropdownMenuItem, DropdownDivider },
    setup: () => ({ args }),
    template: `
      <div style="padding: 2rem;">
        <DropdownMenu v-bind="args">
          <template #trigger>${triggerBtn}</template>
          <DropdownMenuItem label="Editar" />
          <DropdownMenuItem label="Duplicar" />
          <DropdownMenuItem label="Compartir" />
        </DropdownMenu>
      </div>
    `,
  }),
  args: { placement: 'bottom-start' },
}

export const WithIcons: Story = {
  name: 'Con Íconos',
  render: (args) => ({
    components: { DropdownMenu, DropdownMenuItem, DropdownDivider },
    setup: () => ({ args }),
    template: `
      <div style="padding: 2rem;">
        <DropdownMenu v-bind="args">
          <template #trigger>${triggerBtn}</template>
          <DropdownMenuItem label="Editar">
            <template #icon>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"/>
                <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"/>
              </svg>
            </template>
          </DropdownMenuItem>
          <DropdownMenuItem label="Duplicar">
            <template #icon>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <rect x="9" y="9" width="13" height="13" rx="2" ry="2"/>
                <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"/>
              </svg>
            </template>
          </DropdownMenuItem>
          <DropdownDivider />
          <DropdownMenuItem label="Eliminar" danger>
            <template #icon>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <polyline points="3 6 5 6 21 6"/>
                <path d="M19 6l-1 14a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2L5 6"/>
                <path d="M10 11v6M14 11v6"/>
                <path d="M9 6V4a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v2"/>
              </svg>
            </template>
          </DropdownMenuItem>
        </DropdownMenu>
      </div>
    `,
  }),
  args: { placement: 'bottom-start' },
}

export const WithShortcuts: Story = {
  name: 'Con Atajos de Teclado',
  render: (args) => ({
    components: { DropdownMenu, DropdownMenuItem, DropdownDivider },
    setup: () => ({ args }),
    template: `
      <div style="padding: 2rem;">
        <DropdownMenu v-bind="args">
          <template #trigger>${triggerBtn}</template>
          <DropdownMenuItem label="Cortar"   shortcut="⌘X" />
          <DropdownMenuItem label="Copiar"   shortcut="⌘C" />
          <DropdownMenuItem label="Pegar"    shortcut="⌘V" />
          <DropdownDivider />
          <DropdownMenuItem label="Deshacer" shortcut="⌘Z" />
          <DropdownMenuItem label="Rehacer"  shortcut="⌘⇧Z" disabled />
        </DropdownMenu>
      </div>
    `,
  }),
  args: { placement: 'bottom-start' },
}

export const WithDividerAndDanger: Story = {
  name: 'Con Divisor y Danger',
  render: (args) => ({
    components: { DropdownMenu, DropdownMenuItem, DropdownDivider },
    setup: () => ({ args }),
    template: `
      <div style="padding: 2rem;">
        <DropdownMenu v-bind="args">
          <template #trigger>${triggerBtn}</template>
          <DropdownMenuItem label="Ver perfil" />
          <DropdownMenuItem label="Configuración" />
          <DropdownDivider />
          <DropdownMenuItem label="Cerrar sesión" danger />
        </DropdownMenu>
      </div>
    `,
  }),
  args: { placement: 'bottom-start' },
}

export const AlignedEnd: Story = {
  name: 'Alineado a la derecha',
  render: (args) => ({
    components: { DropdownMenu, DropdownMenuItem, DropdownDivider },
    setup: () => ({ args }),
    template: `
      <div style="padding: 2rem; display:flex; justify-content:flex-end;">
        <DropdownMenu v-bind="args">
          <template #trigger>${triggerBtn}</template>
          <DropdownMenuItem label="Editar" />
          <DropdownMenuItem label="Exportar" />
          <DropdownDivider />
          <DropdownMenuItem label="Eliminar" danger />
        </DropdownMenu>
      </div>
    `,
  }),
  args: { placement: 'bottom-end' },
}
