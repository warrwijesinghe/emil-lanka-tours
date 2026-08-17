import { z } from 'zod';
import toursJson from '@/data/tours.json';
import dayToursJson from '@/data/day-tours.json';
import destinationsJson from '@/data/destinations.json';
import testimonialsJson from '@/data/testimonials.json';
import type { DayTour, Destination, Tour } from '@/types/content';

const seo = z.object({ title: z.string().min(1), description: z.string().min(1) });
const tourSchema = z.object({ id: z.string(), slug: z.string().regex(/^[a-z0-9]+(?:-[a-z0-9]+)*$/), title: z.string().min(1), shortDescription: z.string().min(1), description: z.string().min(1), durationLabel: z.string().min(1), mainImageUrl: z.string().startsWith('/images/'), imageAlt: z.string().min(1), routePoints: z.array(z.string()).min(2), highlights: z.array(z.string()).min(1), bestFor: z.array(z.string()), itinerary: z.array(z.object({ dayNumber: z.number().int().positive(), title: z.string().min(1), description: z.string().min(1), route: z.string().optional(), experiences: z.array(z.string()) })), included: z.array(z.string()), excluded: z.array(z.string()), seo, featured: z.boolean() });
const dayTourSchema = z.object({ id: z.string(), slug: z.string().regex(/^[a-z0-9]+(?:-[a-z0-9]+)*$/), title: z.string().min(1), shortDescription: z.string().min(1), description: z.string().min(1), durationLabel: z.string().min(1), mainImageUrl: z.string().startsWith('/images/'), imageAlt: z.string().min(1), categories: z.array(z.string()), highlights: z.array(z.string()), destinations: z.array(z.object({ name: z.string(), slug: z.string() })), seo });
const destinationSchema = z.object({ id: z.string(), slug: z.string().regex(/^[a-z0-9]+(?:-[a-z0-9]+)*$/), name: z.string().min(1), region: z.string().min(1), shortDescription: z.string().min(1), description: z.string().min(1), mainImageUrl: z.string().startsWith('/images/'), imageAlt: z.string().min(1), highlights: z.array(z.string()), bestFor: z.array(z.string()), suggestedVisitDuration: z.string().min(1), seo, featured: z.boolean() });
function uniqueSlugs(items: { slug: string }[], label: string) { if (new Set(items.map((x) => x.slug)).size !== items.length) throw new Error(`Duplicate ${label} slug in local JSON.`); return items; }
export const tours = uniqueSlugs(z.array(tourSchema).parse(toursJson), 'tour') as Tour[];
export const dayTours = uniqueSlugs(z.array(dayTourSchema).parse(dayToursJson), 'day tour') as DayTour[];
export const destinations = uniqueSlugs(z.array(destinationSchema).parse(destinationsJson), 'destination') as Destination[];
export const testimonials = z.array(z.object({ name: z.string(), quote: z.string(), location: z.string().optional() })).parse(testimonialsJson);
export const stripHtml = (value: string) => value.replace(/<[^>]*>/g, ' ').replace(/\s+/g, ' ').trim();
export const getTour = (slug: string) => tours.find((item) => item.slug === slug);
export const getDayTour = (slug: string) => dayTours.find((item) => item.slug === slug);
export const getDestination = (slug: string) => destinations.find((item) => item.slug === slug);
