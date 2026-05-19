import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import Knob from './Knob.vue'

describe('Knob', () => {
  it('renders SVG element', () => {
    const wrapper = mount(Knob, { props: { modelValue: 50 } })
    expect(wrapper.find('svg').exists()).toBe(true)
  })

  it('displays current value', () => {
    const wrapper = mount(Knob, { props: { modelValue: 75, min: 0, max: 100 } })
    expect(wrapper.text()).toContain('75')
  })

  it('displays label when provided', () => {
    const wrapper = mount(Knob, { props: { modelValue: 0, label: 'Volumen' } })
    expect(wrapper.text()).toContain('Volumen')
  })

  it('displays suffix when provided', () => {
    const wrapper = mount(Knob, { props: { modelValue: 50, suffix: '%' } })
    expect(wrapper.text()).toContain('%')
  })

  it('emits update:modelValue on ArrowUp key', async () => {
    const wrapper = mount(Knob, { props: { modelValue: 50, step: 1 } })
    await wrapper.find('.neu-knob').trigger('keydown', { key: 'ArrowUp' })
    expect(wrapper.emitted('update:modelValue')?.[0]).toEqual([51])
  })

  it('emits update:modelValue on ArrowDown key', async () => {
    const wrapper = mount(Knob, { props: { modelValue: 50, step: 1 } })
    await wrapper.find('.neu-knob').trigger('keydown', { key: 'ArrowDown' })
    expect(wrapper.emitted('update:modelValue')?.[0]).toEqual([49])
  })

  it('emits min value on Home key', async () => {
    const wrapper = mount(Knob, { props: { modelValue: 50, min: 10, max: 100 } })
    await wrapper.find('.neu-knob').trigger('keydown', { key: 'Home' })
    expect(wrapper.emitted('update:modelValue')?.[0]).toEqual([10])
  })

  it('emits max value on End key', async () => {
    const wrapper = mount(Knob, { props: { modelValue: 50, min: 0, max: 100 } })
    await wrapper.find('.neu-knob').trigger('keydown', { key: 'End' })
    expect(wrapper.emitted('update:modelValue')?.[0]).toEqual([100])
  })

  it('does not emit on keyboard when disabled', async () => {
    const wrapper = mount(Knob, { props: { modelValue: 50, disabled: true } })
    await wrapper.find('.neu-knob').trigger('keydown', { key: 'ArrowUp' })
    expect(wrapper.emitted('update:modelValue')).toBeFalsy()
  })

  it('does not exceed max value', async () => {
    const wrapper = mount(Knob, { props: { modelValue: 100, min: 0, max: 100, step: 1 } })
    await wrapper.find('.neu-knob').trigger('keydown', { key: 'ArrowUp' })
    const emitted = wrapper.emitted('update:modelValue')
    if (emitted) {
      expect(emitted[0][0]).toBeLessThanOrEqual(100)
    }
  })

  it('does not go below min value', async () => {
    const wrapper = mount(Knob, { props: { modelValue: 0, min: 0, max: 100, step: 1 } })
    await wrapper.find('.neu-knob').trigger('keydown', { key: 'ArrowDown' })
    const emitted = wrapper.emitted('update:modelValue')
    if (emitted) {
      expect(emitted[0][0]).toBeGreaterThanOrEqual(0)
    }
  })

  it('applies size class', () => {
    const wrapper = mount(Knob, { props: { modelValue: 0, size: 'lg' } })
    expect(wrapper.classes()).toContain('neu-knob-root--lg')
  })
})
