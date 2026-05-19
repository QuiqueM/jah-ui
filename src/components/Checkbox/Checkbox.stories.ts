import type { Meta, StoryObj } from '@storybook/vue3'
import { ref } from 'vue'
import Checkbox from './Checkbox.vue'

const meta: Meta<typeof Checkbox> = {
  title: 'Components/Checkbox',
  component: Checkbox,
  tags: ['autodocs'],
  parameters: {
    backgrounds: {
      default: 'neumorphic',
      values: [{ name: 'neumorphic', value: '#e0e5ec' }],
    },
  },
  argTypes: {
    size: { control: 'select', options: ['sm', 'md', 'lg'] },
  },
}

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: { label: 'Acepto los términos y condiciones' },
}

export const Checked: Story = {
  args: { label: 'Opción seleccionada', modelValue: true },
}

export const WithHint: Story = {
  name: 'Con Hint',
  args: {
    label: 'Recibir notificaciones',
    hint: 'Te enviaremos correos sobre actualizaciones importantes.',
    modelValue: false,
  },
}

export const Indeterminate: Story = {
  args: { label: 'Seleccionar todo', indeterminate: true, modelValue: false },
}

export const WithError: Story = {
  name: 'Estado Error',
  args: {
    label: 'Acepto los términos',
    hint: 'Debes aceptar los términos para continuar.',
    error: true,
    modelValue: false,
  },
}

export const Disabled: Story = {
  args: { label: 'Opción deshabilitada', disabled: true, modelValue: false },
}

export const DisabledChecked: Story = {
  name: 'Disabled + Checked',
  args: { label: 'Opción deshabilitada', disabled: true, modelValue: true },
}

export const Group: Story = {
  name: 'Grupo (array v-model)',
  render: () => ({
    components: { Checkbox },
    setup() {
      const selected = ref<string[]>(['vue'])
      const options = [
        { value: 'vue', label: 'Vue' },
        { value: 'react', label: 'React' },
        { value: 'angular', label: 'Angular' },
        { value: 'svelte', label: 'Svelte (no disponible)', disabled: true },
      ]
      return { selected, options }
    },
    template: `
      <div style="display:flex;flex-direction:column;gap:0.75rem;padding:2rem;background:#e0e5ec;border-radius:1rem;">
        <p style="font-size:0.875rem;font-weight:600;color:#374151;margin:0">¿Qué frameworks conoces?</p>
        <Checkbox
          v-for="opt in options"
          :key="opt.value"
          v-model="selected"
          :value="opt.value"
          :label="opt.label"
          :disabled="opt.disabled"
        />
        <p style="font-size:0.8125rem;color:#6b7280;margin:0">
          Seleccionados: <strong style="color:#3b82f6">{{ selected.join(', ') || '—' }}</strong>
        </p>
      </div>
    `,
  }),
}

export const Sizes: Story = {
  render: () => ({
    components: { Checkbox },
    template: `
      <div style="display:flex;flex-direction:column;gap:1rem;padding:2rem;background:#e0e5ec;border-radius:1rem;">
        <Checkbox size="sm" label="Small" :model-value="true" />
        <Checkbox size="md" label="Medium" :model-value="true" />
        <Checkbox size="lg" label="Large"  :model-value="true" />
      </div>
    `,
  }),
}
