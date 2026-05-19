import type { Preview } from '@storybook/vue3'
import '../src/styles/main.css'
import { INITIAL_VIEWPORTS } from '@storybook/addon-viewport'

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    viewport: {
      viewports: INITIAL_VIEWPORTS,
      defaultViewport: 'ipad',
    },
  },
  // initialGlobals: {
  //   viewport: { value: 'ipad', isRotated: false },
  // },
}

export default preview
