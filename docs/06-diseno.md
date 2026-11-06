# 06 · Brief de diseño

## Sensación general
Profesional, limpio y técnico, con personalidad pero sin distraer. Debe parecer hecho por un ingeniero cuidadoso, no una plantilla genérica.

## Estructura (una sola página + detalle de proyecto)
1. **Hero:** nombre, rol, frase, estado de disponibilidad y tres botones.
2. **Proyecto destacado** (TFG): tarjeta grande con vídeo o imagen y enlace a su página de detalle.
3. **Experiencia:** línea temporal sencilla (NAX, Beply).
4. **Proyectos:** cuadrícula de tarjetas (título, una línea, chips de stack, enlaces o etiqueta "Código privado").
5. **Habilidades:** agrupadas por categoría con la distinción "trabajo real" / "proyectos" / "aprendiendo".
6. **Formación e idiomas:** bloque compacto.
7. **Contacto:** email, LinkedIn, GitHub y botón de CV.

Navegación fija arriba con anclas a cada sección y selector ES/EN.

## Estilo visual
- Tipografía: una sans moderna para texto (p. ej., Inter o similar) y una monoespaciada para detalles técnicos (chips, fechas).
- Color: fondo neutro, un único color de acento. Sugerencia: azul o verde azulado (encaja con IA/tecnología). Modo claro y oscuro siguiendo la preferencia del sistema.
- Espaciado generoso, máximo ~1100 px de ancho de contenido.
- Iconos sencillos y coherentes (una sola librería).
- Animaciones mínimas: aparición suave al hacer scroll, respetando `prefers-reduced-motion`.

## Página de detalle del TFG
Hero con vídeo · Problema · Diagrama del bucle See → Point → Fly (SVG) · Qué construí · Decisiones técnicas · Stack · Enlaces · Qué aprendí.

## Accesibilidad (obligatorio)
- Contraste WCAG AA en ambos modos.
- Navegación completa con teclado y foco visible.
- Texto alternativo en imágenes y subtítulos o descripción en el vídeo.
- HTML semántico (header, main, section, nav, footer) y un solo h1.

## Responsive
Móvil primero. A partir de ~360 px de ancho, sin scroll horizontal. Las tarjetas pasan a una columna.

## Evitar
Barras de porcentaje de habilidades, carruseles, música, animaciones pesadas, plantillas que se noten, textos genéricos de relleno y fotos de stock.
