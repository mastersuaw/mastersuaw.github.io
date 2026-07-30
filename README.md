# mastersuaw — Portfolio

Sitio web estático del desarrollador **mastersuaw**. Portfolio de aplicaciones y sitios web, con páginas legales para publicación en App Store y Google Play.

**URL en producción:** `https://mastersuaw.github.io/portafolio/`  
**app-ads.txt (raíz del dominio):** `https://mastersuaw.github.io/app-ads.txt`

## Proyectos incluidos

- **Anote Domino** — Marcador de dominó (iOS / Android)
- **Creatitek** — E-commerce de sublimación (iOS / Android / Web)
- **Leonida Guia** — Guía no oficial de GTA VI (iOS / Android)

## Desarrollo local

```bash
npm install
npm run dev
```

Abre [http://localhost:4321/portafolio/](http://localhost:4321/portafolio/)

## Build y despliegue en GitHub Pages (user site / raíz del dominio)

Este sitio está pensado para publicarse como **user site** en la raíz de `https://mastersuaw.github.io/`, no como project site.

### Estructura de URLs tras el build

| URL | Contenido |
| --- | --- |
| `https://mastersuaw.github.io/app-ads.txt` | Archivo para Meta/Facebook ads |
| `https://mastersuaw.github.io/` | Redirect a `/portafolio/` |
| `https://mastersuaw.github.io/portafolio/` | Portfolio (inicio) |
| `https://mastersuaw.github.io/portafolio/apps/...` | Detalle de apps |
| `https://mastersuaw.github.io/portafolio/legal/...` | Páginas legales |

El comando `npm run build` ejecuta Astro (`base: '/portafolio/'`) y luego `scripts/prepare-github-pages.mjs`, que deja:

```
docs/
├── app-ads.txt          ← raíz del dominio
├── index.html           ← redirect → /portafolio/
├── .nojekyll
└── portafolio/          ← sitio Astro
    ├── index.html
    ├── apps/
    ├── legal/
    └── ...
```

### Importante: nombre del repositorio

Si el repo se llama **`portafolio`**, GitHub Pages como *project site* **siempre** publica bajo `https://mastersuaw.github.io/portafolio/` y **no puede** servir `https://mastersuaw.github.io/app-ads.txt`.

Para la raíz del dominio debes usar un **user site**:

1. Renombra este repo a **`mastersuaw.github.io`**, **o**
2. Crea/usa el repo `mastersuaw.github.io` y publica desde ahí (mismo código / mismo workflow).

### Pasos en GitHub (Settings → Pages)

1. Asegura que el repo de publicación sea **`mastersuaw.github.io`** (user site).
2. Ve a **Settings → Pages**.
3. En **Build and deployment → Source**, elige **GitHub Actions**.
4. Haz push a `main` (o ejecuta el workflow manualmente). El workflow `.github/workflows/deploy.yml` compila y sube el artifact `docs/`.
5. Comprueba:
   - `https://mastersuaw.github.io/app-ads.txt`
   - `https://mastersuaw.github.io/portafolio/`

Para compilar localmente:

```bash
npm run build
```

## Agregar una nueva app

1. Añade la entrada en `src/data/projects.ts`.
2. Copia el icono a `public/images/apps/<slug>.png`.
3. Crea la página en `src/pages/apps/<slug>.astro`.
4. Si necesita páginas legales propias, créalas en `src/pages/legal/<slug>/`.
5. Ejecuta `npm run build` y sube los cambios.

## Estructura

```
src/
├── components/     # Componentes reutilizables
├── data/           # Catálogo de proyectos
├── layouts/        # Layout base
├── pages/          # Rutas del sitio (servidas bajo /portafolio/)
└── styles/         # CSS global
public/             # Assets estáticos; app-ads.txt queda en la raíz del deploy
scripts/            # Post-build para GitHub Pages user site
docs/               # Artifact de deploy (generado)
```

## Tecnologías

- [Astro 7](https://astro.build) — Sitio estático
- TypeScript strict
- CSS puro (sin frameworks UI)

## Licencia

© mastersuaw. Todos los derechos reservados.
