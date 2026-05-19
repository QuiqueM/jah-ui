import type { Meta, StoryObj } from '@storybook/vue3'
import Accordion from './Accordion.vue'
import AccordionItem from './AccordionItem.vue'

const meta: Meta<typeof Accordion> = {
  title: 'Components/Accordion',
  component: Accordion,
  tags: ['autodocs'],
  parameters: {
    backgrounds: {
      default: 'neumorphic',
      values: [{ name: 'neumorphic', value: '#e0e5ec' }],
    },
  },
}

export default meta
type Story = StoryObj<typeof meta>

const faqItems = [
  {
    value: 'q1',
    title: '¿Qué es el diseño neumórfico?',
    content:
      'El neumorfismo es una tendencia de diseño que combina el diseño plano y el skeuomorfismo. Utiliza sombras suaves para dar la ilusión de que los elementos están extruídos o presionados desde el fondo.',
  },
  {
    value: 'q2',
    title: '¿Cómo instalo jah-ui en mi proyecto?',
    content:
      'Puedes instalar jah-ui usando pnpm, npm o yarn. Una vez instalado, importa los componentes que necesitas desde "jah-ui" y úsalos directamente en tus templates de Vue 3.',
  },
  {
    value: 'q3',
    title: '¿Los componentes son accesibles?',
    content:
      'Sí. Todos los componentes incluyen atributos ARIA apropiados, soporte de teclado y roles semánticos para garantizar la accesibilidad.',
  },
  {
    value: 'q4',
    title: '¿Puedo personalizar los colores?',
    content:
      'Los colores base del sistema neumórfico se definen como variables CSS (--neu-bg, --neu-shadow-light, --neu-shadow-dark) en cada componente, por lo que puedes sobrescribirlas fácilmente.',
  },
]

export const Default: Story = {
  render: (args) => ({
    components: { Accordion, AccordionItem },
    setup: () => ({ args, faqItems }),
    template: `
      <Accordion v-bind="args" style="max-width: 36rem;">
        <AccordionItem
          v-for="item in faqItems"
          :key="item.value"
          :value="item.value"
          :title="item.title"
        >
          {{ item.content }}
        </AccordionItem>
      </Accordion>
    `,
  }),
  args: {},
}

export const DefaultOpen: Story = {
  name: 'Con ítem abierto por defecto',
  render: (args) => ({
    components: { Accordion, AccordionItem },
    setup: () => ({ args, faqItems }),
    template: `
      <Accordion v-bind="args" style="max-width: 36rem;">
        <AccordionItem
          v-for="item in faqItems"
          :key="item.value"
          :value="item.value"
          :title="item.title"
        >
          {{ item.content }}
        </AccordionItem>
      </Accordion>
    `,
  }),
  args: { defaultOpen: 'q1' },
}

export const Multiple: Story = {
  name: 'Múltiples ítems abiertos',
  render: (args) => ({
    components: { Accordion, AccordionItem },
    setup: () => ({ args, faqItems }),
    template: `
      <Accordion v-bind="args" style="max-width: 36rem;">
        <AccordionItem
          v-for="item in faqItems"
          :key="item.value"
          :value="item.value"
          :title="item.title"
        >
          {{ item.content }}
        </AccordionItem>
      </Accordion>
    `,
  }),
  args: { multiple: true, defaultOpen: ['q1', 'q3'] },
}

export const WithDisabled: Story = {
  name: 'Con ítem deshabilitado',
  render: (args) => ({
    components: { Accordion, AccordionItem },
    setup: () => ({ args, faqItems }),
    template: `
      <Accordion v-bind="args" style="max-width: 36rem;">
        <AccordionItem value="q1" title="¿Qué es el diseño neumórfico?">
          El neumorfismo es una tendencia de diseño que combina el diseño plano y el skeuomorfismo.
        </AccordionItem>
        <AccordionItem value="q2" title="Ítem deshabilitado" disabled>
          Este contenido no se puede abrir.
        </AccordionItem>
        <AccordionItem value="q3" title="¿Los componentes son accesibles?">
          Sí. Todos los componentes incluyen atributos ARIA apropiados.
        </AccordionItem>
      </Accordion>
    `,
  }),
  args: {},
}

export const CustomTitle: Story = {
  name: 'Con título personalizado',
  render: (args) => ({
    components: { Accordion, AccordionItem },
    setup: () => ({ args }),
    template: `
      <Accordion v-bind="args" style="max-width: 36rem;">
        <AccordionItem value="info">
          <template #title>
            <span style="display:inline-flex;align-items:center;gap:0.5rem;">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#3b82f6" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/>
              </svg>
              Información importante
            </span>
          </template>
          Este ítem usa el slot <code>#title</code> para personalizar el encabezado con un ícono y estilos propios.
        </AccordionItem>
        <AccordionItem value="warning">
          <template #title>
            <span style="display:inline-flex;align-items:center;gap:0.5rem;">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#f59e0b" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"/><line x1="12" y1="9" x2="12" y2="13"/><line x1="12" y1="17" x2="12.01" y2="17"/>
              </svg>
              Advertencia
            </span>
          </template>
          Ten cuidado con esta configuración, puede afectar el comportamiento de la aplicación.
        </AccordionItem>
      </Accordion>
    `,
  }),
  args: {},
}
