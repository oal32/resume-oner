aws ecr get-login-password --region us-east-2 | docker login --username AWS --password-stdin 828147736316.dkr.ecr.us-east-2.amazonaws.com
sudo podman run --privileged --rm tonistiigi/binfmt --install all
docker build --platform linux/arm64 -t 828147736316.dkr.ecr.us-east-2.amazonaws.com/strongmoor/resume-arm:latest .
docker push 828147736316.dkr.ecr.us-east-2.amazonaws.com/strongmoor/resume-arm:latest
cd terraform
terraform apply -var="image_tag=latest"
terraform output -raw lb_dns_name > lb_dns_name
python dns_updater.py