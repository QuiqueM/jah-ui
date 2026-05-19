import type { Meta, StoryObj } from '@storybook/vue3'
import Input from './Input.vue'

const meta: Meta<typeof Input> = {
  title: 'Components/Input',
  component: Input,
  tags: ['autodocs'],
  parameters: {
    backgrounds: {
      default: 'neumorphic',
      values: [{ name: 'neumorphic', value: '#e0e5ec' }],
    },
  },
  argTypes: {
    type: { control: 'select', options: ['text', 'number', 'password'] },
    size: { control: 'select', options: ['sm', 'md', 'lg'] },
    rounded: { control: 'select', options: ['none', 'sm', 'md', 'lg', 'xl', 'full'] },
  },
}

export default meta
type Story = StoryObj<typeof meta>

export const Text: Story = {
  args: { label: 'Nombre', placeholder: 'Escribe tu nombre', type: 'text' },
}

export const Number: Story = {
  args: { label: 'Cantidad', placeholder: '0', type: 'number', suffix: 'kg' },
}

export const Password: Story = {
  args: { label: 'Contraseña', placeholder: '••••••••', type: 'password' },
}

export const WithPrefix: Story = {
  name: 'Prefix & Suffix',
  args: { label: 'Precio', placeholder: '0.00', prefix: '$', suffix: 'MXN' },
}

export const WithHint: Story = {
  name: 'Con Hint',
  args: {
    label: 'Correo',
    placeholder: 'correo@ejemplo.com',
    hint: 'Te enviaremos un código de verificación.',
  },
}

export const WithError: Story = {
  name: 'Estado Error',
  args: {
    label: 'Correo',
    placeholder: 'correo@ejemplo.com',
    modelValue: 'correo-invalido',
    error: true,
    hint: 'El correo no tiene un formato válido.',
  },
}

export const Disabled: Story = {
  args: { label: 'Campo deshabilitado', placeholder: 'No editable', disabled: true },
}

export const WithIconLeft: Story = {
  name: 'Icon / Left',
  args: { label: 'Buscar', placeholder: 'Buscar...' },
  render: (args) => ({
    components: { Input },
    setup: () => ({ args }),
    template: `
      <Input v-bind="args">
        <template #icon-left>
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/>
          </svg>
        </template>
      </Input>
    `,
  }),
}

export const WithIconRight: Story = {
  name: 'Icon / Right',
  args: { label: 'Correo', placeholder: 'correo@ejemplo.com' },
  render: (args) => ({
    components: { Input },
    setup: () => ({ args }),
    template: `
      <Input v-bind="args">
        <template #icon-right>
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/>
          </svg>
        </template>
      </Input>
    `,
  }),
}

export const Complete: Story = {
  name: 'Completo (prefix + suffix + iconos)',
  args: { label: 'Monto', placeholder: '0.00', prefix: '$', suffix: 'MXN' },
  render: (args) => ({
    components: { Input },
    setup: () => ({ args }),
    template: `
      <Input v-bind="args">
        <template #icon-left>
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <line x1="12" y1="1" x2="12" y2="23"/><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/>
          </svg>
        </template>
      </Input>
    `,
  }),
}
