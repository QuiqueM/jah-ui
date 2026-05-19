import type { Meta, StoryObj } from '@storybook/vue3'
import { ref } from 'vue'
import Upload from './Upload.vue'
import type { UploadFile } from './Upload.vue'

const meta: Meta<typeof Upload> = {
  title: 'Components/Upload',
  component: Upload,
  tags: ['autodocs'],
  parameters: {
    backgrounds: {
      default: 'neumorphic',
      values: [{ name: 'neumorphic', value: '#e0e5ec' }],
    },
  },
  argTypes: {
    accept:    { control: 'text' },
    maxSize:   { control: 'number' },
    maxFiles:  { control: 'number' },
    multiple:  { control: 'boolean' },
    disabled:  { control: 'boolean' },
    label:     { control: 'text' },
    hint:      { control: 'text' },
    error:     { control: 'text' },
  },
}

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  name: 'Por defecto',
  render: (args) => ({
    components: { Upload },
    setup() {
      const files = ref<UploadFile[]>([])
      return { args, files }
    },
    template: `
      <div style="width:100%;max-width:32rem;">
        <Upload v-bind="args" v-model="files" />
        <p style="margin-top:1rem;font-family:inherit;font-size:0.8125rem;color:#9ca3af;">
          Archivos: {{ files.length }}
        </p>
      </div>
    `,
  }),
  args: {},
}

export const Multiple: Story = {
  name: 'Múltiples archivos',
  render: (args) => ({
    components: { Upload },
    setup() {
      const files = ref<UploadFile[]>([])
      return { args, files }
    },
    template: `
      <div style="width:100%;max-width:32rem;">
        <Upload v-bind="args" v-model="files" multiple :max-files="5"
          label="Arrastra hasta 5 archivos" />
      </div>
    `,
  }),
  args: { multiple: true, maxFiles: 5 },
}

export const ImageOnly: Story = {
  name: 'Solo imágenes',
  render: (args) => ({
    components: { Upload },
    setup() {
      const files = ref<UploadFile[]>([])
      return { args, files }
    },
    template: `
      <div style="width:100%;max-width:32rem;">
        <Upload v-bind="args" v-model="files" accept="image/*" multiple
          label="Arrastra imágenes aquí" />
      </div>
    `,
  }),
  args: { accept: 'image/*', multiple: true },
}

export const WithSizeLimit: Story = {
  name: 'Con límite de tamaño',
  render: (args) => ({
    components: { Upload },
    setup() {
      const files = ref<UploadFile[]>([])
      const rejected = ref<{ file: File; reason: string }[]>([])
      return { args, files, rejected }
    },
    template: `
      <div style="width:100%;max-width:32rem;">
        <Upload v-bind="args" v-model="files" multiple :max-size="2097152"
          accept=".pdf,.doc,.docx" @reject="rejected = $event" />
        <div v-if="rejected.length" style="margin-top:0.75rem;font-family:inherit;font-size:0.8125rem;color:#ef4444;">
          Rechazados: {{ rejected.map(r => r.file.name).join(', ') }}
        </div>
      </div>
    `,
  }),
  args: { multiple: true, maxSize: 2_097_152, accept: '.pdf,.doc,.docx' },
}

export const WithError: Story = {
  name: 'Con error',
  render: (args) => ({
    components: { Upload },
    setup() {
      const files = ref<UploadFile[]>([])
      return { args, files }
    },
    template: `
      <div style="width:100%;max-width:32rem;">
        <Upload v-bind="args" v-model="files" error="Debes adjuntar al menos un archivo" />
      </div>
    `,
  }),
  args: { error: 'Debes adjuntar al menos un archivo' },
}

export const WithHint: Story = {
  name: 'Con descripción',
  render: (args) => ({
    components: { Upload },
    setup() {
      const files = ref<UploadFile[]>([])
      return { args, files }
    },
    template: `
      <div style="width:100%;max-width:32rem;">
        <Upload v-bind="args" v-model="files"
          hint="Solo archivos PDF, máx. 10 MB" accept=".pdf" :max-size="10485760" />
      </div>
    `,
  }),
  args: { hint: 'Solo archivos PDF, máx. 10 MB', accept: '.pdf', maxSize: 10_485_760 },
}

export const Disabled: Story = {
  name: 'Deshabilitado',
  render: (args) => ({
    components: { Upload },
    setup() {
      const files = ref<UploadFile[]>([])
      return { args, files }
    },
    template: `
      <div style="width:100%;max-width:32rem;">
        <Upload v-bind="args" v-model="files" disabled />
      </div>
    `,
  }),
  args: { disabled: true },
}

export const WithPreloadedFiles: Story = {
  name: 'Con archivos precargados',
  render: () => ({
    components: { Upload },
    setup() {
      const files = ref<UploadFile[]>([
        { id: 'pre-1', file: new File([''], 'informe-2024.pdf', { type: 'application/pdf' }) },
        { id: 'pre-2', file: new File([''], 'foto-perfil.png',  { type: 'image/png' }) },
        { id: 'pre-3', file: new File(new Array(512_000).fill('x'), 'video-clip.mp4', { type: 'video/mp4' }) },
      ])
      return { files }
    },
    template: `
      <div style="width:100%;max-width:32rem;">
        <Upload v-model="files" multiple />
      </div>
    `,
  }),
}
