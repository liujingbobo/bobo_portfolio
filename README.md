# Game Developer Portfolio

A pixel art themed portfolio showcasing game development projects, built with Next.js.

## Quick Start

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Open http://localhost:3000
```

## Tech Stack

- **Framework**: Next.js 15
- **Styling**: Tailwind CSS
- **Font**: Press Start 2P (pixel art font)
- **Images**: Sharp (image optimization)

## Project Structure

```
src/
├── app/
│   ├── page.tsx        # Main page composition
│   ├── layout.tsx     # Root layout
│   └── globals.css    # Global styles & CSS variables
├── components/
│   ├── Hero.tsx       # Hero section with background
│   ├── AboutSection.tsx
│   ├── SkillsSection.tsx
│   ├── CommercialSection.tsx
│   ├── GameJamSection.tsx
│   ├── ContactSection.tsx
│   ├── ProjectCard.tsx
│   ├── VideoEmbed.tsx
│   └── Footer.tsx
└── lib/
    └── projects.ts    # Project data & content
public/
├── cv.pdf             # Resume download
├── hero-bg.jpg        # Hero background image
└── screenshots/      # Project screenshots
```

## Sections

1. **Hero** - Name, social links, CV download
2. **Commercial Projects** - Booty Birds, Glabo, Pooping Cat
3. **Game Jam Projects** - CIGA, IndiePlay, GGJ entries
4. **About** - Bio, work experience, skills
5. **Contact** - Email

## Deploy

Deploy to Vercel:

```bash
npm run build
```

Or connect to Vercel/GitHub for automatic deploys.

## Image Optimization

Screenshot images are compressed to WebP format for fast loading. Total image size is kept under 5MB.

## License

MIT
