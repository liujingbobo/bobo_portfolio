'use client';

import { useState } from 'react';
import { Project, GameJamProject } from '@/lib/projects';
import VideoEmbed from './VideoEmbed';

interface ProjectCardProps {
  project: Project | GameJamProject;
  variant?: 'commercial' | 'gamejam';
  stripeColor?: string;
}

export default function ProjectCard({
  project,
  variant = 'commercial',
  stripeColor = 'var(--neon-cyan)',
}: ProjectCardProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const isGameJam = variant === 'gamejam';
  const gameJamProject = isGameJam ? (project as GameJamProject) : null;
  const screenshots = project.screenshots || [];

  const hasMultiple = screenshots.length > 1;
  const currentScreenshot = screenshots[currentIndex] || '/screenshots/placeholder.png';

  const goNext = () => {
    setCurrentIndex((prev) => (prev + 1) % screenshots.length);
  };

  const goPrev = () => {
    setCurrentIndex((prev) => (prev - 1 + screenshots.length) % screenshots.length);
  };

  return (
    <article
      className={`project-card ${isGameJam ? 'gamejam' : ''} flex flex-col overflow-hidden h-full`}
      style={{
        background: 'var(--bg-card)',
        border: `2px solid ${isGameJam ? 'var(--neon-green)' : 'var(--neon-cyan)'}`,
        borderTopWidth: '4px',
        borderTopColor: stripeColor,
      }}
    >
      {/* Screenshot Carousel */}
      <div className="relative aspect-video overflow-hidden" style={{ background: 'var(--bg-dark)' }}>
        {currentScreenshot && currentScreenshot !== '/screenshots/placeholder.png' ? (
          <img
            src={currentScreenshot}
            alt={project.title}
            className="absolute inset-0 w-full h-full object-cover"
          />
        ) : (
          <div
            className="absolute inset-0 flex items-center justify-center"
            style={{ imageRendering: 'pixelated' }}
          >
            <div
              className="w-full h-full"
              style={{
                background: `
                  linear-gradient(90deg, var(--bg-card) 50%, transparent 50%),
                  linear-gradient(var(--bg-card) 50%, transparent 50%)
                `,
                backgroundSize: '16px 16px',
              }}
            />
            <span className="absolute text-xs opacity-30" style={{ color: 'var(--text-secondary)' }}>
              SCREENSHOT
            </span>
          </div>
        )}

        {/* Carousel Navigation */}
        {hasMultiple && (
          <>
            <button
              onClick={goPrev}
              className="absolute left-1 top-1/2 -translate-y-1/2 w-8 h-8 flex items-center justify-center text-xs font-pixel transition-all hover:scale-110"
              style={{
                background: 'rgba(0,0,0,0.7)',
                color: 'var(--neon-cyan)',
                border: '1px solid var(--neon-cyan)',
              }}
              aria-label="Previous"
            >
              {'<'}
            </button>
            <button
              onClick={goNext}
              className="absolute right-1 top-1/2 -translate-y-1/2 w-8 h-8 flex items-center justify-center text-xs font-pixel transition-all hover:scale-110"
              style={{
                background: 'rgba(0,0,0,0.7)',
                color: 'var(--neon-cyan)',
                border: '1px solid var(--neon-cyan)',
              }}
              aria-label="Next"
            >
              {'>'}
            </button>
            {/* Dots Indicator */}
            <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-1">
              {screenshots.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentIndex(idx)}
                  className="w-2 h-2 transition-all"
                  style={{
                    background: idx === currentIndex ? 'var(--neon-cyan)' : 'rgba(255,255,255,0.3)',
                    border: idx === currentIndex ? '1px solid var(--neon-cyan)' : 'none',
                  }}
                  aria-label={`Go to slide ${idx + 1}`}
                />
              ))}
            </div>
          </>
        )}

        {/* Duration Badge for Game Jam */}
        {gameJamProject && gameJamProject.duration && (
          <div
            className="absolute top-2 right-2 px-2 py-1 text-xs"
            style={{
              background: 'var(--neon-green)',
              color: 'var(--bg-dark)',
              fontFamily: 'var(--font-pixel)',
            }}
          >
            {gameJamProject.duration}
          </div>
        )}
      </div>

      {/* Content */}
      <div className="p-4 flex flex-col flex-1">
        {/* Title */}
        <h3 className="text-sm mb-2" style={{ color: stripeColor }}>
          {project.title}
        </h3>

        {/* Description */}
        <p
          className="text-xs mb-4 flex-1"
          style={{
            color: 'var(--text-secondary)',
            fontFamily: 'var(--font-pixel)',
            lineHeight: '1.8',
          }}
        >
          {project.description}
        </p>

        {/* Technologies */}
        <div className="flex flex-wrap gap-2 mb-4">
          {project.technologies.map((tech) => (
            <span
              key={tech}
              className="text-xs px-2 py-1"
              style={{
                background: 'rgba(0,255,245,0.1)',
                color: 'var(--neon-cyan)',
                border: '1px solid var(--neon-cyan)',
              }}
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Platforms */}
        <div className="flex flex-wrap gap-2 mb-4">
          {project.platform.map((platform) => (
            <span key={platform} className="badge" style={{ color: 'var(--text-secondary)' }}>
              {platform}
            </span>
          ))}
        </div>

        {/* Game Jam specific info */}
        {gameJamProject && gameJamProject.jamName && (
          <div className="mb-4">
            <span className="text-xs" style={{ color: 'var(--neon-yellow)' }}>
              {gameJamProject.jamName}
              {gameJamProject.placement && ` — ${gameJamProject.placement}`}
            </span>
          </div>
        )}

        {/* Video Embed */}
        {project.bilibiliVideoId && (
          <div className="mt-auto">
            <VideoEmbed videoId={project.bilibiliVideoId} />
          </div>
        )}

        {/* Demo Link */}
        {project.demoUrl && (
          <a
            href={project.demoUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 inline-block text-center text-xs py-2 px-4 transition-all duration-200 hover:scale-105"
            style={{
              background: stripeColor,
              color: 'var(--bg-dark)',
              fontFamily: 'var(--font-pixel)',
            }}
          >
            PLAY NOW
          </a>
        )}
      </div>
    </article>
  );
}
