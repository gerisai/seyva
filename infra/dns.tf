data "aws_route53_zone" "main" {
  name         = "tudominio.com"
  private_zone = false
}

resource "aws_route53_record" "www" {
  zone_id = data.aws_route53_zone.main.zone_id
  name    = "www"
  type    = "A"

  alias {
    name                   = "d123abc.cloudfront.net" # Esto luego lo generará tu CDN
    zone_id                = "Z2FDTNDATAQYW2"         # Zona pública de CloudFront
    evaluate_target_health = false
  }
}
