import type { Experience } from "./experiences";

export interface ExperienceFile {
  experience: Experience;
}

/**
 * Every file in ./experiences is included automatically.
 * Add an experience by creating a file that exports an ExperienceFile.
 */
const files = Object.values(
  import.meta.glob<ExperienceFile>("./experiences/*.ts", {
    eager: true,
    import: "default",
  }),
);

export const experiences = files.map(({ experience }) => experience);
