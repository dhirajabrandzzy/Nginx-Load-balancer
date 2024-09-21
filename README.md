# NGINX Load Balancer

This project demonstrates how to run and rotate between three simple applications written in PHP, Node.js, and Python using either Nginx or a Node.js reverse proxy server.

## Prerequisites

- DigitalOcean droplet or any Linux server
- Basic knowledge of SSH and server management
- Installed software: Node.js, PHP, Python, Nginx (optional)

## Applications

1. **PHP Application**: Runs on port 8000
2. **Node.js Application**: Runs on port 8001
3. **Python Application**: Runs on port 8002

## Setup Instructions

### Option 1: Using Nginx

1. **Install Nginx**:
   - bash sudo apt update sudo apt install nginx
2. **Nginx Configuration**:
   - Create or edit `/etc/nginx/sites-available/default` with the following:
   - nginx http { upstream backend { server localhost:8000; # PHP Application server localhost:8001; # Node.js Application server localhost:8002; # Python Application }
   -     server {
         listen 80;

         location / {
             proxy_pass http://backend;
             proxy_set_header Host $host;
             proxy_set_header X-Real-IP $remote_addr;
             proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
             proxy_set_header X-Forwarded-Proto $scheme;
         }
     }
 }
 3. **Restart Nginx**:
    - bash sudo nginx -t sudo systemctl restart nginx

### Option 2: Using Node.js Reverse Proxy

1. **Clone the Repository**
2. **Install Dependencies**: bash npm install
3. **Run the Proxy Server**: bash node server.js
4. 4. **Access the Proxy**:
   - Visit `http://your_droplet_ip:8080` to see the applications rotate.

## Running the Applications

### PHP Application

1. **Navigate to Directory**: bash cd /var/www/php_app
2. **Run PHP Built-in Server**: bash php -S 0.0.0.0:8000

### Node.js Application

1. **Navigate to Directory**: bash cd /var/www/node_app
2. 2. **Run Node.js Server**: bash node app.js

### Python Application

1. **Navigate to Directory**: bash cd /var/www/python_app
2. **Run Flask Server**: bash python3 app.py

   
## Security and Maintenance

- Ensure your server is secured with firewalls and SSH key authentication.
- Use a process manager like `pm2` to keep your Node.js and Python applications running in the background.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
