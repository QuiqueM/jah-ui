import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import Alert from './Alert.vue'

describe('Alert', () => {
  it('renders when modelValue=true', () => {
    const wrapper = mount(Alert, { props: { modelValue: true } })
    expect(wrapper.find('[role="alert"]').exists()).toBe(true)
  })

  it('does not render content when modelValue=false', () => {
    const wrapper = mount(Alert, { props: { modelValue: false } })
    expect(wrapper.find('[role="alert"]').exists()).toBe(false)
  })

  it('applies the specified variant class', () => {
    const wrapper = mount(Alert, { props: { modelValue: true, variant: 'success' } })
    expect(wrapper.find('.neu-alert--success').exists()).toBe(true)
  })

  it('applies info variant class by default', () => {
    const wrapper = mount(Alert, { props: { modelValue: true } })
    expect(wrapper.find('.neu-alert--info').exists()).toBe(true)
  })

  it('shows dismiss button when dismissible=true', () => {
    const wrapper = mount(Alert, { props: { modelValue: true, dismissible: true } })
    expect(wrapper.find('button').exists()).toBe(true)
  })

  it('does not show dismiss button when dismissible=false', () => {
    const wrapper = mount(Alert, { props: { modelValue: true, dismissible: false } })
    expect(wrapper.find('button').exists()).toBe(false)
  })

  it('emits update:modelValue=false when dismissed', async () => {
    const wrapper = mount(Alert, { props: { modelValue: true, dismissible: true } })
    await wrapper.find('button').trigger('click')
    expect(wrapper.emitted('update:modelValue')?.[0]).toEqual([false])
  })

  it('emits close when dismissed', async () => {
    const wrapper = mount(Alert, { props: { modelValue: true, dismissible: true } })
    await wrapper.find('button').trigger('click')
    expect(wrapper.emitted('close')).toBeTruthy()
  })

  it('renders default slot content', () => {
    const wrapper = mount(Alert, {
      props: { modelValue: true },
      slots: { default: 'Operación exitosa' },
    })
    expect(wrapper.text()).toContain('Operación exitosa')
  })

  it('renders title prop', () => {
    const wrapper = mount(Alert, { props: { modelValue: true, title: 'Atención' } })
    expect(wrapper.text()).toContain('Atención')
  })
})
