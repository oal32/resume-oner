import os
import json
import urllib.request
from urllib.error import URLError, HTTPError

def load_dotenv(filepath=".env"):
    """Simple stdlib parser for .env files."""
    if not os.path.exists(filepath):
        print(f"Error loading {filepath} file")
        return
    
    with open(filepath, "r") as f:
        for line in f:
            line = line.strip()
            if not line or line.startswith("#"):
                continue
            if "=" in line:
                key, val = line.split("=", 1)
                os.environ[key.strip()] = val.strip().strip("'\"")

def read_new_lb_ip():
    try:
        with open("lb_dns_name", "r") as f:
            return f.read().strip()
    except IOError:
        print("Cannot read file lb_dns_name")
        exit(1)

def update_ip():
    lb_ip = read_new_lb_ip()
    load_dotenv()

    # Note: Added fallback for CLOUDFLARE_API_TOKEN in case the typo is fixed in the .env file
    api_token = os.getenv("CLOUDFLARE_API_TOKEN")
    zone_id = os.getenv("CLOUDFLARE_ZONE_ID")
    dns_record_name = os.getenv("DNS_RECORD_NAME")

    if not all([api_token, zone_id, dns_record_name]):
        print("Missing required environment variables.")
        exit(1)

    # Get the current DNS record IP address from Cloudflare
    url = f"https://api.cloudflare.com/client/v4/zones/{zone_id}/dns_records?name={dns_record_name}"
    headers = {
        "Content-Type": "application/json",
        "Authorization": f"Bearer {api_token}"
    }

    req = urllib.request.Request(url, headers=headers)
    try:
        with urllib.request.urlopen(req) as response:
            resp_data = response.read()
            print(f"DNS Response status code: {response.getcode()}")
    except (HTTPError, URLError) as e:
        print(f"Error fetching DNS record: {e}")
        exit(1)

    dns_resp = json.loads(resp_data)
    print(f"DNS Response: {json.dumps(dns_resp)}")

    current_ip = dns_resp["result"][0]["content"]
    record_id = dns_resp["result"][0]["id"]
    print(f"Current DNS Record IP: {current_ip}")

    update_url = f"https://api.cloudflare.com/client/v4/zones/{zone_id}/dns_records/{record_id}"
    payload = json.dumps({"type": "CNAME", "name": dns_record_name, "content": lb_ip, "ttl": 1, "proxied": False}).encode("utf-8")
    
    put_req = urllib.request.Request(update_url, data=payload, headers=headers, method="PUT")
    try:
        with urllib.request.urlopen(put_req) as put_resp:
            print(put_resp.getcode())
            print("DNS record updated successfully.")
    except HTTPError as e:
        print(e.code)
        print(f"Failed to update DNS record: {e.read().decode('utf-8')}")
        exit(1)

if __name__ == "__main__":
    update_ip()