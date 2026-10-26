# Entre Hilos · Cuaderno de costura

Landing interactiva en Astro y React con forma de cuaderno de proyectos: portada ilustrada, pestañas por tipo de trabajo, hojas con notas y fichas de detalle.

## Diseño acordado

Conservar la paleta original: papel `#FBF8EF`, tinta `#453B49`, amarillo `#FFF28A`, verde `#A6E99A`, celeste `#A5D9E8`, lila `#D7B5F0`, rosa `#F49BE4` y rosa suave `#F2A6BD`. No sustituirla por otra dirección artística sin una petición explícita.

Referencia del usuario: [Superr / Refero](https://styles.refero.design/style/cfd0fec1-f25a-4b9b-9bd0-d5b66960f2f2). Se adaptan el papel, las etiquetas, las anotaciones, las pegatinas y los bordes suaves a un cuaderno de costura. No se adopta el naranja de Superr ni se replica su marca. Fraunces aporta títulos suaves y DM Sans mantiene la lectura y los controles.

## Desarrollo

Requiere Node.js 22.12 o posterior.

```sh
npm ci
npm run dev
```

Vista local: http://127.0.0.1:4321/landing-sewing/ .

```sh
npm run build
npm run preview
```

Salida estática en `dist/`, ruta base `/landing-sewing/`. En entornos aislados se puede definir `ASTRO_TELEMETRY_DISABLED=1`.

## Interacción

- La portada y el botón principal llevan al cuaderno abierto.
- Las pestañas alineadas filtran tres muestras entre Todas, A medida y Arreglos. El taller no ofrece bordado.
- Los botones anterior/siguiente pasan de proyecto y actualizan un contador anunciado por lectores de pantalla. El contenedor admite desplazamiento táctil y flechas del teclado cuando tiene el foco.
- Cada proyecto abre una ficha mediante diálogo nativo con vista completa/detalle, cierre con Escape y restitución del foco.
- La portada tiene una bienvenida suave y responde al foco y al cursor. Las hojas se deslizan y los filtros presentan la página con una transición breve.
- La máquina y el cierre se animan en un ciclo autónomo de 60 segundos, con pausa y póster estático para movimiento reducido; no dependen del scroll.
- Las preguntas usan `details` nativos. Los movimientos tienen alternativa para `prefers-reduced-motion`.

Sin JavaScript se conserva el contenido y el cuaderno admite desplazamiento horizontal nativo; filtros, contador y fichas necesitan JavaScript.

## Contenido editable

- `src/pages/index.astro`: presentación, cuaderno, proceso, preguntas y contacto.
- `src/styles/global.css`: paleta, formas de papel, encuadernación, responsive y movimiento.
- `src/components/SewingSticker.astro`: pegatinas vectoriales originales de flor, corazón cosido, carrete y tijeras.
- `src/data/projects.ts`: muestras, telas, descripciones y WhatsApp.
- `public/images/CREDITS.md`: crédito de la foto de inspiración de Karen Willis Holmes / Unsplash. No es un trabajo del taller.

Nombre y muestras continúan siendo provisionales. No se inventaron precios, reseñas ni contacto. Para activar WhatsApp, configurar `whatsappNumber` en formato internacional de 8–15 dígitos; mientras esté vacío el canal se muestra pendiente.

## Validación y publicación

Compilar con `npm run build`. Revisar 1440, 768, 390 y 320 px, filtros, contador, teclado, fichas, Escape, foco, movimiento reducido y lectura sin JavaScript. Probar también en un teléfono real antes del lanzamiento.

Se conserva `.github/workflows/pages.yml`: un push a `feat/atelier-landing` puede publicar en GitHub Pages si está configurado con GitHub Actions. Los cambios del cuaderno se mantienen en la rama `refactor`.
