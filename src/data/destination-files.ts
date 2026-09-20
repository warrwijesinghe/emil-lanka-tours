import type { Destination } from "@/types/content";

export interface DestinationFile {
  destination: Destination;
}

/**
 * Every file in ./destinations is included automatically.
 * Add a destination by creating a file that exports a DestinationFile.
 */
const files = Object.values(
  import.meta.glob<DestinationFile>("./destinations/*.ts", {
    eager: true,
    import: "default",
  }),
);

export const destinations = files.map(({ destination }) => destination);
