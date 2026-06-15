# Notas para el Agente

## Comandos rápidos

Usar `pnpm` (lockfile `pnpm-lock.yaml`, `packageManager: pnpm@9.1.2`).

- `pnpm dev` — inicia el servidor de desarrollo de Vite
- `pnpm build` — ejecuta la verificación de tipos con `tsc -b` y luego empaqueta para producción
- `pnpm lint` — ejecuta ESLint en todo el repositorio
- `pnpm preview` — previsualiza el build de producción
- `pnpm clean` — elimina `node_modules`

## Orden de verificación

Al modificar código, ejecutar en este orden:

1. `pnpm lint`
2. `pnpm build` (también ejecuta `tsc`, por lo que no se necesita un comando de typecheck separado)

Este repositorio aún no tiene pruebas.

## Estructura del proyecto

SPA con Vite + React 18 + TypeScript en un solo paquete (sin router; la navegación usa enlaces ancla).

- `src/main.tsx` — punto de entrada, monta `App`
- `src/App.tsx` — componente raíz, renderiza `src/views/main.tsx`
- `src/views/` — secciones de la página (`summary`, `projects`, `about-me`, `personal-projects`, `contact`)
- `src/layouts/` — `Header`, `Footer` y header móvil
- `src/components/` — UI reutilizable (`Button`, `Chip`, `Divider`, `Logo`, `ProjectCard`, iconos)
- `src/data/portfolio.json` — contenido estático que alimenta el sitio
- `public/assets/` — imágenes, logos, CVs en PDF, favicon

## Convenciones importantes

- El alias de ruta `@/` apunta a `src/`. Usarlo para imports desde `src`.
- Los estilos son CSS Modules junto a cada componente (`*.module.css`) más estilos globales en `src/index.css`.
- La hoja de estilos global define tokens de diseño como variables CSS (`--primary`, `--secondary`, `--background`, `--title`, `--text`, etc.). Preferirlas sobre colores escritos a mano.
- El contenido proviene de `src/data/portfolio.json`. No hardcodear texto en componentes si corresponde a ese archivo.
- Ya se usa lazy loading en `src/views/main.tsx` para todas las secciones debajo de `Summary`.

## Advertencias del build

- `pnpm build` activa `rollup-plugin-visualizer`, que abre automáticamente `bundle-analysis.html` en el navegador después del build. Ese archivo está rastreado en git.
- TypeScript está configurado como referencia de proyecto (`tsconfig.json` referencia `tsconfig.app.json` y `tsconfig.node.json`). `pnpm build` usa `tsc -b`, así que los errores de TypeScript harán fallar el build.
- TS está en modo estricto, incluyendo `noUnusedLocals` y `noUnusedParameters`. Las variables no usadas causan error de compilación.
- ESLint solo se ejecuta sobre `**/*.{ts,tsx}` e ignora `dist`.
