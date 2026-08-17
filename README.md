# Chauffeur Emil Lanka Tours

Astro website for a single Sri Lankan chauffeur/tour operator. Tourism content is editable in `src/data/*.json`; the build validates its required fields, local image paths and unique slugs.

## Local development

```bash
npm install
npm run dev
npm run build
npm run preview
```

Copy `.env.example` to `.env` for the inquiry flow. Without Turnstile and ZeptoMail credentials, the website remains fully browseable but inquiries return a clear configuration error and no email is sent.

## Production setup

On Ubuntu install Node.js LTS, Nginx, Git and Certbot. Clone to `/var/www/emil-lanka-tours`, create `.env` from `.env.example`, then run `npm ci` and `npm run build`. Install `deployment/emil-lanka-tours.service` in `/etc/systemd/system/`, run `systemctl daemon-reload`, `systemctl enable --now emil-lanka-tours`, and use `deployment/nginx-emil-lanka-tours.conf` as the Nginx site. Obtain HTTPS with Certbot after DNS points to the server.

For GitHub deployment, configure `DEPLOY_HOST`, `DEPLOY_USER` and `DEPLOY_SSH_KEY` repository secrets. The workflow pulls `main`, installs production dependencies, builds and restarts the systemd service.
