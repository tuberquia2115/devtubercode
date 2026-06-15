# DevTuberCode Portfolio

Portafolio personal desarrollado como una SPA con Vite, React 18 y TypeScript. El sitio presenta experiencia profesional, proyectos personales, información sobre el desarrollador y canales de contacto, alimentándose principalmente desde un archivo JSON estático.

## Stack principal

- React 18
- TypeScript
- Vite
- CSS Modules
- ESLint
- pnpm
- CodeGraph para análisis local del código

## Requisitos

- Node.js compatible con el proyecto
- pnpm `9.1.2`

El repositorio declara el gestor en `package.json`:

```json
"packageManager": "pnpm@9.1.2"
```

## Comandos

```bash
pnpm dev
```

Inicia el servidor de desarrollo de Vite.

```bash
pnpm build
```

Ejecuta `tsc -b` y genera el build de producción con Vite.

```bash
pnpm lint
```

Ejecuta ESLint sobre el repositorio.

```bash
pnpm preview
```

Previsualiza el build de producción.

```bash
pnpm clean
```

Elimina `node_modules`.

## Estructura del proyecto

```text
src/
  main.tsx                     Punto de entrada de React
  App.tsx                      Componente raíz
  index.css                    Estilos globales y tokens de diseño
  data/
    portfolio.json             Contenido estático del portafolio
  layouts/
    header/                    Header desktop
    header-nav-mobile/         Navegación móvil
    footer/                    Footer
  views/
    main.tsx                   Composición de secciones con lazy loading
    landing/
      summary/                 Hero/resumen inicial
      projects/                Experiencia profesional
      personal-projects/       Proyectos personales
      about-me/                Acerca de mí
      contact/                 Contacto
  components/
    UI/                        Button, Chip y Divider
    icons/                     Iconos SVG reutilizables
    logo/                      Logo del sitio
    project-card/              Tarjeta reutilizable para proyectos

public/
  assets/
    banners/                   Banners de proyectos
    cv-es.pdf                  CV en español
    cv-en.pdf                  CV en inglés
    logo.webp
    profile.webp
```

## Arquitectura

- `src/main.tsx` monta `App`.
- `src/App.tsx` renderiza la vista principal.
- `src/views/main.tsx` compone la landing y usa `React.lazy` para cargar secciones debajo de `Summary`.
- Las secciones consumen contenido desde `src/data/portfolio.json`.
- `ProjectCard` se reutiliza tanto en experiencia profesional como en proyectos personales.
- Los estilos de componentes viven en CSS Modules y los tokens/estilos compartidos viven en `src/index.css`.

## Flujo de datos

El contenido editable del portafolio vive en `src/data/portfolio.json`.

Desde ahí se alimentan:

- navegación del header y menú móvil;
- textos del resumen inicial;
- experiencia profesional en `section_projects`;
- proyectos personales en `section_personal_projects`;
- sección "Acerca de mí";
- datos de contacto;
- enlaces del footer.

Para agregar o modificar contenido visible en el sitio, lo recomendado es actualizar `portfolio.json` antes de tocar componentes.

## Tarjetas de proyecto

`src/components/project-card/project-card.tsx` renderiza cada proyecto con:

- banner;
- nombre;
- descripción con HTML mediante `dangerouslySetInnerHTML`;
- botón desplegable para descripciones largas;
- chips de tecnologías.

Las descripciones pueden usar etiquetas HTML como:

- `p`
- `strong`
- `a`
- `h1` a `h6`
- `ul`, `ol` y `li`

Los estilos globales para esas etiquetas están definidos bajo `.project-description` en `src/index.css`, de modo que todas las tarjetas mantengan una presentación consistente.

## Assets

Los recursos públicos están en `public/assets/`.

Los banners de proyectos se referencian desde `portfolio.json` con rutas como:

```json
"/assets/banners/banner-rivals.webp"
```

Los CVs disponibles son:

- `public/assets/cv-es.pdf`
- `public/assets/cv-en.pdf`

## Verificación recomendada

Después de modificar código, ejecutar:

```bash
pnpm lint
pnpm build
```

`pnpm build` ya ejecuta TypeScript con `tsc -b`, por lo que no hace falta un typecheck separado.

## Notas de build

El build usa `rollup-plugin-visualizer` en `vite.config.ts`. Al ejecutar `pnpm build`, el plugin genera o actualiza `bundle-analysis.html`.

## Convenciones

- Usar el alias `@/` para imports desde `src`.
- Mantener el contenido estático en `src/data/portfolio.json`.
- Usar CSS Modules para estilos por componente.
- Usar variables CSS de `src/index.css` antes de escribir colores nuevos.
- Evitar hardcodear textos de contenido dentro de componentes cuando pertenecen al portafolio.
