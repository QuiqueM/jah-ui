import type { Meta, StoryObj } from '@storybook/vue3'
import Carousel from './Carousel.vue'
import CarouselSlide from './CarouselSlide.vue'

const meta: Meta<typeof Carousel> = {
  title: 'Components/Carousel',
  component: Carousel,
  tags: ['autodocs'],
  parameters: {
    backgrounds: {
      default: 'neumorphic',
      values: [{ name: 'neumorphic', value: '#e0e5ec' }],
    },
  },
  argTypes: {
    transition: { control: 'select', options: ['slide', 'fade'] },
    interval:   { control: { type: 'number', min: 500, max: 10000, step: 500 } },
  },
}

export default meta
type Story = StoryObj<typeof meta>

const slideColors = ['#d9e8fb', '#d1f5e0', '#fef3c7', '#fde8e8', '#ede9fe']
const slideLabels = ['Diapositiva 1', 'Diapositiva 2', 'Diapositiva 3', 'Diapositiva 4', 'Diapositiva 5']

const slideStyle = (color: string) => `
  display:flex; align-items:center; justify-content:center;
  height:16rem; background:${color};
  font-family:inherit; font-size:1.25rem; font-weight:600; color:#374151;
`

export const Default: Story = {
  render: (args) => ({
    components: { Carousel, CarouselSlide },
    setup: () => ({ args, slideColors, slideLabels, slideStyle }),
    template: `
      <Carousel v-bind="args" style="width:100%; max-width:36rem;">
        <CarouselSlide v-for="(color, i) in slideColors" :key="i">
          <div :style="slideStyle(color)">{{ slideLabels[i] }}</div>
        </CarouselSlide>
      </Carousel>
    `,
  }),
  args: { transition: 'slide', loop: true },
}

export const FadeTransition: Story = {
  name: 'Transición Fade',
  render: (args) => ({
    components: { Carousel, CarouselSlide },
    setup: () => ({ args, slideColors, slideLabels, slideStyle }),
    template: `
      <Carousel v-bind="args" style="width:100%; max-width:36rem;">
        <CarouselSlide v-for="(color, i) in slideColors" :key="i">
          <div :style="slideStyle(color)">{{ slideLabels[i] }}</div>
        </CarouselSlide>
      </Carousel>
    `,
  }),
  args: { transition: 'fade', loop: true },
}

export const Autoplay: Story = {
  name: 'Con Autoplay',
  render: (args) => ({
    components: { Carousel, CarouselSlide },
    setup: () => ({ args, slideColors, slideLabels, slideStyle }),
    template: `
      <div>
        <p style="font-family:inherit;font-size:0.875rem;color:#6b7280;margin-bottom:1rem;">
          Se pausa al pasar el cursor.
        </p>
        <Carousel v-bind="args" style="width:100%; max-width:36rem;">
          <CarouselSlide v-for="(color, i) in slideColors" :key="i">
            <div :style="slideStyle(color)">{{ slideLabels[i] }}</div>
          </CarouselSlide>
        </Carousel>
      </div>
    `,
  }),
  args: { autoplay: true, interval: 2500, loop: true },
}

export const NoLoop: Story = {
  name: 'Sin Loop',
  render: (args) => ({
    components: { Carousel, CarouselSlide },
    setup: () => ({ args, slideColors, slideLabels, slideStyle }),
    template: `
      <Carousel v-bind="args" style="width:100%; max-width:36rem;">
        <CarouselSlide v-for="(color, i) in slideColors" :key="i">
          <div :style="slideStyle(color)">{{ slideLabels[i] }}</div>
        </CarouselSlide>
      </Carousel>
    `,
  }),
  args: { loop: false },
}

export const NoDots: Story = {
  name: 'Sin Puntos',
  render: (args) => ({
    components: { Carousel, CarouselSlide },
    setup: () => ({ args, slideColors, slideLabels, slideStyle }),
    template: `
      <Carousel v-bind="args" style="width:100%; max-width:36rem;">
        <CarouselSlide v-for="(color, i) in slideColors" :key="i">
          <div :style="slideStyle(color)">{{ slideLabels[i] }}</div>
        </CarouselSlide>
      </Carousel>
    `,
  }),
  args: { showDots: false },
}

export const NoArrows: Story = {
  name: 'Sin Flechas',
  render: (args) => ({
    components: { Carousel, CarouselSlide },
    setup: () => ({ args, slideColors, slideLabels, slideStyle }),
    template: `
      <Carousel v-bind="args" style="width:100%; max-width:36rem;">
        <CarouselSlide v-for="(color, i) in slideColors" :key="i">
          <div :style="slideStyle(color)">{{ slideLabels[i] }}</div>
        </CarouselSlide>
      </Carousel>
    `,
  }),
  args: { showArrows: false },
}

export const WithContent: Story = {
  name: 'Con Contenido Real',
  render: (args) => ({
    components: { Carousel, CarouselSlide },
    setup: () => ({ args }),
    template: `
      <Carousel v-bind="args" style="width:100%; max-width:36rem;">
        <CarouselSlide>
          <div style="display:flex;flex-direction:column;align-items:center;justify-content:center;gap:0.75rem;height:18rem;padding:2rem;text-align:center;font-family:inherit;">
            <div style="font-size:2.5rem;">🚀</div>
            <p style="font-size:1.125rem;font-weight:700;color:#1e293b;margin:0;">Bienvenido</p>
            <p style="font-size:0.9375rem;color:#6b7280;margin:0;">Descubre todo lo que puedes hacer con jah-ui.</p>
          </div>
        </CarouselSlide>
        <CarouselSlide>
          <div style="display:flex;flex-direction:column;align-items:center;justify-content:center;gap:0.75rem;height:18rem;padding:2rem;text-align:center;font-family:inherit;">
            <div style="font-size:2.5rem;">🎨</div>
            <p style="font-size:1.125rem;font-weight:700;color:#1e293b;margin:0;">Diseño Neumórfico</p>
            <p style="font-size:0.9375rem;color:#6b7280;margin:0;">Componentes con un estilo suave y moderno.</p>
          </div>
        </CarouselSlide>
        <CarouselSlide>
          <div style="display:flex;flex-direction:column;align-items:center;justify-content:center;gap:0.75rem;height:18rem;padding:2rem;text-align:center;font-family:inherit;">
            <div style="font-size:2.5rem;">⚡</div>
            <p style="font-size:1.125rem;font-weight:700;color:#1e293b;margin:0;">Vue 3 + TypeScript</p>
            <p style="font-size:0.9375rem;color:#6b7280;margin:0;">Tipado completo para una mejor experiencia de desarrollo.</p>
          </div>
        </CarouselSlide>
      </Carousel>
    `,
  }),
  args: { loop: true },
}
