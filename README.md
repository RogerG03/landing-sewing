# Entre Hilos · Landing de costura

Primera propuesta para un taller de costura: vestidos a medida, bordados y arreglos. Nombre, textos y muestras provisionales. Paleta uno: amarillo `#FFF28A`, verde `#A6E99A`, celeste `#A5D9E8`, lila `#D7B5F0`, rosa `#F49BE4` y rosa suave `#F2A6BD`.

## Desarrollo

Requiere Node.js 22.12 o posterior.

```sh
npm install
npm run dev
```

Vista local: http://127.0.0.1:4321/

```sh
npm run build
npm run preview
```

Salida estática: `dist/`. En entornos aislados se puede definir `ASTRO_TELEMETRY_DISABLED=1` para evitar escribir configuración fuera del proyecto.

## Contenido que se puede sustituir

- `src/pages/index.astro`: nombre, presentación, servicios, historia y contacto.
- `src/data/projects.ts`: catálogo, telas, detalles y fotos; cada entrada admite URLs en `images`. Sin fotos, se muestran ilustraciones originales señaladas como muestras conceptuales.
- `whatsappNumber` en el mismo archivo: número internacional, solo dígitos. Al proporcionar un número válido, el contacto se convierte en enlace real de WhatsApp con mensaje inicial. Mientras está vacío, se muestra como próximamente.
- `src/styles/global.css`: paleta, tipografía y composición responsive.

## Animación

Astro genera el contenido HTML y una isla React integra `@remotion/player`. La composición vectorial pasa de máquina cosiendo y carrete desenrollándose a cremallera abriéndose y bordado floral. El avance sigue el scroll nativo y se invierte al subir. La pausa conserva el fotograma y permite continuar desplazándose.

Remotion se carga dinámicamente. Con `prefers-reduced-motion`, se mantiene la ilustración estática y se puede activar la animación explícitamente. El texto está fuera de la composición decorativa. En escritorio, una columna de la cuadrícula contiene la escena sticky hasta el final de la historia. A 960 px o menos, cada capítulo muestra su propia escena en el flujo normal; los gráficos no comparten una capa con los textos. No se fuerzan alturas de viewport para crear distancia de scroll. La lectura principal usa 18 px y los controles tienen al menos 46 px de altura. Los filtros y el carrusel usan JavaScript del navegador; los detalles utilizan un diálogo HTML nativo, con Escape y restitución del foco.

No hay formularios, cuentas, analíticas ni datos personales almacenados. Google Fonts sirve Italiana y DM Sans, con alternativas locales serif y sans serif. Las muestras vectoriales se incluyen en el código. Una tarjeta usa una fotografía de inspiración de Karen Willis Holmes / Unsplash para revisar el diseño con fondos claros y oscuros; su crédito y licencia están en `public/images/CREDITS.md` y en la ficha. No se presenta como trabajo del taller. Los títulos se mantienen fuera de las imágenes; las etiquetas y el botón tienen superficies opacas para conservar contraste. La vista completa de la ficha preserva las proporciones de la foto; la segunda vista muestra un encuadre de detalle cuando solo hay una imagen.

## Revisión manual

1. Abrir la portada en escritorio y móvil; comprobar que no exista desplazamiento horizontal.
2. Bajar y subir por la historia; verificar máquina, cremallera y bordado, y pausar/reanudar.
3. Probar filtros, flechas y navegación del carrusel con teclado.
4. Abrir una creación, cambiar vista completa/detalle y cerrar con Escape.
5. Activar movimiento reducido y comprobar el póster estático.
6. Compilar con `npm run build` antes de desplegar.

Documentación oficial: [Astro + React](https://docs.astro.build/en/guides/integrations-guide/react/) y [Remotion Player](https://www.remotion.dev/docs/player/player).
