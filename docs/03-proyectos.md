# 03 · Proyectos (casos de estudio)

Van en el carrusel de proyectos, en este orden: TPV Virtual, inventario, Habit Tracker y este portfolio. El TFG no va en el carrusel: tiene su propio apartado justo debajo. Los proyectos de empresa (Beply, NAX Solutions) no van aquí: se cuentan en Experiencia.

Estructura recomendada para cada caso de estudio:
1. **Problema** (1-2 frases).
2. **Qué construí** (3-5 viñetas).
3. **Decisiones técnicas** (por qué esas herramientas).
4. **Resultado** (solo hechos verificables, sin métricas inventadas).
5. **Stack** (chips).
6. **Enlaces** (repo, vídeo, memoria).

---

## 1. Navegación autónoma de drones con VLMs (TFG) — DESTACADO
Ene. 2026 – Jul. 2026 · Python · Qwen3-VL · Ollama · Unity

Título de la memoria: *Ceguera Volumétrica en Navegación Autónoma de Drones mediante VLM* (Universidad de Alicante, julio de 2026).

> **Alcance real, no ampliar:** todo ocurre **en simulación** (Unity + ML-Agents, dron modelado a partir de un DJI Tello). **No hubo vuelo con dron real.** El VLM principal (Qwen3-VL 235B) se ejecutó **en la nube** a través de Ollama, no en local. No usar «vuelo físico», «en local», «sin nube» ni «100 % autónomo».

**Problema:** los sistemas de navegación con VLMs basados en comandos discretos no resuelven bien el cruce de puertas en interiores: el modelo no percibe el volumen del dron respecto al hueco («ceguera volumétrica»), oscila y pierde el objetivo.

**Punto de partida:** VLN-Pilot (Domínguez-Dager et al., 2026, arXiv:2602.05552). El código base del repositorio es de Bessie Domínguez y Sergio Suescun; el trabajo de Saúl está en la rama `nuevo_flujo_desarrollo`. Hay que citarlo siempre: no presentar el sistema como construido desde cero.

**Qué construyó:**
- Movilidad adaptativa inspirada en See, Point, Fly (Hu et al., 2025): el VLM señala puntos en la imagen y la capa de control los convierte en movimiento, en lugar de elegir comandos discretos.
- Capa de seguridad (SafetyEnvelope) que intercepta las órdenes cuando el dron está a punto de colisionar, sobre todo en pasos estrechos.
- Sistema de misiones con metas explícitas y un medidor de progreso.
- Inyección constante de contexto para que el modelo no pierda el objetivo.
- Batería de pruebas: 9 escenarios × 5 repeticiones × 2 sistemas = 90 ejecuciones, con el mismo VLM en ambos.

**Decisiones técnicas:**
- Bucle de percepción–acción frente a comandos discretos: reduce los comportamientos oscilatorios y los bucles de realineación.
- Modelo en la nube: hacer las pruebas en local no era viable sin una GPU capaz.

**Resultados (memoria, cuadro 6.2; meta alcanzada):**

| Puertas a cruzar | Propuesta propia | Propuesta base |
|---|---|---|
| 0 | 100 % (15/15) | 66,7 % (10/15) |
| 1 | 70 % (14/20) | 0 % (0/20) |
| 2 | 0 % (0/10) | 0 % (0/10) |
| **Global** | **64,4 % (29/45)** | **22,2 % (10/45)** |

Sin metas falsas en la propuesta propia.

**Limitaciones (mostrarlas):** ninguna misión de 2 puertas se completó; el dron pierde la referencia con vistas uniformes o tras giros grandes; la capa de seguridad reduce las colisiones, pero no las elimina.

**Trabajo futuro:** pasar a un DJI Tello real y probar VLMs reducidos que puedan ejecutarse en el propio dron.

**Recursos visuales:**
- Vídeo de simulación: `public/video/tfg-simulacion.mp4` (37 s, sin audio, rotulado como simulación).
- Diagrama del bucle See → Point → Fly en SVG.
- Repo: https://github.com/saulcone/drone-llm-saul/tree/nuevo_flujo_desarrollo
- Memoria: no se enlaza por ahora (ver `08-pendientes.md`).

---

## 2. TPV Virtual
Java 21 · Spring Boot · Spring Security · JWT · MySQL · Redis · Vue 3 · Docker.
Proyecto académico en equipo: simulador de pasarela de pago con checkout alojado, transacciones y devoluciones, y paneles para comercios, soporte y administración. No mueve dinero real.
Parte de Saúl (según sus commits): registro y login con contraseñas hasheadas, gestión de claves de API y validación en el backend; autenticación con Pinia y vistas de soporte en el frontend. No presentarlo como proyecto individual.
Repos: https://github.com/fabgs/tpv-backend y https://github.com/fabgs/tpv-frontend · Demo: https://tpv-frontend.vercel.app/

## 3. Habit Tracker (en desarrollo)
Java 21 · Spring Boot 4.1 · PostgreSQL 16 · Flyway · JUnit 5 · Mockito · Docker Compose.
Proyecto personal de aprendizaje: backend para definir hábitos y registrar el progreso día a día, calculando cada día según la zona horaria del usuario.
Entidades: User, Habit, HabitLog. Repo: https://github.com/saulcone/habit-tracker

## 4. Sistema de gestión de inventario
Python · Django · Django Ninja · React · TypeScript · PostgreSQL · Docker.
Aplicación full-stack de productos e inventario con panel de métricas, autenticación JWT y control de acceso por roles (admin, staff, viewer). Repo: https://github.com/saulcone/event-driven-inventory-api
**Confidencialidad:** nació como prueba técnica para una empresa. No nombrar a la empresa en la web ni en el repo. La foto de la web va recortada sin la barra lateral. Aunque el repo se llama `event-driven`, no usa eventos: no describirlo así.

## 5. Este portfolio
Web estática, bilingüe, accesible, con CI/CD en GitHub Actions (build + tests + Lighthouse). Sirve como demostración de buenas prácticas.
