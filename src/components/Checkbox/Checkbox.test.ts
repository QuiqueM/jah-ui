import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import Checkbox from './Checkbox.vue'

describe('Checkbox', () => {
  it('renders unchecked by default', () => {
    const wrapper = mount(Checkbox)
    const input = wrapper.find('input[type="checkbox"]')
    expect((input.element as HTMLInputElement).checked).toBe(false)
  })

  it('renders checked when modelValue=true', () => {
    const wrapper = mount(Checkbox, { props: { modelValue: true } })
    expect(wrapper.find('.neu-checkbox__box--checked').exists()).toBe(true)
  })

  it('emits true when unchecked checkbox is clicked', async () => {
    const wrapper = mount(Checkbox, { props: { modelValue: false } })
    await wrapper.find('input').trigger('change')
    expect(wrapper.emitted('update:modelValue')?.[0]).toEqual([true])
  })

  it('emits false when checked checkbox is clicked', async () => {
    const wrapper = mount(Checkbox, { props: { modelValue: true } })
    await wrapper.find('input').trigger('change')
    expect(wrapper.emitted('update:modelValue')?.[0]).toEqual([false])
  })

  it('does not emit when disabled', async () => {
    const wrapper = mount(Checkbox, { props: { modelValue: false, disabled: true } })
    await wrapper.find('input').trigger('change')
    expect(wrapper.emitted('update:modelValue')).toBeFalsy()
  })

  it('renders label when provided', () => {
    const wrapper = mount(Checkbox, { props: { label: 'Aceptar términos' } })
    expect(wrapper.text()).toContain('Aceptar términos')
  })

  it('applies error class when error=true', () => {
    const wrapper = mount(Checkbox, { props: { error: true } })
    expect(wrapper.classes()).toContain('neu-checkbox--error')
  })

  it('adds value to array in array mode', async () => {
    const wrapper = mount(Checkbox, {
      props: { modelValue: ['a'], value: 'b' },
    })
    await wrapper.find('input').trigger('change')
    expect(wrapper.emitted('update:modelValue')?.[0]).toEqual([['a', 'b']])
  })

  it('removes value from array in array mode', async () => {
    const wrapper = mount(Checkbox, {
      props: { modelValue: ['a', 'b'], value: 'a' },
    })
    await wrapper.find('input').trigger('change')
    expect(wrapper.emitted('update:modelValue')?.[0]).toEqual([['b']])
  })

  it('shows indeterminate icon when indeterminate=true', () => {
    const wrapper = mount(Checkbox, { props: { indeterminate: true } })
    expect(wrapper.find('.neu-checkbox__box--indeterminate').exists()).toBe(true)
  })
})
