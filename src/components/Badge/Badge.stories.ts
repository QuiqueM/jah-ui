import type { Meta, StoryObj } from '@storybook/vue3'
import Badge from './Badge.vue'

const meta: Meta<typeof Badge> = {
  title: 'Components/Badge',
  component: Badge,
  tags: ['autodocs'],
  parameters: {
    backgrounds: {
      default: 'neumorphic',
      values: [{ name: 'neumorphic', value: '#e0e5ec' }],
    },
  },
  argTypes: {
    variant: { control: 'select', options: ['primary', 'secondary', 'success', 'warning', 'danger'] },
    size:    { control: 'select', options: ['sm', 'md', 'lg'] },
    rounded: { control: 'select', options: ['none', 'sm', 'md', 'full'] },
  },
}

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: { variant: 'primary' },
  render: (args) => ({
    components: { Badge },
    setup: () => ({ args }),
    template: `<Badge v-bind="args">Nuevo</Badge>`,
  }),
}

export const Variants: Story = {
  name: 'Todos los variants (solid)',
  render: () => ({
    components: { Badge },
    template: `
      <div style="display:flex;align-items:center;gap:0.75rem;padding:2rem;background:#e0e5ec;border-radius:1rem;flex-wrap:wrap;">
        <Badge variant="primary">Primary</Badge>
        <Badge variant="secondary">Secondary</Badge>
        <Badge variant="success">Success</Badge>
        <Badge variant="warning">Warning</Badge>
        <Badge variant="danger">Danger</Badge>
      </div>
    `,
  }),
}

export const Outline: Story = {
  name: 'Todos los variants (outline)',
  render: () => ({
    components: { Badge },
    template: `
      <div style="display:flex;align-items:center;gap:0.75rem;padding:2rem;background:#e0e5ec;border-radius:1rem;flex-wrap:wrap;">
        <Badge variant="primary"   outline>Primary</Badge>
        <Badge variant="secondary" outline>Secondary</Badge>
        <Badge variant="success"   outline>Success</Badge>
        <Badge variant="warning"   outline>Warning</Badge>
        <Badge variant="danger"    outline>Danger</Badge>
      </div>
    `,
  }),
}

export const Sizes: Story = {
  name: 'Tamaños',
  render: () => ({
    components: { Badge },
    template: `
      <div style="display:flex;align-items:center;gap:0.75rem;padding:2rem;background:#e0e5ec;border-radius:1rem;">
        <Badge size="sm">Small</Badge>
        <Badge size="md">Medium</Badge>
        <Badge size="lg">Large</Badge>
      </div>
    `,
  }),
}

export const Dots: Story = {
  name: 'Dot',
  render: () => ({
    components: { Badge },
    template: `
      <div style="display:flex;align-items:center;gap:1rem;padding:2rem;background:#e0e5ec;border-radius:1rem;">
        <Badge dot variant="primary" />
        <Badge dot variant="secondary" />
        <Badge dot variant="success" />
        <Badge dot variant="warning" />
        <Badge dot variant="danger" />
      </div>
    `,
  }),
}

export const WithIcon: Story = {
  name: 'Con ícono',
  render: () => ({
    components: { Badge },
    template: `
      <div style="display:flex;align-items:center;gap:0.75rem;padding:2rem;background:#e0e5ec;border-radius:1rem;flex-wrap:wrap;">
        <Badge variant="success">
          <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
          Aprobado
        </Badge>
        <Badge variant="danger">
          <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
          Rechazado
        </Badge>
        <Badge variant="warning">
          <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/></svg>
          Pendiente
        </Badge>
      </div>
    `,
  }),
}

export const InContext: Story = {
  name: 'En contexto',
  render: () => ({
    components: { Badge },
    template: `
      <div style="display:flex;flex-direction:column;gap:0.875rem;padding:2rem;background:#e0e5ec;border-radius:1rem;min-width:300px;">
        <div style="display:flex;justify-content:space-between;align-items:center;">
          <span style="font-size:0.9375rem;font-weight:500;color:#374151;">Mensajes</span>
          <Badge variant="danger">12</Badge>
        </div>
        <div style="display:flex;justify-content:space-between;align-items:center;">
          <span style="font-size:0.9375rem;font-weight:500;color:#374151;">Factura #4821</span>
          <Badge variant="success">Pagada</Badge>
        </div>
        <div style="display:flex;justify-content:space-between;align-items:center;">
          <span style="font-size:0.9375rem;font-weight:500;color:#374151;">Versión</span>
          <Badge variant="secondary" outline>v1.0.0</Badge>
        </div>
        <div style="display:flex;justify-content:space-between;align-items:center;">
          <span style="font-size:0.9375rem;font-weight:500;color:#374151;">Servidor</span>
          <div style="display:flex;align-items:center;gap:0.375rem;">
            <Badge dot variant="success" />
            <span style="font-size:0.8125rem;color:#6b7280;">En línea</span>
          </div>
        </div>
      </div>
    `,
  }),
}
