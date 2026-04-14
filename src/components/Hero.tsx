'use client';

import { personalInfo, socialLinks } from '@/lib/projects';

const socialIcons: Record<string, { label: string; color: string }> = {
  twitter: { label: 'TW', color: 'var(--neon-cyan)' },
  itchio: { label: 'IT', color: 'var(--neon-pink)' },
  steam: { label: 'ST', color: 'var(--neon-green)' },
  linkedin: { label: 'IN', color: 'var(--neon-cyan)' },
  github: { label: 'GH', color: 'var(--neon-yellow)' },
};

export default function Hero() {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center px-4 py-16 relative overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: 'url(/hero-bg-pixel.jpg)',
          imageRendering: 'pixelated',
        }}
      />
      {/* Overlay */}
      <div
        className="absolute inset-0"
        style={{
          background: 'linear-gradient(to bottom, rgba(13,13,13,0.7), rgba(26,26,46,0.9))',
        }}
      />

      {/* Main Content */}
      <div className="relative z-10 text-center">
        {/* Name */}
        <h1
          className="text-3xl md:text-5xl mb-4 tracking-wider"
          style={{
            color: 'var(--neon-cyan)',
            textShadow: '0 0 10px var(--neon-cyan), 0 0 20px var(--neon-cyan), 0 0 40px var(--neon-cyan)',
          }}
        >
          {personalInfo.name}
        </h1>


        {/* Social Links */}
        <div className="flex gap-4 justify-center mb-8">
          {Object.entries(socialLinks).map(([key, url]) => {
            const icon = socialIcons[key];
            if (!url || !icon) return null;
            return (
              <a
                key={key}
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 flex items-center justify-center border-2 transition-all duration-200 hover:scale-110"
                style={{
                  borderColor: icon.color,
                  color: icon.color,
                  boxShadow: `0 0 10px ${icon.color}`,
                }}
                aria-label={key}
              >
                <span className="text-xs font-pixel">{icon.label}</span>
              </a>
            );
          })}
        </div>

        {/* CV Download Button */}
        <a
          href="/cv.pdf"
          download
          className="inline-block text-xs py-3 px-6 transition-all duration-200 hover:scale-105"
          style={{
            background: 'transparent',
            color: 'var(--neon-yellow)',
            border: `2px solid var(--neon-yellow)`,
            boxShadow: '0 0 10px var(--neon-yellow)',
            fontFamily: 'var(--font-pixel)',
          }}
        >
          DOWNLOAD CV
        </a>
      </div>

      {/* Scroll Indicator */}
      <div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-xs opacity-50"
        style={{ color: 'var(--text-secondary)' }}
      >
        <span>SCROLL DOWN</span>
        <div
          className="w-4 h-4 mx-auto mt-2"
          style={{
            borderRight: '2px solid',
            borderBottom: '2px solid',
            borderColor: 'var(--neon-cyan)',
            transform: 'rotate(45deg)',
          }}
        />
      </div>
    </section>
  );
}
