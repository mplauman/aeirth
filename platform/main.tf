terraform {
  required_providers {
    aws = {
      source = "hashicorp/aws"
      version = "4.67.0"
    }
  }
}

provider "aws" {
  region = "us-east-2"
}

resource "aws_s3_bucket" "aeirth" {
  bucket = "aeirth"
}

resource "aws_cloudfront_cache_policy" "aeirth_cache_policy" {
  name    = "Managed-CachingOptimized"
  comment = "Policy with caching enabled. Supports Gzip and Brotli compression."
  min_ttl = 1

  parameters_in_cache_key_and_forwarded_to_origin {
    enable_accept_encoding_brotli = true
    enable_accept_encoding_gzip   = true

    cookies_config {
      cookie_behavior = "none"
    }

    headers_config {
      header_behavior = "none"
    }

    query_strings_config {
      query_string_behavior = "none"
    }
  }
}

resource "aws_cloudfront_origin_access_identity" "aeirth_access_identity" {
  comment = aws_s3_bucket.aeirth.bucket_regional_domain_name
}

data "aws_iam_policy_document" "aeirth_s3_policy" {
  statement {
    actions   = ["s3:GetObject"]
    resources = ["${aws_s3_bucket.aeirth.arn}/*"]

    principals {
      type        = "AWS"
      identifiers = [aws_cloudfront_origin_access_identity.aeirth_access_identity.iam_arn]
    }
  }
}

resource "aws_s3_bucket_policy" "aeirth" {
  bucket = aws_s3_bucket.aeirth.id
  policy = data.aws_iam_policy_document.aeirth_s3_policy.json
}

resource "aws_cloudfront_distribution" "aeirth_distribution" {
  enabled         = true
  is_ipv6_enabled = true

  origin {
    domain_name = aws_s3_bucket.aeirth.bucket_regional_domain_name
    origin_id   = aws_s3_bucket.aeirth.bucket_regional_domain_name

    s3_origin_config {
      origin_access_identity = aws_cloudfront_origin_access_identity.aeirth_access_identity.cloudfront_access_identity_path
    }
  }

  default_cache_behavior {
    target_origin_id = aws_s3_bucket.aeirth.bucket_regional_domain_name
    cache_policy_id  = aws_cloudfront_cache_policy.aeirth_cache_policy.id
    compress         = true

    allowed_methods = [ "GET", "HEAD" ]
    cached_methods  = [ "GET", "HEAD" ]

    viewer_protocol_policy = "allow-all"
  }

  restrictions {
    geo_restriction {
      locations        = []
      restriction_type = "none"
    }
  }

  viewer_certificate {
    cloudfront_default_certificate = true
    minimum_protocol_version       = "TLSv1"
  }
}

