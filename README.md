# Vida Fitness · Landing page

Landing de **Vida Fitness** (Villa de Mayo): video real de clase en loop, disciplinas, galería del espacio, calendario de clases filtrable, profes, comunidad de Instagram y reservas por WhatsApp.

**Stack:** React 19 · Vite 8 · CSS por componente. Requiere Node `^20.19` o `>=22.12` (ver `.nvmrc`).

## Cómo correrlo

```bash
npm install
npm run dev       # http://localhost:5173
npm run build     # genera /dist para subir a cualquier hosting estático
npm run preview   # sirve /dist localmente
```

## Despliegue

Se publica en **GitHub Pages** automáticamente con cada push a `main` (`.github/workflows/deploy.yml`):
compila con `npm run build` y sube `dist/`.

- Sitio: https://jpatroni.github.io/VidaFitness/
- El sitio vive en la subcarpeta `/VidaFitness/` (`base` en `vite.config.js`). Para otro hosting en la raíz, compilar con `BASE_PATH=/ npm run build`.
- Las rutas a archivos de `public/` desde JSX usan `asset('multimedia/...')` (`presentation/utils/asset.js`) para respetar esa base.

## Arquitectura en capas

```
src/
├── main.jsx                    ← Composition root: cablea las capas y monta React
│
├── domain/                     ← CAPA DE DOMINIO (no depende de nada)
│   ├── constants.js               días y turnos
│   └── entities/                  Clase, Programa, Profesor, Medio + sus reglas (turno, horaLabel…)
│
├── data/                       ← CAPA DE DATOS (depende de domain)
│   ├── sources/                   datos crudos: gym, profes, programas, clases, medios, crédito
│   └── repositories/              devuelven entidades del dominio (async)
│
├── application/                ← CAPA DE APLICACIÓN / casos de uso (depende de domain)
│   ├── CatalogService.js          programas con su profe, equipo, fotos y videos
│   ├── ScheduleService.js         grilla semanal turno × día
│   └── ContactService.js          links de reserva (WhatsApp o DM de Instagram)
│
└── presentation/               ← CAPA DE PRESENTACIÓN (React)
    ├── App.jsx                    compone la página y guarda el estado compartido
    ├── context/                   ServicesContext: inyecta los servicios (useServices)
    ├── hooks/                     useLandingData, useScrolled, useInView, useReducedMotion…
    ├── components/
    │   ├── <Seccion>/             Navbar, Hero, Programs, Benefits, Gallery, Schedule,
    │   │                          Coaches, Community, CtaBanner, Footer, WhatsAppFab (.jsx + .css)
    │   ├── Icon.jsx               íconos SVG inline
    │   ├── LoopVideo.jsx          video en loop sin sonido (sólo se reproduce en pantalla)
    │   ├── Pinceladas/            trazos diagonales de la marca para decorar secciones
    │   └── Reveal.jsx             animación de entrada al hacer scroll
    └── styles/                    tokens.css (paleta, degradé y tipografía de la marca) y base.css

public/
└── multimedia/                 ← todo el contenido visual de la página
    ├── marca/                     logo horizontal y vertical, isotipo, favicon, pinceladas
    ├── fotos/
    │   ├── profes/                fotos de los profes
    │   └── galeria/               fotos del espacio y de las clases
    └── videos/                    videos verticales (H.264, sin audio) + su <nombre>-poster.jpg
```

### Regla de dependencias

```
presentation ──► application ──► domain ◄── data
```

- `domain` no importa nada de otras capas.
- `presentation` nunca importa de `data`: recibe los servicios por Context (`useServices`).
- Sólo `main.jsx` conoce las implementaciones concretas (repositorios) y las conecta.
- Los imports **entre capas** usan alias (`@domain`, `@data`, `@application`, `@presentation`, definidos en `vite.config.js` y `jsconfig.json`); dentro de una misma capa se usan rutas relativas.

### Cómo escalar

| Necesito… | Cómo |
|---|---|
| Leer horarios desde una API o CMS | Crear `ApiClaseRepository` en `data/repositories/` con el mismo método `getAll()` y cambiarlo en `main.jsx`. Nada más se toca. |
| Una nueva sección | `presentation/components/<Nombre>/<Nombre>.jsx` + `.css`, y sumarla en `App.jsx`. |
| Un nuevo caso de uso (ej. reservas reales) | Un servicio en `application/` que dependa de repositorios; se inyecta por `ServicesContext`. |
| Una nueva regla de negocio | En la entidad correspondiente de `domain/entities/`. |

## Tareas comunes

| Quiero… | Edito |
|---|---|
| Cambiar horarios | `src/data/sources/clases.data.js` |
| Agregar/editar disciplina | `src/data/sources/programas.data.js` (+ color en `styles/tokens.css` → `--prog-<id>`) |
| Cambiar profes / trayectoria | `src/data/sources/profesores.data.js` (con `trayectoria` el profe sale destacado) |
| Cambiar WhatsApp o Instagram | `src/data/sources/gym.data.js` |
| Cambiar el logo | Reemplazar los archivos de `public/multimedia/marca/` (o las rutas en `marca` de `gym.data.js`) |
| Cambiar el crédito del pie (Powered by) | `src/data/sources/credito.data.js` |
| Cambiar colores/tipografías | `src/presentation/styles/tokens.css` (`--color-orange`, `--gradient-brand`, `--font-display`…) |
| Cambiar o sumar fotos/videos | Archivo en `public/multimedia/fotos/galeria/` o `public/multimedia/videos/` + entrada en `src/data/sources/medios.data.js` (colecciones `hero`, `beneficios`, `espacio`, `comunidad`) |
