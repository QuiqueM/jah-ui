import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import Input from './Input.vue'

describe('Input', () => {
  it('renders without errors', () => {
    const wrapper = mount(Input)
    expect(wrapper.find('input').exists()).toBe(true)
  })

  it('renders label when provided', () => {
    const wrapper = mount(Input, { props: { label: 'Correo' } })
    expect(wrapper.text()).toContain('Correo')
  })

  it('passes placeholder to native input', () => {
    const wrapper = mount(Input, { props: { placeholder: 'ejemplo@correo.com' } })
    expect(wrapper.find('input').attributes('placeholder')).toBe('ejemplo@correo.com')
  })

  it('emits update:modelValue on user input', async () => {
    const wrapper = mount(Input, { props: { modelValue: '' } })
    await wrapper.find('input').setValue('hola')
    expect(wrapper.emitted('update:modelValue')?.[0]).toEqual(['hola'])
  })

  it('emits numeric value when type=number', async () => {
    const wrapper = mount(Input, { props: { type: 'number', modelValue: 0 } })
    await wrapper.find('input').setValue('42')
    expect(wrapper.emitted('update:modelValue')?.[0]).toEqual([42])
  })

  it('applies disabled attribute when disabled=true', () => {
    const wrapper = mount(Input, { props: { disabled: true } })
    expect(wrapper.find('input').attributes('disabled')).toBeDefined()
  })

  it('applies error class when error=true', () => {
    const wrapper = mount(Input, { props: { error: true } })
    expect(wrapper.find('.neu-input__wrapper--error').exists()).toBe(true)
  })

  it('renders prefix text', () => {
    const wrapper = mount(Input, { props: { prefix: 'https://' } })
    expect(wrapper.text()).toContain('https://')
  })

  it('renders suffix text', () => {
    const wrapper = mount(Input, { props: { suffix: '.com' } })
    expect(wrapper.text()).toContain('.com')
  })

  it('renders hint text', () => {
    const wrapper = mount(Input, { props: { hint: 'Mínimo 8 caracteres' } })
    expect(wrapper.text()).toContain('Mínimo 8 caracteres')
  })

  it('uses password type for password input', () => {
    const wrapper = mount(Input, { props: { type: 'password' } })
    expect(wrapper.find('input').attributes('type')).toBe('password')
  })
})
