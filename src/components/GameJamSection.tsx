'use client';

import { gameJamProjects } from '@/lib/projects';
import ProjectCard from './ProjectCard';

const stripeColors = [
  'var(--neon-green)',
  'var(--neon-purple)',
  'var(--neon-red)',
];

export default function GameJamSection() {
  return (
    <section id="gamejam" className="py-16 px-4" style={{ background: 'var(--bg-card)' }}>
      <div className="max-w-6xl mx-auto">
        {/* Section Title */}
        <h2
          className="text-lg md:text-xl mb-8 text-center"
          style={{
            color: 'var(--neon-green)',
            textShadow: '0 0 10px var(--neon-green)',
            fontFamily: 'var(--font-pixel)',
          }}
        >
          GAME JAM CREATIONS
        </h2>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {gameJamProjects.map((project, index) => (
            <ProjectCard
              key={project.id}
              project={project}
              variant="gamejam"
              stripeColor={stripeColors[index % stripeColors.length]}
            />
          ))}
        </div>

        {/* Empty State */}
        {gameJamProjects.length === 0 && (
          <div
            className="text-center py-16 border-2 border-dashed"
            style={{ borderColor: 'var(--text-secondary)' }}
          >
            <p
              className="text-xs mb-4"
              style={{ color: 'var(--text-secondary)', fontFamily: 'var(--font-pixel)' }}
            >
              NO GAME JAM PROJECTS YET
            </p>
            <p
              className="text-xs"
              style={{ color: 'var(--text-secondary)', fontFamily: 'var(--font-pixel)', opacity: 0.5 }}
            >
              Entries will appear here after jams
            </p>
          </div>
        )}
      </div>
    </section>
  );
}
