import React, { useMemo } from 'react'
import type { ThemeTokens } from '../tokens'
import { defaultTheme } from '../tokens'
import { ThemeContext } from './ThemeContext'

export interface ThemeProviderProps {
  children: React.ReactNode
  /**
   * Tokens del tema personalizados
   * Puedes sobrescribir parcialmente los tokens por defecto
   *
   * @example
   * // Importa tus tokens desde tu librería externa
   * import { myCustomTokens } from '@tu-empresa/design-tokens'
   *
   * <ThemeProvider theme={myCustomTokens}>
   *   <App />
   * </ThemeProvider>
   *
   * @example
   * // O sobrescribe solo algunos tokens
   * <ThemeProvider theme={{ colors: { primary: '#ff0000' } }}>
   *   <App />
   * </ThemeProvider>
   */
  theme?: Partial<ThemeTokens>
}

/**
 * Provider para inyectar tokens de diseño en toda la aplicación
 *
 * @example
 * // Uso básico con tema por defecto
 * <ThemeProvider>
 *   <App />
 * </ThemeProvider>
 *
 * @example
 * // Con tokens personalizados de tu librería externa
 * import { myTokens } from '@mi-empresa/design-tokens'
 *
 * <ThemeProvider theme={myTokens}>
 *   <App />
 * </ThemeProvider>
 */
export const ThemeProvider: React.FC<ThemeProviderProps> = ({ children, theme }) => {
  // Merge deep de los tokens personalizados con los por defecto
  const mergedTheme = useMemo<ThemeTokens>(() => {
    if (!theme) return defaultTheme

    return {
      colors: { ...defaultTheme.colors, ...theme.colors },
      spacing: { ...defaultTheme.spacing, ...theme.spacing },
      typography: { ...defaultTheme.typography, ...theme.typography },
      borders: { ...defaultTheme.borders, ...theme.borders },
      shadows: { ...defaultTheme.shadows, ...theme.shadows },
    }
  }, [theme])

  return <ThemeContext.Provider value={mergedTheme}>{children}</ThemeContext.Provider>
}
