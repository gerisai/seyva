# Configuración
La configuración tiene diferentes niveles y archivos.

## Git
Tiene dos ficheros principales
- `.gitignore` permite incluir patrones para que Git ignore ciertos archivos y carpetas. Entre otros se encuentran `.next/`, `.terraform/` y `node_modules`
- `CODEOWNERS` es el archivo que identifica a los dueños del repo.

## Proyecto
El archivo principal que gestion del proyecto y sus dependencies es `package.json`. Aunado, el `package-lock.json` mantiene la consistencia de las mismas, no debe ser editado manualmente.
Este fichero también contiene todos los scripts necesitados para desarrollo local. Vease [Desarro Local](local.md)

## Next.js
Next.js utiliza el fichero `next.config.mjs`. En este fichero se configura que el sitio sea estático en lugar de en un servidor. Existen otras muchas opciones disponibles documentadas en su [sitio](https://nextjs.org/docs/app/api-reference/config/next-config-js).

## Tailwind
Utiliza el fichero `postcss.config.mjs` y también el `globals.css` para personalización del tema. Hay muchas opciones disponibles documentadas en su [sitio](https://v2.tailwindcss.com/docs/configuration)

## Storybook
Utiliza varios ficheros. `vitest.config.js` se debe actualizar para incluir la configuración en el bundler. Todo el directorio `.storybook` tiene ficheros de configuración. Suelen permanecer por defecto. Tiene un  [sitio](https://storybook.js.org/docs/configure) muy bien documentado con todas las opciones.

## Infrastructura
Toda la infraestructura como código se encuentra en el directorio `infra/`.

## Despliegue
