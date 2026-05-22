import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import Card from './Card.vue'

describe('Card', () => {
  it('renders default slot content', () => {
    const wrapper = mount(Card, { slots: { default: 'Contenido de la tarjeta' } })
    expect(wrapper.text()).toContain('Contenido de la tarjeta')
  })

  it('renders title when provided', () => {
    const wrapper = mount(Card, { props: { title: 'Mi Tarjeta' } })
    expect(wrapper.text()).toContain('Mi Tarjeta')
  })

  it('renders subtitle when provided', () => {
    const wrapper = mount(Card, { props: { title: 'T', subtitle: 'Subtítulo' } })
    expect(wrapper.text()).toContain('Subtítulo')
  })

  it('applies hoverable class when hoverable=true', () => {
    const wrapper = mount(Card, { props: { hoverable: true } })
    expect(wrapper.classes()).toContain('neu-card--hoverable')
  })

  it('renders footer slot content', () => {
    const wrapper = mount(Card, { slots: { footer: 'Pie de tarjeta' } })
    expect(wrapper.text()).toContain('Pie de tarjeta')
  })

  it('renders header slot content', () => {
    const wrapper = mount(Card, { slots: { header: 'Cabecera personalizada' } })
    expect(wrapper.text()).toContain('Cabecera personalizada')
  })

  it('emits click event when clickable=true and clicked', async () => {
    const wrapper = mount(Card, { props: { clickable: true } })
    await wrapper.trigger('click')
    expect(wrapper.emitted('click')).toBeTruthy()
  })

  it('applies padding class', () => {
    const wrapper = mount(Card, { props: { padding: 'lg' } })
    expect(wrapper.find('.neu-card__inner--lg').exists()).toBe(true)
  })

  it('cover por defecto se posiciona arriba (top)', () => {
    const wrapper = mount(Card, { slots: { cover: '<img src="x.jpg" />' } })
    expect(wrapper.find('.neu-card__cover--top-xl').exists()).toBe(true)
    expect(wrapper.classes()).not.toContain('neu-card--cover-left')
    expect(wrapper.classes()).not.toContain('neu-card--cover-right')
  })

  it('cover a la izquierda aplica clases correctas', () => {
    const wrapper = mount(Card, {
      props: { coverPosition: 'left' },
      slots: { cover: '<img src="x.jpg" />' },
    })
    expect(wrapper.classes()).toContain('neu-card--cover-left')
    expect(wrapper.find('.neu-card__cover--left-xl').exists()).toBe(true)
  })

  it('cover a la derecha aplica clases correctas', () => {
    const wrapper = mount(Card, {
      props: { coverPosition: 'right' },
      slots: { cover: '<img src="x.jpg" />' },
    })
    expect(wrapper.classes()).toContain('neu-card--cover-right')
    expect(wrapper.find('.neu-card__cover--right-xl').exists()).toBe(true)
  })

  it('sin slot cover no aplica clases de posición lateral', () => {
    const wrapper = mount(Card, { props: { coverPosition: 'left' } })
    expect(wrapper.classes()).not.toContain('neu-card--cover-left')
  })
})
