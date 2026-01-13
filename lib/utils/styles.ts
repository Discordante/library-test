import type { CSSProperties } from 'react'

/**
 * Convierte un objeto de estilos CSS en un string CSS
 * Útil para inyectar estilos dinámicos basados en tokens
 */
export function stylesToString(styles: CSSProperties): string {
  return Object.entries(styles)
    .map(([key, value]) => {
      const cssKey = key.replace(/([A-Z])/g, '-$1').toLowerCase()
      return `${cssKey}: ${value};`
    })
    .join(' ')
}

/**
 * Crea variables CSS custom a partir de un objeto
 * @example
 * createCssVars({ primary: '#0066cc' }) // { '--primary': '#0066cc' }
 */
export function createCssVars(vars: Record<string, string | number>): CSSProperties {
  const cssVars: CSSProperties = {}
  Object.entries(vars).forEach(([key, value]) => {
    cssVars[`--${key}` as keyof CSSProperties] = String(value) as never
  })
  return cssVars
}
