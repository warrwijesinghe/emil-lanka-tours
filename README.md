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

## How to add a new Travel Guide article

Add one Markdown file to `src/content/travelGuide/`. Include `title`, `description`, `slug`, `publishedDate`, `author`, `image`, and `imageAlt`; `updatedDate`, `category`, `featured`, and `relatedTours` are optional. Images should be placed under `public/images/` and referenced with a path such as `/images/travel-guide/example.webp`.

```md
---
title: Example Sri Lanka Travel Guide
description: A concise, helpful summary for search and readers.
slug: example-sri-lanka-travel-guide
publishedDate: 2026-08-17
author: Emil Jayasekara
image: /images/travel-guide/example.webp
imageAlt: Descriptive image text
category: Planning advice
featured: false
---

## Useful heading
Write the guide in Markdown with clear headings and natural internal links.
```

Run `npm run build` before deployment. The listing page, article route, related-guide section and sitemap are generated automatically; slugs must be unique and lowercase kebab-case.

## Production setup

On Ubuntu install Node.js LTS, Nginx, Git and Certbot. Clone to `/var/www/emil-lanka-tours`, create `.env` from `.env.example`, then run `npm ci` and `npm run build`. Install `deployment/emil-lanka-tours.service` in `/etc/systemd/system/`, run `systemctl daemon-reload`, `systemctl enable --now emil-lanka-tours`, and use `deployment/nginx-emil-lanka-tours.conf` as the Nginx site. Obtain HTTPS with Certbot after DNS points to the server.

For GitHub deployment, configure `DEPLOY_HOST`, `DEPLOY_USER` and `DEPLOY_SSH_KEY` repository secrets. The workflow pulls `main`, installs production dependencies, builds and restarts the systemd service.
