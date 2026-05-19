import type { Meta, StoryObj } from '@storybook/vue3'
import Skeleton from './Skeleton.vue'

const meta: Meta<typeof Skeleton> = {
  title: 'Components/Skeleton',
  component: Skeleton,
  tags: ['autodocs'],
  parameters: {
    backgrounds: {
      default: 'neumorphic',
      values: [{ name: 'neumorphic', value: '#e0e5ec' }],
    },
  },
  argTypes: {
    variant: { control: 'select', options: ['text', 'circle', 'rect', 'button'] },
    lines:   { control: { type: 'number', min: 1, max: 10 } },
  },
}

export default meta
type Story = StoryObj<typeof meta>

export const Text: Story = {
  args: { variant: 'text', lines: 1 },
  render: (args) => ({
    components: { Skeleton },
    setup: () => ({ args }),
    template: `<Skeleton v-bind="args" style="max-width:24rem;" />`,
  }),
}

export const MultilineText: Story = {
  name: 'Texto multilínea',
  args: { variant: 'text', lines: 4 },
  render: (args) => ({
    components: { Skeleton },
    setup: () => ({ args }),
    template: `<Skeleton v-bind="args" style="max-width:28rem;" />`,
  }),
}

export const Circle: Story = {
  name: 'Círculo (avatar)',
  args: { variant: 'circle' },
  render: (args) => ({
    components: { Skeleton },
    setup: () => ({ args }),
    template: `<Skeleton v-bind="args" />`,
  }),
}

export const Rect: Story = {
  name: 'Rectángulo (imagen)',
  args: { variant: 'rect' },
  render: (args) => ({
    components: { Skeleton },
    setup: () => ({ args }),
    template: `<Skeleton v-bind="args" style="max-width:28rem;" />`,
  }),
}

export const Button: Story = {
  name: 'Botón',
  args: { variant: 'button' },
  render: (args) => ({
    components: { Skeleton },
    setup: () => ({ args }),
    template: `<Skeleton v-bind="args" />`,
  }),
}

export const NoAnimation: Story = {
  name: 'Sin animación',
  args: { variant: 'text', lines: 3, animated: false },
  render: (args) => ({
    components: { Skeleton },
    setup: () => ({ args }),
    template: `<Skeleton v-bind="args" style="max-width:28rem;" />`,
  }),
}

export const CardPlaceholder: Story = {
  name: 'Placeholder de Tarjeta',
  render: () => ({
    components: { Skeleton },
    template: `
      <div style="
        max-width:22rem; padding:1.5rem; border-radius:1.25rem; background:#e0e5ec;
        box-shadow: 8px 8px 20px #b8bec7, -8px -8px 20px #ffffff;
        display:flex; flex-direction:column; gap:1rem;
      ">
        <Skeleton variant="rect" height="11rem" />
        <Skeleton variant="text" width="55%" />
        <Skeleton variant="text" :lines="3" />
        <div style="display:flex; gap:0.75rem; margin-top:0.25rem;">
          <Skeleton variant="button" width="6rem" />
          <Skeleton variant="button" width="5rem" />
        </div>
      </div>
    `,
  }),
}

export const ProfilePlaceholder: Story = {
  name: 'Placeholder de Perfil',
  render: () => ({
    components: { Skeleton },
    template: `
      <div style="max-width:22rem; display:flex; flex-direction:column; gap:1.25rem;">
        <div style="display:flex; align-items:center; gap:1rem;">
          <Skeleton variant="circle" width="3.5rem" height="3.5rem" />
          <div style="flex:1; display:flex; flex-direction:column; gap:0.5rem;">
            <Skeleton variant="text" width="50%" />
            <Skeleton variant="text" width="35%" />
          </div>
        </div>
        <Skeleton variant="text" :lines="4" />
        <div style="display:flex; gap:0.75rem;">
          <Skeleton variant="button" />
          <Skeleton variant="button" width="5rem" />
        </div>
      </div>
    `,
  }),
}

export const ListPlaceholder: Story = {
  name: 'Placeholder de Lista',
  render: () => ({
    components: { Skeleton },
    template: `
      <div style="max-width:28rem; display:flex; flex-direction:column; gap:1rem;">
        <div v-for="i in 4" :key="i" style="display:flex; align-items:center; gap:1rem;">
          <Skeleton variant="circle" width="2.5rem" height="2.5rem" />
          <div style="flex:1; display:flex; flex-direction:column; gap:0.4rem;">
            <Skeleton variant="text" :width="i % 2 === 0 ? '70%' : '90%'" />
            <Skeleton variant="text" width="45%" />
          </div>
        </div>
      </div>
    `,
  }),
}
