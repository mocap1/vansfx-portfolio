export type Project = {
  id: number;
  title: string;
category:
  | "Gaming Guide"
  | "Gaming Montage"
  | "Educational Content"
  | "Trailer / Showcase"
  | "Gaming Short"
  | "Advertisement"
  | "Entertainment"
  | "AI Content";
  type: "long" | "short";
  orientation: "landscape" | "portrait";
  software: string;
  youtubeId?: string;
  thumbnail?: string;
  preview?: string;
  link: string;
  platform: "YouTube" | "TikTok" | "Instagram" | "Drive" | "Local";
  featured: boolean;
};

export const projects: Project[] = [
  // =====================================================
  // LONG-FORM — GAMING GUIDES
  // =====================================================

  {
    id: 1,
    title: "Top 10 Best Evomons",
    category: "Gaming Guide",
    type: "long",
    orientation: "landscape",
    software: "Adobe Premiere Pro",
    youtubeId: "3tZoFOMyYaU",
    link: "https://www.youtube.com/watch?v=3tZoFOMyYaU",
    platform: "YouTube",
    featured: true,
  },

  {
    id: 2,
    title: "Let's Play Deepwoken",
    category: "Gaming Guide",
    type: "long",
    orientation: "landscape",
    software: "Adobe Premiere Pro",
    youtubeId: "OnPhgZjVP70",
    link: "https://www.youtube.com/watch?v=OnPhgZjVP70",
    platform: "YouTube",
    featured: true,
  },

  {
    id: 3,
    title: "How to Level Up Your Evomons Fast!",
    category: "Gaming Guide",
    type: "long",
    orientation: "landscape",
    software: "Adobe Premiere Pro",
    youtubeId: "APa6Mjeyks0",
    link: "https://www.youtube.com/watch?v=APa6Mjeyks0",
    platform: "YouTube",
    featured: true,
  },

  // =====================================================
  // LONG-FORM — GAMING MONTAGES
  // =====================================================

    {
    id: 25,
    title: "Tore Up | Tournament Grounds Montage",
    category: "Gaming Montage",
    type: "long",
    orientation: "landscape",
    software: "Adobe Premiere Pro",
    youtubeId: "tIJUrP-f8bw",
    link: "https://www.youtube.com/watch?v=tIJUrP-f8bw",
    platform: "YouTube",
    featured: true,
  },

  {
    id: 4,
    title: "SFR Montage",
    category: "Gaming Montage",
    type: "long",
    orientation: "landscape",
    software: "Adobe Premiere Pro",
    youtubeId: "I97pw5IvNuE",
    link: "https://www.youtube.com/watch?v=I97pw5IvNuE",
    platform: "YouTube",
    featured: true,
  },

  {
    id: 5,
    title: "Tournament Grounds Montage",
    category: "Gaming Montage",
    type: "long",
    orientation: "landscape",
    software: "Adobe Premiere Pro",
    youtubeId: "kNQH4ZuijrM",
    link: "https://www.youtube.com/watch?v=kNQH4ZuijrM",
    platform: "YouTube",
    featured: true,
  },

  {
    id: 6,
    title: "Deepwoken Montage",
    category: "Gaming Montage",
    type: "long",
    orientation: "landscape",
    software: "Adobe Premiere Pro",
    youtubeId: "6Q0x_Fc_DXE",
    link: "https://www.youtube.com/watch?v=6Q0x_Fc_DXE",
    platform: "YouTube",
    featured: true,
  },

  {
    id: 7,
    title: "Valorant Montage",
    category: "Gaming Montage",
    type: "long",
    orientation: "landscape",
    software: "Adobe Premiere Pro",
    youtubeId: "mOGmaTHNd2U",
    link: "https://www.youtube.com/watch?v=mOGmaTHNd2U",
    platform: "YouTube",
    featured: true,
  },

  {
    id: 8,
    title: "Valorant Montage 2",
    category: "Gaming Montage",
    type: "long",
    orientation: "landscape",
    software: "Adobe Premiere Pro",
    youtubeId: "VYVXqz0NpF0",
    link: "https://www.youtube.com/watch?v=VYVXqz0NpF0",
    platform: "YouTube",
    featured: true,
  },

  // =====================================================
  // LONG-FORM — EDUCATIONAL CONTENT
  // =====================================================

  {
    id: 9,
    title: "5 AI Tools You Need to Get Your Hands On… (2025)",
    category: "Educational Content",
    type: "long",
    orientation: "landscape",
    software: "Adobe Premiere Pro",
    youtubeId: "y48pE0YQOD0",
    link: "https://www.youtube.com/watch?v=y48pE0YQOD0",
    platform: "YouTube",
    featured: true,
  },

  {
  id: 24,
  title: "Automated Airline System Product Trailer",
  category: "Trailer / Showcase",
  type: "long",
  orientation: "landscape",
  software: "Adobe Premiere Pro",
  youtubeId: "Tg8NumrQLIE",
  link: "https://youtu.be/Tg8NumrQLIE",
  platform: "YouTube",
  featured: true,
},

  // =====================================================
  // SHORT-FORM — GAMING SHORTS
  // =====================================================

  {
  id: 10,
  title: "How to Farm EXP Fast in Evomon!",
  category: "Gaming Short",
  type: "short",
  orientation: "portrait",
  software: "Premiere Pro",
  youtubeId: "1F2ZdG3fLgM",
  link: "https://www.youtube.com/shorts/1F2ZdG3fLgM",
  platform: "YouTube",
  featured: false,
},

{
  id: 11,
  title: "New Evomon Expansion Update!",
  category: "Gaming Short",
  type: "short",
  orientation: "portrait",
  software: "Premiere Pro",
  youtubeId: "zPEuapfp2do",
  link: "https://www.youtube.com/shorts/zPEuapfp2do",
  platform: "YouTube",
  featured: false,
},

{
  id: 12,
  title: "Getting 0.1% Unbound Trait on my Gowther! | Anime Expeditions",
  category: "Gaming Short",
  type: "short",
  orientation: "portrait",
  software: "Premiere Pro",
  youtubeId: "BYWeKc9x5TU",
  link: "https://www.youtube.com/shorts/BYWeKc9x5TU",
  platform: "YouTube",
  featured: false,
},

  {
    id: 21,
    title: "What Is Stay For Fortune?",
    category: "Gaming Short",
    type: "short",
    orientation: "portrait",
    software: "Adobe Premiere Pro",
    youtubeId: "m_5kGbvkKb0",
    link: "https://www.youtube.com/shorts/m_5kGbvkKb0",
    platform: "YouTube",
    featured: true,
  },

  {
    id: 22,
    title: "Happy 4th of July! Stay For Fortune!",
    category: "Gaming Short",
    type: "short",
    orientation: "portrait",
    software: "Adobe Premiere Pro",
    youtubeId: "eK3iExP9HY4",
    link: "https://www.youtube.com/shorts/eK3iExP9HY4",
    platform: "YouTube",
    featured: true,
  },

  {
    id: 23,
    title: "Thousands of Robux for Free? Stay For Fortune!",
    category: "Gaming Short",
    type: "short",
    orientation: "portrait",
    software: "Adobe Premiere Pro",
    youtubeId: "ZaY60iW3diM",
    link: "https://www.youtube.com/shorts/ZaY60iW3diM",
    platform: "YouTube",
    featured: true,
  },

  
  // =====================================================
  // SHORT-FORM — ADVERTISEMENTS
  // =====================================================

  {
    id: 13,
    title: "Tatakau Racers Video Ad",
    category: "Advertisement",
    type: "short",
    orientation: "portrait",
    software: "Adobe Premiere Pro",
    thumbnail: "/thumbnails/tatakau-racers-ad-1.jpg",
    preview: "/previews/tatakau-racers-ad-1.mp4",
    link: "https://www.tiktok.com/@tatakauracers/video/7369982751514168582",
    platform: "TikTok",
    featured: true,
  },

  {
    id: 14,
    title: "Tatakau Racers Video Ad 2",
    category: "Advertisement",
    type: "short",
    orientation: "portrait",
    software: "Adobe Premiere Pro",
    thumbnail: "/thumbnails/tatakau-racers-ad-2.jpg",
    preview: "/previews/tatakau-racers-ad-2.mp4",
    link: "https://www.tiktok.com/@tatakauracers/video/7376657795141111045",
    platform: "TikTok",
    featured: true,
  },

  {
    id: 15,
    title: "Jujutsu Infinite Video Ad",
    category: "Advertisement",
    type: "short",
    orientation: "portrait",
    software: "Adobe Premiere Pro",
    youtubeId: "GLwJGFfC1q8",
    link: "https://www.youtube.com/watch?v=GLwJGFfC1q8",
    platform: "YouTube",
    featured: true,
  },

  // =====================================================
  // SHORT-FORM — ENTERTAINMENT
  // =====================================================

  {
    id: 16,
    title: "Short Roblox Slop Reel",
    category: "Entertainment",
    type: "short",
    orientation: "portrait",
    software: "Adobe Premiere Pro",
    youtubeId: "7y1x3tPk4yQ",
    link: "https://www.youtube.com/watch?v=7y1x3tPk4yQ",
    platform: "YouTube",
    featured: true,
  },

  {
    id: 17,
    title: "Short Roblox Slop Reel 2",
    category: "Entertainment",
    type: "short",
    orientation: "portrait",
    software: "Adobe Premiere Pro",
    youtubeId: "QE7iaiyjJXk",
    link: "https://www.youtube.com/shorts/QE7iaiyjJXk",
    platform: "YouTube",
    featured: true,
  },

  // =====================================================
  // SHORT-FORM — AI CONTENT
  // =====================================================

  {
    id: 18,
    title: "Daily Dose of AI Tools",
    category: "AI Content",
    type: "short",
    orientation: "portrait",
    software: "Adobe Premiere Pro",
    youtubeId: "blCpNRsWJg4",
    link: "https://www.youtube.com/watch?v=blCpNRsWJg4",
    platform: "YouTube",
    featured: true,
  },

  {
    id: 19,
    title: "Daily Dose of AI Tools 2",
    category: "AI Content",
    type: "short",
    orientation: "portrait",
    software: "Adobe Premiere Pro",
    youtubeId: "044pXA8VI64",
    link: "https://www.youtube.com/watch?v=044pXA8VI64",
    platform: "YouTube",
    featured: true,
  },

  {
    id: 20,
    title: "Daily Dose of AI Tools 3",
    category: "AI Content",
    type: "short",
    orientation: "portrait",
    software: "Adobe Premiere Pro",
    youtubeId: "zkv1jDAnHCI",
    link: "https://www.youtube.com/shorts/zkv1jDAnHCI",
    platform: "YouTube",
    featured: true,
  },
];