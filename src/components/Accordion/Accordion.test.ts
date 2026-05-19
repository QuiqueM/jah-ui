import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import { h } from 'vue'
import Accordion from './Accordion.vue'
import AccordionItem from './AccordionItem.vue'

function mountAccordion(props = {}, items = [{ value: 'a', title: 'Sección A', content: 'Contenido A' }]) {
  return mount(Accordion, {
    props,
    slots: {
      default: () => items.map(item =>
        h(AccordionItem, { value: item.value, title: item.title }, () => item.content)
      ),
    },
  })
}

describe('Accordion', () => {
  it('renders item titles', () => {
    const wrapper = mountAccordion()
    expect(wrapper.text()).toContain('Sección A')
  })

  it('item content is hidden by default', () => {
    const wrapper = mountAccordion()
    expect(wrapper.text()).not.toContain('Contenido A')
  })

  it('expands item on title click', async () => {
    const wrapper = mountAccordion()
    await wrapper.find('.neu-accordion-item__header').trigger('click')
    expect(wrapper.text()).toContain('Contenido A')
  })

  it('collapses item on second click', async () => {
    const wrapper = mountAccordion()
    const trigger = wrapper.find('.neu-accordion-item__header')
    await trigger.trigger('click')
    await trigger.trigger('click')
    expect(wrapper.text()).not.toContain('Contenido A')
  })

  it('in single mode, closing one item opens another', async () => {
    const items = [
      { value: 'a', title: 'A', content: 'Contenido A' },
      { value: 'b', title: 'B', content: 'Contenido B' },
    ]
    const wrapper = mountAccordion({ multiple: false }, items)
    const triggers = wrapper.findAll('.neu-accordion-item__header')
    await triggers[0].trigger('click')
    await triggers[1].trigger('click')
    expect(wrapper.text()).toContain('Contenido B')
    expect(wrapper.text()).not.toContain('Contenido A')
  })

  it('in multiple mode, multiple items can be open', async () => {
    const items = [
      { value: 'a', title: 'A', content: 'Contenido A' },
      { value: 'b', title: 'B', content: 'Contenido B' },
    ]
    const wrapper = mountAccordion({ multiple: true }, items)
    const triggers = wrapper.findAll('.neu-accordion-item__header')
    await triggers[0].trigger('click')
    await triggers[1].trigger('click')
    expect(wrapper.text()).toContain('Contenido A')
    expect(wrapper.text()).toContain('Contenido B')
  })

  it('emits update:modelValue when item is toggled', async () => {
    const wrapper = mountAccordion()
    await wrapper.find('.neu-accordion-item__header').trigger('click')
    expect(wrapper.emitted('update:modelValue')).toBeTruthy()
  })

  it('opens item matching defaultOpen', () => {
    const wrapper = mountAccordion({ defaultOpen: 'a' })
    expect(wrapper.text()).toContain('Contenido A')
  })
})
