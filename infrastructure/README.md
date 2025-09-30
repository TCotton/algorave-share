# Infrastructure

This directory contains Terraform configuration for deploying Algorave Share infrastructure.

## Prerequisites

- [Terraform](https://www.terraform.io/downloads) >= 1.0
- AWS credentials configured

## Resources

The infrastructure includes:
- S3 bucket for audio file storage
- S3 bucket for code snippet storage
- Versioning enabled on both buckets
- Public access blocked for security

## Usage

### Initialize Terraform

```bash
terraform init
```

### Plan infrastructure changes

```bash
terraform plan
```

### Apply infrastructure changes

```bash
terraform apply
```

### Destroy infrastructure

```bash
terraform destroy
```

## Configuration

See `variables.tf` for configurable variables:
- `aws_region`: AWS region (default: us-east-1)
- `project_name`: Project name for resource naming (default: algorave-share)
- `environment`: Environment name (default: dev)

## Outputs

After applying, Terraform will output:
- Audio bucket name and ARN
- Code bucket name and ARN
