terraform {
  required_version = ">= 1.0"
  
  required_providers {
    aws = {
      source  = "hashicorp/aws"
      version = "~> 5.0"
    }
  }
}

provider "aws" {
  region = var.aws_region
}

# S3 bucket for storing audio files
resource "aws_s3_bucket" "audio_storage" {
  bucket = "${var.project_name}-audio-${var.environment}"

  tags = {
    Name        = "Algorave Share Audio Storage"
    Environment = var.environment
    Project     = var.project_name
  }
}

# S3 bucket for storing code snippets
resource "aws_s3_bucket" "code_storage" {
  bucket = "${var.project_name}-code-${var.environment}"

  tags = {
    Name        = "Algorave Share Code Storage"
    Environment = var.environment
    Project     = var.project_name
  }
}

# Enable versioning on audio bucket
resource "aws_s3_bucket_versioning" "audio_versioning" {
  bucket = aws_s3_bucket.audio_storage.id
  
  versioning_configuration {
    status = "Enabled"
  }
}

# Enable versioning on code bucket
resource "aws_s3_bucket_versioning" "code_versioning" {
  bucket = aws_s3_bucket.code_storage.id
  
  versioning_configuration {
    status = "Enabled"
  }
}

# Block public access to audio bucket
resource "aws_s3_bucket_public_access_block" "audio_public_access_block" {
  bucket = aws_s3_bucket.audio_storage.id

  block_public_acls       = true
  block_public_policy     = true
  ignore_public_acls      = true
  restrict_public_buckets = true
}

# Block public access to code bucket
resource "aws_s3_bucket_public_access_block" "code_public_access_block" {
  bucket = aws_s3_bucket.code_storage.id

  block_public_acls       = true
  block_public_policy     = true
  ignore_public_acls      = true
  restrict_public_buckets = true
}
