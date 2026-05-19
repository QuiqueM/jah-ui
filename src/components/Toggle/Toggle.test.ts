import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import Toggle from './Toggle.vue'

describe('Toggle', () => {
  it('renders off state by default', () => {
    const wrapper = mount(Toggle)
    expect(wrapper.find('.neu-toggle__track--on').exists()).toBe(false)
  })

  it('renders on state when modelValue=true', () => {
    const wrapper = mount(Toggle, { props: { modelValue: true } })
    expect(wrapper.find('.neu-toggle__track--on').exists()).toBe(true)
  })

  it('emits true when toggled from off', async () => {
    const wrapper = mount(Toggle, { props: { modelValue: false } })
    await wrapper.find('input').trigger('change')
    expect(wrapper.emitted('update:modelValue')?.[0]).toEqual([true])
  })

  it('emits false when toggled from on', async () => {
    const wrapper = mount(Toggle, { props: { modelValue: true } })
    await wrapper.find('input').trigger('change')
    expect(wrapper.emitted('update:modelValue')?.[0]).toEqual([false])
  })

  it('emits change event with new value', async () => {
    const wrapper = mount(Toggle, { props: { modelValue: false } })
    await wrapper.find('input').trigger('change')
    expect(wrapper.emitted('change')?.[0]).toEqual([true])
  })

  it('does not emit when disabled', async () => {
    const wrapper = mount(Toggle, { props: { modelValue: false, disabled: true } })
    await wrapper.find('input').trigger('change')
    expect(wrapper.emitted('update:modelValue')).toBeFalsy()
  })

  it('renders label text', () => {
    const wrapper = mount(Toggle, { props: { label: 'Notificaciones' } })
    expect(wrapper.text()).toContain('Notificaciones')
  })

  it('applies disabled class when disabled=true', () => {
    const wrapper = mount(Toggle, { props: { disabled: true } })
    expect(wrapper.classes()).toContain('neu-toggle--disabled')
  })

  it('applies error class when error=true', () => {
    const wrapper = mount(Toggle, { props: { error: true } })
    expect(wrapper.classes()).toContain('neu-toggle--error')
  })
})
