import type { Meta, StoryObj } from '@storybook/react'
import { Button } from '../lib/components/Button'
import { ThemeProvider } from '../lib/providers'

/**
 * El componente Button extiende PatternFly Button y permite
 * personalización mediante tokens inyectables.
 *
 * ## Características
 * - Múltiples variantes: primary, secondary, tertiary, danger, link
 * - Tres tamaños: sm, md, lg
 * - Modo block (ancho completo)
 * - Personalización mediante ThemeProvider
 * - Todos los props de PatternFly Button disponibles
 */
const meta = {
  title: 'Components/Button',
  component: Button,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component:
          'Componente Button que extiende PatternFly Button y permite personalización mediante tokens inyectables.',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['primary', 'secondary', 'tertiary', 'danger', 'link'],
      description: 'Variante visual del botón',
      table: {
        defaultValue: { summary: 'primary' },
        type: { summary: 'ButtonVariant' },
      },
    },
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg'],
      description: 'Tamaño del botón',
      table: {
        defaultValue: { summary: 'md' },
        type: { summary: 'ButtonSize' },
      },
    },
    isBlock: {
      control: 'boolean',
      description: 'Si es true, el botón ocupa todo el ancho disponible',
      table: {
        defaultValue: { summary: 'false' },
        type: { summary: 'boolean' },
      },
    },
    isDisabled: {
      control: 'boolean',
      description: 'Deshabilita el botón',
      table: {
        defaultValue: { summary: 'false' },
        type: { summary: 'boolean' },
      },
    },
    isLoading: {
      control: 'boolean',
      description: 'Muestra el botón en estado de carga',
      table: {
        defaultValue: { summary: 'false' },
        type: { summary: 'boolean' },
      },
    },
    children: {
      control: 'text',
      description: 'Contenido del botón',
      table: {
        type: { summary: 'ReactNode' },
      },
    },
  },
  args: {
    children: 'Button',
  },
} satisfies Meta<typeof Button>

export default meta
type Story = StoryObj<typeof meta>

/**
 * Botón con estilo primario (por defecto)
 */
export const Primary: Story = {
  args: {
    variant: 'primary',
    children: 'Primary Button',
  },
}

/**
 * Botón con estilo secundario
 */
export const Secondary: Story = {
  args: {
    variant: 'secondary',
    children: 'Secondary Button',
  },
}

/**
 * Botón con estilo terciario
 */
export const Tertiary: Story = {
  args: {
    variant: 'tertiary',
    children: 'Tertiary Button',
  },
}

/**
 * Botón de peligro para acciones destructivas
 */
export const Danger: Story = {
  args: {
    variant: 'danger',
    children: 'Danger Button',
  },
}

/**
 * Botón tipo link
 */
export const Link: Story = {
  args: {
    variant: 'link',
    children: 'Link Button',
  },
}

/**
 * Botón pequeño
 */
export const Small: Story = {
  args: {
    variant: 'primary',
    size: 'sm',
    children: 'Small Button',
  },
}

/**
 * Botón mediano (por defecto)
 */
export const Medium: Story = {
  args: {
    variant: 'primary',
    size: 'md',
    children: 'Medium Button',
  },
}

/**
 * Botón grande
 */
export const Large: Story = {
  args: {
    variant: 'primary',
    size: 'lg',
    children: 'Large Button',
  },
}

/**
 * Botón deshabilitado
 */
export const Disabled: Story = {
  args: {
    variant: 'primary',
    children: 'Disabled Button',
    isDisabled: true,
  },
}

/**
 * Botón en estado de carga
 */
export const Loading: Story = {
  args: {
    variant: 'primary',
    children: 'Loading Button',
    isLoading: true,
  },
}

/**
 * Botón de ancho completo
 */
export const Block: Story = {
  args: {
    variant: 'primary',
    children: 'Block Button',
    isBlock: true,
  },
  parameters: {
    layout: 'padded',
  },
}

/**
 * Todas las variantes de botones en un grid
 */
export const AllVariants: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', minWidth: '300px' }}>
      <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
        <Button variant="primary">Primary</Button>
        <Button variant="secondary">Secondary</Button>
        <Button variant="tertiary">Tertiary</Button>
        <Button variant="danger">Danger</Button>
        <Button variant="link">Link</Button>
      </div>
    </div>
  ),
}

/**
 * Todos los tamaños de botones
 */
export const AllSizes: Story = {
  render: () => (
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
  ),
}

/**
 * Botones con diferentes estados
 */
export const AllStates: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', minWidth: '300px' }}>
      <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
        <Button variant="primary">Normal</Button>
        <Button variant="primary" isDisabled>
          Disabled
        </Button>
        <Button variant="primary" isLoading>
          Loading
        </Button>
      </div>
      <Button variant="primary" isBlock>
        Block Button
      </Button>
    </div>
  ),
  parameters: {
    layout: 'padded',
  },
}

/**
 * Ejemplo con tema personalizado
 */
export const WithCustomTheme: Story = {
  render: () => (
    <ThemeProvider
      theme={{
        colors: {
          primary: '#ff4081',
          primaryText: '#ffffff',
          secondary: '#7c4dff',
          secondaryText: '#ffffff',
        },
      }}
    >
      <div style={{ display: 'flex', gap: '8px' }}>
        <Button variant="primary">Custom Primary</Button>
        <Button variant="secondary">Custom Secondary</Button>
      </div>
    </ThemeProvider>
  ),
}

/**
 * Botones con iconos (usando PatternFly icons)
 */
export const WithIcons: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
      <Button variant="primary">Button with text</Button>
      <Button variant="secondary">Another button</Button>
    </div>
  ),
}

/**
 * Ejemplo interactivo con todos los controles disponibles
 */
export const Playground: Story = {
  args: {
    variant: 'primary',
    size: 'md',
    children: 'Playground Button',
    isBlock: false,
    isDisabled: false,
    isLoading: false,
  },
}
