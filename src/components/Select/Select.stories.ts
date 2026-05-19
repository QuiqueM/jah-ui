import type { Meta, StoryObj } from '@storybook/vue3'
import { ref } from 'vue'
import Select from './Select.vue'

const countries = [
  { label: 'México', value: 'mx' },
  { label: 'Estados Unidos', value: 'us' },
  { label: 'España', value: 'es' },
  { label: 'Argentina', value: 'ar' },
  { label: 'Colombia', value: 'co' },
  { label: 'Chile', value: 'cl' },
]

const sizes = [
  { label: 'Chico (S)', value: 's' },
  { label: 'Mediano (M)', value: 'm' },
  { label: 'Grande (L)', value: 'l' },
  { label: 'Extra Grande (XL)', value: 'xl' },
  { label: 'Extra Extra Grande (XXL — agotado)', value: 'xxl', disabled: true },
]

const meta: Meta<typeof Select> = {
  title: 'Components/Select',
  component: Select,
  tags: ['autodocs'],
  parameters: {
    backgrounds: {
      default: 'neumorphic',
      values: [{ name: 'neumorphic', value: '#e0e5ec' }],
    },
  },
  argTypes: {
    size: { control: 'select', options: ['sm', 'md', 'lg'] },
    rounded: { control: 'select', options: ['none', 'sm', 'md', 'lg', 'xl', 'full'] },
  },
}

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    label: 'País',
    placeholder: 'Selecciona un país',
    options: countries,
  },
}

export const WithValue: Story = {
  name: 'Con valor seleccionado',
  args: {
    label: 'País',
    options: countries,
    modelValue: 'mx',
  },
}

export const WithDisabledOption: Story = {
  name: 'Con opción deshabilitada',
  args: {
    label: 'Talla',
    options: sizes,
    hint: 'El XXL está agotado temporalmente.',
  },
}

export const WithHint: Story = {
  name: 'Con Hint',
  args: {
    label: 'País de facturación',
    options: countries,
    hint: 'Debe coincidir con tu dirección fiscal.',
  },
}

export const WithError: Story = {
  name: 'Estado Error',
  args: {
    label: 'País',
    options: countries,
    error: true,
    hint: 'Este campo es requerido.',
  },
}

export const Disabled: Story = {
  args: {
    label: 'País',
    options: countries,
    modelValue: 'mx',
    disabled: true,
  },
}

export const Reactive: Story = {
  name: 'Reactivo (v-model)',
  render: () => ({
    components: { Select },
    setup() {
      const value = ref<string | null>(null)
      return { value, countries }
    },
    template: `
      <div style="display:flex;flex-direction:column;gap:1rem;padding:2rem;background:#e0e5ec;border-radius:1rem;min-width:280px;">
        <Select v-model="value" label="País" :options="countries" hint="Selecciona para ver el valor" />
        <p style="font-size:0.875rem;color:#6b7280;padding-left:0.25rem;">
          Valor actual: <strong style="color:#3b82f6">{{ value ?? '—' }}</strong>
        </p>
      </div>
    `,
  }),
}
