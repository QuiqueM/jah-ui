import type { Meta, StoryObj } from '@storybook/vue3'
import { ref } from 'vue'
import Stepper from './Stepper.vue'

const meta: Meta<typeof Stepper> = {
  title: 'Components/Stepper',
  component: Stepper,
  tags: ['autodocs'],
  parameters: {
    backgrounds: {
      default: 'neumorphic',
      values: [{ name: 'neumorphic', value: '#e0e5ec' }],
    },
  },
  argTypes: {
    orientation: { control: 'select', options: ['horizontal', 'vertical'] },
    size:        { control: 'select', options: ['sm', 'md', 'lg'] },
    color:       { control: 'color' },
    modelValue:  { control: { type: 'number', min: 0 } },
  },
}

export default meta
type Story = StoryObj<typeof meta>

const basicSteps = [
  { label: 'Cuenta',       description: 'Datos personales' },
  { label: 'Dirección',    description: 'Dirección de envío' },
  { label: 'Pago',         description: 'Método de pago' },
  { label: 'Confirmación', description: 'Revisa tu pedido' },
]

export const Default: Story = {
  render: (args) => ({
    components: { Stepper },
    setup() {
      const step = ref(args.modelValue ?? 1)
      return { args, step, basicSteps }
    },
    template: `
      <div style="width:100%;max-width:40rem;">
        <Stepper v-bind="args" v-model="step" :steps="basicSteps" />
        <div style="display:flex;gap:0.75rem;margin-top:2rem;">
          <button
            @click="step = Math.max(0, step - 1)"
            style="padding:0 1.25rem;height:2.75rem;border:none;border-radius:0.75rem;
              background:#e0e5ec;font-family:inherit;font-size:0.9375rem;font-weight:500;
              color:#374151;cursor:pointer;box-shadow:6px 6px 12px #b8bec7,-6px -6px 12px #fff;"
          >Anterior</button>
          <button
            @click="step = Math.min(basicSteps.length - 1, step + 1)"
            style="padding:0 1.25rem;height:2.75rem;border:none;border-radius:0.75rem;
              background:#e0e5ec;font-family:inherit;font-size:0.9375rem;font-weight:500;
              color:#3b82f6;cursor:pointer;box-shadow:6px 6px 12px #b8bec7,-6px -6px 12px #fff;"
          >Siguiente</button>
        </div>
      </div>
    `,
  }),
  args: { modelValue: 1 },
}

export const Vertical: Story = {
  name: 'Orientación Vertical',
  render: (args) => ({
    components: { Stepper },
    setup() {
      const step = ref(1)
      return { args, step, basicSteps }
    },
    template: `
      <div style="display:flex;gap:3rem;align-items:flex-start;">
        <Stepper v-bind="args" v-model="step" :steps="basicSteps" orientation="vertical" />
        <div style="display:flex;flex-direction:column;gap:0.75rem;margin-top:0.5rem;">
          <button
            @click="step = Math.max(0, step - 1)"
            style="padding:0 1rem;height:2.5rem;border:none;border-radius:0.75rem;
              background:#e0e5ec;font-family:inherit;font-size:0.875rem;font-weight:500;
              color:#374151;cursor:pointer;box-shadow:5px 5px 10px #b8bec7,-5px -5px 10px #fff;"
          >Anterior</button>
          <button
            @click="step = Math.min(basicSteps.length - 1, step + 1)"
            style="padding:0 1rem;height:2.5rem;border:none;border-radius:0.75rem;
              background:#e0e5ec;font-family:inherit;font-size:0.875rem;font-weight:500;
              color:#3b82f6;cursor:pointer;box-shadow:5px 5px 10px #b8bec7,-5px -5px 10px #fff;"
          >Siguiente</button>
        </div>
      </div>
    `,
  }),
  args: { modelValue: 1 },
}

export const Clickable: Story = {
  name: 'Navegable al hacer clic',
  render: (args) => ({
    components: { Stepper },
    setup() {
      const step = ref(0)
      return { args, step, basicSteps }
    },
    template: `
      <div style="width:100%;max-width:40rem;">
        <Stepper v-bind="args" v-model="step" :steps="basicSteps" clickable />
        <p style="font-family:inherit;font-size:0.875rem;color:#6b7280;margin-top:1.25rem;">
          Paso activo: <strong>{{ basicSteps[step].label }}</strong>
        </p>
      </div>
    `,
  }),
  args: { modelValue: 0, clickable: true },
}

export const WithError: Story = {
  name: 'Con paso en error',
  render: (args) => ({
    components: { Stepper },
    setup() {
      const step = ref(2)
      const steps = [
        { label: 'Cuenta',    description: 'Completado' },
        { label: 'Dirección', description: 'Dirección inválida', error: true },
        { label: 'Pago',      description: 'Método de pago' },
      ]
      return { args, step, steps }
    },
    template: `
      <div style="width:100%;max-width:36rem;">
        <Stepper v-bind="args" v-model="step" :steps="steps" />
      </div>
    `,
  }),
  args: { modelValue: 2 },
}

export const WithDisabled: Story = {
  name: 'Con paso deshabilitado',
  render: (args) => ({
    components: { Stepper },
    setup() {
      const step = ref(0)
      const steps = [
        { label: 'Información' },
        { label: 'Plan',       description: 'Elige tu plan' },
        { label: 'Pago',       description: 'Requiere plan', disabled: true },
        { label: 'Listo' },
      ]
      return { args, step, steps }
    },
    template: `
      <div style="width:100%;max-width:40rem;">
        <Stepper v-bind="args" v-model="step" :steps="steps" clickable />
      </div>
    `,
  }),
  args: { modelValue: 0, clickable: true },
}

export const AllSizes: Story = {
  name: 'Todos los tamaños',
  render: () => ({
    components: { Stepper },
    setup() {
      const steps = [
        { label: 'Paso 1' },
        { label: 'Paso 2' },
        { label: 'Paso 3' },
      ]
      return { steps }
    },
    template: `
      <div style="display:flex;flex-direction:column;gap:2rem;width:100%;max-width:32rem;">
        <Stepper :steps="steps" :model-value="1" size="sm" />
        <Stepper :steps="steps" :model-value="1" size="md" />
        <Stepper :steps="steps" :model-value="1" size="lg" />
      </div>
    `,
  }),
}

export const CustomColor: Story = {
  name: 'Color personalizado',
  render: (args) => ({
    components: { Stepper },
    setup() {
      const step = ref(1)
      return { args, step, basicSteps }
    },
    template: `
      <div style="width:100%;max-width:40rem;">
        <Stepper v-bind="args" v-model="step" :steps="basicSteps" />
      </div>
    `,
  }),
  args: { modelValue: 1, color: '#8b5cf6' },
}

export const Completed: Story = {
  name: 'Todos completados',
  render: (args) => ({
    components: { Stepper },
    setup() {
      return { args, basicSteps }
    },
    template: `
      <div style="width:100%;max-width:40rem;">
        <Stepper v-bind="args" :steps="basicSteps" :model-value="4" />
      </div>
    `,
  }),
  args: { color: '#10b981' },
}
