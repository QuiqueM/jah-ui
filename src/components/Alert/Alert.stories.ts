import type { Meta, StoryObj } from '@storybook/vue3'
import { ref } from 'vue'
import Alert from './Alert.vue'

const meta: Meta<typeof Alert> = {
  title: 'Components/Alert',
  component: Alert,
  tags: ['autodocs'],
  parameters: {
    backgrounds: {
      default: 'neumorphic',
      values: [{ name: 'neumorphic', value: '#e0e5ec' }],
    },
  },
  argTypes: {
    variant: { control: 'select', options: ['info', 'success', 'warning', 'danger'] },
  },
}

export default meta
type Story = StoryObj<typeof meta>

export const Info: Story = {
  args: {
    variant: 'info',
    title: 'Información',
    modelValue: true,
  },
  render: (args) => ({
    components: { Alert },
    setup: () => ({ args }),
    template: `
      <Alert v-bind="args" style="max-width: 30rem;">
        Tu sesión expirará en 10 minutos. Guarda tus cambios para no perder el progreso.
      </Alert>
    `,
  }),
}

export const Success: Story = {
  args: {
    variant: 'success',
    title: '¡Operación exitosa!',
    modelValue: true,
  },
  render: (args) => ({
    components: { Alert },
    setup: () => ({ args }),
    template: `
      <Alert v-bind="args" style="max-width: 30rem;">
        El registro se ha guardado correctamente en la base de datos.
      </Alert>
    `,
  }),
}

export const Warning: Story = {
  args: {
    variant: 'warning',
    title: 'Advertencia',
    modelValue: true,
  },
  render: (args) => ({
    components: { Alert },
    setup: () => ({ args }),
    template: `
      <Alert v-bind="args" style="max-width: 30rem;">
        Esta acción modificará configuraciones globales del sistema.
      </Alert>
    `,
  }),
}

export const Danger: Story = {
  args: {
    variant: 'danger',
    title: 'Error al procesar',
    modelValue: true,
  },
  render: (args) => ({
    components: { Alert },
    setup: () => ({ args }),
    template: `
      <Alert v-bind="args" style="max-width: 30rem;">
        No se pudo completar la operación. Verifica tu conexión e intenta de nuevo.
      </Alert>
    `,
  }),
}

export const Dismissible: Story = {
  name: 'Descartable',
  render: () => ({
    components: { Alert },
    setup() {
      const visible = ref(true)
      return { visible }
    },
    template: `
      <div style="max-width: 30rem; display: flex; flex-direction: column; gap: 0.75rem;">
        <button
          v-if="!visible"
          @click="visible = true"
          style="align-self:flex-start;padding:0.5rem 1rem;border:none;border-radius:0.5rem;
            background:#e0e5ec;font-family:inherit;font-weight:500;cursor:pointer;
            box-shadow:4px 4px 8px #b8bec7,-4px -4px 8px #fff;"
        >
          Mostrar alerta
        </button>
        <Alert
          v-model="visible"
          variant="info"
          title="Alerta descartable"
          dismissible
        >
          Haz clic en la X para cerrar esta alerta.
        </Alert>
      </div>
    `,
  }),
}

export const NoIcon: Story = {
  name: 'Sin ícono',
  args: {
    variant: 'success',
    title: 'Sin ícono',
    icon: false,
    modelValue: true,
  },
  render: (args) => ({
    components: { Alert },
    setup: () => ({ args }),
    template: `
      <Alert v-bind="args" style="max-width: 30rem;">
        Esta alerta no muestra el ícono de variante.
      </Alert>
    `,
  }),
}

export const TitleOnly: Story = {
  name: 'Solo título',
  args: {
    variant: 'warning',
    title: 'Solo título sin cuerpo',
    modelValue: true,
  },
  render: (args) => ({
    components: { Alert },
    setup: () => ({ args }),
    template: `<Alert v-bind="args" style="max-width: 30rem;" />`,
  }),
}

export const AllVariants: Story = {
  name: 'Todas las variantes',
  render: () => ({
    components: { Alert },
    template: `
      <div style="display:flex;flex-direction:column;gap:0.75rem;max-width:30rem;">
        <Alert variant="info"    title="Info"    :model-value="true">Mensaje informativo para el usuario.</Alert>
        <Alert variant="success" title="Éxito"   :model-value="true">La operación se completó correctamente.</Alert>
        <Alert variant="warning" title="Atención" :model-value="true">Revisa los datos antes de continuar.</Alert>
        <Alert variant="danger"  title="Error"   :model-value="true">Ocurrió un problema al procesar la solicitud.</Alert>
      </div>
    `,
  }),
}

export const AllDismissible: Story = {
  name: 'Todas descartables',
  render: () => ({
    components: { Alert },
    setup() {
      return {
        v: ref({ info: true, success: true, warning: true, danger: true }),
      }
    },
    template: `
      <div style="display:flex;flex-direction:column;gap:0.75rem;max-width:30rem;">
        <Alert variant="info"    title="Info"    v-model="v.info"    dismissible>Mensaje informativo.</Alert>
        <Alert variant="success" title="Éxito"   v-model="v.success" dismissible>Operación exitosa.</Alert>
        <Alert variant="warning" title="Atención" v-model="v.warning" dismissible>Revisa los datos.</Alert>
        <Alert variant="danger"  title="Error"   v-model="v.danger"  dismissible>Ocurrió un problema.</Alert>
      </div>
    `,
  }),
}
