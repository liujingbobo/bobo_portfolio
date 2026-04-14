export interface Project {
  id: string;
  title: string;
  description: string;
  screenshots: string[];
  technologies: string[];
  platform: string[];
  bilibiliVideoId?: string;
  demoUrl?: string;
  duration?: string;
}

export interface GameJamProject extends Project {
  jamName: string;
  placement?: string;
}

// Skills data - extracted from CV
export interface Skill {
  name: string;
  level: number;
  category: 'engine' | 'language' | 'tool';
}

export const skills: Skill[] = [
  // Languages
  { name: 'C#', level: 5, category: 'language' },
  { name: 'C++', level: 3, category: 'language' },
  { name: 'TypeScript', level: 2, category: 'language' },
  { name: 'Python', level: 3, category: 'language' },
  { name: 'Java', level: 2, category: 'language' },
  // Engines
  { name: 'Unity', level: 5, category: 'engine' },
  { name: 'Unreal', level: 2, category: 'engine' },
  { name: 'Godot', level: 2, category: 'engine' },
  // Tools & Frameworks
  { name: 'Mirror', level: 5, category: 'tool' },
  { name: 'Steamworks.NET', level: 5, category: 'tool' },
  { name: 'Odin Serializer', level: 4, category: 'tool' },
  { name: 'Zenject', level: 4, category: 'tool' },
  { name: 'Spine', level: 4, category: 'tool' },
  { name: 'UniTask', level: 4, category: 'tool' },
  { name: 'Firebase', level: 3, category: 'tool' },
  { name: 'Git', level: 5, category: 'tool' },
];

// Work experience - extracted from CV (Rafale Soft removed)
export interface Experience {
  id: string;
  role: string;
  company: string;
  period: string;
  description: string;
}

export const experiences: Experience[] = [
  {
    id: 'exp-1',
    role: 'Founder & Solo Developer',
    company: 'Repeater Studios (Pooping Cat)',
    period: 'Aug 2025 - Present',
    description: `Game Design & Development: Created a desktop idle PC game, from concept to full implementation.
Multiplayer: Implemented p2p co-op gameplay using Mirror, including player status synchronization, room creation, and in-game interactions.
Steamworks.Net: Integrated Steamworks.Net for friends invites, lobby management, and achievements tracking.
Steam Release: Published the game commercially on Steam including store setup, trailers, and patch notes, received 30+ positive reviews in a week.`,
  },
  {
    id: 'exp-2',
    role: 'Unity 3D Developer',
    company: 'Gaggle Studios (Unreleased Title)',
    period: 'Jan 2024 - Aug 2025',
    description: `Game Flow: Designed the overall game flow, including progression systems, map generation and mini games.
Turn-based Combat System: Implemented enemy AI, abilities and items design, and combat mechanics.
UI Systems: Developed all gameplay UI follow the MVC architecture, focusing on reusable, modular, and easily maintainable components.
Progression System: Covering character and abilities leveling, skill unlocks, and upgrades.`,
  },
  {
    id: 'exp-3',
    role: 'Unity 3D Developer',
    company: 'Chillyroom (Glabo)',
    period: 'Mar 2021 - Oct 2023',
    description: `In-game Systems: Implemented gameplay systems including dialogue, inventory, gacha, character progression, achievements, skill trees, daily rewards, and battle pass features.
UI Development: Led UI implementation, collaborating closely with the game designers and the art team.
API Integration: Integrated backend APIs for cloud save, account data and dynamic configuration.
SDK Integrations: Integrated multiple internal and third-party SDKs, including user authentication, account services, and player behaviour analytics.
Launch Preparation: Executed multiple rounds of public beta testing, improved builds stability and received positive player feedback.`,
  },
];

// Commercial Projects
export const commercialProjects: Project[] = [
  {
    id: 'booty-birds',
    title: 'Booty Birds',
    description: 'Turn-based RPG with combat systems, progression, and gacha mechanics.',
    screenshots: ['/screenshots/Booty Birds/1.webp'],
    technologies: ['Unity', 'C#'],
    platform: ['Mobile'],
    bilibiliVideoId: '',
  },
  {
    id: 'glabo',
    title: 'Glabo',
    description: 'Action RPG with dialogue, inventory, skill trees, achievements, and battle pass.',
    screenshots: [
      '/screenshots/glabo/1.webp',
      '/screenshots/glabo/2.webp',
    ],
    technologies: ['Unity', 'C#'],
    platform: ['Mobile'],
    demoUrl: 'https://www.taptap.cn/app/730501?os=android',
  },
  {
    id: 'pooping-cat',
    title: 'Pooping Cat',
    description: 'Desktop idle PC game with p2p co-op multiplayer. Published on Steam with 30+ positive reviews in first week.',
    screenshots: [
      '/screenshots/Pooping Cat/1.webp',
      '/screenshots/Pooping Cat/2.webp',
      '/screenshots/Pooping Cat/3.webp',
    ],
    technologies: ['Unity', 'C#', 'Mirror', 'Steamworks.Net'],
    platform: ['Steam', 'PC'],
    demoUrl: 'https://store.steampowered.com/app/3834740/Pooping_Cat/',
  },
];

// Game Jam Awards
export const gameJamProjects: GameJamProject[] = [
  {
    id: 'jam-1',
    title: 'Everybody Eats',
    description: 'Merge simulation game - combine ingredients on a grid to earn higher scores.',
    screenshots: [
      '/screenshots/GameJam/Everybody eat/1.webp',
      '/screenshots/GameJam/Everybody eat/2.webp',
      '/screenshots/GameJam/Everybody eat/3.webp',
    ],
    technologies: ['Unity', 'C#'],
    platform: ['Itch.io'],
    jamName: 'CIGA 2024 - Shenzhen',
    duration: '48h',
    bilibiliVideoId: 'BV153hfebEah',
  },
  {
    id: 'jam-2',
    title: 'Doctor Chilly',
    description: 'Simulation rhythm game - simulate pulse diagnosis from Traditional Chinese Medicine.',
    screenshots: [
      '/screenshots/GameJam/Doctor chilly/1.webp',
      '/screenshots/GameJam/Doctor chilly/2.webp',
      '/screenshots/GameJam/Doctor chilly/3.webp',
    ],
    technologies: ['Unity', 'C#'],
    platform: ['Itch.io'],
    jamName: 'IndiePlay Awards 2023',
    duration: '48h',
    bilibiliVideoId: 'BV1jj411Z7Fb',
  },
  {
    id: 'jam-3',
    title: 'Disco Carrot',
    description: 'Music rhythm farming action - rhythm gameplay with farming mechanics.',
    screenshots: [
      '/screenshots/GameJam/DiscoCarrot/1.webp',
    ],
    technologies: ['Unity', 'C#'],
    platform: ['Itch.io'],
    jamName: 'GGJ 2023',
    duration: '48h',
    bilibiliVideoId: 'BV1eR4y1q7WJ',
  },
];

// Social links - from CV
export const socialLinks = {
  linkedin: 'https://www.linkedin.com/in/jingbo-liu-57ab191a9',
  github: 'https://github.com/LaurenceJingbo',
  itchio: '',
  twitter: '',
  steam: '',
};

// Personal info - from CV
export const personalInfo = {
  name: 'JINGBO LIU',
  title: 'Game Developer',
  tagline: 'Game or Die',
  bio: 'Gameplay programmer with 3+ years of experience in Unity development. Specializing in game systems, UI architecture, and multiplayer implementation. Published games on Steam with positive player feedback.',
  avatar: '/avatars/avatar_pixel.png',
  email: 'boboliu0627@gmail.com',
  mobile: '+1-437-878-2272',
};
