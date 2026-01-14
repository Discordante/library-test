import type { Meta, StoryObj } from '@storybook/react'
import type { ThemeTokens } from '../../../tokens'
import { Button } from '../Button'
import { ThemeProvider } from '../../../providers'

/**
 * Personalización mediante ThemeProvider.
 * Inyecta tokens personalizados para crear tu propio sistema de diseño.
 */
const meta = {
  title: 'Components/Button/Theming',
  component: Button,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component:
          'El componente Button puede ser personalizado completamente mediante ThemeProvider. Inyecta tus propios colores, tipografía, espaciado y más para crear tu sistema de diseño único.',
      },
    },
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Button>

export default meta
type Story = StoryObj<typeof meta>

/**
 * Tema por defecto.
 * Sin personalización, usa los valores por defecto de PatternFly.
 */
export const DefaultTheme: Story = {
  args: { children: '' },
  render: () => (
    <ThemeProvider>
      <div style={{ display: 'flex', gap: '8px' }}>
        <Button variant="primary">Primary</Button>
        <Button variant="secondary">Secondary</Button>
        <Button variant="danger">Danger</Button>
      </div>
    </ThemeProvider>
  ),
}

/**
 * Tema personalizado: Material Design.
 * Ejemplo inspirado en Material Design con colores vibrantes.
 */
export const MaterialTheme: Story = {
  args: { children: '' },
  render: () => (
    <ThemeProvider
      theme={
        {
          colors: {
            primary: '#6200ee',
            primaryText: '#ffffff',
            secondary: '#03dac6',
            secondaryText: '#000000',
          },
        } as Partial<ThemeTokens>
      }
    >
      <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
        <Button variant="primary">Material Primary</Button>
        <Button variant="secondary">Material Secondary</Button>
        <Button variant="tertiary">Material Tertiary</Button>
      </div>
    </ThemeProvider>
  ),
}

/**
 * Tema personalizado: Dark Mode.
 * Paleta de colores para modo oscuro.
 */
export const DarkTheme: Story = {
  args: { children: '' },
  render: () => (
    <div
      style={{
        padding: '24px',
        backgroundColor: '#1a1a1a',
        borderRadius: '8px',
      }}
    >
      <ThemeProvider
        theme={
          {
            colors: {
              primary: '#bb86fc',
              primaryText: '#000000',
              secondary: '#03dac6',
              secondaryText: '#000000',
            },
          } as Partial<ThemeTokens>
        }
      >
        <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
          <Button variant="primary">Dark Primary</Button>
          <Button variant="secondary">Dark Secondary</Button>
          <Button variant="tertiary">Dark Tertiary</Button>
        </div>
      </ThemeProvider>
    </div>
  ),
  parameters: {
    backgrounds: { default: 'dark' },
  },
}

/**
 * Tema personalizado: Brand Colors.
 * Ejemplo con colores de marca personalizados.
 */
export const BrandTheme: Story = {
  args: { children: '' },
  render: () => (
    <ThemeProvider
      theme={
        {
          colors: {
            primary: '#ff4081',
            primaryText: '#ffffff',
            secondary: '#7c4dff',
            secondaryText: '#ffffff',
            danger: '#f44336',
            dangerText: '#ffffff',
          },
        } as Partial<ThemeTokens>
      }
    >
      <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
        <Button variant="primary">Brand Primary</Button>
        <Button variant="secondary">Brand Secondary</Button>
        <Button variant="danger">Brand Danger</Button>
      </div>
    </ThemeProvider>
  ),
}

/**
 * Tema personalizado: Minimal.
 * Estilo minimalista con colores sutiles.
 */
export const MinimalTheme: Story = {
  args: { children: '' },
  render: () => (
    <ThemeProvider
      theme={
        {
          colors: {
            primary: '#2c2c2c',
            primaryText: '#ffffff',
            secondary: '#f5f5f5',
            secondaryText: '#2c2c2c',
          },
        } as Partial<ThemeTokens>
      }
    >
      <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
        <Button variant="primary">Minimal Primary</Button>
        <Button variant="secondary">Minimal Secondary</Button>
        <Button variant="tertiary">Minimal Tertiary</Button>
      </div>
    </ThemeProvider>
  ),
}

/**
 * Comparación de múltiples temas.
 * Visualiza cómo el mismo botón se adapta a diferentes temas.
 */
export const MultipleThemes: Story = {
  args: { children: '' },
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
      <div>
        <h4 style={{ margin: '0 0 12px 0', fontSize: '14px', fontWeight: 600 }}>Default Theme</h4>
        <ThemeProvider>
          <div style={{ display: 'flex', gap: '8px' }}>
            <Button variant="primary">Primary</Button>
            <Button variant="secondary">Secondary</Button>
          </div>
        </ThemeProvider>
      </div>

      <div>
        <h4 style={{ margin: '0 0 12px 0', fontSize: '14px', fontWeight: 600 }}>Material Design</h4>
        <ThemeProvider
          theme={
            {
              colors: {
                primary: '#6200ee',
                primaryText: '#ffffff',
                secondary: '#03dac6',
                secondaryText: '#000000',
              },
            } as Partial<ThemeTokens>
          }
        >
          <div style={{ display: 'flex', gap: '8px' }}>
            <Button variant="primary">Primary</Button>
            <Button variant="secondary">Secondary</Button>
          </div>
        </ThemeProvider>
      </div>

      <div>
        <h4 style={{ margin: '0 0 12px 0', fontSize: '14px', fontWeight: 600 }}>Brand Colors</h4>
        <ThemeProvider
          theme={
            {
              colors: {
                primary: '#ff4081',
                primaryText: '#ffffff',
                secondary: '#7c4dff',
                secondaryText: '#ffffff',
              },
            } as Partial<ThemeTokens>
          }
        >
          <div style={{ display: 'flex', gap: '8px' }}>
            <Button variant="primary">Primary</Button>
            <Button variant="secondary">Secondary</Button>
          </div>
        </ThemeProvider>
      </div>
    </div>
  ),
  parameters: {
    layout: 'padded',
  },
}

/**
 * Ejemplo de código para personalización.
 * Muestra cómo implementar un tema personalizado en tu aplicación.
 */
export const CustomizationGuide: Story = {
  args: { children: '' },
  render: () => (
    <ThemeProvider
      theme={
        {
          colors: {
            primary: '#ff6b35',
            primaryText: '#ffffff',
            secondary: '#004e89',
            secondaryText: '#ffffff',
          },
        } as Partial<ThemeTokens>
      }
    >
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '16px',
          maxWidth: '400px',
        }}
      >
        <div
          style={{
            padding: '16px',
            backgroundColor: '#f5f5f5',
            borderRadius: '4px',
            fontSize: '12px',
            fontFamily: 'monospace',
          }}
        >
          <pre style={{ margin: 0, whiteSpace: 'pre-wrap' }}>
            {`<ThemeProvider
  theme={{
    colors: {
      primary: '#ff6b35',
      primaryText: '#ffffff',
      secondary: '#004e89',
      secondaryText: '#ffffff',
    },
  }}
>
  <Button variant="primary">
    Custom Button
  </Button>
</ThemeProvider>`}
          </pre>
        </div>
        <div style={{ display: 'flex', gap: '8px' }}>
          <Button variant="primary">Custom Primary</Button>
          <Button variant="secondary">Custom Secondary</Button>
        </div>
      </div>
    </ThemeProvider>
  ),
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        story: 'Ejemplo de código mostrando cómo personalizar los colores del botón.',
      },
    },
  },
}
