import type { Meta, StoryObj } from '@storybook/vue3'
import { ref, onMounted, onUnmounted } from 'vue'
import Progress from './Progress.vue'

const meta: Meta<typeof Progress> = {
  title: 'Components/Progress',
  component: Progress,
  tags: ['autodocs'],
  parameters: {
    backgrounds: {
      default: 'neumorphic',
      values: [{ name: 'neumorphic', value: '#e0e5ec' }],
    },
  },
  argTypes: {
    variant: { control: 'select', options: ['primary', 'success', 'warning', 'danger'] },
    size:    { control: 'select', options: ['sm', 'md', 'lg'] },
    rounded: { control: 'select', options: ['none', 'sm', 'md', 'full'] },
    value:   { control: { type: 'range', min: 0, max: 100, step: 1 } },
  },
}

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: { value: 60, label: 'Progreso', showValue: true },
}

export const Variants: Story = {
  name: 'Todos los variants',
  render: () => ({
    components: { Progress },
    template: `
      <div style="display:flex;flex-direction:column;gap:1.25rem;padding:2rem;background:#e0e5ec;border-radius:1rem;min-width:320px;">
        <Progress variant="primary" :value="72" label="Primary"  show-value />
        <Progress variant="success" :value="90" label="Success"  show-value />
        <Progress variant="warning" :value="45" label="Warning"  show-value />
        <Progress variant="danger"  :value="28" label="Danger"   show-value />
      </div>
    `,
  }),
}

export const Sizes: Story = {
  name: 'Tamaños',
  render: () => ({
    components: { Progress },
    template: `
      <div style="display:flex;flex-direction:column;gap:1.5rem;padding:2rem;background:#e0e5ec;border-radius:1rem;min-width:320px;">
        <Progress size="sm" :value="65" label="Small" />
        <Progress size="md" :value="65" label="Medium" />
        <Progress size="lg" :value="65" label="Large" />
      </div>
    `,
  }),
}

export const Animated: Story = {
  name: 'Animado (shimmer)',
  args: { value: 70, label: 'Subiendo archivo...', showValue: true, animated: true },
}

export const Indeterminate: Story = {
  name: 'Indeterminado',
  args: { label: 'Cargando...', indeterminate: true },
}

export const IndeterminateVariants: Story = {
  name: 'Indeterminado · Variants',
  render: () => ({
    components: { Progress },
    template: `
      <div style="display:flex;flex-direction:column;gap:1.25rem;padding:2rem;background:#e0e5ec;border-radius:1rem;min-width:320px;">
        <Progress variant="primary" indeterminate label="Conectando..." />
        <Progress variant="success" indeterminate label="Sincronizando..." />
        <Progress variant="warning" indeterminate label="Procesando..." />
        <Progress variant="danger"  indeterminate label="Verificando..." />
      </div>
    `,
  }),
}

export const Reactive: Story = {
  name: 'Reactivo',
  render: () => ({
    components: { Progress },
    setup() {
      const value = ref(0)
      let interval: ReturnType<typeof setInterval>

      onMounted(() => {
        interval = setInterval(() => {
          value.value = value.value >= 100 ? 0 : value.value + 2
        }, 80)
      })

      onUnmounted(() => clearInterval(interval))

      return { value }
    },
    template: `
      <div style="padding:2rem;background:#e0e5ec;border-radius:1rem;min-width:320px;">
        <Progress :value="value" label="Instalando paquetes..." show-value animated />
      </div>
    `,
  }),
}
