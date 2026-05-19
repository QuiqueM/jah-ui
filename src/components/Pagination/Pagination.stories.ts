import type { Meta, StoryObj } from '@storybook/vue3'
import { ref } from 'vue'
import Pagination from './Pagination.vue'

const meta: Meta<typeof Pagination> = {
  title: 'Components/Pagination',
  component: Pagination,
  tags: ['autodocs'],
  parameters: {
    backgrounds: {
      default: 'neumorphic',
      values: [{ name: 'neumorphic', value: '#e0e5ec' }],
    },
  },
  argTypes: {
    size:    { control: 'select', options: ['sm', 'md', 'lg'] },
    rounded: { control: 'select', options: ['none', 'sm', 'md', 'lg', 'full'] },
    modelValue:  { control: { type: 'number', min: 1 } },
    totalPages:  { control: { type: 'number', min: 1 } },
    siblings:    { control: { type: 'number', min: 0, max: 3 } },
  },
}

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: (args) => ({
    components: { Pagination },
    setup() {
      const page = ref(args.modelValue ?? 1)
      return { args, page }
    },
    template: `<Pagination v-bind="args" v-model="page" />`,
  }),
  args: {
    totalPages: 10,
    modelValue: 1,
  },
}

export const MidPage: Story = {
  name: 'Página intermedia',
  render: (args) => ({
    components: { Pagination },
    setup() {
      const page = ref(args.modelValue ?? 5)
      return { args, page }
    },
    template: `<Pagination v-bind="args" v-model="page" />`,
  }),
  args: {
    totalPages: 10,
    modelValue: 5,
  },
}

export const WithEdges: Story = {
  name: 'Con botones de extremos',
  render: (args) => ({
    components: { Pagination },
    setup() {
      const page = ref(args.modelValue ?? 5)
      return { args, page }
    },
    template: `<Pagination v-bind="args" v-model="page" />`,
  }),
  args: {
    totalPages: 20,
    modelValue: 5,
    showEdges: true,
  },
}

export const ManySiblings: Story = {
  name: 'Más páginas visibles',
  render: (args) => ({
    components: { Pagination },
    setup() {
      const page = ref(args.modelValue ?? 8)
      return { args, page }
    },
    template: `<Pagination v-bind="args" v-model="page" />`,
  }),
  args: {
    totalPages: 20,
    modelValue: 8,
    siblings: 2,
  },
}

export const Rounded: Story = {
  name: 'Bordes circulares',
  render: (args) => ({
    components: { Pagination },
    setup() {
      const page = ref(args.modelValue ?? 3)
      return { args, page }
    },
    template: `<Pagination v-bind="args" v-model="page" />`,
  }),
  args: {
    totalPages: 10,
    modelValue: 3,
    rounded: 'full',
  },
}

export const SmallSize: Story = {
  name: 'Tamaño Pequeño',
  render: (args) => ({
    components: { Pagination },
    setup() {
      const page = ref(args.modelValue ?? 4)
      return { args, page }
    },
    template: `<Pagination v-bind="args" v-model="page" />`,
  }),
  args: {
    totalPages: 12,
    modelValue: 4,
    size: 'sm',
  },
}

export const LargeSize: Story = {
  name: 'Tamaño Grande',
  render: (args) => ({
    components: { Pagination },
    setup() {
      const page = ref(args.modelValue ?? 4)
      return { args, page }
    },
    template: `<Pagination v-bind="args" v-model="page" />`,
  }),
  args: {
    totalPages: 12,
    modelValue: 4,
    size: 'lg',
  },
}

export const FewPages: Story = {
  name: 'Pocas páginas (sin elipsis)',
  render: (args) => ({
    components: { Pagination },
    setup() {
      const page = ref(args.modelValue ?? 2)
      return { args, page }
    },
    template: `<Pagination v-bind="args" v-model="page" />`,
  }),
  args: {
    totalPages: 5,
    modelValue: 2,
  },
}

export const Disabled: Story = {
  render: (args) => ({
    components: { Pagination },
    setup() {
      const page = ref(args.modelValue ?? 3)
      return { args, page }
    },
    template: `<Pagination v-bind="args" v-model="page" />`,
  }),
  args: {
    totalPages: 10,
    modelValue: 3,
    disabled: true,
  },
}
