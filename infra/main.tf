terraform {
  required_version = ">= 1.12.0"

  backend "s3" {
    bucket = "tf-state-seyva"
    key    = "seyva"
    region = "us-west-2"
  }

  required_providers {
    aws = {
      source  = "hashicorp/aws"
      version = "~> 6.0"
    }
  }

}
provider "aws" {
  region = var.aws_region
  default_tags {
    tags = local.tags
  }
}

provider "aws" { # required for ACM
  alias  = "east"
  region = "us-east-1"
}
