import type { Meta, StoryObj } from '@storybook/vue3'
import Datepicker from './Datepicker.vue'

const meta: Meta<typeof Datepicker> = {
  title: 'Components/Datepicker',
  component: Datepicker,
  tags: ['autodocs'],
  parameters: {
    backgrounds: {
      default: 'neumorphic',
      values: [{ name: 'neumorphic', value: '#e0e5ec' }],
    },
  },
  argTypes: {
    size:    { control: 'select', options: ['sm', 'md', 'lg'] },
    rounded: { control: 'select', options: ['none', 'sm', 'md', 'lg', 'xl'] },
  },
}

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    label: 'Fecha',
    placeholder: 'Selecciona una fecha',
  },
}

export const WithValue: Story = {
  name: 'Con valor inicial',
  args: {
    label: 'Fecha de nacimiento',
    modelValue: '1995-07-15',
  },
}

export const WithHint: Story = {
  name: 'Con Hint',
  args: {
    label: 'Fecha de entrega',
    hint: 'El pedido llegará en 3-5 días hábiles.',
  },
}

export const WithError: Story = {
  name: 'Estado Error',
  args: {
    label: 'Fecha de vencimiento',
    modelValue: '2020-01-01',
    error: 'La fecha no puede ser anterior a hoy.',
  },
}

export const WithMinMax: Story = {
  name: 'Con Min / Max',
  args: {
    label: 'Reservación',
    hint: 'Solo disponible del 1 al 28 del mes actual.',
    min: `${new Date().getFullYear()}-${String(new Date().getMonth() + 1).padStart(2, '0')}-01`,
    max: `${new Date().getFullYear()}-${String(new Date().getMonth() + 1).padStart(2, '0')}-28`,
  },
}

export const Disabled: Story = {
  args: {
    label: 'Campo deshabilitado',
    modelValue: '2024-06-20',
    disabled: true,
  },
}

export const SmallSize: Story = {
  name: 'Tamaño Pequeño',
  args: {
    label: 'Fecha',
    size: 'sm',
  },
}

export const LargeSize: Story = {
  name: 'Tamaño Grande',
  args: {
    label: 'Fecha',
    size: 'lg',
  },
}
