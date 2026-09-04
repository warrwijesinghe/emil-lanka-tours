import type { DayTour } from "@/types/content";

export interface DayTourFile {
  tour: DayTour;
}

const files = Object.values(
  import.meta.glob<DayTourFile>("./day-tours/*.ts", {
    eager: true,
    import: "default",
  }),
);

export const dayTours = files
  .map(({ tour }) => tour)
  .sort((first, second) => first.id.localeCompare(second.id));
