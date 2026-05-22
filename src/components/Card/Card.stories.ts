import type { Meta, StoryObj } from '@storybook/vue3'
import Card from './Card.vue'

const meta: Meta<typeof Card> = {
  title: 'Components/Card',
  component: Card,
  tags: ['autodocs'],
  parameters: {
    backgrounds: {
      default: 'neumorphic',
      values: [{ name: 'neumorphic', value: '#e0e5ec' }],
    },
  },
  argTypes: {
    padding: { control: 'select', options: ['none', 'sm', 'md', 'lg'] },
    rounded: { control: 'select', options: ['none', 'sm', 'md', 'lg', 'xl'] },
    coverPosition: { control: 'select', options: ['top', 'left', 'right'] },
  },
}

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    title: 'Título de la tarjeta',
    subtitle: 'Una descripción breve del contenido.',
  },
  render: (args) => ({
    components: { Card },
    setup: () => ({ args }),
    template: `
      <div style="padding:2rem;background:#e0e5ec;min-width:320px;">
        <Card v-bind="args">
          <p style="margin:0;color:#6b7280;font-size:0.9375rem;line-height:1.6">
            Aquí va el contenido principal de la tarjeta. Puede ser texto, imágenes, formularios o cualquier componente.
          </p>
        </Card>
      </div>
    `,
  }),
}

export const WithFooter: Story = {
  name: 'Con Footer',
  render: () => ({
    components: { Card },
    template: `
      <div style="padding:2rem;background:#e0e5ec;min-width:320px;">
        <Card title="Resumen de cuenta" subtitle="Periodo: Mayo 2026">
          <p style="margin:0;font-size:2rem;font-weight:700;color:#3b82f6;">$4,280.00</p>
          <template #footer>
            <div style="display:flex;justify-content:space-between;align-items:center;">
              <span style="font-size:0.8125rem;color:#6b7280;">Próximo corte: 31 mayo</span>
              <span style="font-size:0.8125rem;font-weight:600;color:#3b82f6;cursor:pointer;">Ver detalle →</span>
            </div>
          </template>
        </Card>
      </div>
    `,
  }),
}

const coverSlot = `
  <template #cover>
    <div style="height:100%;min-height:160px;background:linear-gradient(135deg,#667eea,#764ba2);display:flex;align-items:center;justify-content:center;">
      <svg width="56" height="56" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" style="opacity:0.7">
        <rect x="3" y="3" width="18" height="18" rx="2"/><circle cx="8.5" cy="8.5" r="1.5"/><polyline points="21 15 16 10 5 21"/>
      </svg>
    </div>
  </template>`

export const WithCover: Story = {
  name: 'Cover arriba (top)',
  render: () => ({
    components: { Card },
    template: `
      <div style="padding:2rem;background:#e0e5ec;min-width:320px;max-width:360px;">
        <Card title="Paisaje montañoso" subtitle="Fotografía · Naturaleza" rounded="xl" coverPosition="top">
          ${coverSlot}
          <p style="margin:0;font-size:0.9375rem;color:#6b7280;line-height:1.6">
            Una impresionante vista desde la cima con niebla entre los valles al amanecer.
          </p>
        </Card>
      </div>
    `,
  }),
}

export const WithCoverLeft: Story = {
  name: 'Cover a la izquierda (left)',
  render: () => ({
    components: { Card },
    template: `
      <div style="padding:2rem;background:#e0e5ec;min-width:320px;max-width:480px;">
        <Card title="Paisaje montañoso" subtitle="Fotografía · Naturaleza" rounded="xl" coverPosition="left">
          ${coverSlot}
          <p style="margin:0;font-size:0.9375rem;color:#6b7280;line-height:1.6">
            Una impresionante vista desde la cima con niebla entre los valles al amanecer.
          </p>
        </Card>
      </div>
    `,
  }),
}

export const WithCoverRight: Story = {
  name: 'Cover a la derecha (right)',
  render: () => ({
    components: { Card },
    template: `
      <div style="padding:2rem;background:#e0e5ec;min-width:320px;max-width:480px;">
        <Card title="Paisaje montañoso" subtitle="Fotografía · Naturaleza" rounded="xl" coverPosition="right">
          ${coverSlot}
          <p style="margin:0;font-size:0.9375rem;color:#6b7280;line-height:1.6">
            Una impresionante vista desde la cima con niebla entre los valles al amanecer.
          </p>
        </Card>
      </div>
    `,
  }),
}

export const WithCustomHeader: Story = {
  name: 'Con Header personalizado',
  render: () => ({
    components: { Card },
    template: `
      <div style="padding:2rem;background:#e0e5ec;min-width:320px;">
        <Card>
          <template #header>
            <div style="display:flex;align-items:center;gap:0.75rem;">
              <div style="width:2.5rem;height:2.5rem;border-radius:50%;background:linear-gradient(135deg,#3b82f6,#6366f1);display:flex;align-items:center;justify-content:center;color:white;font-weight:700;font-size:0.9375rem;flex-shrink:0;">JD</div>
              <div>
                <p style="margin:0;font-weight:600;color:#1f2937;font-size:0.9375rem;">Juan Díaz</p>
                <p style="margin:0;font-size:0.8125rem;color:#6b7280;">Administrador · hace 5 min</p>
              </div>
            </div>
          </template>
          <p style="margin:0;font-size:0.9375rem;color:#374151;line-height:1.6">
            Se actualizó la configuración del sistema correctamente. Los cambios entrarán en vigor en el próximo ciclo.
          </p>
        </Card>
      </div>
    `,
  }),
}

export const Hoverable: Story = {
  name: 'Hoverable',
  render: () => ({
    components: { Card },
    template: `
      <div style="padding:2rem;background:#e0e5ec;display:flex;gap:1.25rem;flex-wrap:wrap;">
        <div style="width:220px;" v-for="i in 3" :key="i">
          <Card :title="'Proyecto ' + i" subtitle="Haz hover sobre la tarjeta" hoverable>
            <p style="margin:0;font-size:0.875rem;color:#6b7280;">Descripción breve del proyecto {{ i }}.</p>
          </Card>
        </div>
      </div>
    `,
  }),
}

export const Clickable: Story = {
  name: 'Clickable',
  render: () => ({
    components: { Card },
    setup() {
      const count = { value: 0 }
      return { count }
    },
    template: `
      <div style="padding:2rem;background:#e0e5ec;display:flex;gap:1.25rem;flex-wrap:wrap;">
        <div style="width:200px;" v-for="item in ['Inicio','Perfil','Ajustes']" :key="item">
          <Card :title="item" subtitle="Haz clic" clickable @click="count.value++">
            <p style="margin:0;font-size:0.875rem;color:#6b7280;">Clicks: {{ count.value }}</p>
          </Card>
        </div>
      </div>
    `,
  }),
}

export const NoPadding: Story = {
  name: 'Sin padding',
  args: { padding: 'none', rounded: 'xl' },
  render: (args) => ({
    components: { Card },
    setup: () => ({ args }),
    template: `
      <div style="padding:2rem;background:#e0e5ec;max-width:340px;">
        <Card v-bind="args">
          <div style="padding:1.25rem;border-bottom:1px solid rgba(184,190,199,0.4);">
            <p style="margin:0;font-weight:600;color:#1f2937;">Control total de padding</p>
          </div>
          <div style="padding:1.25rem;">
            <p style="margin:0;font-size:0.9375rem;color:#6b7280;">Útil cuando el contenido requiere su propio espaciado.</p>
          </div>
        </Card>
      </div>
    `,
  }),
}
