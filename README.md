# Portfolio de Saúl Conejo Mínguez

Web estática y bilingüe (ES/EN) hecha con Astro. Se publica en https://saulcone.github.io/.

## Desarrollo

Requiere Node 22.23.4 o superior.

```sh
npm install
npm run dev      # servidor local
npm run build    # valida los datos y compila en dist/
npm run preview  # sirve dist/
```

## Comprobaciones

```sh
npm run lint                         # formato con Prettier
npm run check:links -- --external    # enlaces internos y externos
npx lhci autorun                     # Lighthouse, mínimo 90 en cada categoría
npm run check:markers                # bloquea si quedan datos pendientes
```

GitHub Actions ejecuta todo esto en cada push y pull request, y despliega desde `main` solo si no quedan marcadores `[[PENDIENTE: ...]]`.

## Contenido

- `data/profile.json`: fuente única de los datos (experiencia, proyectos, habilidades, enlaces).
- `src/i18n/`: textos de interfaz en español e inglés.
- `docs/`: brief del proyecto. `docs/08-pendientes.md` lista lo que falta.

## Añadir un proyecto

1. Añade una entrada a `projects` en `data/profile.json`, con los textos en `es` y `en`.
2. Para la foto, guárdala en `public/img/` a 800×500 px y añade `"image": { "src": "/img/...", "alt": { "es": "...", "en": "..." } }`. Es opcional: sin foto, la tarjeta muestra un icono.
3. Ejecuta `npm run build` para validarla.

El proyecto aparece solo en el carrusel, en el orden de `projects`. El que lleva `"featured": true` (el TFG) no va en el carrusel: tiene su propio apartado. Los proyectos de empresa no van aquí: se cuentan en `experience`.

## Cambiar los CV

1. Copia los PDF a `public/cv/SaulConejo_CV_ES.pdf` y `public/cv/SaulConejo_CV_EN.pdf`.
2. En `data/profile.json`, pon `cv_files` a `/cv/SaulConejo_CV_ES.pdf` y `/cv/SaulConejo_CV_EN.pdf`.

Los PDF públicos no deben incluir teléfono ni dirección.
