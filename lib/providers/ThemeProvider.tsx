import { useMemo, type ReactNode } from 'react'
import type { ThemeTokens } from '../tokens'
import { defaultTheme } from '../tokens'
import { ThemeContext } from './ThemeContext'

export interface ThemeProviderProps {
  children: ReactNode
  /**
   * Custom theme tokens
   * You can partially override the default tokens
   *
   * @example
   * // Import tokens from your external design tokens library
   * import { myCustomTokens } from '@your-company/design-tokens'
   *
   * <ThemeProvider theme={myCustomTokens}>
   *   <App />
   * </ThemeProvider>
   *
   * @example
   * // Or override only specific tokens
   * <ThemeProvider theme={{ colors: { primary: '#ff0000' } }}>
   *   <App />
   * </ThemeProvider>
   */
  theme?: Partial<ThemeTokens>
}

/**
 * Deep merge utility for theme tokens
 * Ensures nested objects are properly merged without losing values
 */
function deepMergeTheme(base: ThemeTokens, overrides: Partial<ThemeTokens>): ThemeTokens {
  return {
    colors: { ...base.colors, ...(overrides.colors ?? {}) },
    spacing: { ...base.spacing, ...(overrides.spacing ?? {}) },
    typography: { ...base.typography, ...(overrides.typography ?? {}) },
    borders: { ...base.borders, ...(overrides.borders ?? {}) },
    shadows: { ...base.shadows, ...(overrides.shadows ?? {}) },
  }
}

/**
 * Provider for injecting design tokens throughout the application
 *
 * @example
 * // Basic usage with default theme
 * <ThemeProvider>
 *   <App />
 * </ThemeProvider>
 *
 * @example
 * // With custom tokens from your external library
 * import { myTokens } from '@my-company/design-tokens'
 *
 * <ThemeProvider theme={myTokens}>
 *   <App />
 * </ThemeProvider>
 */
export function ThemeProvider({ children, theme }: ThemeProviderProps): React.JSX.Element {
  // Deep merge custom tokens with defaults
  const mergedTheme = useMemo<ThemeTokens>(() => {
    if (!theme) return defaultTheme
    return deepMergeTheme(defaultTheme, theme)
  }, [theme])

  return <ThemeContext.Provider value={mergedTheme}>{children}</ThemeContext.Provider>
}
