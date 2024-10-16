export type Project = {
  href: { live: string; github: string };
  title: string;
  description: string;
  image: string;
};

export const projects: Project[] = [
  {
    title: "AnimeSun",
    href: {
      live: "https://anime-website-eduardionescu.vercel.app/",
      github: "https://github.com/EduardIonescu/animeWebsite",
    },
    description:
      "Anime Database website that retrieves data from multiple APIs for comprehensive title information.",
    image: "/projects/anime.webp",
  },
  {
    title: "FitByte",
    href: {
      live: "https://fit-byte.vercel.app/categories",
      github: "https://github.com/EduardIonescu/fitness-app",
    },
    description: "A super straight forward approach to tracking workouts.",
    image: "/projects/fitbyte.webp",
  },
  {
    title: "Meditate",
    href: {
      live: "https://meditate-now.vercel.app/",
      github: "https://github.com/EduardIonescu/meditate",
    },
    description:
      "Hit the pause button on the endless to-do list, and just breathe.",
    image: "/projects/meditate.webp",
  },
  {
    title: "League Friends",
    href: {
      live: "https://league-friends.vercel.app/",
      github: "https://github.com/EduardIonescu/league-friends",
    },
    description: "Project to track my friends' ranks in League.",
    image: "/projects/league-friends.webp",
  },
];
