import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { resolve } from 'path'
import dts from 'vite-plugin-dts'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    dts({
      include: ['lib/**/*'],
      exclude: ['**/*.test.ts', '**/*.test.tsx', 'node_modules/**'],
      outDir: 'dist',
      entryRoot: 'lib',
      staticImport: true,
      insertTypesEntry: true,
      skipDiagnostics: false,
      tsconfigPath: './tsconfig.build.json',
    }),
  ],
  build: {
    lib: {
      entry: resolve(__dirname, 'lib/index.ts'),
      name: 'MyComponentLibrary',
      formats: ['es', 'umd'],
      fileName: format => `my-component-library.${format}.js`,
    },
    rollupOptions: {
      external: [
        'react',
        'react-dom',
        'react/jsx-runtime',
        '@patternfly/react-core',
        '@patternfly/react-styles',
      ],
      output: {
        globals: {
          react: 'React',
          'react-dom': 'ReactDOM',
          'react/jsx-runtime': 'jsxRuntime',
          '@patternfly/react-core': 'PatternFlyReactCore',
          '@patternfly/react-styles': 'PatternFlyReactStyles',
        },
      },
    },
  },
})
