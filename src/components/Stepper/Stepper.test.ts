import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import Stepper from './Stepper.vue'

const steps = [
  { label: 'Paso 1' },
  { label: 'Paso 2' },
  { label: 'Paso 3' },
]

describe('Stepper', () => {
  it('renders all step labels', () => {
    const wrapper = mount(Stepper, { props: { modelValue: 0, steps } })
    expect(wrapper.text()).toContain('Paso 1')
    expect(wrapper.text()).toContain('Paso 2')
    expect(wrapper.text()).toContain('Paso 3')
  })

  it('applies active class to current step', () => {
    const wrapper = mount(Stepper, { props: { modelValue: 1, steps } })
    expect(wrapper.find('.neu-stepper__step--active').exists()).toBe(true)
  })

  it('applies completed class to steps before active', () => {
    const wrapper = mount(Stepper, { props: { modelValue: 2, steps } })
    expect(wrapper.find('.neu-stepper__step--completed').exists()).toBe(true)
  })

  it('applies pending class to steps after active', () => {
    const wrapper = mount(Stepper, { props: { modelValue: 0, steps } })
    expect(wrapper.find('.neu-stepper__step--pending').exists()).toBe(true)
  })

  it('renders step numbers for pending/active steps', () => {
    const wrapper = mount(Stepper, { props: { modelValue: 0, steps } })
    expect(wrapper.text()).toContain('1')
  })

  it('emits update:modelValue when clickable step is clicked', async () => {
    const wrapper = mount(Stepper, { props: { modelValue: 0, steps, clickable: true } })
    const stepEls = wrapper.findAll('.neu-stepper__step')
    await stepEls[2].trigger('click')
    expect(wrapper.emitted('update:modelValue')?.[0]).toEqual([2])
  })

  it('does not emit when not clickable', async () => {
    const wrapper = mount(Stepper, { props: { modelValue: 0, steps, clickable: false } })
    const stepEls = wrapper.findAll('.neu-stepper__step')
    await stepEls[1].trigger('click')
    expect(wrapper.emitted('update:modelValue')).toBeFalsy()
  })

  it('applies error class to steps with error=true', () => {
    const stepsWithError = [
      { label: 'Paso 1' },
      { label: 'Paso 2', error: true },
      { label: 'Paso 3' },
    ]
    const wrapper = mount(Stepper, { props: { modelValue: 2, steps: stepsWithError } })
    expect(wrapper.find('.neu-stepper__step--error').exists()).toBe(true)
  })

  it('applies horizontal class by default', () => {
    const wrapper = mount(Stepper, { props: { modelValue: 0, steps } })
    expect(wrapper.classes()).toContain('neu-stepper--horizontal')
  })

  it('applies vertical class when orientation=vertical', () => {
    const wrapper = mount(Stepper, { props: { modelValue: 0, steps, orientation: 'vertical' } })
    expect(wrapper.classes()).toContain('neu-stepper--vertical')
  })

  it('does not emit for disabled steps', async () => {
    const stepsWithDisabled = [
      { label: 'Paso 1' },
      { label: 'Paso 2', disabled: true },
    ]
    const wrapper = mount(Stepper, {
      props: { modelValue: 0, steps: stepsWithDisabled, clickable: true },
    })
    const stepEls = wrapper.findAll('.neu-stepper__step')
    await stepEls[1].trigger('click')
    expect(wrapper.emitted('update:modelValue')).toBeFalsy()
  })
})
