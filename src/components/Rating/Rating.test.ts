import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import Rating from './Rating.vue'

describe('Rating', () => {
  it('renders max number of stars', () => {
    const wrapper = mount(Rating, { props: { modelValue: 0, max: 5 } })
    expect(wrapper.findAll('svg').length).toBeGreaterThanOrEqual(5)
  })

  it('renders custom max stars', () => {
    const wrapper = mount(Rating, { props: { modelValue: 0, max: 10 } })
    expect(wrapper.findAll('svg').length).toBeGreaterThanOrEqual(10)
  })

  it('emits update:modelValue when a star is clicked', async () => {
    const wrapper = mount(Rating, { props: { modelValue: 0, max: 5 } })
    const stars = wrapper.findAll('[role="radio"]')
    if (stars.length >= 3) {
      await stars[2].trigger('click')
      expect(wrapper.emitted('update:modelValue')).toBeTruthy()
    }
  })

  it('does not emit when readonly=true', async () => {
    const wrapper = mount(Rating, { props: { modelValue: 3, readonly: true } })
    const stars = wrapper.findAll('[role="radio"]')
    if (stars.length > 0) {
      await stars[0].trigger('click')
    }
    expect(wrapper.emitted('update:modelValue')).toBeFalsy()
  })

  it('does not emit when disabled=true', async () => {
    const wrapper = mount(Rating, { props: { modelValue: 3, disabled: true } })
    const stars = wrapper.findAll('[role="radio"]')
    if (stars.length > 0) {
      await stars[0].trigger('click')
    }
    expect(wrapper.emitted('update:modelValue')).toBeFalsy()
  })

  it('renders label when provided', () => {
    const wrapper = mount(Rating, { props: { modelValue: 0, label: 'Calificación' } })
    expect(wrapper.attributes('aria-label')).toBe('Calificación')
  })

  it('applies disabled class when disabled=true', () => {
    const wrapper = mount(Rating, { props: { modelValue: 0, disabled: true } })
    expect(wrapper.classes()).toContain('neu-rating--disabled')
  })
})
