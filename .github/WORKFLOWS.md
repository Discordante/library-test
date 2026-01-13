# GitHub Actions Workflows

Este proyecto utiliza varios workflows de GitHub Actions para automatizar CI/CD y garantizar la calidad del código.

## 📋 Workflows disponibles

### 1. CI (Continuous Integration)

**Archivo:** `.github/workflows/ci.yml`

**Se ejecuta en:**

- Cada Pull Request a `main`
- Cada push a `main`

**Estructura:**

```
setup (build + install)
  ├─> lint (ESLint + Prettier)
  ├─> build-storybook
  ├─> test
  └─> bundle-size (reporte de tamaño)
```

**Optimizaciones:**

- ✅ Un solo `npm ci` en el job `setup`
- ✅ Caché de `node_modules` compartida entre jobs
- ✅ Build artifacts compartidos para evitar rebuild
- ✅ Jobs paralelos después del setup

**Por qué está optimizado así:**

- Reduce tiempo de ejecución (menos `npm ci`)
- Menor uso de recursos de GitHub Actions
- Feedback más rápido en PRs

---

### 2. Release and Deploy

**Archivo:** `.github/workflows/release.yml`

**Se ejecuta:**

- Solo después de que CI pase exitosamente
- En cada push a `main`

**Estructura:**

```
[CI debe pasar primero]
  ↓
check-ci (valida que CI pasó)
  ├─> release (release-please PR/Release)
  │     └─> publish (solo si hay nueva release)
  └─> deploy-storybook (siempre)
```

**Dependencia crítica:**

- ⚠️ **Release NO se ejecuta si CI falla**
- ⚠️ **Deploy NO se ejecuta si CI falla**
- ✅ Esto previene desplegar código roto

**Qué hace cada job:**

1. **check-ci**: Valida que el workflow de CI terminó con éxito
2. **release**: Release-please analiza commits y:
   - Crea/actualiza PR con CHANGELOG
   - Crea release cuando se mergea el PR
3. **publish**: Solo si hay nueva release, publica a GitHub Packages
4. **deploy-storybook**: Despliega Storybook a GitHub Pages

---

### 3. CodeQL Security Analysis

**Archivo:** `.github/workflows/codeql.yml`

**Se ejecuta:**

- En cada push a `main`
- En cada Pull Request
- Semanalmente los lunes a las 00:00 UTC

**Qué hace:**

- Análisis estático de seguridad
- Detecta vulnerabilidades
- Identifica code quality issues

---

## 🔄 Flujo completo de un push a main

```
1. Push a main
   ↓
2. CI Workflow se ejecuta
   - setup: npm ci + build
   - lint: ESLint + Prettier
   - build-storybook: Valida que Storybook compila
   - test: Ejecuta tests
   - bundle-size: Genera reporte
   ↓
3. ¿CI pasó? ✅
   ↓ YES → Release Workflow se ejecuta
   ↓ NO  → Release Workflow NO se ejecuta ❌
   ↓
4. Release Workflow (solo si CI pasó)
   - check-ci: Valida CI
   - release: Release-please crea/actualiza PR
   - deploy-storybook: Despliega a GitHub Pages
   - publish: Solo si hay release, publica paquete
```

---

## 🚨 ¿Qué pasa si CI falla?

1. ❌ CI falla (lint error, build error, etc.)
2. 🛑 Release workflow **NO se ejecuta**
3. 🛑 Storybook **NO se despliega**
4. 🛑 Paquete **NO se publica**
5. ✅ Se previene desplegar código roto

---

## 🔐 Permisos requeridos

Para que los workflows funcionen correctamente:

### En Settings → Actions → General:

- ✅ Workflow permissions: **Read and write**
- ✅ Allow GitHub Actions to create and approve pull requests: **Habilitado**

### En Settings → Pages:

- ✅ Source: **GitHub Actions**

---

## 📊 Monitoreo

### Ver workflows en ejecución:

- Pestaña **Actions** en GitHub
- Filtra por workflow name: "CI", "Release and Deploy", "CodeQL"

### Ver historial de releases:

- Pestaña **Releases** en GitHub
- Release-please crea releases automáticamente

### Ver Storybook desplegado:

- URL: https://discordante.github.io/library-test/

---

## 🐛 Troubleshooting

### CI falla pero no sé por qué:

1. Ve a Actions → Click en el run fallido
2. Expande el job que falló
3. Lee los logs del step que falló

### Release no se crea:

- Verifica que CI pasó primero
- Release-please solo crea releases con commits convencionales
- Revisa que los permisos estén habilitados

### Storybook no se despliega:

- Verifica que CI pasó primero
- Verifica que GitHub Pages esté habilitado
- Revisa los logs del job `deploy-storybook`

---

## 📈 Métricas y reportes

### Bundle size:

- Se genera en cada CI run
- Ver en: Actions → CI → Job "Check Bundle Size" → Summary

### CodeQL:

- Ver en: Security → Code scanning alerts

### Test coverage (cuando se añadan tests):

- Se generará en CI runs futuros
