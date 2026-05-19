import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import Navbar from './Navbar.vue'

const items = [
  { label: 'Inicio',   href: '#', active: true },
  { label: 'Productos', href: '#' },
  { label: 'Contacto', href: '#', disabled: true },
]

describe('Navbar', () => {
  it('renders brand slot content', () => {
    const wrapper = mount(Navbar, { slots: { brand: 'jah·ui' } })
    expect(wrapper.text()).toContain('jah·ui')
  })

  it('renders navigation items', () => {
    const wrapper = mount(Navbar, { props: { items } })
    expect(wrapper.text()).toContain('Inicio')
    expect(wrapper.text()).toContain('Productos')
  })

  it('applies active class to active item', () => {
    const wrapper = mount(Navbar, { props: { items } })
    expect(wrapper.find('.neu-navbar__link--active').exists()).toBe(true)
  })

  it('applies disabled class to disabled item', () => {
    const wrapper = mount(Navbar, { props: { items } })
    expect(wrapper.find('.neu-navbar__link--disabled').exists()).toBe(true)
  })

  it('renders hamburger button when items are provided', () => {
    const wrapper = mount(Navbar, { props: { items } })
    expect(wrapper.find('.neu-navbar__hamburger').exists()).toBe(true)
  })

  it('mobile menu is hidden by default', () => {
    const wrapper = mount(Navbar, { props: { items } })
    expect(wrapper.find('.neu-navbar__mobile').exists()).toBe(false)
  })

  it('shows mobile menu after hamburger click', async () => {
    const wrapper = mount(Navbar, { props: { items } })
    await wrapper.find('.neu-navbar__hamburger').trigger('click')
    expect(wrapper.find('.neu-navbar__mobile').exists()).toBe(true)
  })

  it('closes mobile menu on second hamburger click', async () => {
    const wrapper = mount(Navbar, { props: { items } })
    await wrapper.find('.neu-navbar__hamburger').trigger('click')
    await wrapper.find('.neu-navbar__hamburger').trigger('click')
    expect(wrapper.find('.neu-navbar__mobile').exists()).toBe(false)
  })

  it('emits item-click when a link is clicked', async () => {
    const wrapper = mount(Navbar, { props: { items } })
    await wrapper.find('.neu-navbar__link').trigger('click')
    expect(wrapper.emitted('item-click')).toBeTruthy()
  })

  it('does not emit item-click for disabled items', async () => {
    const wrapper = mount(Navbar, { props: { items } })
    const links = wrapper.findAll('.neu-navbar__link')
    const disabled = links.find(l => l.classes('neu-navbar__link--disabled'))
    if (disabled) await disabled.trigger('click')
    const emitted = wrapper.emitted('item-click') ?? []
    const clickedItem = emitted.find((e) => (e as [{ label: string }])[0]?.label === 'Contacto')
    expect(clickedItem).toBeUndefined()
  })

  it('applies sticky class when sticky=true', () => {
    const wrapper = mount(Navbar, { props: { sticky: true } })
    expect(wrapper.classes()).toContain('neu-navbar--sticky')
  })

  it('renders actions slot content', () => {
    const wrapper = mount(Navbar, { slots: { actions: '<button>Login</button>' } })
    expect(wrapper.text()).toContain('Login')
  })
})
