import type { ButtonProps as PFButtonProps } from '@patternfly/react-core'

/**
 * Variantes del botón
 */
export type ButtonVariant = 'primary' | 'secondary' | 'tertiary' | 'danger' | 'link'

/**
 * Tamaños del botón
 */
export type ButtonSize = 'sm' | 'md' | 'lg'

/**
 * Props del componente Button
 * Extiende las props de PatternFly Button y permite personalización vía tokens
 */
export interface ButtonProps extends Omit<PFButtonProps, 'variant' | 'size'> {
  /**
   * Variante visual del botón
   * @default 'primary'
   */
  variant?: ButtonVariant

  /**
   * Tamaño del botón
   * @default 'md'
   */
  size?: ButtonSize

  /**
   * Si es true, el botón ocupa todo el ancho disponible
   * @default false
   */
  isBlock?: boolean

  /**
   * Contenido del botón
   */
  children: React.ReactNode
}
