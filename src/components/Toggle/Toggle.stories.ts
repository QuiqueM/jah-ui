import type { Meta, StoryObj } from '@storybook/vue3'
import { ref } from 'vue'
import Toggle from './Toggle.vue'

const meta: Meta<typeof Toggle> = {
  title: 'Components/Toggle',
  component: Toggle,
  tags: ['autodocs'],
  parameters: {
    backgrounds: {
      default: 'neumorphic',
      values: [{ name: 'neumorphic', value: '#e0e5ec' }],
    },
  },
  argTypes: {
    size: { control: 'select', options: ['sm', 'md', 'lg'] },
    labelPosition: { control: 'select', options: ['left', 'right'] },
  },
}

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: { label: 'Activar notificaciones' },
}

export const On: Story = {
  args: { label: 'Modo oscuro', modelValue: true },
}

export const LabelLeft: Story = {
  name: 'Label izquierda',
  args: { label: 'Sincronización automática', modelValue: true, labelPosition: 'left' },
}

export const WithHint: Story = {
  name: 'Con Hint',
  args: {
    label: 'Correos de marketing',
    hint: 'Recibirás ofertas y novedades semanales.',
    modelValue: false,
  },
}

export const WithError: Story = {
  name: 'Estado Error',
  args: {
    label: 'Términos y condiciones',
    hint: 'Debes aceptar los términos para continuar.',
    error: true,
    modelValue: false,
  },
}

export const Disabled: Story = {
  args: { label: 'Opción no disponible', disabled: true, modelValue: false },
}

export const DisabledOn: Story = {
  name: 'Disabled + On',
  args: { label: 'Opción fija', disabled: true, modelValue: true },
}

export const Sizes: Story = {
  render: () => ({
    components: { Toggle },
    template: `
      <div style="display:flex;flex-direction:column;gap:1.25rem;padding:2rem;background:#e0e5ec;border-radius:1rem;">
        <Toggle size="sm" label="Small"  :model-value="true" />
        <Toggle size="md" label="Medium" :model-value="true" />
        <Toggle size="lg" label="Large"  :model-value="true" />
      </div>
    `,
  }),
}

export const Reactive: Story = {
  name: 'Reactivo (v-model)',
  render: () => ({
    components: { Toggle },
    setup() {
      const darkMode    = ref(false)
      const notifs      = ref(true)
      const autoSave    = ref(false)
      return { darkMode, notifs, autoSave }
    },
    template: `
      <div style="display:flex;flex-direction:column;gap:1rem;padding:2rem;background:#e0e5ec;border-radius:1rem;min-width:300px;">
        <p style="font-size:0.875rem;font-weight:600;color:#374151;margin:0">Preferencias</p>
        <Toggle v-model="darkMode" label="Modo oscuro"            hint="Cambia el tema de la interfaz." />
        <Toggle v-model="notifs"   label="Notificaciones"         hint="Alertas en tiempo real." />
        <Toggle v-model="autoSave" label="Guardado automático"    hint="Guarda cada 5 minutos." />
      </div>
    `,
  }),
}
