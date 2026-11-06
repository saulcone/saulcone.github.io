# Instrucciones para el agente: portfolio de Saúl Conejo Mínguez

Vas a construir la web de portfolio personal de **Saúl Conejo Mínguez**, ingeniero informático junior (backend + IA) que busca su primer empleo. Este archivo es la referencia principal. Léelo entero antes de escribir código y consulta los documentos de `docs/` y `data/` cuando los necesites.

> Copia este archivo como `CLAUDE.md` (Claude Code) o `.github/copilot-instructions.md` (GitHub Copilot) si tu herramienta usa ese nombre.

## Objetivo de la web
Que un recruiter o un tech lead entienda en **menos de 30 segundos** quién es Saúl, qué sabe hacer y por qué merece una entrevista, y que pueda contactarle o descargar su CV en un clic.

Públicos, por orden: (1) recruiters de consultoras y empresas tech en España, (2) tech leads/CTOs que revisan candidatos, (3) empresas europeas en remoto.

## Archivos de referencia
| Archivo | Para qué |
|---|---|
| `data/profile.json` | **Fuente única de verdad** de los datos (experiencia, proyectos, skills, enlaces). La web debe leer de aquí. |
| `docs/01-perfil.md` | Posicionamiento, biografías corta y larga (ES/EN), tono. |
| `docs/02-experiencia.md` | Detalle de cada experiencia y qué se puede contar. |
| `docs/03-proyectos.md` | Casos de estudio de los proyectos, en orden de prioridad. |
| `docs/04-habilidades.md` | Habilidades con su nivel real (profesional, académico, aprendiendo). |
| `docs/05-contenido-web.md` | Textos de cada sección en español e inglés, listos para usar. |
| `docs/06-diseno.md` | Brief de diseño: estructura, estilo, accesibilidad. |
| `docs/07-tecnico.md` | Stack recomendado, estructura del repo, SEO, despliegue y CI. |
| `docs/08-pendientes.md` | Datos que faltan y que debes dejar como marcador, no inventar. |

## Reglas que no se pueden saltar
1. **No inventes nada.** Ni métricas, ni porcentajes, ni clientes, ni tecnologías, ni años de experiencia, ni testimonios. Si un dato no está en estos documentos, deja un marcador visible `[[PENDIENTE: ...]]` y anótalo en `docs/08-pendientes.md`.
2. **Confidencialidad de las prácticas.** El código, capturas, datos y clientes de NAX Solutions y Beply son de esas empresas. Describe el trabajo a alto nivel (arquitectura, problema, decisiones), sin código propietario, sin pantallazos internos y sin nombres de clientes.
3. **Privacidad.** No publiques el teléfono ni la dirección. Contacto: email y LinkedIn. El email puede ofuscarse ligeramente contra spam.
4. **Nivel honesto.** Saúl es junior. No uses "experto", "senior", "10x" ni similares. Distingue lo usado en trabajo real de lo académico o en aprendizaje (ver `docs/04-habilidades.md`).
5. **Bilingüe.** Español e inglés, con selector de idioma. Los textos base están en `docs/05-contenido-web.md`.
6. **Rendimiento y accesibilidad primero.** Web estática, ligera, usable en móvil, Lighthouse ≥ 90 en todas las categorías, contraste AA, navegable con teclado.
7. **Pregunta antes de decidir algo de contenido** que no esté aquí. Las decisiones técnicas puedes tomarlas tú siguiendo `docs/07-tecnico.md`.

## Prioridades de construcción (MVP en este orden)
1. Hero + CTA (descargar CV, contactar, GitHub).
2. Proyecto destacado: TFG de navegación autónoma de drones con VLMs.
3. Experiencia (NAX Solutions, Beply).
4. Resto de proyectos.
5. Habilidades, formación e idiomas.
6. Contacto.
7. Después del MVP: modo oscuro, animaciones sutiles, página de detalle por proyecto.
