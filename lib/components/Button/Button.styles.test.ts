import { describe, it, expect } from 'vitest'
import { getButtonStyles, getButtonStateClasses } from './Button.styles'
import { defaultTheme } from '../../tokens'

describe('Button.styles', () => {
  describe('getButtonStyles', () => {
    describe('estilos base', () => {
      it('incluye font-family del tema', () => {
        const styles = getButtonStyles('primary', 'md', defaultTheme)
        expect(styles.fontFamily).toBe(defaultTheme.typography.fontFamily)
      })

      it('incluye font-weight medium', () => {
        const styles = getButtonStyles('primary', 'md', defaultTheme)
        expect(styles.fontWeight).toBe(defaultTheme.typography.fontWeightMedium)
      })

      it('incluye border-radius del tema', () => {
        const styles = getButtonStyles('primary', 'md', defaultTheme)
        expect(styles.borderRadius).toBe(defaultTheme.borders.radiusSm)
      })

      it('incluye cursor pointer', () => {
        const styles = getButtonStyles('primary', 'md', defaultTheme)
        expect(styles.cursor).toBe('pointer')
      })

      it('incluye transición', () => {
        const styles = getButtonStyles('primary', 'md', defaultTheme)
        expect(styles.transition).toBe('all 0.2s ease-in-out')
      })

      it('incluye text-align center', () => {
        const styles = getButtonStyles('primary', 'md', defaultTheme)
        expect(styles.textAlign).toBe('center')
      })

      it('incluye border none', () => {
        const styles = getButtonStyles('primary', 'md', defaultTheme)
        expect(styles.border).toBe('none')
      })

      it('incluye outline none', () => {
        const styles = getButtonStyles('primary', 'md', defaultTheme)
        expect(styles.outline).toBe('none')
      })
    })

    describe('estilos por tamaño', () => {
      it('aplica estilos correctos para tamaño sm', () => {
        const styles = getButtonStyles('primary', 'sm', defaultTheme)
        expect(styles.padding).toBe(`${defaultTheme.spacing.xs} ${defaultTheme.spacing.sm}`)
        expect(styles.fontSize).toBe(defaultTheme.typography.fontSizeSm)
      })

      it('aplica estilos correctos para tamaño md', () => {
        const styles = getButtonStyles('primary', 'md', defaultTheme)
        expect(styles.padding).toBe(`${defaultTheme.spacing.sm} ${defaultTheme.spacing.md}`)
        expect(styles.fontSize).toBe(defaultTheme.typography.fontSizeMd)
      })

      it('aplica estilos correctos para tamaño lg', () => {
        const styles = getButtonStyles('primary', 'lg', defaultTheme)
        expect(styles.padding).toBe(`${defaultTheme.spacing.md} ${defaultTheme.spacing.lg}`)
        expect(styles.fontSize).toBe(defaultTheme.typography.fontSizeLg)
      })
    })

    describe('estilos por variante', () => {
      it('aplica estilos correctos para variante primary', () => {
        const styles = getButtonStyles('primary', 'md', defaultTheme)
        expect(styles.backgroundColor).toBe(defaultTheme.colors.primary)
        expect(styles.color).toBe(defaultTheme.colors.primaryText)
      })

      it('aplica estilos correctos para variante secondary', () => {
        const styles = getButtonStyles('secondary', 'md', defaultTheme)
        expect(styles.backgroundColor).toBe(defaultTheme.colors.secondary)
        expect(styles.color).toBe(defaultTheme.colors.secondaryText)
      })

      it('aplica estilos correctos para variante tertiary', () => {
        const styles = getButtonStyles('tertiary', 'md', defaultTheme)
        expect(styles.backgroundColor).toBe(defaultTheme.colors.neutral)
        expect(styles.color).toBe(defaultTheme.colors.neutralText)
      })

      it('aplica estilos correctos para variante danger', () => {
        const styles = getButtonStyles('danger', 'md', defaultTheme)
        expect(styles.backgroundColor).toBe(defaultTheme.colors.danger)
        expect(styles.color).toBe(defaultTheme.colors.dangerText)
      })

      it('aplica estilos correctos para variante link', () => {
        const styles = getButtonStyles('link', 'md', defaultTheme)
        expect(styles.backgroundColor).toBe('transparent')
        expect(styles.color).toBe(defaultTheme.colors.primary)
        expect(styles.textDecoration).toBe('underline')
      })
    })

    describe('isBlock', () => {
      it('aplica display block y width 100% cuando isBlock es true', () => {
        const styles = getButtonStyles('primary', 'md', defaultTheme, true)
        expect(styles.display).toBe('block')
        expect(styles.width).toBe('100%')
      })

      it('aplica display inline-block y width auto cuando isBlock es false', () => {
        const styles = getButtonStyles('primary', 'md', defaultTheme, false)
        expect(styles.display).toBe('inline-block')
        expect(styles.width).toBe('auto')
      })

      it('aplica display inline-block y width auto cuando isBlock es undefined', () => {
        const styles = getButtonStyles('primary', 'md', defaultTheme)
        expect(styles.display).toBe('inline-block')
        expect(styles.width).toBe('auto')
      })
    })

    describe('tema personalizado', () => {
      it('usa colores personalizados del tema', () => {
        const customTheme = {
          ...defaultTheme,
          colors: {
            ...defaultTheme.colors,
            primary: '#ff0000',
            primaryText: '#000000',
          },
        }
        const styles = getButtonStyles('primary', 'md', customTheme)
        expect(styles.backgroundColor).toBe('#ff0000')
        expect(styles.color).toBe('#000000')
      })

      it('usa spacing personalizado del tema', () => {
        const customTheme = {
          ...defaultTheme,
          spacing: {
            ...defaultTheme.spacing,
            sm: '20px',
            md: '30px',
          },
        }
        const styles = getButtonStyles('primary', 'md', customTheme)
        expect(styles.padding).toBe('20px 30px')
      })

      it('usa typography personalizada del tema', () => {
        const customTheme = {
          ...defaultTheme,
          typography: {
            ...defaultTheme.typography,
            fontFamily: 'Arial, sans-serif',
            fontSizeMd: '20px',
          },
        }
        const styles = getButtonStyles('primary', 'md', customTheme)
        expect(styles.fontFamily).toBe('Arial, sans-serif')
        expect(styles.fontSize).toBe('20px')
      })

      it('usa border-radius personalizado del tema', () => {
        const customTheme = {
          ...defaultTheme,
          borders: {
            ...defaultTheme.borders,
            radiusSm: '10px',
          },
        }
        const styles = getButtonStyles('primary', 'md', customTheme)
        expect(styles.borderRadius).toBe('10px')
      })
    })

    describe('combinaciones de props', () => {
      it.each([
        ['primary', 'sm'],
        ['primary', 'md'],
        ['primary', 'lg'],
        ['secondary', 'sm'],
        ['secondary', 'md'],
        ['secondary', 'lg'],
        ['tertiary', 'sm'],
        ['tertiary', 'md'],
        ['tertiary', 'lg'],
        ['danger', 'sm'],
        ['danger', 'md'],
        ['danger', 'lg'],
        ['link', 'sm'],
        ['link', 'md'],
        ['link', 'lg'],
      ] as const)('genera estilos válidos para variante %s y tamaño %s', (variant, size) => {
        const styles = getButtonStyles(variant, size, defaultTheme)
        expect(styles).toBeDefined()
        expect(styles.backgroundColor).toBeDefined()
        expect(styles.color).toBeDefined()
        expect(styles.fontSize).toBeDefined()
        expect(styles.padding).toBeDefined()
      })
    })
  })

  describe('getButtonStateClasses', () => {
    it('retorna clase base de PatternFly para primary', () => {
      const classes = getButtonStateClasses('primary')
      expect(classes).toBe('pf-v6-c-button pf-m-primary')
    })

    it('retorna clase base de PatternFly para secondary', () => {
      const classes = getButtonStateClasses('secondary')
      expect(classes).toBe('pf-v6-c-button pf-m-secondary')
    })

    it('retorna clase base de PatternFly para tertiary', () => {
      const classes = getButtonStateClasses('tertiary')
      expect(classes).toBe('pf-v6-c-button pf-m-tertiary')
    })

    it('retorna clase base de PatternFly para danger', () => {
      const classes = getButtonStateClasses('danger')
      expect(classes).toBe('pf-v6-c-button pf-m-danger')
    })

    it('retorna clase base de PatternFly para link', () => {
      const classes = getButtonStateClasses('link')
      expect(classes).toBe('pf-v6-c-button pf-m-link')
    })
  })
})
