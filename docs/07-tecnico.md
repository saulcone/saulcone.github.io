# 07 · Decisiones técnicas

## Stack elegido
Astro con CSS propio y variables, sin Tailwind y sin TypeScript en el repo. Desplegado en GitHub Pages desde `saulcone/saulcone.github.io`, en https://saulcone.github.io/.

## Stack recomendado (original)
- **Astro** (sitio estático, muy rápido, i18n sencillo, buen SEO). Contenido leído desde `data/profile.json` y Markdown/MDX para los casos de estudio.
- **CSS:** Tailwind CSS o CSS moderno con variables. Sin librerías de componentes pesadas.
- **TypeScript** opcional para los componentes de Astro.
- Alternativa si Saúl lo prefiere: HTML/CSS/JS sin framework. No usar React/Next salvo que lo pida: no es su stack y no hace falta.

> Si Saúl prefiere otra cosa, sigue su elección y actualiza este documento.

## Estructura del repositorio (orientativa)
```
/
├─ AGENTS.md
├─ docs/                 # estos documentos
├─ data/profile.json     # fuente única de datos
├─ public/
│  ├─ cv/SaulConejo_CV_ES.pdf
│  ├─ cv/SaulConejo_CV_EN.pdf
│  ├─ img/  video/  og-image.png
├─ src/
│  ├─ components/ (Hero, ProjectCard, Timeline, SkillGroup, LanguageSwitch...)
│  ├─ content/projects/ (tfg-drone-vlm.md, ...)
│  ├─ i18n/ (es.json, en.json para textos de interfaz)
│  └─ pages/ (index, /en/, /proyectos/[slug], /en/projects/[slug])
└─ .github/workflows/ci.yml
```

## Internacionalización
Español como idioma por defecto (`/`) e inglés en `/en/`. Etiquetas `hreflang` y `lang` correctas. Todos los textos de interfaz en archivos de traducción, no incrustados.

## SEO y metadatos
- `title` y `description` por idioma (ver `05-contenido-web.md`).
- Open Graph y Twitter Card con imagen `og-image.png` (1200×630).
- `sitemap.xml` y `robots.txt`.
- Datos estructurados JSON-LD de tipo `Person` (nombre, jobTitle, url, sameAs: LinkedIn y GitHub). Sin teléfono.

## Rendimiento
- Lighthouse ≥ 90 en Performance, Accessibility, Best Practices y SEO.
- Imágenes en AVIF/WebP con tamaños responsive; vídeo comprimido, con `poster` y sin autoplay con sonido.
- Sin JavaScript innecesario.

## Analítica y privacidad
Si se añade analítica, que sea sin cookies (p. ej., Plausible o similar). Sin banners de cookies innecesarios. Sin formularios que guarden datos: el contacto es por email/LinkedIn.

## Calidad y CI/CD (también sirve de demostración)
Workflow de GitHub Actions en cada push y pull request:
1. Instalar dependencias y compilar.
2. Comprobar enlaces rotos y formato (lint).
3. Lighthouse CI con umbrales mínimos.
4. Desplegar en la rama principal.

## Despliegue
GitHub Pages, Netlify o Vercel (plan gratuito). Dominio propio opcional (p. ej., `saulconejo.dev`, comprobar disponibilidad). Si no, el subdominio gratuito vale.

## Mantenimiento
Para añadir un proyecto: nueva entrada en `data/profile.json` + archivo en `src/content/projects/`. Documenta este proceso en el README del repo.
