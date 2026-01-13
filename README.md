# My Component Library

Una librería de componentes React construida con TypeScript y Vite.

## Instalación

```bash
npm install my-component-library
```

## Uso

```tsx
import { Button } from 'my-component-library'

function App() {
  return (
    <Button variant="primary" size="medium">
      Click me
    </Button>
  )
}
```

## Componentes disponibles

### Button

Componente de botón con diferentes variantes y tamaños.

**Props:**

- `variant`: 'primary' | 'secondary' | 'outline' (default: 'primary')
- `size`: 'small' | 'medium' | 'large' (default: 'medium')
- Todos los props estándar de HTMLButtonElement

**Ejemplo:**

```tsx
<Button variant="primary" size="large" onClick={() => console.log('Clicked')}>
  Primary Button
</Button>

<Button variant="outline" size="small">
  Outline Button
</Button>
```

## Desarrollo

### Build

```bash
npm run build
```

Genera los archivos de distribución en la carpeta `dist/`:

- `my-component-library.es.js` - Módulo ES
- `my-component-library.umd.js` - Módulo UMD
- `index.d.ts` - Declaraciones de TypeScript

### Lint

```bash
npm run lint
```

## Estructura del proyecto

```
my-component-library/
├── lib/                    # Código fuente de la librería
│   ├── components/         # Componentes
│   │   └── Button.tsx
│   └── index.ts           # Punto de entrada
├── dist/                  # Archivos compilados (generados)
├── package.json
├── tsconfig.json
├── tsconfig.lib.json      # Config de TypeScript para la librería
└── vite.config.ts
```

## Publicación

Antes de publicar en npm:

1. Actualiza la versión en `package.json`
2. Ejecuta `npm run build`
3. Publica con `npm publish`

## Licencia

MIT
