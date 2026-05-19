import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import Pagination from './Pagination.vue'

describe('Pagination', () => {
  it('renders prev and next buttons', () => {
    const wrapper = mount(Pagination, { props: { modelValue: 3, totalPages: 5 } })
    const buttons = wrapper.findAll('button')
    expect(buttons.length).toBeGreaterThanOrEqual(2)
  })

  it('disables prev button on first page', () => {
    const wrapper = mount(Pagination, { props: { modelValue: 1, totalPages: 5 } })
    const prev = wrapper.find('[aria-label="Página anterior"]')
    expect(prev.attributes('disabled')).toBeDefined()
  })

  it('disables next button on last page', () => {
    const wrapper = mount(Pagination, { props: { modelValue: 5, totalPages: 5 } })
    const next = wrapper.find('[aria-label="Página siguiente"]')
    expect(next.attributes('disabled')).toBeDefined()
  })

  it('prev button is enabled when not on first page', () => {
    const wrapper = mount(Pagination, { props: { modelValue: 3, totalPages: 5 } })
    const prev = wrapper.find('[aria-label="Página anterior"]')
    expect(prev.attributes('disabled')).toBeUndefined()
  })

  it('emits next page when next button is clicked', async () => {
    const wrapper = mount(Pagination, { props: { modelValue: 2, totalPages: 5 } })
    await wrapper.find('[aria-label="Página siguiente"]').trigger('click')
    expect(wrapper.emitted('update:modelValue')?.[0]).toEqual([3])
  })

  it('emits prev page when prev button is clicked', async () => {
    const wrapper = mount(Pagination, { props: { modelValue: 3, totalPages: 5 } })
    await wrapper.find('[aria-label="Página anterior"]').trigger('click')
    expect(wrapper.emitted('update:modelValue')?.[0]).toEqual([2])
  })

  it('renders page numbers', () => {
    const wrapper = mount(Pagination, { props: { modelValue: 1, totalPages: 3 } })
    expect(wrapper.text()).toContain('1')
    expect(wrapper.text()).toContain('2')
    expect(wrapper.text()).toContain('3')
  })

  it('marks current page with aria-current', () => {
    const wrapper = mount(Pagination, { props: { modelValue: 2, totalPages: 5 } })
    const current = wrapper.find('[aria-current="page"]')
    expect(current.exists()).toBe(true)
    expect(current.text()).toBe('2')
  })

  it('shows ellipsis for many pages', () => {
    const wrapper = mount(Pagination, { props: { modelValue: 5, totalPages: 10 } })
    expect(wrapper.text()).toContain('…')
  })

  it('does not emit when disabled', async () => {
    const wrapper = mount(Pagination, { props: { modelValue: 2, totalPages: 5, disabled: true } })
    await wrapper.find('[aria-label="Página siguiente"]').trigger('click')
    expect(wrapper.emitted('update:modelValue')).toBeFalsy()
  })
})
