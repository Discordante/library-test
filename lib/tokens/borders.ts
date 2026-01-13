/**
 * Border tokens
 * En el futuro, estos tokens se importarán de una librería externa
 */

export interface BorderTokens {
  radiusNone: string
  radiusSm: string
  radiusMd: string
  radiusLg: string
  radiusFull: string

  widthSm: string
  widthMd: string
  widthLg: string
}

export const defaultBorderTokens: BorderTokens = {
  radiusNone: '0',
  radiusSm: '0.25rem', // 4px
  radiusMd: '0.5rem', // 8px
  radiusLg: '1rem', // 16px
  radiusFull: '9999px',

  widthSm: '1px',
  widthMd: '2px',
  widthLg: '4px',
}
