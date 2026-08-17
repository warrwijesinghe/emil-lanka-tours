import type { APIRoute } from 'astro';
export const GET: APIRoute = ({ site }) => new Response(`User-agent: *\nAllow: /\nSitemap: ${(site || new URL('https://emillankatours.com')).toString().replace(/\/$/, '')}/sitemap.xml\n`, { headers: { 'Content-Type': 'text/plain' } });
