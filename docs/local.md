# Desarrollo local
`package.json` incluye todos los scripts para el desarrollo local

## Repositorio
!> SSH: `git clone git@github.com:gerisai/seyva.git`

!> HTTPS: `git clone https://github.com/gerisai/seyva.git`

Para clonar el repositorio es necesario tener configurado un PAT (Personal Access Token) o llaves SSH.


## Instalación de dependencias
!> `npm install`

Antes de poder iniciar se deben instalar las dependencias.

## Next.js
!> `npm run dev`

Next.js incluye un servidor local para ver los cambios reflejados en tiempo real. Normalmente corre en el puerto `3000`.

## Storybook
!> `npm run storybook`

Storybook corre en el puerto `6006`.

## Docsify
!> `npm run docs`

Es el servidor de la documentación. Corre en el puerto `3000`

## Producción
!> `npm run build`

Permite crear un bundle idéntico al de producción. Para probarlo, es necesario tener otro webserver como `LiveServer` y configurarlo para que tome los ficheros de la carpeta `dist/`
