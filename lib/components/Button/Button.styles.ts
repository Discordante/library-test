import type { CSSProperties } from 'react'
import type { ThemeTokens } from '../../tokens'
import type { ButtonVariant, ButtonSize } from './Button.types'

/**
 * Genera los estilos CSS inline basados en los tokens del tema
 */
export function getButtonStyles(
  variant: ButtonVariant,
  size: ButtonSize,
  theme: ThemeTokens,
  isBlock?: boolean
): CSSProperties {
  const { colors, spacing, typography, borders } = theme

  // Estilos base
  const baseStyles: CSSProperties = {
    fontFamily: typography.fontFamily,
    fontWeight: typography.fontWeightMedium,
    borderRadius: borders.radiusSm,
    cursor: 'pointer',
    transition: 'all 0.2s ease-in-out',
    display: isBlock ? 'block' : 'inline-block',
    width: isBlock ? '100%' : 'auto',
    textAlign: 'center',
    border: 'none',
    outline: 'none',
  }

  // Estilos por tamaño
  const sizeStyles: Record<ButtonSize, CSSProperties> = {
    sm: {
      padding: `${spacing.xs} ${spacing.sm}`,
      fontSize: typography.fontSizeSm,
    },
    md: {
      padding: `${spacing.sm} ${spacing.md}`,
      fontSize: typography.fontSizeMd,
    },
    lg: {
      padding: `${spacing.md} ${spacing.lg}`,
      fontSize: typography.fontSizeLg,
    },
  }

  // Estilos por variante
  const variantStyles: Record<ButtonVariant, CSSProperties> = {
    primary: {
      backgroundColor: colors.primary,
      color: colors.primaryText,
    },
    secondary: {
      backgroundColor: colors.secondary,
      color: colors.secondaryText,
    },
    tertiary: {
      backgroundColor: colors.neutral,
      color: colors.neutralText,
    },
    danger: {
      backgroundColor: colors.danger,
      color: colors.dangerText,
    },
    link: {
      backgroundColor: 'transparent',
      color: colors.primary,
      textDecoration: 'underline',
    },
  }

  return {
    ...baseStyles,
    ...sizeStyles[size],
    ...variantStyles[variant],
  }
}

/**
 * Genera las clases CSS para estados hover/active/focus
 */
export function getButtonStateClasses(variant: ButtonVariant): string {
  // Estas clases se manejan mejor con CSS modules o styled-components
  // Por ahora retornamos una clase base para PatternFly
  return `pf-v6-c-button pf-m-${variant}`
}
