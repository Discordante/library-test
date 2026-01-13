/**
 * Color tokens
 * En el futuro, estos tokens se importarán de una librería externa
 */

export interface ColorTokens {
  // Primary colors
  primary: string
  primaryHover: string
  primaryActive: string
  primaryText: string

  // Secondary colors
  secondary: string
  secondaryHover: string
  secondaryActive: string
  secondaryText: string

  // Neutral colors
  neutral: string
  neutralHover: string
  neutralActive: string
  neutralText: string

  // Danger colors
  danger: string
  dangerHover: string
  dangerActive: string
  dangerText: string

  // Outline/border
  border: string
  borderFocus: string

  // Background
  background: string
  backgroundHover: string
}

export const defaultColorTokens: ColorTokens = {
  // Primary (blue)
  primary: '#0066cc',
  primaryHover: '#004080',
  primaryActive: '#002952',
  primaryText: '#ffffff',

  // Secondary (gray)
  secondary: '#6c757d',
  secondaryHover: '#5a6268',
  secondaryActive: '#545b62',
  secondaryText: '#ffffff',

  // Neutral
  neutral: '#f0f0f0',
  neutralHover: '#e0e0e0',
  neutralActive: '#d0d0d0',
  neutralText: '#151515',

  // Danger (red)
  danger: '#c9190b',
  dangerHover: '#a30000',
  dangerActive: '#7d0000',
  dangerText: '#ffffff',

  // Borders
  border: '#d2d2d2',
  borderFocus: '#0066cc',

  // Background
  background: '#ffffff',
  backgroundHover: '#f5f5f5',
}
