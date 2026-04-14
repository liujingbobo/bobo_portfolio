'use client';

import { personalInfo, experiences, skills } from '@/lib/projects';

export default function AboutSection() {
  return (
    <section id="about" className="py-16 px-4" style={{ background: 'var(--bg-card)' }}>
      <div className="max-w-4xl mx-auto">
        {/* Section Title */}
        <h2
          className="text-lg md:text-xl mb-12 text-center"
          style={{
            color: 'var(--neon-pink)',
            textShadow: '0 0 10px var(--neon-pink)',
            fontFamily: 'var(--font-pixel)',
          }}
        >
          ABOUT ME
        </h2>

        {/* Bio */}
        <div className="mb-12 text-center">
          <p
            className="text-xs md:text-sm leading-relaxed"
            style={{
              color: 'var(--text-secondary)',
              fontFamily: 'var(--font-pixel)',
              lineHeight: '2',
            }}
          >
            {personalInfo.bio}
          </p>
        </div>

        {/* Experience Title */}
        <h3
          className="text-sm mb-6 text-center"
          style={{
            color: 'var(--neon-yellow)',
            fontFamily: 'var(--font-pixel)',
          }}
        >
          WORK EXPERIENCE
        </h3>

        {/* Experience Timeline */}
        <div className="relative max-w-2xl mx-auto">
          {/* Vertical Line */}
          <div
            className="absolute left-3 top-0 bottom-0 w-0.5"
            style={{ background: 'var(--neon-pink)', opacity: 0.3 }}
          />

          {experiences.map((exp, index) => (
            <div key={exp.id} className="relative pl-10 mb-8 md:mb-10">
              {/* Dot */}
              <div
                className="absolute left-0 top-0 w-3 h-3 rounded-full"
                style={{
                  background: 'var(--neon-pink)',
                  boxShadow: '0 0 10px var(--neon-pink)',
                }}
              />

              {/* Period */}
              <span
                className="text-xs"
                style={{ color: 'var(--neon-yellow)' }}
              >
                {exp.period}
              </span>

              {/* Role */}
              <h3
                className="text-sm my-1"
                style={{ color: 'var(--text-primary)' }}
              >
                {exp.role}
              </h3>

              {/* Company */}
              <p
                className="text-xs mb-2"
                style={{ color: 'var(--neon-pink)' }}
              >
                {exp.company}
              </p>

              {/* Description bullets */}
              <div className="space-y-1">
                {exp.description.split('\n').map((line, i) => (
                  <p
                    key={i}
                    className="text-xs flex"
                    style={{
                      color: 'var(--text-secondary)',
                      fontFamily: 'var(--font-pixel)',
                      lineHeight: '1.6',
                    }}
                  >
                    <span style={{ color: 'var(--neon-cyan)' }} className="mr-2">▸</span>
                    <span>{line}</span>
                  </p>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Core Strengths */}
        <h3
          className="text-sm mb-6 text-center mt-12"
          style={{
            color: 'var(--neon-yellow)',
            fontFamily: 'var(--font-pixel)',
          }}
        >
          CORE STRENGTHS
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-2xl mx-auto mb-12">
          {[
            '5+ years Unity development experience',
            'Shipped 3 commercial games on mobile and Steam',
            'Specialized in gameplay systems and UI architecture',
            'Strong background in multiplayer/netcode implementation',
            'Experience with full game development lifecycle',
            'Passionate about pixel art and retro aesthetics',
          ].map((strength, i) => (
            <div key={i} className="flex items-start gap-3">
              <span style={{ color: 'var(--neon-green)' }}>▶</span>
              <span
                className="text-xs"
                style={{
                  color: 'var(--text-secondary)',
                  fontFamily: 'var(--font-pixel)',
                  lineHeight: '1.6',
                }}
              >
                {strength}
              </span>
            </div>
          ))}
        </div>

        {/* Languages */}
        <h3
          className="text-xs mb-4 text-center"
          style={{
            color: 'var(--neon-cyan)',
            fontFamily: 'var(--font-pixel)',
          }}
        >
          LANGUAGES
        </h3>
        <div className="flex flex-wrap justify-center gap-2 mb-6">
          {skills.filter(s => s.category === 'language').map((skill) => (
            <span
              key={skill.name}
              className="text-xs px-2 py-1"
              style={{
                background: 'rgba(0, 255, 245, 0.1)',
                color: 'var(--neon-cyan)',
                border: '1px solid var(--neon-cyan)',
              }}
            >
              {skill.name}
            </span>
          ))}
        </div>

        {/* Tools */}
        <h3
          className="text-xs mb-4 text-center"
          style={{
            color: 'var(--neon-pink)',
            fontFamily: 'var(--font-pixel)',
          }}
        >
          TOOLS & FRAMEWORKS
        </h3>
        <div className="flex flex-wrap justify-center gap-2 mb-6">
          {skills.filter(s => s.category === 'tool').map((skill) => (
            <span
              key={skill.name}
              className="text-xs px-2 py-1"
              style={{
                background: 'rgba(255, 0, 255, 0.1)',
                color: 'var(--neon-pink)',
                border: '1px solid var(--neon-pink)',
              }}
            >
              {skill.name}
            </span>
          ))}
        </div>

        {/* Engines */}
        <h3
          className="text-xs mb-4 text-center"
          style={{
            color: 'var(--neon-yellow)',
            fontFamily: 'var(--font-pixel)',
          }}
        >
          ENGINES
        </h3>
        <div className="flex flex-wrap justify-center gap-2">
          {skills.filter(s => s.category === 'engine').map((skill) => (
            <span
              key={skill.name}
              className="text-xs px-2 py-1"
              style={{
                background: 'rgba(255, 255, 0, 0.1)',
                color: 'var(--neon-yellow)',
                border: '1px solid var(--neon-yellow)',
              }}
            >
              {skill.name}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
