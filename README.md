# About This Repository

This repository is a practice project just to practice on my react.js skills.

# How To Host?

1. `npm install`
2. `npm run build`
3. `docker compose up`
4. Add this config to a new file in `sites-available` folder of nginx(which exists in `/etc/nginx/sites-available` address):
   * ```
     <!-- /etc/nginx/sites-available/restaurant.maktoobgar.ir.conf -->

     server {
       listen 80;
       listen [::]:80;
       server_name restaurant.maktoobgar.ir;

       location / {
         proxy_pass http://127.0.0.1:3003;
         proxy_http_version 1.1;
         proxy_set_header Host $host;
         proxy_set_header X-Forwarded-Host $server_name;
         proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
         proxy_set_header X-Real-IP $remote_addr;
         proxy_set_header Upgrade $http_upgrade;
         proxy_set_header Connection "upgrade";
       }
     }
     ```
5. Create link file:
   * `sudo ln -s /etc/nginx/sites-available/restaurant.maktoobgar.ir.conf /etc/nginx/sites-enabled/restaurant.maktoobgar.ir.conf`
6. Run `sudo nginx -t` to check if everything has gone right.
7. Enjoy.

**Note**: In my configs I have `restaurant.maktoobgar.ir` as my domain, if you want to run this on your servers, be sure to replace my domain with your own.

## Demo

### Main Page

![](/images/demo.png)

### Cart

![](/images/cart-demo.png)