export function toPublicSiteUrl(path: string, { astroSite, requestUrl }: { astroSite?: URL; requestUrl: URL }) {
  return new URL(path, astroSite || requestUrl).toString();
}
