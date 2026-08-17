# Content migration notes

The original public website’s visual components, static images, and Emil photo collection were migrated into this repository. The legacy database backup was used to recover the public tour and day-tour titles/descriptions that are represented in the local JSON files.

Current local content inventory:

- 3 round tours in `src/data/tours.json`
- 8 day tours in `src/data/day-tours.json`
- 8 destinations in `src/data/destinations.json`
- 2 recovered-style testimonial placeholders in `src/data/testimonials.json`
- Emil’s local profile imagery in `public/images/driver-guides/emil/`

The legacy database contains a much larger destination catalogue with API media URLs. Only entries with corresponding local static imagery were migrated into the public destination list; the remaining catalogue must be deliberately curated and its media recovered before publishing. No legacy API media URLs are used by this site.
