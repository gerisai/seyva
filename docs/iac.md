# Infraestructura como código
[Terraform](https://developer.hashicorp.com/terraform) se usó como herramienta principal para mantener la infraestructura en código. Esta es una excelente práctica que ayuda a sitios enteros a mantener rastros de los cambios y permitir la reconstrucción rápida en caso de desastres. El directorio `infra/` contiene todos los archivos de configuración de Terraform.

El archivo `.terraform.lock.hcl` mantiene un control de los módulos y provedores y es gestionado por Terraform únicamente.

## Instalación
La instalación local de Terraform se puede hacer siguiente este [enlace](https://developer.hashicorp.com/terraform/install)

## Backend
Adicionalmente se usa `remote backend`, una práctica que almacena el estado de la infrastructura en una nube. La cubeta `tf-state-seyva` contiene el estado respaldado en AWS. 

## Flujo
El flujo de comandos suele ser
1. `terraform init` para inicializar el backend, modulos y provedores
2. `terraform plan` para visualizar los cambios
3. `terraform apply` para aplicar los cambios (necesita confirmación interactiva)
