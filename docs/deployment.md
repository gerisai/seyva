# Despliegue
El despliegue del sitio está automatizado con [GitHub Actions](https://github.com/features/actions?locale=es-419). GitHub Actions es una plataform que usa archivos YAML para construir `workflows` que automatizan todo tipo de procesos repetitivos. Una gran ventaja es que se pueden configurar ciertos eventos como disparadores de dichos procesos, por ejemplo, cuando se fusiona un pull request. 

## Sitio Principal
El workflow `.github/workflows/deploy-site.yml` contiene las intrucciones para desplegar el código al sitio principal. Se debe desplegar manualmente ya que solo existe un ambiente produtivo.

## Documentación
La documentación también es un sitio en [GitHub Pages](https://docs.github.com/en/pages). Cada vez que se hace un push a la rama `main` se actualizará de manera automática con GitHub Actions.
