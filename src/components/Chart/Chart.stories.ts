import type { Meta, StoryObj } from '@storybook/vue3'
import Chart from './Chart.vue'

const meta: Meta<typeof Chart> = {
  title: 'Components/Chart',
  component: Chart,
  tags: ['autodocs'],
  parameters: {
    backgrounds: {
      default: 'neumorphic',
      values: [{ name: 'neumorphic', value: '#e0e5ec' }],
    },
  },
  argTypes: {
    type:   { control: 'select', options: ['line', 'bar', 'pie', 'doughnut', 'radar', 'polarArea', 'bubble', 'scatter'] },
    height: { control: 'text' },
    title:  { control: 'text' },
  },
}

export default meta
type Story = StoryObj<typeof meta>

/* ── Shared palette ── */
const COLORS = {
  blue:   { bg: 'rgba(59,  130, 246, 0.75)', border: '#3b82f6' },
  violet: { bg: 'rgba(139, 92,  246, 0.75)', border: '#8b5cf6' },
  emerald:{ bg: 'rgba(16,  185, 129, 0.75)', border: '#10b981' },
  amber:  { bg: 'rgba(245, 158, 11,  0.75)', border: '#f59e0b' },
  rose:   { bg: 'rgba(239, 68,  68,  0.75)', border: '#ef4444' },
  sky:    { bg: 'rgba(14,  165, 233, 0.75)', border: '#0ea5e9' },
}

const months = ['Ene', 'Feb', 'Mar', 'Abr', 'May', 'Jun', 'Jul', 'Ago', 'Sep', 'Oct', 'Nov', 'Dic']

/* ─────────────────────────────────────
   LINE
───────────────────────────────────── */
export const LineChart: Story = {
  name: 'Líneas',
  render: (args) => ({
    components: { Chart },
    setup() { return { args } },
    template: `<div style="width:100%;max-width:640px;"><Chart v-bind="args" /></div>`,
  }),
  args: {
    type: 'line',
    title: 'Ventas mensuales',
    height: '280px',
    data: {
      labels: months,
      datasets: [
        {
          label: 'Este año',
          data: [42, 58, 55, 73, 81, 95, 88, 102, 97, 115, 108, 130],
          borderColor: COLORS.blue.border,
          backgroundColor: 'rgba(59,130,246,0.1)',
          borderWidth: 2.5,
          pointBackgroundColor: COLORS.blue.border,
          pointRadius: 4,
          tension: 0.4,
          fill: true,
        },
        {
          label: 'Año anterior',
          data: [30, 45, 40, 60, 68, 74, 70, 85, 80, 92, 88, 105],
          borderColor: COLORS.violet.border,
          backgroundColor: 'rgba(139,92,246,0.07)',
          borderWidth: 2,
          pointBackgroundColor: COLORS.violet.border,
          pointRadius: 3,
          tension: 0.4,
          fill: true,
          borderDash: [5, 4],
        },
      ],
    },
    options: {
      plugins: {
        legend: { position: 'top' },
      },
      scales: {
        y: { beginAtZero: true },
      },
    },
  },
}

/* ─────────────────────────────────────
   BAR
───────────────────────────────────── */
export const BarChart: Story = {
  name: 'Barras',
  render: (args) => ({
    components: { Chart },
    setup() { return { args } },
    template: `<div style="width:100%;max-width:600px;"><Chart v-bind="args" /></div>`,
  }),
  args: {
    type: 'bar',
    title: 'Ingresos por trimestre',
    height: '280px',
    data: {
      labels: ['Q1', 'Q2', 'Q3', 'Q4'],
      datasets: [
        {
          label: 'Productos',
          data: [120, 175, 152, 210],
          backgroundColor: COLORS.blue.bg,
          borderColor:     COLORS.blue.border,
          borderWidth: 1.5,
          borderRadius: 8,
        },
        {
          label: 'Servicios',
          data: [80, 95, 110, 135],
          backgroundColor: COLORS.emerald.bg,
          borderColor:     COLORS.emerald.border,
          borderWidth: 1.5,
          borderRadius: 8,
        },
      ],
    },
    options: {
      plugins: { legend: { position: 'top' } },
      scales:  { y: { beginAtZero: true } },
    },
  },
}

/* ─────────────────────────────────────
   PIE
───────────────────────────────────── */
export const PieChart: Story = {
  name: 'Pastel',
  render: (args) => ({
    components: { Chart },
    setup() { return { args } },
    template: `<div style="width:100%;max-width:420px;"><Chart v-bind="args" /></div>`,
  }),
  args: {
    type: 'pie',
    title: 'Distribución de categorías',
    height: '300px',
    data: {
      labels: ['Electrónica', 'Ropa', 'Alimentos', 'Hogar', 'Otros'],
      datasets: [{
        data: [38, 22, 18, 14, 8],
        backgroundColor: [
          COLORS.blue.bg,
          COLORS.violet.bg,
          COLORS.emerald.bg,
          COLORS.amber.bg,
          COLORS.sky.bg,
        ],
        borderColor: [
          COLORS.blue.border,
          COLORS.violet.border,
          COLORS.emerald.border,
          COLORS.amber.border,
          COLORS.sky.border,
        ],
        borderWidth: 2,
      }],
    },
    options: {
      plugins: { legend: { position: 'right' } },
    },
  },
}

/* ─────────────────────────────────────
   DOUGHNUT
───────────────────────────────────── */
export const DoughnutChart: Story = {
  name: 'Dona',
  render: (args) => ({
    components: { Chart },
    setup() { return { args } },
    template: `<div style="width:100%;max-width:420px;"><Chart v-bind="args" /></div>`,
  }),
  args: {
    type: 'doughnut',
    title: 'Estado de tareas',
    height: '280px',
    data: {
      labels: ['Completadas', 'En progreso', 'Pendientes', 'Canceladas'],
      datasets: [{
        data: [54, 23, 18, 5],
        backgroundColor: [
          COLORS.emerald.bg,
          COLORS.blue.bg,
          COLORS.amber.bg,
          COLORS.rose.bg,
        ],
        borderColor: [
          COLORS.emerald.border,
          COLORS.blue.border,
          COLORS.amber.border,
          COLORS.rose.border,
        ],
        borderWidth: 2,
        hoverOffset: 10,
      }],
    },
    options: {
      cutout: '65%',
      plugins: { legend: { position: 'right' } },
    },
  },
}

/* ─────────────────────────────────────
   RADAR
───────────────────────────────────── */
export const RadarChart: Story = {
  name: 'Radar',
  render: (args) => ({
    components: { Chart },
    setup() { return { args } },
    template: `<div style="width:100%;max-width:480px;"><Chart v-bind="args" /></div>`,
  }),
  args: {
    type: 'radar',
    title: 'Habilidades del equipo',
    height: '320px',
    data: {
      labels: ['Frontend', 'Backend', 'DevOps', 'Diseño', 'Testing', 'Producto'],
      datasets: [
        {
          label: 'Equipo A',
          data: [90, 75, 60, 70, 80, 85],
          borderColor: COLORS.blue.border,
          backgroundColor: 'rgba(59,130,246,0.15)',
          borderWidth: 2,
          pointBackgroundColor: COLORS.blue.border,
        },
        {
          label: 'Equipo B',
          data: [65, 88, 82, 55, 70, 72],
          borderColor: COLORS.violet.border,
          backgroundColor: 'rgba(139,92,246,0.12)',
          borderWidth: 2,
          pointBackgroundColor: COLORS.violet.border,
        },
      ],
    },
    options: {
      plugins: { legend: { position: 'top' } },
      scales: {
        r: {
          beginAtZero: true,
          max: 100,
          ticks: { stepSize: 20 },
        },
      },
    },
  },
}

/* ─────────────────────────────────────
   POLAR AREA
───────────────────────────────────── */
export const PolarAreaChart: Story = {
  name: 'Área Polar',
  render: (args) => ({
    components: { Chart },
    setup() { return { args } },
    template: `<div style="width:100%;max-width:460px;"><Chart v-bind="args" /></div>`,
  }),
  args: {
    type: 'polarArea',
    title: 'Rendimiento por canal',
    height: '300px',
    data: {
      labels: ['Orgánico', 'Email', 'Social', 'Referido', 'Directo'],
      datasets: [{
        data: [45, 28, 35, 20, 42],
        backgroundColor: [
          COLORS.blue.bg,
          COLORS.emerald.bg,
          COLORS.violet.bg,
          COLORS.amber.bg,
          COLORS.sky.bg,
        ],
        borderWidth: 1.5,
      }],
    },
    options: {
      plugins: { legend: { position: 'right' } },
    },
  },
}

/* ─────────────────────────────────────
   SCATTER
───────────────────────────────────── */
export const ScatterChart: Story = {
  name: 'Dispersión',
  render: (args) => ({
    components: { Chart },
    setup() { return { args } },
    template: `<div style="width:100%;max-width:560px;"><Chart v-bind="args" /></div>`,
  }),
  args: {
    type: 'scatter',
    title: 'Relación precio / calidad',
    height: '300px',
    data: {
      datasets: [
        {
          label: 'Producto A',
          data: Array.from({ length: 20 }, () => ({
            x: +(Math.random() * 80 + 10).toFixed(1),
            y: +(Math.random() * 80 + 10).toFixed(1),
          })),
          backgroundColor: COLORS.blue.bg,
          borderColor: COLORS.blue.border,
          pointRadius: 6,
        },
        {
          label: 'Producto B',
          data: Array.from({ length: 20 }, () => ({
            x: +(Math.random() * 80 + 10).toFixed(1),
            y: +(Math.random() * 80 + 10).toFixed(1),
          })),
          backgroundColor: COLORS.violet.bg,
          borderColor: COLORS.violet.border,
          pointRadius: 6,
        },
      ],
    },
    options: {
      plugins: { legend: { position: 'top' } },
      scales: {
        x: { title: { display: true, text: 'Precio' } },
        y: { title: { display: true, text: 'Calidad percibida' } },
      },
    },
  },
}

/* ─────────────────────────────────────
   HORIZONTAL BAR
───────────────────────────────────── */
export const HorizontalBar: Story = {
  name: 'Barras Horizontales',
  render: (args) => ({
    components: { Chart },
    setup() { return { args } },
    template: `<div style="width:100%;max-width:580px;"><Chart v-bind="args" /></div>`,
  }),
  args: {
    type: 'bar',
    title: 'Top productos por ventas',
    height: '320px',
    data: {
      labels: ['Producto F', 'Producto E', 'Producto D', 'Producto C', 'Producto B', 'Producto A'],
      datasets: [{
        label: 'Unidades vendidas',
        data: [82, 105, 138, 190, 245, 310],
        backgroundColor: [
          COLORS.sky.bg,
          COLORS.blue.bg,
          COLORS.violet.bg,
          COLORS.emerald.bg,
          COLORS.amber.bg,
          COLORS.rose.bg,
        ],
        borderRadius: 6,
      }],
    },
    options: {
      indexAxis: 'y',
      plugins: { legend: { display: false } },
      scales:  { x: { beginAtZero: true } },
    },
  },
}
