import React from 'react'
import { Button as PFButton } from '@patternfly/react-core'
import { useTheme } from '../../providers'
import { classNames } from '../../utils'
import { getButtonStyles, getButtonStateClasses } from './Button.styles'
import type { ButtonProps } from './Button.types'

/**
 * Componente Button que extiende PatternFly Button
 * y permite personalización mediante tokens inyectables
 *
 * @example
 * // Uso básico
 * <Button variant="primary" size="md">Click me</Button>
 *
 * @example
 * // Con tema personalizado
 * <ThemeProvider theme={{ colors: { primary: '#ff0000' } }}>
 *   <Button variant="primary">Red button</Button>
 * </ThemeProvider>
 *
 * @example
 * // Con props de PatternFly
 * <Button variant="primary" isDisabled icon={<PlusIcon />}>
 *   Add item
 * </Button>
 */
export const Button: React.FC<ButtonProps> = ({
  variant = 'primary',
  size = 'md',
  isBlock = false,
  className,
  children,
  style,
  ...pfButtonProps
}) => {
  const theme = useTheme()

  // Genera estilos basados en tokens
  const tokenStyles = getButtonStyles(variant, size, theme, isBlock)

  // Combina las clases CSS
  const buttonClasses = classNames(getButtonStateClasses(variant), className)

  // Combina estilos inline de tokens con estilos personalizados
  const combinedStyles = {
    ...tokenStyles,
    ...style,
  }

  return (
    <PFButton
      {...pfButtonProps}
      variant={variant as never}
      className={buttonClasses}
      style={combinedStyles}
    >
      {children}
    </PFButton>
  )
}

Button.displayName = 'Button'
