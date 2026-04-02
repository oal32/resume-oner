variable "aws_region" {
  description = "The AWS region to deploy to."
  type        = string
  default     = "us-east-2"
}

variable "app_name" {
  description = "The name of the application."
  type        = string
  default     = "resume-oner"
}

variable "image_tag" {
  description = "The tag for the Docker image."
  type        = string
  default     = "latest"
}
