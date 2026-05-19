import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import Avatar from './Avatar.vue'

describe('Avatar', () => {
  it('renders image when src is provided', () => {
    const wrapper = mount(Avatar, { props: { src: 'https://example.com/photo.jpg', alt: 'foto' } })
    expect(wrapper.find('img').exists()).toBe(true)
  })

  it('renders initials when name is provided and no src', () => {
    const wrapper = mount(Avatar, { props: { name: 'Juan Pérez' } })
    expect(wrapper.text()).toContain('JP')
  })

  it('renders single initial for single-word name', () => {
    const wrapper = mount(Avatar, { props: { name: 'Carlos' } })
    expect(wrapper.text()).toContain('C')
  })

  it('applies size class', () => {
    const wrapper = mount(Avatar, { props: { size: 'lg' } })
    expect(wrapper.classes()).toContain('neu-avatar--lg')
  })

  it('applies bordered class when bordered=true', () => {
    const wrapper = mount(Avatar, { props: { bordered: true } })
    expect(wrapper.classes()).toContain('neu-avatar--bordered')
  })

  it('renders status indicator when status is provided', () => {
    const wrapper = mount(Avatar, { props: { name: 'Ana', status: 'online' } })
    expect(wrapper.find('.neu-avatar__status').exists()).toBe(true)
  })

  it('applies status class', () => {
    const wrapper = mount(Avatar, { props: { name: 'Ana', status: 'busy' } })
    expect(wrapper.find('.neu-avatar__status--busy').exists()).toBe(true)
  })

  it('does not render status indicator when status not provided', () => {
    const wrapper = mount(Avatar, { props: { name: 'Ana' } })
    expect(wrapper.find('.neu-avatar__status').exists()).toBe(false)
  })
})
