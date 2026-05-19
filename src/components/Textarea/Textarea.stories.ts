import type { Meta, StoryObj } from '@storybook/vue3'
import Textarea from './Textarea.vue'

const meta: Meta<typeof Textarea> = {
  title: 'Components/Textarea',
  component: Textarea,
  tags: ['autodocs'],
  parameters: {
    backgrounds: {
      default: 'neumorphic',
      values: [{ name: 'neumorphic', value: '#e0e5ec' }],
    },
  },
  argTypes: {
    size:   { control: 'select', options: ['sm', 'md', 'lg'] },
    rounded: { control: 'select', options: ['none', 'sm', 'md', 'lg', 'xl'] },
    resize:  { control: 'select', options: ['none', 'vertical', 'horizontal', 'both'] },
  },
}

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    label: 'Descripción',
    placeholder: 'Escribe algo...',
  },
}

export const WithHint: Story = {
  name: 'Con Hint',
  args: {
    label: 'Comentario',
    placeholder: 'Deja tu comentario...',
    hint: 'Máximo 200 caracteres.',
  },
}

export const WithError: Story = {
  name: 'Estado Error',
  args: {
    label: 'Comentario',
    placeholder: 'Deja tu comentario...',
    modelValue: 'Texto inválido',
    error: 'El campo no puede contener caracteres especiales.',
  },
}

export const WithCounter: Story = {
  name: 'Con Contador',
  args: {
    label: 'Bio',
    placeholder: 'Cuéntanos sobre ti...',
    maxlength: 160,
    showCount: true,
    rows: 3,
  },
}

export const NoResize: Story = {
  name: 'Sin Resize',
  args: {
    label: 'Notas',
    placeholder: 'Escribe tus notas...',
    resize: 'none',
    rows: 5,
  },
}

export const Disabled: Story = {
  args: {
    label: 'Campo deshabilitado',
    modelValue: 'Este campo no se puede editar.',
    disabled: true,
  },
}

export const Large: Story = {
  name: 'Tamaño Grande',
  args: {
    label: 'Mensaje',
    placeholder: 'Escribe tu mensaje...',
    size: 'lg',
    rows: 6,
    maxlength: 500,
    showCount: true,
  },
}
