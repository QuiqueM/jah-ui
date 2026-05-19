import type { Meta, StoryObj } from '@storybook/vue3'
import { ref } from 'vue'
import Knob from './Knob.vue'

const meta: Meta<typeof Knob> = {
  title: 'Components/Knob',
  component: Knob,
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
    min:   { control: { type: 'number' } },
    max:   { control: { type: 'number' } },
    step:  { control: { type: 'number' } },
  },
}

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: (args) => ({
    components: { Knob },
    setup() {
      const value = ref(args.modelValue ?? 50)
      return { args, value }
    },
    template: `<Knob v-bind="args" v-model="value" />`,
  }),
  args: { label: 'Volumen', suffix: '%', min: 0, max: 100, step: 1, modelValue: 50 },
}

export const SmallSize: Story = {
  name: 'Tamaño Pequeño',
  render: (args) => ({
    components: { Knob },
    setup() { return { args, v: ref(30) } },
    template: `<Knob v-bind="args" v-model="v" />`,
  }),
  args: { size: 'sm', label: 'Gain', suffix: 'dB', min: 0, max: 24, step: 0.5, modelValue: 12 },
}

export const LargeSize: Story = {
  name: 'Tamaño Grande',
  render: (args) => ({
    components: { Knob },
    setup() { return { args, v: ref(75) } },
    template: `<Knob v-bind="args" v-model="v" />`,
  }),
  args: { size: 'lg', label: 'Frecuencia', suffix: 'Hz', min: 20, max: 200, step: 5, modelValue: 75 },
}

export const CustomColor: Story = {
  name: 'Color Personalizado',
  render: () => ({
    components: { Knob },
    setup() {
      return { vol: ref(60), bass: ref(40), treb: ref(70) }
    },
    template: `
      <div style="display:flex; gap:2.5rem; align-items:flex-end;">
        <Knob v-model="vol"  label="Volumen"  suffix="%" color="#3b82f6" />
        <Knob v-model="bass" label="Graves"   suffix="%" color="#8b5cf6" />
        <Knob v-model="treb" label="Agudos"   suffix="%" color="#10b981" />
      </div>
    `,
  }),
}

export const StepDecimal: Story = {
  name: 'Paso Decimal',
  render: (args) => ({
    components: { Knob },
    setup() { return { args, v: ref(1.5) } },
    template: `<Knob v-bind="args" v-model="v" />`,
  }),
  args: { label: 'Velocidad', suffix: 'x', min: 0.5, max: 3, step: 0.1, modelValue: 1.5, color: '#f59e0b' },
}

export const FullRange: Story = {
  name: 'Rango Completo',
  render: (args) => ({
    components: { Knob },
    setup() { return { args, v: ref(0) } },
    template: `<Knob v-bind="args" v-model="v" />`,
  }),
  args: { label: 'Panorama', suffix: '°', min: -180, max: 180, step: 1, modelValue: 0, color: '#ef4444' },
}

export const Disabled: Story = {
  name: 'Deshabilitado',
  render: (args) => ({
    components: { Knob },
    setup() { return { args, v: ref(65) } },
    template: `<Knob v-bind="args" v-model="v" />`,
  }),
  args: { label: 'Bloqueado', suffix: '%', modelValue: 65, disabled: true },
}

export const MixerPanel: Story = {
  name: 'Panel de Mezcla',
  render: () => ({
    components: { Knob },
    setup() {
      return {
        channels: ref([
          { label: 'Ch 1', value: 75, color: '#3b82f6' },
          { label: 'Ch 2', value: 50, color: '#3b82f6' },
          { label: 'Ch 3', value: 30, color: '#3b82f6' },
          { label: 'Ch 4', value: 85, color: '#3b82f6' },
        ]),
        reverb:  ref(20),
        delay:   ref(35),
        master:  ref(80),
      }
    },
    template: `
      <div style="display:flex; gap:1.5rem; align-items:flex-end; flex-wrap:wrap;">
        <Knob
          v-for="ch in channels"
          :key="ch.label"
          v-model="ch.value"
          :label="ch.label"
          suffix="%"
          size="sm"
          :color="ch.color"
        />
        <div style="width:1px; background:#c8cdd6; height:4rem; align-self:center;" />
        <Knob v-model="reverb" label="Reverb" suffix="%" size="sm" color="#8b5cf6" />
        <Knob v-model="delay"  label="Delay"  suffix="%" size="sm" color="#8b5cf6" />
        <div style="width:1px; background:#c8cdd6; height:4rem; align-self:center;" />
        <Knob v-model="master" label="Master" suffix="%" size="lg" color="#10b981" />
      </div>
    `,
  }),
}
