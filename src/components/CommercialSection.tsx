'use client';

import { commercialProjects } from '@/lib/projects';
import ProjectCard from './ProjectCard';

const stripeColors = [
  'var(--neon-cyan)',
  'var(--neon-pink)',
  'var(--neon-yellow)',
];

export default function CommercialSection() {
  return (
    <section id="commercial" className="py-16 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Section Title */}
        <h2
          className="text-lg md:text-xl mb-8 text-center"
          style={{
            color: 'var(--neon-cyan)',
            textShadow: '0 0 10px var(--neon-cyan)',
            fontFamily: 'var(--font-pixel)',
          }}
        >
          COMMERCIAL PROJECTS
        </h2>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {commercialProjects.map((project, index) => (
            <ProjectCard
              key={project.id}
              project={project}
              variant="commercial"
              stripeColor={stripeColors[index % stripeColors.length]}
            />
          ))}
        </div>

        {/* Empty State */}
        {commercialProjects.length === 0 && (
          <div
            className="text-center py-16 border-2 border-dashed"
            style={{ borderColor: 'var(--text-secondary)' }}
          >
            <p
              className="text-xs mb-4"
              style={{ color: 'var(--text-secondary)', fontFamily: 'var(--font-pixel)' }}
            >
              NO COMMERCIAL PROJECTS YET
            </p>
            <p
              className="text-xs"
              style={{ color: 'var(--text-secondary)', fontFamily: 'var(--font-pixel)', opacity: 0.5 }}
            >
              Check back soon for updates
            </p>
          </div>
        )}
      </div>
    </section>
  );
}
