# Editing day tours

Each `.ts` file in this folder defines one day tour. Edit the values inside the `tour` object; the Day Tours list and its detail page update automatically.

Key fields:

- `shortDescription` — short introduction shown on the card and hero.
- `durationLabel` and `duration` — e.g. `1 Day` and `Approximately 8–9 hours`.
- `destinationsCovered`, `pickupLocations`, and `dropLocations` — lists displayed on the detail page.
- `included`, `excluded`, `experiences`, `importantInformation`, and `reasonsToBook` — one item per line.
- `itinerary` — add, remove, or reorder simple `{ time, title, description }` steps.
- `ticketInformation` — one entry per location. Set `ticketRequired` to `true` or `false`, and put the current public ticket price or note in `ticketPrice`.

Keep `id` and `slug` unique. Image paths must point to a file in `public/images/day-tours/`.
