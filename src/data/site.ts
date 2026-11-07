export const site = {
  name: 'Jerry Ho',
  title: 'Senior Software Engineer',
  location: 'Los Angeles',
  email: 'mrjerryho@gmail.com',
  github: 'https://github.com/mrjerryho',
  linkedin: 'https://www.linkedin.com/in/mrjerryho/',
  photography: 'https://www.jerryhophotography.com',
  description:
    'Jerry Ho is a Senior Software Engineer in Los Angeles: high-throughput media transfer systems at Disney, plus iOS apps and trading tools.',
  // Cloudflare Web Analytics beacon token (public by design; it ships in page source). Empty = no analytics script.
  cloudflareAnalyticsToken: '',
};

/**
 * Professional work. Policy (Jerry, 2026-11-05): Disney may be named; no dates, no "currently";
 * no other concurrent employers. Springbot (2017-2019, before Disney) may be named, without dates.
 * Numbers come from Jerry (chat) or his public resume only.
 */
type Box = { name: string; detail: string; highlight?: boolean };
export type ProWork = {
  id: string;
  scene: 'train' | 'packager';
  title: string;
  subtitle: string;
  summary: string;
  facts: { label: string; value: string }[];
  highlights: { title: string; body: string }[];
  stack: string[];
  architecture: { columns: { title: string; boxes: Box[] }[]; links: string[]; caption: string };
};

export const disney = {
  org: 'Disney',
  role: 'Senior Software Engineer, Transport team',
  intro:
    'I build and run the systems that move Disney’s media: the file-transfer platform studios and partners use every day, and the packaging service behind the artwork and metadata on Disney+.',
  stats: [
    { value: '15+ PB', label: 'moved per year' },
    { value: '32.6M+', label: 'transfers completed' },
    { value: '2021', label: 'DEG Technology Innovation Award (AMP)' },
  ],
  points: [
    'Queueing and automatic retry around every transfer, so transient failures recover on their own and on-call pages are rare.',
    'Automated ingest and problem resolution, cutting tier 1/2 intervention and escalated support tickets by over 95%.',
    'Mentored new hires and built tooling for the support teams.',
  ],
  work: [
    {
      id: 'media-monorail',
      scene: 'train',
      title: 'Media Monorail',
      subtitle: 'Disney’s media transfer platform for studios and post-production partners',
      summary:
        'Studios, post-production houses and internal teams use Media Monorail to send and receive video assets, trailers and metadata packages. I’m a senior engineer on the Transport team that builds and runs it.',
      facts: [
        { label: 'Data moved', value: '15+ PB / year' },
        { label: 'Transfers completed', value: '32.6M+' },
        { label: 'On-call', value: 'Rarely paged' },
      ],
      highlights: [
        { title: 'Reliability by design', body: 'Queueing and automatic retries wrap every transfer, so transient failures recover without anyone stepping in.' },
        { title: 'Very large files, fast', body: 'UDP-based acceleration (Aspera, Signiant) for long-distance moves, and AWS DataSync for bulk moves into S3.' },
        { title: 'Tracking across systems', body: 'Kafka publishers and consumers track deliveries across the Transport systems.' },
      ],
      stack: ['Ruby', 'Java', 'JavaScript', 'PostgreSQL', 'AWS S3', 'SQS', 'SNS', 'DataSync', 'CloudWatch', 'Kafka', 'Aspera', 'Signiant'],
      architecture: {
        columns: [
          { title: 'Clients', boxes: [{ name: 'Web app and APIs', detail: 'Studios, vendors and internal teams send and receive assets' }] },
          {
            title: 'Orchestration',
            boxes: [
              { name: 'Transfer API', detail: 'Jobs, permissions and status, backed by PostgreSQL' },
              { name: 'Queues and retries', detail: 'SQS work queues with automatic retry', highlight: true },
              { name: 'Delivery events', detail: 'SNS and Kafka keep downstream systems in step' },
            ],
          },
          {
            title: 'Transfer engines',
            boxes: [
              { name: 'UDP acceleration', detail: 'Aspera and Signiant for very large files', highlight: true },
              { name: 'AWS DataSync', detail: 'Bulk moves into and between storage' },
            ],
          },
          {
            title: 'Storage and monitoring',
            boxes: [
              { name: 'Amazon S3', detail: 'Durable storage for assets in flight and at rest' },
              { name: 'CloudWatch', detail: 'Metrics and alarms on every stage' },
            ],
          },
        ],
        links: ['HTTPS', 'queued jobs', 'objects'],
        caption: 'Simplified. Every stage is queued and retryable, so transient failures heal without a human stepping in.',
      },
    },
    {
      id: 'amp',
      scene: 'packager',
      title: 'AMP',
      subtitle: 'Artwork & Metadata Packager, the service behind the artwork and metadata on Disney+',
      summary:
        'AMP packages and delivers all of the audio/visual artwork and metadata Disney+ shows for its titles. It was a greenfield project and crucial for the Disney+ launch. I was on the team that built the MVP infrastructure and was hands-on through the rollout.',
      facts: [
        { label: 'Award', value: '2021 DEG Technology Innovation' },
        { label: 'Support tickets', value: '72% fewer' },
        { label: 'Engineering escalations', value: '89% fewer' },
      ],
      highlights: [
        { title: 'Greenfield to global', body: 'Built the MVP infrastructure on AWS, then expanded quickly and cleared bottlenecks as Disney+ launched across EMEA, LATAM, Hotstar and APAC.' },
        { title: 'Automated package delivery', body: 'Automating deliveries cut support tickets by 72% and engineering escalations by 89%.' },
        { title: 'Cloud architecture', body: 'EC2, ECS, Elastic Beanstalk, Lambda, API Gateway, S3, RDS and CloudWatch.' },
      ],
      stack: ['AWS EC2', 'ECS', 'Elastic Beanstalk', 'Lambda', 'API Gateway', 'S3', 'RDS', 'CloudWatch'],
      architecture: {
        columns: [
          { title: 'Sources', boxes: [{ name: 'Artwork and metadata', detail: 'Title art, audio/visual assets and metadata from content teams' }] },
          {
            title: 'AMP',
            boxes: [
              { name: 'Packaging', detail: 'Assembles and validates delivery packages per title and region', highlight: true },
              { name: 'Automated delivery', detail: 'Ships packages without manual hand-offs', highlight: true },
            ],
          },
          { title: 'Disney+', boxes: [{ name: 'Global storefronts', detail: 'Artwork and metadata surfaced in every launch region' }] },
        ],
        links: ['ingest', 'packages'],
        caption: 'Simplified. Automating delivery is what let AMP keep up with launch after launch.',
      },
    },
  ] satisfies ProWork[],
};

export const earlier = {
  org: 'Springbot',
  role: 'DevOps / Software Engineer',
  what: 'E-commerce marketing automation platform',
  points: [
    'Launched a trial version of the product that automated Shopify customer onboarding.',
    'Built integrations with Shopify, Magento, WooCommerce, Amazon, Facebook, Instagram, Mailchimp and more.',
    'Ran and monitored AWS, Redis and Sidekiq infrastructure; tuned data across PostgreSQL, MongoDB, Redis and Elasticsearch.',
  ],
};

/** Quotes from the legacy site, trimmed with ellipses; internal tool names removed. */
export const references = [
  {
    quote:
      'Back in 2019, I interviewed Jerry and made a recommendation to hire him on our scrum team… I was determined to build a high performing team of only A+ players and Jerry made the cut among several other candidates. Jerry is a fast thinking fast acting and very hard working developer.',
    name: 'Ilkyung Karam',
    title: 'Technical Program Manager, The Walt Disney Company',
  },
  {
    quote:
      'He has consistently demonstrated an exceptional ability to turn complex concepts into elegant, functional code… Whether it’s fighting fires, performing peer code reviews or working with clients, he approaches every task with precision and expertise.',
    name: 'Julian Tith',
    title: 'Senior Software Engineer, The Walt Disney Company',
  },
  {
    quote:
      'Jerry has proven that he can develop new features on his own or in teams and can also find his way around a 7 year old monolith to fix bugs.',
    name: 'Saxon Unrue',
    title: 'Sr. Full Stack Engineer',
  },
  {
    quote:
      'Jerry is extremely driven, and he is always willing to take on new challenges with a positive attitude… He is consistently dependable and is always willing to lend a helping hand.',
    name: 'Chris Oh',
    title: 'Lead Engineer',
  },
];
