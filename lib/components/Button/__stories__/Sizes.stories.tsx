import type { Meta, StoryObj } from '@storybook/react'
import { Button } from '../Button'
import { ThemeProvider } from '../../../providers'

/**
 * Tamaños disponibles para el botón.
 * Elige el tamaño apropiado según la jerarquía y el espacio disponible.
 */
const meta = {
  title: 'Components/Button/Sizes',
  component: Button,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component:
          'El componente Button está disponible en tres tamaños: small, medium y large. Elige el tamaño apropiado según el contexto y la jerarquía visual.',
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
 * Botón pequeño (sm).
 * Ideal para espacios reducidos, toolbars o UI compactas.
 */
export const Small: Story = {
  args: {
    variant: 'primary',
    size: 'sm',
    children: 'Small',
  },
}

/**
 * Botón mediano (md) - Tamaño por defecto.
 * El tamaño estándar para la mayoría de casos de uso.
 */
export const Medium: Story = {
  args: {
    variant: 'primary',
    size: 'md',
    children: 'Medium',
  },
}

/**
 * Botón grande (lg).
 * Perfecto para CTAs prominentes o interfaces móviles.
 */
export const Large: Story = {
  args: {
    variant: 'primary',
    size: 'lg',
    children: 'Large',
  },
}

/**
 * Comparación de todos los tamaños disponibles.
 * Visualiza las diferencias de tamaño alineadas verticalmente.
 */
export const AllSizes: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '12px', alignItems: 'center' }}>
      <Button variant="primary" size="sm">
        Small
      </Button>
      <Button variant="primary" size="md">
        Medium
      </Button>
      <Button variant="primary" size="lg">
        Large
      </Button>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Vista comparativa de los tres tamaños disponibles.',
      },
    },
  },
}

/**
 * Tamaños aplicados a diferentes variantes.
 * Muestra cómo los tamaños se adaptan a cada variante.
 */
export const SizesByVariant: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
      <div style={{ display: 'flex', gap: '8px', alignItems: 'center' }}>
        <Button variant="primary" size="sm">
          Small
        </Button>
        <Button variant="primary" size="md">
          Medium
        </Button>
        <Button variant="primary" size="lg">
          Large
        </Button>
      </div>
      <div style={{ display: 'flex', gap: '8px', alignItems: 'center' }}>
        <Button variant="secondary" size="sm">
          Small
        </Button>
        <Button variant="secondary" size="md">
          Medium
        </Button>
        <Button variant="secondary" size="lg">
          Large
        </Button>
      </div>
      <div style={{ display: 'flex', gap: '8px', alignItems: 'center' }}>
        <Button variant="danger" size="sm">
          Small
        </Button>
        <Button variant="danger" size="md">
          Medium
        </Button>
        <Button variant="danger" size="lg">
          Large
        </Button>
      </div>
    </div>
  ),
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        story: 'Comparación de tamaños aplicados a diferentes variantes de botón.',
      },
    },
  },
}
