'use client';

import { personalInfo } from '@/lib/projects';

export default function ContactSection() {
  return (
    <section id="contact" className="py-16 px-4">
      <div className="max-w-2xl mx-auto text-center">
        {/* Section Title */}
        <h2
          className="text-lg md:text-xl mb-8"
          style={{
            color: 'var(--neon-cyan)',
            textShadow: '0 0 10px var(--neon-cyan)',
            fontFamily: 'var(--font-pixel)',
          }}
        >
          CONTACT
        </h2>

        {/* Intro */}
        <p
          className="text-xs mb-8"
          style={{
            color: 'var(--text-secondary)',
            fontFamily: 'var(--font-pixel)',
            lineHeight: '2',
          }}
        >
          Interested in working together? Feel free to reach out!
        </p>

        {/* Email */}
        <a
          href={`mailto:${personalInfo.email}`}
          className="text-sm hover:opacity-80 transition-opacity"
          style={{ color: 'var(--neon-pink)' }}
        >
          {personalInfo.email}
        </a>
      </div>
    </section>
  );
}
