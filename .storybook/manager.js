import { addons } from '@storybook/manager-api'
import { create } from '@storybook/theming/create'

addons.setConfig({
  theme: create({
    base: 'light',

    // ── Brand ──────────────────────────────────────────────────────
    brandTitle: 'jah·ui',
    brandUrl:   '#',

    // ── Neumorphic palette ─────────────────────────────────────────
    colorPrimary:   '#3b82f6',
    colorSecondary: '#3b82f6',

    // Sidebar / manager
    appBg:            '#e0e5ec',
    appContentBg:     '#e0e5ec',
    appPreviewBg:     '#e0e5ec',
    appBorderColor:   '#c8cdd6',
    appBorderRadius:  12,

    // Typography
    fontBase:  "system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
    fontCode:  'ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace',

    // Text
    textColor:        '#374151',
    textInverseColor: '#ffffff',
    textMutedColor:   '#9ca3af',

    // Toolbar
    barTextColor:     '#6b7280',
    barHoverColor:    '#374151',
    barSelectedColor: '#3b82f6',
    barBg:            '#e0e5ec',

    // Form inputs
    inputBg:           '#e0e5ec',
    inputBorder:       '#c8cdd6',
    inputTextColor:    '#374151',
    inputBorderRadius: 8,
  }),
})
