import React from 'react';

export default function Experience() {
  return (
    <section id="experience" className="py-20 border-t border-white/10">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-2xl md:text-3xl font-semibold text-white">Experience</h2>
        <div className="mt-6 rounded-2xl border border-white/10 bg-white/[0.02] p-6">
          <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
            <div>
              <h3 className="text-lg font-semibold text-white">Freelance / Fiverr</h3>
              <p className="text-sm text-zinc-400">Backend Developer</p>
            </div>
            <p className="text-sm text-zinc-500">Remote</p>
          </div>
          <ul className="mt-4 list-disc pl-5 space-y-2 text-zinc-300 text-sm leading-relaxed">
            <li>Designed and deployed REST APIs with FastAPI, JWT auth, and role-based permissions.</li>
            <li>Integrated PostgreSQL and Supabase for secure data storage, migrations, and backups.</li>
            <li>Set up CI/CD pipelines and containerized services with Docker for reliable releases.</li>
            <li>Optimized query performance and added observability (logging/metrics) for production stability.</li>
          </ul>
        </div>
      </div>
    </section>
  );
}
