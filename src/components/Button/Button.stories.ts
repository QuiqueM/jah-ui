import type { Meta, StoryObj } from '@storybook/vue3'
import Button from './Button.vue'

const meta: Meta<typeof Button> = {
  title: 'Components/Button',
  component: Button,
  tags: ['autodocs'],
  parameters: {
    backgrounds: {
      default: 'neumorphic',
      values: [{ name: 'neumorphic', value: '#e0e5ec' }],
    },
  },
  argTypes: {
    variant: { control: 'select', options: ['primary', 'secondary', 'ghost', 'danger'] },
    size: { control: 'select', options: ['sm', 'md', 'lg'] },
    rounded: { control: 'select', options: ['none', 'sm', 'md', 'lg', 'xl', 'full'] },
    iconPosition: { control: 'select', options: ['left', 'right'] },
  },
}

export default meta
type Story = StoryObj<typeof meta>

export const Primary: Story = {
  args: { label: 'Primary', variant: 'primary', rounded: 'lg' },
}

export const Secondary: Story = {
  args: { label: 'Secondary', variant: 'secondary', rounded: 'lg' },
}

export const Ghost: Story = {
  args: { label: 'Ghost', variant: 'ghost', rounded: 'lg' },
}

export const Danger: Story = {
  args: { label: 'Danger', variant: 'danger', rounded: 'lg' },
}

export const Pill: Story = {
  args: { label: 'Pill Shape', variant: 'primary', rounded: 'full' },
}

export const Square: Story = {
  args: { label: 'Square', variant: 'primary', rounded: 'none' },
}

export const Small: Story = {
  args: { label: 'Small', size: 'sm', variant: 'primary' },
}

export const Large: Story = {
  args: { label: 'Large', size: 'lg', variant: 'primary' },
}

export const Disabled: Story = {
  args: { label: 'Disabled', disabled: true, variant: 'primary' },
}

export const Loading: Story = {
  args: { label: 'Guardando...', loading: true, variant: 'primary' },
}

export const WithIconLeft: Story = {
  name: 'Icon / Left',
  args: { label: 'Guardar', variant: 'primary' },
  render: (args) => ({
    components: { Button },
    setup: () => ({ args }),
    template: `
      <Button v-bind="args">
        <template #icon>
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <path d="M19 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11l5 5v11a2 2 0 0 1-2 2z"/><polyline points="17 21 17 13 7 13 7 21"/><polyline points="7 3 7 8 15 8"/>
          </svg>
        </template>
      </Button>
    `,
  }),
}

export const WithIconRight: Story = {
  name: 'Icon / Right',
  args: { label: 'Siguiente', variant: 'primary', iconPosition: 'right' },
  render: (args) => ({
    components: { Button },
    setup: () => ({ args }),
    template: `
      <Button v-bind="args">
        <template #icon>
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/>
          </svg>
        </template>
      </Button>
    `,
  }),
}

export const WithIconDanger: Story = {
  name: 'Icon / Danger',
  args: { label: 'Eliminar', variant: 'danger' },
  render: (args) => ({
    components: { Button },
    setup: () => ({ args }),
    template: `
      <Button v-bind="args">
        <template #icon>
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <polyline points="3 6 5 6 21 6"/><path d="M19 6l-1 14a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2L5 6"/><path d="M10 11v6"/><path d="M14 11v6"/><path d="M9 6V4h6v2"/>
          </svg>
        </template>
      </Button>
    `,
  }),
}

export const LoadingDanger: Story = {
  name: 'Loading / Danger',
  args: { label: 'Eliminando...', loading: true, variant: 'danger' },
}

export const AllRounded: Story = {
  name: 'All Rounded Variants',
  render: () => ({
    components: { Button },
    template: `
      <div style="display:flex;gap:1rem;align-items:center;flex-wrap:wrap;background:#e0e5ec;padding:2rem;border-radius:1rem;">
        <Button label="none"  variant="primary" rounded="none" />
        <Button label="sm"    variant="primary" rounded="sm" />
        <Button label="md"    variant="primary" rounded="md" />
        <Button label="lg"    variant="primary" rounded="lg" />
        <Button label="xl"    variant="primary" rounded="xl" />
        <Button label="full"  variant="primary" rounded="full" />
      </div>
    `,
  }),
}
