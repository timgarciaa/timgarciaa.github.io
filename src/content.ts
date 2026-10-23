// All the words on the site live here, so updating the portfolio is mostly editing this file.

export const profile = {
  name: 'Tim Garcia',
  role: 'Senior Full Stack Developer',
  location: 'Malolos, Bulacan · PH',
  email: 'timgarciaa@gmail.com',
  github: 'https://github.com/timgarciaa',
  linkedin: '', // add your LinkedIn URL to show it in Contact
  summary:
    'I build and scale web apps for a living: React front ends, Node and serverless back ends on AWS, and the technical designs that hold them together. Ten-plus years in, I still like the quiet part best: taking something slow or tangled and making it fast and simple. I mentor juniors, care about accessibility, and when the laptop closes, I make games.',
  stats: [
    { value: '10+', label: 'years shipping' },
    { value: 'AWS', label: 'certified developer' },
    { value: '3', label: 'games built' },
  ],
};

export const stack: { group: string; items: string[] }[] = [
  {
    group: 'Frontend',
    items: [
      'React', 'Next.js', 'TypeScript', 'JavaScript', 'Vite', 'Tailwind CSS', 'Redux',
      'React Query', 'React Native', 'Expo', 'Angular', 'Material UI', 'Chakra UI', 'SASS', 'HTML', 'CSS', 'Jest',
    ],
  },
  {
    group: 'Backend',
    items: [
      'Node.js', 'NestJS', 'Express', 'Serverless', 'Java Spring Boot', 'Python', 'PostgreSQL',
      'MongoDB', 'DynamoDB', 'Auth0', 'Stripe', 'REST APIs',
    ],
  },
  {
    group: 'AWS',
    items: ['Lambda', 'DynamoDB', 'CloudFront', 'Route 53', 'IAM', 'CloudWatch', 'Secrets Manager', 'RDS', 'S3'],
  },
  {
    group: 'Tools',
    items: [
      'Claude', 'Cursor', 'VS Code', 'Neovim', 'Tmux', 'Docker', 'Git', 'GitHub', 'Figma',
      'Postman', 'DBeaver', 'Jira', 'Confluence', 'Three.js', 'Capacitor',
    ],
  },
];

export const featuredCert = {
  title: 'AWS Certified Developer – Associate',
  issuer: 'Amazon Web Services Training and Certification',
  blurb:
    'Building, deploying and debugging cloud-native apps on AWS: Lambda, DynamoDB, API Gateway, IAM, CI/CD and monitoring.',
};

export const trainings: { title: string; issuer: string; date: string }[] = [
  { title: 'AWS Partner: Technical Accredited', issuer: 'AWS Training & Certification', date: 'Apr 2026' },
  { title: 'AWS Knowledge: Amazon Connect AI Fundamentals', issuer: 'AWS Training & Certification', date: 'May 2026' },
  { title: 'Next.js 14 & React — The Complete Guide', issuer: 'Udemy', date: 'Dec 2023' },
  { title: 'Meta Front-End Developer Specialization', issuer: 'Coursera', date: 'Dec 2023' },
  { title: 'Ultimate AWS Certified Cloud Practitioner CLF-C02', issuer: 'Udemy', date: 'Oct 2023' },
  { title: 'Be a Great Mentor: A Practical Guide to Mentorship', issuer: 'Udemy', date: 'Jul 2023' },
  { title: 'Mastering TypeScript', issuer: 'Udemy', date: 'Jun 2023' },
  { title: 'NodeJS — The Complete Guide', issuer: 'Udemy', date: 'May 2023' },
  { title: 'React Native — The Practical Guide', issuer: 'Udemy', date: 'Jul 2020' },
];

export const awards: { title: string; where: string; date: string }[] = [
  { title: '2nd Place, haCAThon GENESIS', where: 'Accenture, Uptown Tower 2, BGC', date: 'Mar 2019' },
  { title: '2nd Place, Best Capstone Project (BSIT)', where: 'Bulacan State University', date: 'Mar 2016' },
  { title: '2nd Place, VB.NET Skills Competition', where: 'CICT IT Congress, Bulacan State University', date: 'Oct 2013' },
];

export const mbq = {
  name: "Serve N' Shout",
  code: 'MBQ',
  tagline: 'The badminton queue that runs the club night for you.',
  description:
    'An offline-first iPad web app I built for our badminton sessions. It checks players in, builds balanced doubles, rotates partners so nobody plays with the same person twice, and splits the court and shuttle costs at the end of the night.',
  features: [
    'Balanced doubles from skill and gender',
    'Partner rotation with smart auto-swaps',
    '“Winners stay” and set games per court',
    'Shuttle tracking and cost split, rounded to the peso',
    'Installable PWA that works offline',
  ],
  stack: ['React 19', 'TypeScript', 'Vite', 'Tailwind v4', 'DaisyUI', 'Zustand', 'Vitest', 'PWA'],
  live: 'https://timgarciaa.github.io/my-badminton-queue/',
  repo: 'https://github.com/timgarciaa/my-badminton-queue',
};

export type Game = {
  id: 'robogolf' | 'roboblast' | 'robojump';
  name: string;
  genre: string;
  pitch: string;
  controls: string[];
  cover: string;
  repo?: string;
};

export const games: Game[] = [
  {
    id: 'robogolf',
    name: 'RoboGolf',
    genre: 'Launch · Arcade',
    pitch: 'Whack a chibi robot monster as far as you can, then upgrade your clubs, monsters and armor.',
    controls: ['Hold to charge power, release', 'Tap in the green for accuracy', 'Hold to fast-forward the flight'],
    cover: '/covers/robogolf.jpg',
    repo: 'https://github.com/timgarciaa/robogolf',
  },
  {
    id: 'roboblast',
    name: 'RoboBlast',
    genre: 'Shooter · Waves',
    pitch: 'Hold the tee with a rocket launcher against waves of chibi robots, then take on a giant boss.',
    controls: ['Click / tap to fire', 'WASD or drag the bottom band to move', 'Q / E for skills, Space auto-aims'],
    cover: '/covers/roboblast.jpg',
    repo: 'https://github.com/timgarciaa/roboblast',
  },
  {
    id: 'robojump',
    name: 'RoboJump',
    genre: 'Platformer · Endless',
    pitch: 'Climb an endless tower, Icy Tower style. Build speed, chain the combos, don’t look down.',
    controls: ['← → or A / D to run', 'Space / W / ↑ to jump', 'On touch: pad left, jump right'],
    cover: '/covers/robojump.jpg',
  },
];
