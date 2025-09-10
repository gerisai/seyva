# Estructura de directorios
El proyecto tiene la siguiente estructura

- **src/** Código fuente del sitio.
  - **app/** Páginas y enrutamiento del sitio de acuerdo a convención de Next.js
  - **components/** Componentes individuales usados para montarse en las páginas.
  - **stories/** Ficheros de testing para componentes individuales
  - **util/** Ficheros auxiliares. **constansts.js** es el entrypoint para la mayoría de la configuración de contenido y otras constantes usadas de manera global.
- **public/** Ficheros estáticos accesibles al sitio (imágenes, iconos, etc.).
- **infra/**  Infrastructure como código (Terraform): AWS S3, CloudFront, Route53, IAM.
- **.storybook/** Configuración de Storybook
