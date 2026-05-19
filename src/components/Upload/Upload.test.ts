import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import Upload from './Upload.vue'
import type { UploadFile } from './Upload.vue'

describe('Upload', () => {
  it('renders drop zone', () => {
    const wrapper = mount(Upload)
    expect(wrapper.find('.neu-upload__zone').exists()).toBe(true)
  })

  it('shows default label', () => {
    const wrapper = mount(Upload)
    expect(wrapper.text()).toContain('Arrastra archivos')
  })

  it('shows custom label', () => {
    const wrapper = mount(Upload, { props: { label: 'Sube tu CV aquí' } })
    expect(wrapper.text()).toContain('Sube tu CV aquí')
  })

  it('shows hint text', () => {
    const wrapper = mount(Upload, { props: { hint: 'Solo PDF' } })
    expect(wrapper.text()).toContain('Solo PDF')
  })

  it('shows error message', () => {
    const wrapper = mount(Upload, { props: { error: 'Campo requerido' } })
    expect(wrapper.text()).toContain('Campo requerido')
  })

  it('applies error class on zone when error is set', () => {
    const wrapper = mount(Upload, { props: { error: 'Error' } })
    expect(wrapper.find('.neu-upload__zone--error').exists()).toBe(true)
  })

  it('renders file list when files are provided', () => {
    const file = new File(['content'], 'test.pdf', { type: 'application/pdf' })
    const files: UploadFile[] = [{ id: '1', file }]
    const wrapper = mount(Upload, { props: { modelValue: files } })
    expect(wrapper.find('.neu-upload__list').exists()).toBe(true)
    expect(wrapper.text()).toContain('test.pdf')
  })

  it('emits update:modelValue without removed file when remove button is clicked', async () => {
    const file = new File([''], 'foto.png', { type: 'image/png' })
    const files: UploadFile[] = [{ id: 'abc', file }]
    const wrapper = mount(Upload, { props: { modelValue: files } })
    await wrapper.find('.neu-upload__file-remove').trigger('click')
    const emitted = wrapper.emitted('update:modelValue') as UploadFile[][]
    expect(emitted[0][0]).toHaveLength(0)
  })

  it('applies disabled class when disabled=true', () => {
    const wrapper = mount(Upload, { props: { disabled: true } })
    expect(wrapper.classes()).toContain('neu-upload--disabled')
  })

  it('shows accept hint when accept and maxSize are set', () => {
    const wrapper = mount(Upload, { props: { accept: '.pdf', maxSize: 1048576 } })
    expect(wrapper.text()).toContain('.pdf')
    expect(wrapper.text()).toContain('máx')
  })
})
