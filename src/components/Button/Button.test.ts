import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import Button from './Button.vue'

describe('Button', () => {
  it('renders label text', () => {
    const wrapper = mount(Button, { props: { label: 'Guardar' } })
    expect(wrapper.text()).toContain('Guardar')
  })

  it('applies primary variant class by default', () => {
    const wrapper = mount(Button, { props: { label: 'X' } })
    expect(wrapper.classes()).toContain('neu-btn--primary')
  })

  it('applies the specified variant class', () => {
    const wrapper = mount(Button, { props: { label: 'X', variant: 'danger' } })
    expect(wrapper.classes()).toContain('neu-btn--danger')
  })

  it('applies the specified size class', () => {
    const wrapper = mount(Button, { props: { label: 'X', size: 'lg' } })
    expect(wrapper.classes()).toContain('neu-btn--lg')
  })

  it('is disabled when disabled=true', () => {
    const wrapper = mount(Button, { props: { label: 'X', disabled: true } })
    expect(wrapper.attributes('disabled')).toBeDefined()
  })

  it('is disabled when loading=true', () => {
    const wrapper = mount(Button, { props: { label: 'X', loading: true } })
    expect(wrapper.attributes('disabled')).toBeDefined()
  })

  it('shows spinner when loading=true', () => {
    const wrapper = mount(Button, { props: { label: 'X', loading: true } })
    expect(wrapper.find('.neu-spinner').exists()).toBe(true)
  })

  it('does not show spinner when loading=false', () => {
    const wrapper = mount(Button, { props: { label: 'X' } })
    expect(wrapper.find('.neu-spinner').exists()).toBe(false)
  })

  it('emits click event when clicked', async () => {
    const wrapper = mount(Button, { props: { label: 'X' } })
    await wrapper.trigger('click')
    expect(wrapper.emitted('click')).toBeTruthy()
  })

  it('does not emit click when disabled', async () => {
    const wrapper = mount(Button, { props: { label: 'X', disabled: true } })
    await wrapper.trigger('click')
    expect(wrapper.emitted('click')).toBeFalsy()
  })

  it('renders icon slot content', () => {
    const wrapper = mount(Button, {
      props: { label: 'X' },
      slots: { icon: '<svg data-testid="icon" />' },
    })
    expect(wrapper.find('.neu-btn__icon').exists()).toBe(true)
  })
})
