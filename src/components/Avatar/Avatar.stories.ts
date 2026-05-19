import type { Meta, StoryObj } from '@storybook/vue3'
import Avatar from './Avatar.vue'
import AvatarGroup from './AvatarGroup.vue'

const meta: Meta<typeof Avatar> = {
  title: 'Components/Avatar',
  component: Avatar,
  tags: ['autodocs'],
  parameters: {
    backgrounds: {
      default: 'neumorphic',
      values: [{ name: 'neumorphic', value: '#e0e5ec' }],
    },
  },
  argTypes: {
    size:    { control: 'select', options: ['xs', 'sm', 'md', 'lg', 'xl'] },
    rounded: { control: 'select', options: ['none', 'sm', 'md', 'lg', 'full'] },
    variant: { control: 'select', options: ['auto', 'primary', 'secondary', 'success', 'warning', 'danger'] },
    status:  { control: 'select', options: [undefined, 'online', 'offline', 'busy', 'away'] },
  },
}

export default meta
type Story = StoryObj<typeof meta>

export const WithImage: Story = {
  name: 'Con imagen',
  args: {
    src: 'https://i.pravatar.cc/150?img=3',
    alt: 'Avatar',
    size: 'md',
  },
}

export const WithInitials: Story = {
  name: 'Con iniciales',
  args: { name: 'Juan Díaz', size: 'md' },
}

export const WithIcon: Story = {
  name: 'Ícono (sin imagen ni nombre)',
  args: { size: 'md' },
}

export const Sizes: Story = {
  name: 'Tamaños',
  render: () => ({
    components: { Avatar },
    template: `
      <div style="display:flex;align-items:center;gap:1.25rem;padding:2rem;background:#e0e5ec;border-radius:1rem;flex-wrap:wrap;">
        <Avatar name="AB" size="xs" />
        <Avatar name="AB" size="sm" />
        <Avatar name="AB" size="md" />
        <Avatar name="AB" size="lg" />
        <Avatar name="AB" size="xl" />
      </div>
    `,
  }),
}

export const Rounded: Story = {
  name: 'Rounded',
  render: () => ({
    components: { Avatar },
    template: `
      <div style="display:flex;align-items:center;gap:1.25rem;padding:2rem;background:#e0e5ec;border-radius:1rem;flex-wrap:wrap;">
        <Avatar name="JD" rounded="none" />
        <Avatar name="JD" rounded="sm" />
        <Avatar name="JD" rounded="md" />
        <Avatar name="JD" rounded="lg" />
        <Avatar name="JD" rounded="full" />
      </div>
    `,
  }),
}

export const Variants: Story = {
  name: 'Variants (iniciales)',
  render: () => ({
    components: { Avatar },
    template: `
      <div style="display:flex;align-items:center;gap:1.25rem;padding:2rem;background:#e0e5ec;border-radius:1rem;flex-wrap:wrap;">
        <Avatar name="PR" variant="primary" />
        <Avatar name="SE" variant="secondary" />
        <Avatar name="SU" variant="success" />
        <Avatar name="WA" variant="warning" />
        <Avatar name="DA" variant="danger" />
      </div>
    `,
  }),
}

export const AutoVariant: Story = {
  name: 'Variant automático por nombre',
  render: () => ({
    components: { Avatar },
    template: `
      <div style="display:flex;align-items:center;gap:1.25rem;padding:2rem;background:#e0e5ec;border-radius:1rem;flex-wrap:wrap;">
        <Avatar name="Ana García" />
        <Avatar name="Luis Pérez" />
        <Avatar name="María López" />
        <Avatar name="Carlos Ruiz" />
        <Avatar name="Sara Torres" />
      </div>
    `,
  }),
}

export const WithStatus: Story = {
  name: 'Con status',
  render: () => ({
    components: { Avatar },
    template: `
      <div style="display:flex;align-items:center;gap:1.5rem;padding:2rem;background:#e0e5ec;border-radius:1rem;flex-wrap:wrap;">
        <div style="display:flex;flex-direction:column;align-items:center;gap:0.5rem;">
          <Avatar src="https://i.pravatar.cc/150?img=1" status="online" />
          <span style="font-size:0.75rem;color:#6b7280;">Online</span>
        </div>
        <div style="display:flex;flex-direction:column;align-items:center;gap:0.5rem;">
          <Avatar src="https://i.pravatar.cc/150?img=2" status="offline" />
          <span style="font-size:0.75rem;color:#6b7280;">Offline</span>
        </div>
        <div style="display:flex;flex-direction:column;align-items:center;gap:0.5rem;">
          <Avatar src="https://i.pravatar.cc/150?img=4" status="busy" />
          <span style="font-size:0.75rem;color:#6b7280;">Ocupado</span>
        </div>
        <div style="display:flex;flex-direction:column;align-items:center;gap:0.5rem;">
          <Avatar src="https://i.pravatar.cc/150?img=5" status="away" />
          <span style="font-size:0.75rem;color:#6b7280;">Ausente</span>
        </div>
      </div>
    `,
  }),
}

export const Bordered: Story = {
  name: 'Bordered',
  render: () => ({
    components: { Avatar },
    template: `
      <div style="display:flex;align-items:center;gap:1.5rem;padding:2rem;background:#e0e5ec;border-radius:1rem;">
        <Avatar name="JD" bordered />
        <Avatar src="https://i.pravatar.cc/150?img=7" bordered status="online" />
        <Avatar name="MR" variant="success" bordered />
      </div>
    `,
  }),
}

export const Group: Story = {
  name: 'AvatarGroup',
  render: () => ({
    components: { Avatar, AvatarGroup },
    template: `
      <div style="display:flex;flex-direction:column;gap:1.5rem;padding:2rem;background:#e0e5ec;border-radius:1rem;">
        <AvatarGroup :max="4">
          <Avatar src="https://i.pravatar.cc/150?img=1" />
          <Avatar src="https://i.pravatar.cc/150?img=2" />
          <Avatar src="https://i.pravatar.cc/150?img=3" />
          <Avatar src="https://i.pravatar.cc/150?img=4" />
          <Avatar src="https://i.pravatar.cc/150?img=5" />
          <Avatar src="https://i.pravatar.cc/150?img=6" />
        </AvatarGroup>

        <AvatarGroup :max="3">
          <Avatar name="Ana García" />
          <Avatar name="Luis Pérez" />
          <Avatar name="María López" />
          <Avatar name="Carlos Ruiz" />
          <Avatar name="Sara Torres" />
        </AvatarGroup>
      </div>
    `,
  }),
}
