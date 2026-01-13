import type { Meta, StoryObj } from '@storybook/react'
import { Button } from './Button'
import { ThemeProvider } from '../../providers'

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
 *
 * ## Navegación
 * - **Variants**: Explora todas las variantes visuales
 * - **Sizes**: Compara los diferentes tamaños
 * - **States**: Revisa estados interactivos (disabled, loading)
 * - **Theming**: Ejemplos de personalización con ThemeProvider
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
 * Ejemplo básico del botón con configuración por defecto.
 * Usa los controles interactivos abajo para explorar todas las opciones.
 */
export const Default: Story = {
  args: {
    variant: 'primary',
    size: 'md',
    children: 'Button',
  },
}

/**
 * Playground interactivo con todos los controles disponibles.
 * Experimenta con diferentes combinaciones de props.
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
