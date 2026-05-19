import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import Skeleton from './Skeleton.vue'

describe('Skeleton', () => {
  it('renders without errors', () => {
    const wrapper = mount(Skeleton)
    expect(wrapper.exists()).toBe(true)
  })

  it('applies text variant class by default', () => {
    const wrapper = mount(Skeleton)
    expect(wrapper.find('.neu-skeleton--text').exists()).toBe(true)
  })

  it('applies circle variant class', () => {
    const wrapper = mount(Skeleton, { props: { variant: 'circle' } })
    expect(wrapper.find('.neu-skeleton--circle').exists()).toBe(true)
  })

  it('applies rect variant class', () => {
    const wrapper = mount(Skeleton, { props: { variant: 'rect' } })
    expect(wrapper.find('.neu-skeleton--rect').exists()).toBe(true)
  })

  it('applies animated class when animated=true', () => {
    const wrapper = mount(Skeleton, { props: { animated: true } })
    expect(wrapper.find('.neu-skeleton--animated').exists()).toBe(true)
  })

  it('does not apply animated class when animated=false', () => {
    const wrapper = mount(Skeleton, { props: { animated: false } })
    expect(wrapper.find('.neu-skeleton--animated').exists()).toBe(false)
  })

  it('renders multiple lines for text variant when lines > 1', () => {
    const wrapper = mount(Skeleton, { props: { variant: 'text', lines: 3 } })
    expect(wrapper.findAll('.neu-skeleton').length).toBe(3)
  })

  it('sets custom width via style', () => {
    const wrapper = mount(Skeleton, { props: { width: '200px' } })
    expect(wrapper.html()).toContain('200px')
  })

  it('sets custom height via style', () => {
    const wrapper = mount(Skeleton, { props: { height: '100px' } })
    expect(wrapper.html()).toContain('100px')
  })
})
