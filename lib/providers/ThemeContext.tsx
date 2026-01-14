import { createContext, useContext } from 'react'
import type { ThemeTokens } from '../tokens'
import { defaultTheme } from '../tokens'

/**
 * Context for theme tokens
 * Defaults to defaultTheme so components work without ThemeProvider
 */
export const ThemeContext = createContext<ThemeTokens>(defaultTheme)

/**
 * Hook to access theme tokens
 * @example
 * const { colors, spacing } = useTheme()
 * const buttonColor = colors.primary
 *
 * @returns The current theme tokens from context, or defaults if no provider
 */
export function useTheme(): ThemeTokens {
  const context = useContext(ThemeContext)
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider')
  }
  return context
}
