import React from 'react';
import ProjectCard from './ProjectCard.jsx';

const projects = [
  {
    title: 'Banking API',
    stack: 'FastAPI • Supabase • JWT',
    description: 'A secure, production-grade banking API with auth, transactions, and account management. Deployed to Vercel/Render.',
    demo: 'https://example.com/banking-api-demo',
    github: 'https://github.com/srichief/banking-api'
  },
  {
    title: 'ATM CLI System',
    stack: 'Python • SQLite • bcrypt',
    description: 'Terminal-based ATM simulation with user registration, authentication, and transaction history.',
    demo: 'https://example.com/atm-cli-demo',
    github: 'https://github.com/srichief/atm-cli'
  },
  {
    title: 'Task Manager API',
    stack: 'FastAPI • PostgreSQL • Docker',
    description: 'API for tasks with JWT auth, pagination, and CI/CD. Built with clean architecture and type-safe schemas.',
    demo: 'https://example.com/task-manager-demo',
    github: 'https://github.com/srichief/task-manager-api'
  }
];

export default function Projects() {
  return (
    <section id="projects" className="py-20 border-t border-white/10">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex items-end justify-between">
          <h2 className="text-2xl md:text-3xl font-semibold text-white">Projects</h2>
          <p className="text-sm text-zinc-400">Selected work</p>
        </div>
        <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((p) => (
            <ProjectCard key={p.title} {...p} />
          ))}
        </div>
      </div>
    </section>
  );
}
