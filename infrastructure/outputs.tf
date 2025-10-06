output "audio_bucket_name" {
  description = "Name of the S3 bucket for audio storage"
  value       = aws_s3_bucket.audio_storage.id
}

output "code_bucket_name" {
  description = "Name of the S3 bucket for code storage"
  value       = aws_s3_bucket.code_storage.id
}

output "audio_bucket_arn" {
  description = "ARN of the S3 bucket for audio storage"
  value       = aws_s3_bucket.audio_storage.arn
}

output "code_bucket_arn" {
  description = "ARN of the S3 bucket for code storage"
  value       = aws_s3_bucket.code_storage.arn
}
