import { describe, it, expect, vi } from 'vitest'
import '@testing-library/jest-dom/vitest'
import { render, screen, fireEvent } from '@testing-library/react'
import { Button } from './Button'
import { ThemeProvider } from '../../providers'
import { defaultTheme, type ThemeTokens } from '../../tokens'

describe('Button', () => {
  describe('renderizado básico', () => {
    it('renderiza el botón con el texto children', () => {
      render(<Button>Click me</Button>)
      expect(screen.getByRole('button', { name: 'Click me' })).toBeInTheDocument()
    })

    it('tiene displayName correcto', () => {
      expect(Button.displayName).toBe('Button')
    })
  })

  describe('variantes', () => {
    it('renderiza correctamente la variante primary', () => {
      render(<Button variant="primary">Button</Button>)
      const button = screen.getByRole('button')
      expect(button).toHaveClass('pf-m-primary')
    })

    it('renderiza correctamente la variante secondary', () => {
      render(<Button variant="secondary">Button</Button>)
      const button = screen.getByRole('button')
      expect(button).toHaveClass('pf-m-secondary')
    })

    it('renderiza correctamente la variante tertiary', () => {
      render(<Button variant="tertiary">Button</Button>)
      const button = screen.getByRole('button')
      expect(button).toHaveClass('pf-m-tertiary')
    })

    it('renderiza correctamente la variante danger', () => {
      render(<Button variant="danger">Button</Button>)
      const button = screen.getByRole('button')
      expect(button).toHaveClass('pf-m-danger')
    })

    it('renderiza correctamente la variante link', () => {
      render(<Button variant="link">Button</Button>)
      const button = screen.getByRole('button')
      expect(button).toHaveClass('pf-m-link')
    })

    it('usa primary como variante por defecto', () => {
      render(<Button>Button</Button>)
      const button = screen.getByRole('button')
      expect(button).toHaveClass('pf-m-primary')
    })
  })

  describe('tamaños', () => {
    it('aplica estilos de tamaño sm', () => {
      render(<Button size="sm">Small</Button>)
      const button = screen.getByRole('button')
      expect(button).toHaveStyle({
        fontSize: defaultTheme.typography.fontSizeSm,
      })
    })

    it('aplica estilos de tamaño md (default)', () => {
      render(<Button size="md">Medium</Button>)
      const button = screen.getByRole('button')
      expect(button).toHaveStyle({
        fontSize: defaultTheme.typography.fontSizeMd,
      })
    })

    it('aplica estilos de tamaño lg', () => {
      render(<Button size="lg">Large</Button>)
      const button = screen.getByRole('button')
      expect(button).toHaveStyle({
        fontSize: defaultTheme.typography.fontSizeLg,
      })
    })

    it('usa md como tamaño por defecto', () => {
      render(<Button>Button</Button>)
      const button = screen.getByRole('button')
      expect(button).toHaveStyle({
        fontSize: defaultTheme.typography.fontSizeMd,
      })
    })
  })

  describe('isBlock', () => {
    it('aplica width 100% cuando isBlock es true', () => {
      render(<Button isBlock>Block Button</Button>)
      const button = screen.getByRole('button')
      expect(button).toHaveStyle({ width: '100%' })
    })

    it('aplica display block cuando isBlock es true', () => {
      render(<Button isBlock>Block Button</Button>)
      const button = screen.getByRole('button')
      expect(button).toHaveStyle({ display: 'block' })
    })

    it('usa width auto cuando isBlock es false', () => {
      render(<Button isBlock={false}>Normal Button</Button>)
      const button = screen.getByRole('button')
      expect(button).toHaveStyle({ width: 'auto' })
    })

    it('usa inline-block por defecto', () => {
      render(<Button>Button</Button>)
      const button = screen.getByRole('button')
      expect(button).toHaveStyle({ display: 'inline-block' })
    })
  })

  describe('estados', () => {
    it('maneja el estado disabled correctamente', () => {
      render(<Button isDisabled>Disabled</Button>)
      const button = screen.getByRole('button')
      expect(button).toBeDisabled()
    })

    it('no está disabled por defecto', () => {
      render(<Button>Button</Button>)
      const button = screen.getByRole('button')
      expect(button).not.toBeDisabled()
    })
  })

  describe('eventos', () => {
    it('llama a onClick cuando se hace clic', () => {
      const handleClick = vi.fn()
      render(<Button onClick={handleClick}>Click me</Button>)
      fireEvent.click(screen.getByRole('button'))
      expect(handleClick).toHaveBeenCalledTimes(1)
    })

    it('no llama a onClick cuando está disabled', () => {
      const handleClick = vi.fn()
      render(
        <Button onClick={handleClick} isDisabled>
          Disabled
        </Button>
      )
      fireEvent.click(screen.getByRole('button'))
      expect(handleClick).not.toHaveBeenCalled()
    })
  })

  describe('props personalizadas', () => {
    it('aplica className adicional', () => {
      render(<Button className="custom-class">Button</Button>)
      const button = screen.getByRole('button')
      expect(button).toHaveClass('custom-class')
    })

    it('combina className con clases de variante', () => {
      render(
        <Button variant="secondary" className="custom-class">
          Button
        </Button>
      )
      const button = screen.getByRole('button')
      expect(button).toHaveClass('pf-m-secondary')
      expect(button).toHaveClass('custom-class')
    })

    it('aplica estilos inline personalizados', () => {
      render(<Button style={{ margin: '10px' }}>Button</Button>)
      const button = screen.getByRole('button')
      expect(button).toHaveStyle({ margin: '10px' })
    })

    it('los estilos personalizados se aplican al elemento', () => {
      render(<Button style={{ backgroundColor: 'red' }}>Button</Button>)
      const button = screen.getByRole('button')
      expect(button.style.backgroundColor).toBe('red')
    })
  })

  describe('integración con ThemeProvider', () => {
    it('usa tokens del tema personalizado', () => {
      const customTheme: ThemeTokens = {
        ...defaultTheme,
        colors: {
          ...defaultTheme.colors,
          primary: '#ff0000',
        },
      }

      render(
        <ThemeProvider theme={customTheme}>
          <Button variant="primary">Themed Button</Button>
        </ThemeProvider>
      )

      const button = screen.getByRole('button')
      expect(button).toHaveStyle({ backgroundColor: '#ff0000' })
    })

    it('usa tema por defecto cuando no hay ThemeProvider', () => {
      render(<Button variant="primary">Button</Button>)
      const button = screen.getByRole('button')
      expect(button).toHaveStyle({ backgroundColor: defaultTheme.colors.primary })
    })

    it('aplica colores de variante danger del tema', () => {
      render(<Button variant="danger">Danger</Button>)
      const button = screen.getByRole('button')
      expect(button).toHaveStyle({ backgroundColor: defaultTheme.colors.danger })
    })

    it('aplica estilos de variante link', () => {
      render(<Button variant="link">Link</Button>)
      const button = screen.getByRole('button')
      expect(button.style.backgroundColor).toBe('transparent')
      expect(button.style.textDecoration).toBe('underline')
    })
  })

  describe('props de PatternFly', () => {
    it('pasa props adicionales al componente PFButton', () => {
      render(<Button data-testid="custom-button">Button</Button>)
      expect(screen.getByTestId('custom-button')).toBeInTheDocument()
    })

    it('aplica aria-label correctamente', () => {
      render(<Button aria-label="Custom aria label">Button</Button>)
      expect(screen.getByLabelText('Custom aria label')).toBeInTheDocument()
    })

    it('aplica type button por defecto', () => {
      render(<Button>Button</Button>)
      const button = screen.getByRole('button')
      expect(button).toHaveAttribute('type', 'button')
    })
  })

  describe('estilos base', () => {
    it('aplica cursor pointer', () => {
      render(<Button>Button</Button>)
      const button = screen.getByRole('button')
      expect(button).toHaveStyle({ cursor: 'pointer' })
    })

    it('aplica text-align center', () => {
      render(<Button>Button</Button>)
      const button = screen.getByRole('button')
      expect(button).toHaveStyle({ textAlign: 'center' })
    })

    it('aplica border-radius del tema', () => {
      render(<Button>Button</Button>)
      const button = screen.getByRole('button')
      expect(button).toHaveStyle({ borderRadius: defaultTheme.borders.radiusSm })
    })

    it('aplica font-family del tema', () => {
      render(<Button>Button</Button>)
      const button = screen.getByRole('button')
      expect(button).toHaveStyle({ fontFamily: defaultTheme.typography.fontFamily })
    })
  })
})
