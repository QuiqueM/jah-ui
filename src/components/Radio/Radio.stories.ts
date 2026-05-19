import type { Meta, StoryObj } from '@storybook/vue3'
import { ref } from 'vue'
import Radio from './Radio.vue'

const meta: Meta<typeof Radio> = {
  title: 'Components/Radio',
  component: Radio,
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
  args: { label: 'Opción A', value: 'a' },
}

export const Selected: Story = {
  args: { label: 'Opción seleccionada', value: 'a', modelValue: 'a' },
}

export const WithHint: Story = {
  name: 'Con Hint',
  args: {
    label: 'Plan Pro',
    hint: 'Incluye todas las funciones premium.',
    value: 'pro',
    modelValue: 'pro',
  },
}

export const WithError: Story = {
  name: 'Estado Error',
  args: {
    label: 'Opción requerida',
    hint: 'Debes seleccionar una opción.',
    value: 'a',
    error: true,
  },
}

export const Disabled: Story = {
  args: { label: 'Opción deshabilitada', value: 'a', disabled: true },
}

export const Group: Story = {
  name: 'Grupo',
  render: () => ({
    components: { Radio },
    setup() {
      const plan = ref<string | null>(null)
      const options = [
        { value: 'free',  label: 'Gratuito',  hint: 'Hasta 3 proyectos.' },
        { value: 'pro',   label: 'Pro',        hint: 'Proyectos ilimitados + soporte.' },
        { value: 'team',  label: 'Equipo',     hint: 'Todo Pro + colaboración.' },
        { value: 'enterprise', label: 'Enterprise', hint: 'Disponible próximamente.', disabled: true },
      ]
      return { plan, options }
    },
    template: `
      <div style="display:flex;flex-direction:column;gap:0.875rem;padding:2rem;background:#e0e5ec;border-radius:1rem;">
        <p style="font-size:0.875rem;font-weight:600;color:#374151;margin:0">Selecciona un plan</p>
        <Radio
          v-for="opt in options"
          :key="opt.value"
          v-model="plan"
          :value="opt.value"
          :label="opt.label"
          :hint="opt.hint"
          :disabled="opt.disabled"
          name="plan"
        />
        <p style="font-size:0.8125rem;color:#6b7280;margin:0">
          Plan actual: <strong style="color:#3b82f6">{{ plan ?? '—' }}</strong>
        </p>
      </div>
    `,
  }),
}

export const Sizes: Story = {
  render: () => ({
    components: { Radio },
    template: `
      <div style="display:flex;flex-direction:column;gap:1rem;padding:2rem;background:#e0e5ec;border-radius:1rem;">
        <Radio size="sm" label="Small"  value="s" model-value="s" />
        <Radio size="md" label="Medium" value="m" model-value="m" />
        <Radio size="lg" label="Large"  value="l" model-value="l" />
      </div>
    `,
  }),
}
