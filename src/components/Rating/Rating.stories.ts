import type { Meta, StoryObj } from '@storybook/vue3'
import { ref } from 'vue'
import Rating from './Rating.vue'

const meta: Meta<typeof Rating> = {
  title: 'Components/Rating',
  component: Rating,
  tags: ['autodocs'],
  parameters: {
    backgrounds: {
      default: 'neumorphic',
      values: [{ name: 'neumorphic', value: '#e0e5ec' }],
    },
    layout: 'centered',
  },
  argTypes: {
    size:  { control: 'select', options: ['sm', 'md', 'lg'] },
    color: { control: 'color' },
    max:   { control: { type: 'number', min: 1, max: 10 } },
  },
}

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: (args) => ({
    components: { Rating },
    setup() {
      const value = ref(args.modelValue ?? 0)
      return { args, value }
    },
    template: `<Rating v-bind="args" v-model="value" />`,
  }),
  args: { modelValue: 3 },
}

export const AllSizes: Story = {
  name: 'Todos los tamaños',
  render: () => ({
    components: { Rating },
    setup() {
      return { sm: ref(3), md: ref(4), lg: ref(5) }
    },
    template: `
      <div style="display:flex;flex-direction:column;align-items:center;gap:1.25rem;">
        <Rating v-model="sm" size="sm" />
        <Rating v-model="md" size="md" />
        <Rating v-model="lg" size="lg" />
      </div>
    `,
  }),
}

export const AllowHalf: Story = {
  name: 'Media estrella',
  render: (args) => ({
    components: { Rating },
    setup() {
      const value = ref(2.5)
      return { args, value }
    },
    template: `
      <div style="display:flex;flex-direction:column;align-items:center;gap:0.75rem;">
        <Rating v-bind="args" v-model="value" allow-half />
        <span style="font-family:inherit;font-size:0.875rem;color:#6b7280;">Valor: {{ value }}</span>
      </div>
    `,
  }),
  args: { modelValue: 2.5 },
}

export const Clearable: Story = {
  name: 'Borrable (clic para quitar)',
  render: (args) => ({
    components: { Rating },
    setup() {
      const value = ref(3)
      return { args, value }
    },
    template: `
      <div style="display:flex;flex-direction:column;align-items:center;gap:0.75rem;">
        <Rating v-bind="args" v-model="value" clearable />
        <span style="font-family:inherit;font-size:0.875rem;color:#6b7280;">Valor: {{ value }}</span>
      </div>
    `,
  }),
  args: { modelValue: 3 },
}

export const Readonly: Story = {
  name: 'Solo lectura',
  render: () => ({
    components: { Rating },
    template: `
      <div style="display:flex;flex-direction:column;align-items:center;gap:1rem;">
        <Rating :model-value="4.5" allow-half readonly label="Calificación del producto" />
        <span style="font-family:inherit;font-size:0.875rem;color:#6b7280;">4.5 / 5 estrellas</span>
      </div>
    `,
  }),
}

export const CustomColor: Story = {
  name: 'Color personalizado',
  render: () => ({
    components: { Rating },
    setup() {
      return { a: ref(4), b: ref(3), c: ref(5) }
    },
    template: `
      <div style="display:flex;flex-direction:column;align-items:center;gap:1rem;">
        <Rating v-model="a" color="#ef4444" />
        <Rating v-model="b" color="#8b5cf6" />
        <Rating v-model="c" color="#10b981" />
      </div>
    `,
  }),
}

export const CustomMax: Story = {
  name: 'Máximo personalizado',
  render: (args) => ({
    components: { Rating },
    setup() {
      const value = ref(6)
      return { args, value }
    },
    template: `
      <div style="display:flex;flex-direction:column;align-items:center;gap:0.75rem;">
        <Rating v-bind="args" v-model="value" :max="10" />
        <span style="font-family:inherit;font-size:0.875rem;color:#6b7280;">{{ value }} / 10</span>
      </div>
    `,
  }),
  args: { modelValue: 6, max: 10 },
}

export const Disabled: Story = {
  name: 'Deshabilitado',
  render: (args) => ({
    components: { Rating },
    setup() {
      const value = ref(3)
      return { args, value }
    },
    template: `<Rating v-bind="args" v-model="value" disabled />`,
  }),
  args: { modelValue: 3 },
}

export const ProductCard: Story = {
  name: 'Ejemplo en tarjeta',
  render: () => ({
    components: { Rating },
    setup() {
      const myRating = ref(0)
      return { myRating }
    },
    template: `
      <div style="
        max-width:18rem; padding:1.5rem; border-radius:1.25rem; background:#e0e5ec;
        box-shadow: 8px 8px 20px #b8bec7, -8px -8px 20px #ffffff;
        font-family:inherit;
      ">
        <p style="font-size:1rem;font-weight:700;color:#1e293b;margin:0 0 0.25rem;">Audífonos Pro X</p>
        <div style="display:flex;align-items:center;gap:0.5rem;margin-bottom:1rem;">
          <Rating :model-value="4.5" allow-half readonly size="sm" />
          <span style="font-size:0.8125rem;color:#6b7280;">4.5 (128 reseñas)</span>
        </div>
        <p style="font-size:0.875rem;color:#6b7280;margin:0 0 1.25rem;line-height:1.6;">
          Sonido cristalino con cancelación de ruido activa. Batería de 30 horas.
        </p>
        <p style="font-size:0.8125rem;font-weight:600;color:#374151;margin:0 0 0.5rem;">Tu calificación:</p>
        <Rating v-model="myRating" clearable />
      </div>
    `,
  }),
}
