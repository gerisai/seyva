
resource "aws_cloudfront_origin_access_control" "cf_ac_policy" {
  name                              = "Static Site AC"
  description                       = "${local.name} AC Policy"
  origin_access_control_origin_type = "s3"
  signing_behavior                  = "always"
  signing_protocol                  = "sigv4"
}

data "aws_cloudfront_cache_policy" "caching_optimized" {
  name = "Managed-CachingOptimized"
}

resource "aws_cloudfront_distribution" "cf_distribution" {
  origin {
    domain_name              = aws_s3_bucket.static_site.bucket_regional_domain_name
    origin_access_control_id = aws_cloudfront_origin_access_control.cf_ac_policy.id
    origin_id                = "s3"
  }

  comment             = "${local.name} CF distribution"
  aliases             = [local.domain_name, local.domain_name_alt]
  enabled             = true
  default_root_object = "index.html"
  price_class         = "PriceClass_100" # Only Mexico, USA and Canada

  restrictions {
    geo_restriction {
      restriction_type = "whitelist"
      locations        = ["US", "CA", "MX"]
    }
  }

  viewer_certificate {
    acm_certificate_arn = aws_acm_certificate_validation.tls.certificate_arn
    ssl_support_method  = "sni-only"
  }

  default_cache_behavior {
    allowed_methods        = ["DELETE", "GET", "HEAD", "OPTIONS", "PATCH", "POST", "PUT"]
    cached_methods         = ["GET", "HEAD"]
    cache_policy_id        = data.aws_cloudfront_cache_policy.caching_optimized.id
    target_origin_id       = "s3"
    viewer_protocol_policy = "redirect-to-https"
  }
}
