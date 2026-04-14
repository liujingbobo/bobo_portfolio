'use client';

import { skills, Skill } from '@/lib/projects';

const categoryLabels = {
  engine: 'ENGINES',
  language: 'LANGUAGES',
  tool: 'TOOLS',
};

const categoryColors = {
  engine: 'var(--neon-cyan)',
  language: 'var(--neon-pink)',
  tool: 'var(--neon-yellow)',
};

function SkillBar({ skill }: { skill: Skill }) {
  const color = categoryColors[skill.category];

  return (
    <div className="mb-4">
      <div className="flex justify-between mb-1">
        <span
          className="text-xs"
          style={{ color: 'var(--text-primary)' }}
        >
          {skill.name}
        </span>
        <span
          className="text-xs"
          style={{ color: color, opacity: 0.7 }}
        >
          {skill.level}/5
        </span>
      </div>
      <div
        className="h-2 w-full"
        style={{ background: 'var(--bg-dark)' }}
      >
        <div
          className="h-full transition-all duration-500"
          style={{
            width: `${(skill.level / 5) * 100}%`,
            background: color,
            boxShadow: `0 0 8px ${color}`,
          }}
        />
      </div>
    </div>
  );
}

export default function SkillsSection() {
  const engines = skills.filter((s) => s.category === 'engine');
  const languages = skills.filter((s) => s.category === 'language');
  const tools = skills.filter((s) => s.category === 'tool');

  return (
    <section id="skills" className="py-16 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Section Title */}
        <h2
          className="text-lg md:text-xl mb-12 text-center"
          style={{
            color: 'var(--neon-yellow)',
            textShadow: '0 0 10px var(--neon-yellow)',
            fontFamily: 'var(--font-pixel)',
          }}
        >
          SKILLS
        </h2>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Engines */}
          <div>
            <h3
              className="text-xs mb-4 pb-2"
              style={{
                color: categoryColors.engine,
                borderBottom: `2px solid ${categoryColors.engine}`,
                fontFamily: 'var(--font-pixel)',
              }}
            >
              {categoryLabels.engine}
            </h3>
            {engines.map((skill) => (
              <SkillBar key={skill.name} skill={skill} />
            ))}
          </div>

          {/* Languages */}
          <div>
            <h3
              className="text-xs mb-4 pb-2"
              style={{
                color: categoryColors.language,
                borderBottom: `2px solid ${categoryColors.language}`,
                fontFamily: 'var(--font-pixel)',
              }}
            >
              {categoryLabels.language}
            </h3>
            {languages.map((skill) => (
              <SkillBar key={skill.name} skill={skill} />
            ))}
          </div>

          {/* Tools */}
          <div>
            <h3
              className="text-xs mb-4 pb-2"
              style={{
                color: categoryColors.tool,
                borderBottom: `2px solid ${categoryColors.tool}`,
                fontFamily: 'var(--font-pixel)',
              }}
            >
              {categoryLabels.tool}
            </h3>
            {tools.map((skill) => (
              <SkillBar key={skill.name} skill={skill} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
