import type { Meta, StoryObj } from '@storybook/react'
import { Button } from '../Button'
import { ThemeProvider } from '../../../providers'

/**
 * Estados interactivos del botón.
 * Gestiona el feedback visual durante interacciones del usuario.
 */
const meta = {
  title: 'Components/Button/States',
  component: Button,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component:
          'El botón soporta múltiples estados para proporcionar feedback visual durante las interacciones: normal, disabled, loading y block.',
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
 * Estado normal (por defecto).
 * El botón está activo y listo para interacciones.
 */
export const Normal: Story = {
  args: {
    variant: 'primary',
    children: 'Normal Button',
  },
}

/**
 * Estado deshabilitado.
 * El botón no responde a interacciones del usuario.
 */
export const Disabled: Story = {
  args: {
    variant: 'primary',
    children: 'Disabled Button',
    isDisabled: true,
  },
}

/**
 * Estado de carga.
 * Indica que una acción está en progreso.
 */
export const Loading: Story = {
  args: {
    variant: 'primary',
    children: 'Loading...',
    isLoading: true,
  },
}

/**
 * Modo block (ancho completo).
 * El botón se expande para ocupar todo el ancho del contenedor.
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
 * Comparación de todos los estados.
 * Visualiza los diferentes estados del botón en una misma vista.
 */
export const AllStates: Story = {
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
    docs: {
      description: {
        story: 'Vista comparativa de todos los estados disponibles.',
      },
    },
  },
}

/**
 * Estados aplicados a diferentes variantes.
 * Muestra cómo cada estado se ve en las diferentes variantes.
 */
export const StatesByVariant: Story = {
  render: () => (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '16px',
        minWidth: '400px',
      }}
    >
      <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
        <Button variant="primary">Primary</Button>
        <Button variant="primary" isDisabled>
          Disabled
        </Button>
        <Button variant="primary" isLoading>
          Loading
        </Button>
      </div>
      <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
        <Button variant="secondary">Secondary</Button>
        <Button variant="secondary" isDisabled>
          Disabled
        </Button>
        <Button variant="secondary" isLoading>
          Loading
        </Button>
      </div>
      <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
        <Button variant="danger">Danger</Button>
        <Button variant="danger" isDisabled>
          Disabled
        </Button>
        <Button variant="danger" isLoading>
          Loading
        </Button>
      </div>
    </div>
  ),
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        story: 'Comparación de estados en diferentes variantes de botón.',
      },
    },
  },
}

// Importar React para el ejemplo interactivo
import React from 'react'

// Componente para el ejemplo interactivo
const FormExampleComponent = () => {
  const [isSubmitting, setIsSubmitting] = React.useState(false)

  const handleSubmit = () => {
    setIsSubmitting(true)
    setTimeout(() => setIsSubmitting(false), 2000)
  }

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '12px',
        minWidth: '300px',
      }}
    >
      <div
        style={{
          padding: '16px',
          border: '1px solid #ddd',
          borderRadius: '4px',
        }}
      >
        <p style={{ margin: '0 0 16px 0', fontSize: '14px' }}>Ejemplo de formulario con estados</p>
        <div style={{ display: 'flex', gap: '8px' }}>
          <Button variant="primary" isLoading={isSubmitting} onClick={handleSubmit}>
            {isSubmitting ? 'Enviando...' : 'Enviar'}
          </Button>
          <Button variant="secondary" isDisabled={isSubmitting}>
            Cancelar
          </Button>
        </div>
      </div>
    </div>
  )
}

/**
 * Ejemplo de uso real: Formulario con estados.
 * Simula un flujo típico de submit con estados.
 */
export const FormExample: Story = {
  render: () => <FormExampleComponent />,
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        story: 'Ejemplo interactivo de un formulario con botones que cambian de estado.',
      },
    },
  },
}
