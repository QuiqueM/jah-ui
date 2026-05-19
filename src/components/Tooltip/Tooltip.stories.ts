import type { Meta, StoryObj } from '@storybook/vue3'
import Tooltip from './Tooltip.vue'

const meta: Meta<typeof Tooltip> = {
  title: 'Components/Tooltip',
  component: Tooltip,
  tags: ['autodocs'],
  parameters: {
    backgrounds: {
      default: 'neumorphic',
      values: [{ name: 'neumorphic', value: '#e0e5ec' }],
    },
    layout: 'centered',
  },
  argTypes: {
    placement: { control: 'select', options: ['top', 'bottom', 'left', 'right'] },
    delay:     { control: { type: 'number', min: 0, max: 1000, step: 50 } },
  },
}

export default meta
type Story = StoryObj<typeof meta>

const triggerBtn = `
  <button style="
    padding: 0 1.25rem; height: 2.75rem; border: none; border-radius: 0.75rem;
    background: #e0e5ec; font-family: inherit; font-size: 0.9375rem; font-weight: 500;
    color: #374151; cursor: pointer;
    box-shadow: 6px 6px 12px #b8bec7, -6px -6px 12px #ffffff;
  ">Pasa el cursor</button>
`

export const Top: Story = {
  render: (args) => ({
    components: { Tooltip },
    setup: () => ({ args }),
    template: `<Tooltip v-bind="args">${triggerBtn}</Tooltip>`,
  }),
  args: {
    content: 'Esto es un tooltip',
    placement: 'top',
  },
}

export const Bottom: Story = {
  render: (args) => ({
    components: { Tooltip },
    setup: () => ({ args }),
    template: `<Tooltip v-bind="args">${triggerBtn}</Tooltip>`,
  }),
  args: {
    content: 'Tooltip abajo',
    placement: 'bottom',
  },
}

export const Left: Story = {
  render: (args) => ({
    components: { Tooltip },
    setup: () => ({ args }),
    template: `<Tooltip v-bind="args">${triggerBtn}</Tooltip>`,
  }),
  args: {
    content: 'Tooltip a la izquierda',
    placement: 'left',
  },
}

export const Right: Story = {
  render: (args) => ({
    components: { Tooltip },
    setup: () => ({ args }),
    template: `<Tooltip v-bind="args">${triggerBtn}</Tooltip>`,
  }),
  args: {
    content: 'Tooltip a la derecha',
    placement: 'right',
  },
}

export const LongText: Story = {
  name: 'Texto largo',
  render: (args) => ({
    components: { Tooltip },
    setup: () => ({ args }),
    template: `<Tooltip v-bind="args">${triggerBtn}</Tooltip>`,
  }),
  args: {
    content: 'Este tooltip contiene un texto más largo para mostrar cómo se comporta el componente cuando el contenido ocupa varias líneas.',
    placement: 'top',
    maxWidth: '14rem',
  },
}

export const NoDelay: Story = {
  name: 'Sin delay',
  render: (args) => ({
    components: { Tooltip },
    setup: () => ({ args }),
    template: `<Tooltip v-bind="args">${triggerBtn}</Tooltip>`,
  }),
  args: {
    content: 'Aparece inmediatamente',
    placement: 'top',
    delay: 0,
  },
}

export const Disabled: Story = {
  name: 'Deshabilitado',
  render: (args) => ({
    components: { Tooltip },
    setup: () => ({ args }),
    template: `<Tooltip v-bind="args">${triggerBtn}</Tooltip>`,
  }),
  args: {
    content: 'Este tooltip no aparece',
    placement: 'top',
    disabled: true,
  },
}

export const AllPlacements: Story = {
  name: 'Todas las posiciones',
  render: () => ({
    components: { Tooltip },
    template: `
      <div style="display:grid; grid-template-columns:repeat(2,auto); gap:1.5rem; place-items:center;">
        <Tooltip content="Arriba" placement="top">
          <button style="padding:0 1rem;height:2.5rem;border:none;border-radius:0.75rem;background:#e0e5ec;font-family:inherit;font-weight:500;color:#374151;cursor:pointer;box-shadow:6px 6px 12px #b8bec7,-6px -6px 12px #fff;">Top</button>
        </Tooltip>
        <Tooltip content="Abajo" placement="bottom">
          <button style="padding:0 1rem;height:2.5rem;border:none;border-radius:0.75rem;background:#e0e5ec;font-family:inherit;font-weight:500;color:#374151;cursor:pointer;box-shadow:6px 6px 12px #b8bec7,-6px -6px 12px #fff;">Bottom</button>
        </Tooltip>
        <Tooltip content="Izquierda" placement="left">
          <button style="padding:0 1rem;height:2.5rem;border:none;border-radius:0.75rem;background:#e0e5ec;font-family:inherit;font-weight:500;color:#374151;cursor:pointer;box-shadow:6px 6px 12px #b8bec7,-6px -6px 12px #fff;">Left</button>
        </Tooltip>
        <Tooltip content="Derecha" placement="right">
          <button style="padding:0 1rem;height:2.5rem;border:none;border-radius:0.75rem;background:#e0e5ec;font-family:inherit;font-weight:500;color:#374151;cursor:pointer;box-shadow:6px 6px 12px #b8bec7,-6px -6px 12px #fff;">Right</button>
        </Tooltip>
      </div>
    `,
  }),
}
