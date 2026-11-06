# Paquete de contexto para el portfolio de Saúl

Estos archivos le dan a tu agente de VS Code (Claude Code, Copilot, Cursor...) todo lo necesario para crear tu web de portfolio sin inventar datos.

## Cómo usarlo
1. Crea un repositorio nuevo (por ejemplo, `portfolio`) y ábrelo en VS Code.
2. Copia dentro **todo** el contenido de esta carpeta: `AGENTS.md`, `docs/` y `data/`.
3. Si tu herramienta usa otro nombre para las instrucciones, duplica `AGENTS.md`:
   - Claude Code → `CLAUDE.md`
   - GitHub Copilot → `.github/copilot-instructions.md`
   - Cursor → `.cursor/rules/portfolio.md` (o `.cursorrules`)
4. Primer mensaje al agente, por ejemplo:
   > Lee AGENTS.md y todos los archivos de docs/ y data/. Propón un plan de construcción del MVP según las prioridades de AGENTS.md y espera a que lo apruebe antes de escribir código.
5. Completa `docs/08-pendientes.md` según tengas los datos (vídeo del dron, CVs en PDF, nivel de inglés, repos).

## Contenido
- `AGENTS.md` — instrucciones y reglas para el agente.
- `data/profile.json` — todos tus datos estructurados (fuente única de verdad).
- `docs/01` a `docs/08` — perfil, experiencia, proyectos, habilidades, textos ES/EN, diseño, decisiones técnicas y pendientes.
