'use client';

import { socialLinks } from '@/lib/projects';

const socialIcons: Record<string, { label: string; color: string }> = {
  twitter: { label: 'TW', color: 'var(--neon-cyan)' },
  itchio: { label: 'IT', color: 'var(--neon-pink)' },
  steam: { label: 'ST', color: 'var(--neon-green)' },
  linkedin: { label: 'IN', color: 'var(--neon-cyan)' },
  github: { label: 'GH', color: 'var(--neon-yellow)' },
};

export default function Footer() {
  return (
    <footer
      className="py-12 px-4 text-center relative"
      style={{
        borderTop: '2px solid var(--neon-pink)',
        background: 'linear-gradient(to top, var(--bg-card), var(--bg-dark))',
      }}
    >
      {/* Insert Coin Text */}
      <div
        className="mb-6 text-xs"
        style={{ color: 'var(--neon-yellow)', fontFamily: 'var(--font-pixel)' }}
      >
        <span className="opacity-60">THANKS FOR PLAYING</span>
      </div>

      {/* Social Links */}
      <div className="flex gap-4 justify-center mb-6">
        {Object.entries(socialLinks).map(([key, url]) => {
          const icon = socialIcons[key];
          if (!url || !icon) return null;
          return (
            <a
              key={key}
              href={url}
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 flex items-center justify-center border-2 transition-all duration-200 hover:scale-110"
              style={{
                borderColor: icon.color,
                color: icon.color,
              }}
              aria-label={key}
            >
              <span className="text-xs font-pixel">{icon.label}</span>
            </a>
          );
        })}
      </div>

      {/* Copyright */}
      <p
        className="text-xs"
        style={{ color: 'var(--text-secondary)', fontFamily: 'var(--font-pixel)' }}
      >
        &copy; {new Date().getFullYear()} ALL RIGHTS RESERVED
      </p>

      {/* Decorative Pixels */}
      <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-1 opacity-20">
        {[...Array(5)].map((_, i) => (
          <div
            key={i}
            className="w-1 h-1"
            style={{
              background: 'var(--neon-cyan)',
              animation: `float ${1.5 + i * 0.2}s ease-in-out infinite`,
              animationDelay: `${i * 0.1}s`,
            }}
          />
        ))}
      </div>
    </footer>
  );
}
