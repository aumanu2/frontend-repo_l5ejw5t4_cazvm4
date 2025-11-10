import React from 'react';

const skills = [
  'Python', 'FastAPI', 'JWT', 'Supabase', 'PostgreSQL', 'SQLite', 'Docker', 'Git', 'Vercel', 'Render'
];

export default function About() {
  return (
    <section id="about" className="relative py-20 border-t border-white/10">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-12 items-start">
          <div className="md:col-span-1">
            <h2 className="text-2xl md:text-3xl font-semibold text-white">About</h2>
            <p className="mt-3 text-zinc-400">Backend-focused engineer delivering reliable, secure APIs and data systems. I design and ship production-grade services with clean architecture, robust auth, and efficient data flows.</p>
          </div>
          <div className="md:col-span-2">
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
              {skills.map((s) => (
                <div key={s} className="rounded-lg border border-white/10 bg-white/[0.02] px-3 py-2 text-sm text-zinc-200 shadow-sm">
                  {s}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
