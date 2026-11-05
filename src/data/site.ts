export const site = {
  name: 'Jerry Ho',
  title: 'Senior Software Engineer',
  location: 'Los Angeles',
  email: 'mrjerryho@gmail.com',
  github: 'https://github.com/mrjerryho',
  linkedin: 'https://www.linkedin.com/in/mrjerryho/',
  photography: 'https://www.jerryhophotography.com',
  description:
    'Jerry Ho is a Senior Software Engineer in Los Angeles. Full-stack systems, iOS apps, trading tools and AI-agent workflows.',
};

/**
 * Professional experience, grouped by capability, never by employer or date.
 * Rules: no employer names, no internal system names, no confidential metrics.
 * Entries with draft: true are hidden in production builds.
 */
export const experience: { area: string; points: string[]; stack: string[]; draft?: boolean }[] = [
  {
    area: 'Media delivery at streaming scale',
    points: [
      'Designed, built and ran a service that delivers artwork, audio and metadata to a major streaming platform.',
      'Supported the asset-management and high-speed file-transfer tools around it, from design through production support.',
      'Team work recognized with a 2021 industry technology innovation award.',
    ],
    stack: [], // TODO(Jerry): confirm the stack for this work; don't guess it
  },
  {
    area: 'E-commerce and marketplaces',
    points: [],
    stack: [],
    draft: true,
  },
  {
    area: 'Real estate tech',
    points: [],
    stack: [],
    draft: true,
  },
];
