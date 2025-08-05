resource "aws_s3_bucket" "static_site" {
  bucket = "${local.project_name}-static-site"
}

resource "aws_s3_bucket_ownership_controls" "static_site_bucket_owner" {
  bucket = aws_s3_bucket.static_site.id
  rule {
    object_ownership = "BucketOwnerPreferred"
  }
}

resource "aws_s3_bucket_policy" "static_site_cf_access" {
  bucket = aws_s3_bucket.static_site.id
  policy = data.aws_iam_policy_document.cf_bucket_policy.json
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
