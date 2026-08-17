import site from '@/data/site.json';

export const siteName = site.businessName;
export const siteDescription = site.defaultSEO.description;
export const homepageTitle = site.defaultSEO.title;
export const homepageDescription = site.defaultSEO.description;
export const isIndexingAllowed = import.meta.env.PUBLIC_ALLOW_INDEXING === 'true';
export const contactEmail = site.email;
export const whatsappNumber = site.whatsapp.replace(/\D/g, '');
export const whatsappUrl = (message = 'Hello Emil, I would like to plan a Sri Lanka tour.') => `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
export const mainNav = [
  { href: '/', label: 'Home' }, { href: '/tours/', label: 'Round Tours' }, { href: '/day-tours/', label: 'Day Tours' },
  { href: '/destinations/', label: 'Destinations' }, { href: '/about/', label: 'About Emil' }, { href: '/contact/', label: 'Contact' }
];
export const footerExploreLinks = mainNav.slice(1, 4);
export const footerPlanLinks = [{ href: '/plan-my-tour/', label: 'Plan My Tour' }, { href: '/about/', label: 'About Emil' }, { href: '/contact/', label: 'Contact' }];
