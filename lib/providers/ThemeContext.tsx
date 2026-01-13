import { createContext, useContext } from 'react'
import type { ThemeTokens } from '../tokens'
import { defaultTheme } from '../tokens'

/**
 * Context para los tokens del tema
 */
export const ThemeContext = createContext<ThemeTokens>(defaultTheme)

/**
 * Hook para acceder a los tokens del tema
 * @example
 * const { colors, spacing } = useTheme()
 * const buttonColor = colors.primary
 */
export const useTheme = () => {
  const context = useContext(ThemeContext)
  if (!context) {
    throw new Error('useTheme debe usarse dentro de un ThemeProvider')
  }
  return context
}
