import type { Preview } from '@storybook/react-vite'
import type { Decorator } from '@storybook/react'
import React from 'react'
import { ThemeProvider } from '../lib/providers'
import '@patternfly/react-core/dist/styles/base.css'

// Decorador para envolver todas las stories con ThemeProvider
const withThemeProvider: Decorator = Story => (
  <ThemeProvider>
    <Story />
  </ThemeProvider>
)

const preview: Preview = {
  decorators: [withThemeProvider],
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },

    a11y: {
      // 'todo' - show a11y violations in the test UI only
      // 'error' - fail CI on a11y violations
      // 'off' - skip a11y checks entirely
      test: 'todo',
    },
  },
}

export default preview
