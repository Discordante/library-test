import { Button as PFButton, type ButtonProps as PFButtonProps } from '@patternfly/react-core'
import { useTheme } from '../../providers'
import { classNames } from '../../utils'
import { getButtonStyles, getButtonStateClasses } from './Button.styles'
import type { ButtonProps, ButtonVariant } from './Button.types'

/**
 * Mapping from our ButtonVariant to PatternFly's variant prop
 * This avoids unsafe type assertions
 */
const variantToPFVariant: Record<ButtonVariant, PFButtonProps['variant']> = {
  primary: 'primary',
  secondary: 'secondary',
  tertiary: 'tertiary',
  danger: 'danger',
  link: 'link',
}

/**
 * Button component that extends PatternFly Button
 * and allows customization via injectable design tokens
 *
 * @example
 * // Basic usage
 * <Button variant="primary" size="md">Click me</Button>
 *
 * @example
 * // With custom theme
 * <ThemeProvider theme={{ colors: { primary: '#ff0000' } }}>
 *   <Button variant="primary">Red button</Button>
 * </ThemeProvider>
 *
 * @example
 * // With PatternFly props
 * <Button variant="primary" isDisabled icon={<PlusIcon />}>
 *   Add item
 * </Button>
 */
export function Button({
  variant = 'primary',
  size = 'md',
  isBlock = false,
  className,
  children,
  style,
  ...pfButtonProps
}: ButtonProps): React.JSX.Element {
  const theme = useTheme()

  // Generate styles based on tokens
  const tokenStyles = getButtonStyles(variant, size, theme, isBlock)

  // Combine CSS classes including interactive state classes
  const buttonClasses = classNames(
    'mcl-button',
    `mcl-button--${variant}`,
    getButtonStateClasses(variant),
    className
  )

  // Combine inline token styles with custom styles
  const combinedStyles = {
    ...tokenStyles,
    ...style,
  }

  return (
    <PFButton
      {...pfButtonProps}
      variant={variantToPFVariant[variant]}
      className={buttonClasses}
      style={combinedStyles}
    >
      {children}
    </PFButton>
  )
}

Button.displayName = 'Button'
