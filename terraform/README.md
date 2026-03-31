# Resume Oner Terraform Scripts

This directory contains Terraform scripts to deploy the Resume Oner application to Amazon ECS.

## Prerequisites

- [Terraform](https://learn.hashicorp.com/tutorials/terraform/install-cli) installed
- [AWS CLI](https://docs.aws.amazon.com/cli/latest/userguide/cli-chap-install.html) installed and configured with your AWS credentials
- [Docker](https://docs.docker.com/get-docker/) installed

## Usage

1. **Initialize Terraform:**
   Navigate to the `terraform` directory and run `terraform init` to initialize the Terraform workspace.
   ```bash
   cd terraform
   terraform init
   ```

2. **Plan the deployment:**
    Run `terraform plan` to see the resources that will be created.
    ```bash
    terraform plan
    ```

3. **Apply the configuration:**
    Run `terraform apply` to create the AWS resources.
    ```bash
    terraform apply
    ```
    This will create an ECR repository, an ECS cluster, a task definition, a service, and an Application Load Balancer.

4. **Build and push the Docker image:**
    After the ECR repository is created, you need to build the Docker image for the application and push it to the repository.

    a. **Get the ECR repository URL:**
        You can get the ECR repository URL from the output of the `terraform apply` command or by running `terraform output`.

    b. **Authenticate Docker to the ECR registry:**
        Run the following command to authenticate Docker to your ECR registry.
        ```bash
        aws ecr get-login-password --region <your-aws-region> | docker login --username AWS --password-stdin <your-aws-account-id>.dkr.ecr.<your-aws-region>.amazonaws.com
        ```

    c. **Build the Docker image:**
        Navigate to the root of the project and run the following command to build the Docker image.
        ```bash
        docker build -t <ecr-repository-url>:latest .
        ```

    d. **Push the Docker image:**
        Push the Docker image to the ECR repository.
        ```bash
        docker push <ecr-repository-url>:latest
        ```

5. **Access the application:**
    Once the ECS service is running, you can access the application using the DNS name of the Application Load Balancer. You can get the URL from the output of the `terraform apply` command or by running `terraform output lb_dns_name`.

## Cleanup

To destroy the AWS resources created by Terraform, run the following command:
```bash
terraform destroy
```
