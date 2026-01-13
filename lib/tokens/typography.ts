/**
 * Typography tokens
 * En el futuro, estos tokens se importarán de una librería externa
 */

export interface TypographyTokens {
  fontFamily: string
  fontFamilyMono: string

  // Font sizes
  fontSizeXs: string
  fontSizeSm: string
  fontSizeMd: string
  fontSizeLg: string
  fontSizeXl: string

  // Font weights
  fontWeightNormal: number
  fontWeightMedium: number
  fontWeightBold: number

  // Line heights
  lineHeightSm: number
  lineHeightMd: number
  lineHeightLg: number
}

export const defaultTypographyTokens: TypographyTokens = {
  fontFamily:
    '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif',
  fontFamilyMono: '"Courier New", Courier, monospace',

  // Font sizes
  fontSizeXs: '0.75rem', // 12px
  fontSizeSm: '0.875rem', // 14px
  fontSizeMd: '1rem', // 16px
  fontSizeLg: '1.125rem', // 18px
  fontSizeXl: '1.25rem', // 20px

  // Font weights
  fontWeightNormal: 400,
  fontWeightMedium: 500,
  fontWeightBold: 700,

  // Line heights
  lineHeightSm: 1.3,
  lineHeightMd: 1.5,
  lineHeightLg: 1.7,
}
