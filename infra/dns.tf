resource "aws_route53_zone" "primary" {
  name    = local.domain_name
  comment = "SEyVA primmary hosted zone"
}

resource "aws_acm_certificate" "tls" {
  provider                  = aws.east
  domain_name               = local.domain_name
  subject_alternative_names = [local.domain_name_alt]
  validation_method         = "DNS"
  lifecycle {
    create_before_destroy = true
  }
}

resource "aws_route53_record" "cert_validation" {
  for_each = {
    for dvo in aws_acm_certificate.tls.domain_validation_options : dvo.domain_name => {
      name   = dvo.resource_record_name
      record = dvo.resource_record_value
      type   = dvo.resource_record_type
    }
  }

  zone_id = aws_route53_zone.primary.zone_id
  name    = each.value.name
  type    = each.value.type
  ttl     = 60
  records = [each.value.record]
}

resource "aws_acm_certificate_validation" "tls" {
  provider                = aws.east
  certificate_arn         = aws_acm_certificate.tls.arn
  validation_record_fqdns = [for record in aws_route53_record.cert_validation : record.fqdn]
}

resource "aws_route53_record" "cf_record" {
  zone_id = aws_route53_zone.primary.zone_id
  name    = ""
  type    = "A"
  alias {
    name                   = aws_cloudfront_distribution.cf_distribution.domain_name
    zone_id                = aws_cloudfront_distribution.cf_distribution.hosted_zone_id
    evaluate_target_health = true
  }
}

resource "aws_route53_record" "www" {
  zone_id = aws_route53_zone.primary.zone_id
  name    = "www"
  type    = "CNAME"
  ttl     = 5
  records = ["seyva.mx"]
}


resource "aws_route53_record" "mail_records" {
  for_each = local.mail_records
  zone_id  = aws_route53_zone.primary.zone_id
  name     = each.value.name
  type     = each.value.type
  ttl      = each.value.ttl
  records  = each.value.records
}

resource "aws_route53_record" "docs" {
  zone_id = aws_route53_zone.primary.zone_id
  name    = "docs"
  type    = "A"
  ttl     = 5
  records = [
    "185.199.108.153",
    "185.199.109.153",
    "185.199.110.153",
    "185.199.111.153"
  ]
}
