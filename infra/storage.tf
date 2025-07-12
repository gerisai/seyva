resource "aws_s3_bucket" "static_site" {
  bucket = local.bucket_name
  acl    = "public-read"

  website {
    index_document = "index.html"
    error_document = "error.html"
  }

  tags = {
    Name = local.bucket_name
  }
}
