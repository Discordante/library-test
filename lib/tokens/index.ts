/**
 * Design tokens centralizados
 * En el futuro, importarás estos tokens desde tu librería externa:
 *
 * import { ColorTokens, SpacingTokens, ... } from '@tu-empresa/design-tokens'
 *
 * Por ahora, usamos tokens por defecto que puedes sobrescribir mediante ThemeProvider
 */

export * from './colors'
export * from './spacing'
export * from './typography'
export * from './borders'
export * from './shadows'

import type { ColorTokens } from './colors'
import type { SpacingTokens } from './spacing'
import type { TypographyTokens } from './typography'
import type { BorderTokens } from './borders'
import type { ShadowTokens } from './shadows'

import { defaultColorTokens } from './colors'
import { defaultSpacingTokens } from './spacing'
import { defaultTypographyTokens } from './typography'
import { defaultBorderTokens } from './borders'
import { defaultShadowTokens } from './shadows'

/**
 * Interface completa de tokens del tema
 */
export interface ThemeTokens {
  colors: ColorTokens
  spacing: SpacingTokens
  typography: TypographyTokens
  borders: BorderTokens
  shadows: ShadowTokens
}

/**
 * Tema por defecto con todos los tokens
 * Puedes sobrescribir parcialmente cualquier token usando ThemeProvider
 */
export const defaultTheme: ThemeTokens = {
  colors: defaultColorTokens,
  spacing: defaultSpacingTokens,
  typography: defaultTypographyTokens,
  borders: defaultBorderTokens,
  shadows: defaultShadowTokens,
}
