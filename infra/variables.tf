variable "aws_region_primary" {
  description = "Región principal de AWS para desplegar recursos"
  type        = string
  default     = "us-west-2"  
}

variable "aws_region_secondary" {
  description = "Región secundaria de AWS"
  type        = string
  default     = "us-east-1"
}

variable "project_name" {
  type        = string
  description = "Nombre del proyecto"
  default     = "fundacion-seyva"
}