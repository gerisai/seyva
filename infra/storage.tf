resource "aws_s3_bucket" "static_site" {
  bucket = "${local.project_name}-static-site"
}

resource "aws_s3_bucket_website_configuration" "website_config" {
  bucket = aws_s3_bucket.static_site.id

  index_document {
    suffix = "index.html"
  }

  error_document {
    key = "error.html"
  }
}

resource "aws_s3_bucket" "media_assets" {
  bucket = "${local.project_name}-media-assets"
}

resource "aws_s3_bucket_public_access_block" "media_assets" {
  bucket = aws_s3_bucket.media_assets.id

  block_public_acls       = false
  block_public_policy     = false
  ignore_public_acls      = false
  restrict_public_buckets = false
}

data "aws_iam_policy_document" "allow_public_read" {
  statement {
    principals {
      type        = "*"
      identifiers = ["*"]
    }

    actions = [
      "s3:GetObject"
    ]

    resources = [
      "${aws_s3_bucket.media_assets.arn}/*",
    ]
  }
}

resource "aws_s3_bucket_policy" "allow_public_access" {
  bucket = aws_s3_bucket.media_assets.id
  policy = data.aws_iam_policy_document.allow_public_read.json
}
