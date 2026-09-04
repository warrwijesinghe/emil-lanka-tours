import type { APIRoute } from 'astro';
import { destinations, visibleDayTours } from '@/lib/content';
import { roundTours } from '@/data/tours';
import { getCollection } from 'astro:content';

export const GET: APIRoute = async ({ site, url }) => {
  const base = site || url;
  const guides = await getCollection('travelGuide');
  const paths = ['/', '/tours/', '/day-tours/', '/destinations/', '/travel-guide/', '/about/', '/plan-my-tour/', '/contact/', ...roundTours.map((tour) => `/tours/${tour.id.toLowerCase()}/`), ...visibleDayTours.map((item) => `/day-tours/${item.slug}/`), ...destinations.map((item) => `/destinations/${item.slug}/`), ...guides.map((guide) => `/travel-guide/${guide.id.replace(/\.md$/, '')}/`)];
  const xml = `<?xml version="1.0" encoding="UTF-8"?><urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">${paths.map((path) => `<url><loc>${new URL(path, base).toString()}</loc></url>`).join('')}</urlset>`;
  return new Response(xml, { headers: { 'Content-Type': 'application/xml' } });
};
