# My Component Library

[![GitHub release](https://img.shields.io/github/v/release/Discordante/library-test)](https://github.com/Discordante/library-test/releases)
[![Storybook](https://img.shields.io/badge/Storybook-View%20Components-ff4785?logo=storybook)](https://discordante.github.io/library-test/)

Librería de componentes React basada en PatternFly con sistema de tokens inyectables.

📚 **[Ver componentes en Storybook](https://discordante.github.io/library-test/)**

## Características

- Basada en PatternFly React Components
- Sistema de tokens de diseño inyectables
- Soporte completo para TypeScript
- Preparada para importar tokens desde librería externa
- ESLint + Prettier + Husky configurados
- Tree-shaking optimizado

## Instalación

### Desde GitHub Packages

Este paquete está disponible en GitHub Packages. Primero, configura npm para usar GitHub Packages:

```bash
# Crea o edita ~/.npmrc y añade:
@discordante:registry=https://npm.pkg.github.com
```

Luego instala el paquete:

```bash
npm install @discordante/my-component-library @patternfly/react-core @patternfly/react-styles
```

### Desde npm (próximamente)

```bash
npm install my-component-library @patternfly/react-core @patternfly/react-styles
```

## Uso básico

```tsx
import { Button, ThemeProvider } from 'my-component-library'

function App() {
  return (
    <ThemeProvider>
      <Button variant="primary" size="md">
        Click me
      </Button>
    </ThemeProvider>
  )
}
```

## Sistema de tokens

### Uso con tema por defecto

```tsx
import { ThemeProvider, Button } from 'my-component-library'

function App() {
  return (
    <ThemeProvider>
      <Button variant="primary">Default theme</Button>
    </ThemeProvider>
  )
}
```

### Personalización parcial de tokens

```tsx
import { ThemeProvider, Button } from 'my-component-library'

const customTheme = {
  colors: {
    primary: '#ff0000',
    primaryHover: '#cc0000',
  },
}

function App() {
  return (
    <ThemeProvider theme={customTheme}>
      <Button variant="primary">Custom red button</Button>
    </ThemeProvider>
  )
}
```

### Importando tokens desde librería externa (futuro)

```tsx
import { ThemeProvider, Button } from 'my-component-library'
// Importa tus tokens desde tu librería de design tokens
import { myCompanyTokens } from '@mi-empresa/design-tokens'

function App() {
  return (
    <ThemeProvider theme={myCompanyTokens}>
      <Button variant="primary">Themed button</Button>
    </ThemeProvider>
  )
}
```

## Componentes disponibles

### Button

Botón que extiende PatternFly Button con soporte para tokens personalizados.

**Props:**

- `variant`: 'primary' | 'secondary' | 'tertiary' | 'danger' | 'link' (default: 'primary')
- `size`: 'sm' | 'md' | 'lg' (default: 'md')
- `isBlock`: boolean (default: false) - Botón de ancho completo
- Todos los props de PatternFly Button

**Ejemplos:**

```tsx
// Básico
<Button variant="primary" size="md">
  Primary Button
</Button>

// Con icono (usando PatternFly)
import { PlusIcon } from '@patternfly/react-icons'

<Button variant="secondary" icon={<PlusIcon />}>
  Add item
</Button>

// Deshabilitado
<Button variant="primary" isDisabled>
  Disabled
</Button>

// Ancho completo
<Button variant="primary" isBlock>
  Full width
</Button>
```

## Tokens disponibles

La librería incluye los siguientes grupos de tokens:

### Colors

```ts
{
  ;(primary,
    primaryHover,
    primaryActive,
    primaryText,
    secondary,
    secondaryHover,
    secondaryActive,
    secondaryText,
    neutral,
    neutralHover,
    neutralActive,
    neutralText,
    danger,
    dangerHover,
    dangerActive,
    dangerText,
    border,
    borderFocus,
    background,
    backgroundHover)
}
```

### Spacing

```ts
{
  ;(xs, sm, md, lg, xl, '2xl')
}
```

### Typography

```ts
{
  ;(fontFamily,
    fontFamilyMono,
    fontSizeXs,
    fontSizeSm,
    fontSizeMd,
    fontSizeLg,
    fontSizeXl,
    fontWeightNormal,
    fontWeightMedium,
    fontWeightBold,
    lineHeightSm,
    lineHeightMd,
    lineHeightLg)
}
```

### Borders

```ts
{
  ;(radiusNone, radiusSm, radiusMd, radiusLg, radiusFull, widthSm, widthMd, widthLg)
}
```

### Shadows

```ts
{
  ;(none, sm, md, lg, xl, focus)
}
```

## Hook: useTheme

Accede a los tokens del tema en cualquier componente:

```tsx
import { useTheme } from 'my-component-library'

function MyComponent() {
  const { colors, spacing } = useTheme()

  return (
    <div
      style={{
        backgroundColor: colors.primary,
        padding: spacing.md,
      }}
    >
      Themed component
    </div>
  )
}
```

## Desarrollo

### Scripts disponibles

```bash
npm run build            # Compila la librería
npm run lint             # Ejecuta ESLint
npm run lint:fix         # Arregla errores de ESLint
npm run format           # Formatea código con Prettier
npm run format:check     # Verifica formato
npm run storybook        # Ejecuta Storybook en desarrollo
npm run build-storybook  # Compila Storybook para producción
```

### Git hooks (Husky)

- **commit-msg**: Valida que los mensajes de commit sigan [Conventional Commits](https://www.conventionalcommits.org/)
- **pre-commit**: Ejecuta lint-staged (ESLint + Prettier en archivos staged)
- **pre-push**: Ejecuta lint y build completo

### Formato de commits

Este proyecto usa [Conventional Commits](https://www.conventionalcommits.org/). Los commits deben seguir este formato:

```
<type>(<scope>): <description>

[optional body]

[optional footer]
```

**Tipos permitidos:**

- `feat`: Nueva funcionalidad
- `fix`: Corrección de bugs
- `docs`: Cambios en documentación
- `style`: Cambios de formato (sin afectar funcionalidad)
- `refactor`: Refactorización de código
- `perf`: Mejoras de rendimiento
- `test`: Añadir o actualizar tests
- `build`: Cambios en el sistema de build o dependencias
- `ci`: Cambios en CI/CD
- `chore`: Otros cambios que no modifican src o test

**Ejemplos:**

```bash
feat: add Card component
fix: resolve button hover state issue
docs: update installation instructions
feat(button)!: change API to accept new props

BREAKING CHANGE: button now requires variant prop
```

## Estructura del proyecto

```
my-component-library/
├── lib/                          # Código fuente
│   ├── components/               # Componentes
│   │   └── Button/
│   │       ├── Button.tsx
│   │       ├── Button.types.ts
│   │       ├── Button.styles.ts
│   │       └── index.ts
│   ├── providers/                # Context providers
│   │   └── ThemeProvider.tsx
│   ├── tokens/                   # Design tokens
│   │   ├── colors.ts
│   │   ├── spacing.ts
│   │   ├── typography.ts
│   │   ├── borders.ts
│   │   ├── shadows.ts
│   │   └── index.ts
│   ├── utils/                    # Utilidades
│   │   ├── classNames.ts
│   │   └── styles.ts
│   └── index.ts                  # Punto de entrada
├── dist/                         # Build generado
├── .husky/                       # Git hooks
├── package.json
├── tsconfig.json
├── tsconfig.lib.json
├── tsconfig.build.json
└── vite.config.ts
```

## Publicación y Releases

Este proyecto usa GitHub Actions para automatizar releases y despliegues:

### Versionado automático

El versionado sigue [Conventional Commits](https://www.conventionalcommits.org/):

- `feat:` → Incrementa versión MINOR (0.1.0 → 0.2.0)
- `fix:` → Incrementa versión PATCH (0.1.0 → 0.1.1)
- `BREAKING CHANGE:` → Incrementa versión MAJOR (0.1.0 → 1.0.0)

### Proceso de release

1. Haz commit con formato convencional:

   ```bash
   git commit -m "feat: add new Card component"
   ```

2. Push a main:

   ```bash
   git push
   ```

3. GitHub Actions automáticamente:
   - Crea una nueva release en GitHub
   - Publica el paquete en GitHub Packages
   - Despliega Storybook actualizado a GitHub Pages

### Instalación desde GitHub Packages

Los usuarios pueden instalar versiones publicadas:

```bash
npm install @discordante/my-component-library@latest
```

## CI/CD y Automatización

### Workflows de GitHub Actions

Este proyecto incluye varios workflows automatizados:

#### 🔄 CI (Continuous Integration)

- Se ejecuta en cada **Pull Request** y push a **main**
- Verifica lint, formato y build
- Compila Storybook
- Genera reporte de tamaño de bundle

#### 🚀 Release and Deploy

- Se ejecuta en cada push a **main**
- Despliega Storybook a GitHub Pages automáticamente
- Crea releases cuando hay cambios significativos
- Publica el paquete en GitHub Packages

#### 🔒 CodeQL Security Analysis

- Escaneo de seguridad automático
- Se ejecuta semanalmente y en cada PR
- Detecta vulnerabilidades y problemas de seguridad

### Renovate Bot

El proyecto usa Renovate para mantener las dependencias actualizadas:

- **Actualizaciones automáticas**: Minor y patch se mergean automáticamente
- **Major updates**: Requieren revisión manual
- **Agrupación inteligente**: PatternFly, Storybook, linting agrupados
- **Schedule**: Lunes antes de las 3 AM (Europe/Madrid)
- **Dashboard**: Revisa el dashboard de Renovate en las issues

**Activar Renovate:**

1. Instala [Renovate GitHub App](https://github.com/apps/renovate)
2. Selecciona este repositorio
3. Renovate creará automáticamente PRs de actualización

## Roadmap

- [ ] Añadir más componentes (Card, Input, Modal, etc.)
- [ ] Integrar con librería de design tokens externa
- [ ] Añadir tests con Vitest
- [x] Añadir Storybook para documentación
- [x] CI/CD con GitHub Actions
- [x] Publicación automática en GitHub Packages
- [x] CodeQL security scanning
- [x] Renovate para actualizaciones automáticas
- [x] Commitlint para validar commits
- [ ] Soporte para temas dark/light
- [ ] Publicar en npm público

## Licencia

MIT
