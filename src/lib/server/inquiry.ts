import { z } from 'zod';
import { destinations } from '@/lib/content';

const interests = ['Culture & Heritage', 'Wildlife', 'Hill Country', 'Beaches', 'Tea Country', 'Train Journey', 'Adventure', 'Local Experiences', 'Relaxation', 'Wellness'] as const;
const accommodation = ['Budget', 'Mid-range', 'Boutique', 'Luxury', 'Already booked', 'Not sure'] as const;
const serverEnv = () => (globalThis as unknown as { process?: { env?: Record<string, string | undefined> } }).process?.env || {};
export const inquirySchema = z.object({
  fullName: z.string().trim().min(2).max(120), email: z.string().trim().email().max(254), country: z.string().trim().min(2).max(100), phone: z.string().trim().min(5).max(40),
  arrivalDate: z.coerce.date(), departureDate: z.coerce.date(), adults: z.coerce.number().int().min(1).max(30), children: z.coerce.number().int().min(0).max(20),
  interests: z.array(z.enum(interests)).max(interests.length).default([]), destinations: z.array(z.string()).max(destinations.length).default([]), accommodation: z.enum(accommodation),
  airportPickup: z.boolean().default(false), specialRequirements: z.string().trim().max(2000).default(''), message: z.string().trim().min(10).max(4000), turnstileToken: z.string().min(1)
}).superRefine((value, ctx) => { if (value.departureDate < value.arrivalDate) ctx.addIssue({ code: 'custom', path: ['departureDate'], message: 'Departure date must be after arrival date.' }); for (const slug of value.destinations) if (!destinations.some((destination) => destination.slug === slug)) ctx.addIssue({ code: 'custom', path: ['destinations'], message: 'One or more selected destinations are invalid.' }); });
export type Inquiry = z.infer<typeof inquirySchema>;
export function makeReference(now = new Date(), bytes: Uint8Array = crypto.getRandomValues(new Uint8Array(4))) { const date = [String(now.getUTCFullYear()).slice(-2), String(now.getUTCMonth() + 1).padStart(2, '0'), String(now.getUTCDate()).padStart(2, '0')].join(''); const suffix = Array.from(bytes).map((byte: number) => 'ABCDEFGHJKLMNPQRSTUVWXYZ23456789'[byte % 32]).join(''); return `ELT-${date}-${suffix}`; }
export async function verifyTurnstile(token: string, ip?: string | null) { const secret = serverEnv().TURNSTILE_SECRET_KEY; if (!secret) return { ok: false, error: 'Inquiry sending is not configured on this environment.' }; const body = new URLSearchParams({ secret, response: token }); if (ip) body.set('remoteip', ip); try { const response = await fetch('https://challenges.cloudflare.com/turnstile/v0/siteverify', { method: 'POST', body }); const result = await response.json() as { success?: boolean }; return { ok: result.success === true, error: result.success ? undefined : 'Please complete the spam check and try again.' }; } catch { return { ok: false, error: 'The spam check could not be verified. Please try again.' }; } }
