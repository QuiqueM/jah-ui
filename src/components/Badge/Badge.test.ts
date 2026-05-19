import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import Badge from './Badge.vue'

describe('Badge', () => {
  it('renders slot content', () => {
    const wrapper = mount(Badge, { slots: { default: 'Nuevo' } })
    expect(wrapper.text()).toBe('Nuevo')
  })

  it('applies primary variant class by default', () => {
    const wrapper = mount(Badge)
    expect(wrapper.classes()).toContain('neu-badge--primary')
  })

  it('applies the specified variant class', () => {
    const wrapper = mount(Badge, { props: { variant: 'success' } })
    expect(wrapper.classes()).toContain('neu-badge--success')
  })

  it('applies dot class when dot=true', () => {
    const wrapper = mount(Badge, { props: { dot: true } })
    expect(wrapper.classes()).toContain('neu-badge--dot')
  })

  it('hides slot content when dot=true', () => {
    const wrapper = mount(Badge, { props: { dot: true }, slots: { default: 'texto' } })
    expect(wrapper.text()).toBe('')
  })

  it('applies outline class when outline=true', () => {
    const wrapper = mount(Badge, { props: { outline: true } })
    expect(wrapper.classes()).toContain('neu-badge--outline')
  })

  it('applies size class', () => {
    const wrapper = mount(Badge, { props: { size: 'lg' } })
    expect(wrapper.classes()).toContain('neu-badge--lg')
  })
})
