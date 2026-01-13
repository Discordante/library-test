import type { Meta, StoryObj } from '@storybook/react'
import { Button } from '../Button'
import { ThemeProvider } from '../../../providers'

/**
 * Variantes visuales del botón.
 * Cada variante tiene un propósito específico en la UI.
 */
const meta = {
  title: 'Components/Button/Variants',
  component: Button,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component:
          'Explora las diferentes variantes visuales del botón. Cada variante está diseñada para un propósito específico en la interfaz.',
      },
    },
  },
  tags: ['autodocs'],
  decorators: [
    Story => (
      <ThemeProvider>
        <Story />
      </ThemeProvider>
    ),
  ],
} satisfies Meta<typeof Button>

export default meta
type Story = StoryObj<typeof meta>

/**
 * Variante principal para acciones primarias.
 * Usa esta variante para la acción más importante de la página.
 */
export const Primary: Story = {
  args: {
    variant: 'primary',
    children: 'Primary Button',
  },
}

/**
 * Variante secundaria para acciones de menor importancia.
 * Ideal para acciones alternativas o complementarias.
 */
export const Secondary: Story = {
  args: {
    variant: 'secondary',
    children: 'Secondary Button',
  },
}

/**
 * Variante terciaria para acciones de baja prioridad.
 * Útil para acciones opcionales o de tercer nivel.
 */
export const Tertiary: Story = {
  args: {
    variant: 'tertiary',
    children: 'Tertiary Button',
  },
}

/**
 * Variante de peligro para acciones destructivas.
 * Usa esta variante para eliminar, descartar o realizar acciones irreversibles.
 */
export const Danger: Story = {
  args: {
    variant: 'danger',
    children: 'Delete Item',
  },
}

/**
 * Variante tipo link para navegación.
 * Aparenta ser un enlace pero mantiene la funcionalidad de botón.
 */
export const Link: Story = {
  args: {
    variant: 'link',
    children: 'Learn more',
  },
}

/**
 * Comparación de todas las variantes disponibles.
 * Visualiza todas las opciones en un solo lugar.
 */
export const AllVariants: Story = {
  args: {},
  render: () => (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '16px',
        minWidth: '300px',
      }}
    >
      <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
        <Button variant="primary">Primary</Button>
        <Button variant="secondary">Secondary</Button>
        <Button variant="tertiary">Tertiary</Button>
      </div>
      <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
        <Button variant="danger">Danger</Button>
        <Button variant="link">Link</Button>
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Vista comparativa de todas las variantes disponibles.',
      },
    },
  },
}
