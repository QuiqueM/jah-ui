import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import Radio from './Radio.vue'

describe('Radio', () => {
  it('renders unselected by default', () => {
    const wrapper = mount(Radio, { props: { value: 'a', modelValue: null } })
    expect(wrapper.find('input').attributes('checked')).toBeUndefined()
  })

  it('renders selected when modelValue matches value', () => {
    const wrapper = mount(Radio, { props: { value: 'a', modelValue: 'a' } })
    expect((wrapper.find('input').element as HTMLInputElement).checked).toBe(true)
  })

  it('emits update:modelValue with its value when clicked', async () => {
    const wrapper = mount(Radio, { props: { value: 'b', modelValue: 'a' } })
    await wrapper.find('input').trigger('change')
    expect(wrapper.emitted('update:modelValue')?.[0]).toEqual(['b'])
  })

  it('does not emit when already selected', async () => {
    const wrapper = mount(Radio, { props: { value: 'a', modelValue: 'a' } })
    await wrapper.find('input').trigger('change')
    expect(wrapper.emitted('update:modelValue')).toBeFalsy()
  })

  it('does not emit when disabled', async () => {
    const wrapper = mount(Radio, { props: { value: 'a', modelValue: null, disabled: true } })
    await wrapper.find('input').trigger('change')
    expect(wrapper.emitted('update:modelValue')).toBeFalsy()
  })

  it('renders label text', () => {
    const wrapper = mount(Radio, { props: { value: 'x', label: 'Opción A' } })
    expect(wrapper.text()).toContain('Opción A')
  })

  it('applies disabled class when disabled=true', () => {
    const wrapper = mount(Radio, { props: { value: 'x', disabled: true } })
    expect(wrapper.classes()).toContain('neu-radio--disabled')
  })

  it('applies error class when error=true', () => {
    const wrapper = mount(Radio, { props: { value: 'x', error: true } })
    expect(wrapper.classes()).toContain('neu-radio--error')
  })
})
