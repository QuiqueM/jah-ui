import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import Progress from './Progress.vue'

describe('Progress', () => {
  it('renders the track element', () => {
    const wrapper = mount(Progress, { props: { value: 0 } })
    expect(wrapper.find('[role="progressbar"]').exists()).toBe(true)
  })

  it('sets fill width to 50% when value=50 and max=100', () => {
    const wrapper = mount(Progress, { props: { value: 50, max: 100 } })
    const fill = wrapper.find('.neu-progress__fill')
    expect(fill.attributes('style')).toContain('width: 50%')
  })

  it('clamps value to 0 when below min', () => {
    const wrapper = mount(Progress, { props: { value: -10, max: 100 } })
    const fill = wrapper.find('.neu-progress__fill')
    expect(fill.attributes('style')).toContain('width: 0%')
  })

  it('clamps value to 100% when above max', () => {
    const wrapper = mount(Progress, { props: { value: 150, max: 100 } })
    const fill = wrapper.find('.neu-progress__fill')
    expect(fill.attributes('style')).toContain('width: 100%')
  })

  it('renders label when provided', () => {
    const wrapper = mount(Progress, { props: { value: 40, label: 'Cargando' } })
    expect(wrapper.text()).toContain('Cargando')
  })

  it('renders percentage value when showValue=true', () => {
    const wrapper = mount(Progress, { props: { value: 75, showValue: true } })
    expect(wrapper.text()).toContain('75%')
  })

  it('applies indeterminate class when indeterminate=true', () => {
    const wrapper = mount(Progress, { props: { indeterminate: true } })
    expect(wrapper.find('.neu-progress__fill--indeterminate').exists()).toBe(true)
  })

  it('sets correct aria-valuenow', () => {
    const wrapper = mount(Progress, { props: { value: 60, max: 100 } })
    expect(wrapper.find('[role="progressbar"]').attributes('aria-valuenow')).toBe('60')
  })

  it('applies variant class', () => {
    const wrapper = mount(Progress, { props: { value: 50, variant: 'success' } })
    expect(wrapper.find('.neu-progress__fill--success').exists()).toBe(true)
  })
})
