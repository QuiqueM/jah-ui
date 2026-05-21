<script setup lang="ts">
import { computed, onBeforeUnmount } from 'vue'
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  LogarithmicScale,
  RadialLinearScale,
  PointElement,
  LineElement,
  BarElement,
  ArcElement,
  Title,
  Tooltip,
  Legend,
  Filler,
  type ChartData,
  type ChartOptions,
} from 'chart.js'
import { Line, Bar, Pie, Doughnut, Radar, PolarArea, Bubble, Scatter } from 'vue-chartjs'
import './Chart.css'

const FONT = "system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif"

ChartJS.register(
  CategoryScale, LinearScale, LogarithmicScale, RadialLinearScale,
  PointElement, LineElement, BarElement, ArcElement,
  Title, Tooltip, Legend, Filler,
)

// Global neumorphic defaults
ChartJS.defaults.font.family = FONT
ChartJS.defaults.font.size   = 13
ChartJS.defaults.color       = '#6b7280'
ChartJS.defaults.datasets.bar.borderRadius  = 6
ChartJS.defaults.datasets.bar.borderSkipped = false

export type ChartKind = 'line' | 'bar' | 'pie' | 'doughnut' | 'radar' | 'polarArea' | 'bubble' | 'scatter'

export interface ChartProps {
  type:     ChartKind
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  data:     ChartData<any>
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  options?: ChartOptions<any>
  title?:   string
  height?:  string
}

const props = withDefaults(defineProps<ChartProps>(), {
  height: '300px',
})

// ── External neumorphic tooltip ──────────────────────────────────────
let _tooltipEl: HTMLDivElement | null = null

function getTooltipEl(): HTMLDivElement {
  if (!_tooltipEl) {
    _tooltipEl = document.createElement('div')
    _tooltipEl.className = 'neu-chart-tooltip'
    document.body.appendChild(_tooltipEl)
  }
  return _tooltipEl
}

onBeforeUnmount(() => {
  _tooltipEl?.remove()
  _tooltipEl = null
})

function neuTooltipHandler(context: { chart: any; tooltip: any }) {
  const { chart, tooltip } = context
  const el = getTooltipEl()

  if (tooltip.opacity === 0) {
    el.style.opacity = '0'
    return
  }

  const titleLines: string[] = tooltip.title || []
  const bodyLines:  { lines: string[] }[] = tooltip.body || []
  const colors:     { backgroundColor: string }[] = tooltip.labelColors || []

  let html = ''
  if (titleLines.length) {
    html += `<div class="neu-chart-tooltip__title">${titleLines.join('<br>')}</div>`
  }
  bodyLines.forEach((item, i) => {
    const bg = (colors[i]?.backgroundColor as string) ?? '#9ca3af'
    html += `<div class="neu-chart-tooltip__row">
      <span class="neu-chart-tooltip__dot" style="background:${bg}"></span>
      <span class="neu-chart-tooltip__text">${item.lines.join(', ')}</span>
    </div>`
  })
  el.innerHTML = html

  const { left, top } = chart.canvas.getBoundingClientRect()
  el.style.opacity = '1'
  el.style.left    = `${left + tooltip.caretX}px`
  el.style.top     = `${top  + tooltip.caretY}px`
}

// ── Scale defaults ───────────────────────────────────────────────────
const NEU_CARTESIAN_SCALE = {
  grid:   { color: '#dde1e8', lineWidth: 1 },
  border: { display: false, dash: [4, 4], dashOffset: 2 },
  ticks:  { color: '#9ca3af', padding: 8, font: { size: 12, family: FONT } },
}

const NEU_RADIAL_SCALE = {
  grid:         { color: '#dde1e8' },
  angleLines:   { color: '#dde1e8' },
  pointLabels:  { color: '#374151', font: { size: 12, family: FONT } },
  ticks:        { color: '#9ca3af', backdropColor: 'transparent', font: { size: 11, family: FONT } },
}

// ── Deep merge ────────────────────────────────────────────────────────
function deepMerge(target: Record<string, any>, source: Record<string, any>): Record<string, any> {
  const out = { ...target }
  for (const key of Object.keys(source)) {
    const sv = source[key]
    const tv = target[key]
    if (sv !== null && typeof sv === 'object' && !Array.isArray(sv)) {
      out[key] = deepMerge(typeof tv === 'object' && tv !== null ? tv : {}, sv)
    } else {
      out[key] = sv
    }
  }
  return out
}

// ── Merged options ────────────────────────────────────────────────────
const noScaleTypes = new Set<ChartKind>(['pie', 'doughnut'])
const radialTypes  = new Set<ChartKind>(['radar', 'polarArea'])

const mergedOptions = computed(() => {
  const base: Record<string, any> = {
    responsive:          true,
    maintainAspectRatio: false,
    animation:           { duration: 500, easing: 'easeInOutQuart' },
    plugins: {
      legend: {
        labels: {
          color:           '#374151',
          font:            { size: 13, weight: '500', family: FONT },
          padding:         20,
          usePointStyle:   true,
          pointStyleWidth: 10,
          boxHeight:       8,
        },
      },
      tooltip: { enabled: false, external: neuTooltipHandler },
    },
  }

  if (radialTypes.has(props.type)) {
    base.scales = { r: NEU_RADIAL_SCALE }
  } else if (!noScaleTypes.has(props.type)) {
    base.scales = { x: NEU_CARTESIAN_SCALE, y: NEU_CARTESIAN_SCALE }
  }

  return deepMerge(base, (props.options ?? {}) as Record<string, any>)
})

// ── Component map ─────────────────────────────────────────────────────
const componentMap: Record<ChartKind, unknown> = {
  line: Line, bar: Bar, pie: Pie, doughnut: Doughnut,
  radar: Radar, polarArea: PolarArea, bubble: Bubble, scatter: Scatter,
}

const chartComponent = computed(() => componentMap[props.type])
</script>

<template>
  <div class="neu-chart">
    <p v-if="title" class="neu-chart__title">{{ title }}</p>
    <div class="neu-chart__canvas-wrap" :style="{ height }">
      <component :is="chartComponent" :data="data" :options="mergedOptions" />
    </div>
  </div>
</template>
