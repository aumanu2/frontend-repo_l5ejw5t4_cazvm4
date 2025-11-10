import React from 'react';
import { Github, ExternalLink } from 'lucide-react';

export default function ProjectCard({ title, stack, description, demo, github }) {
  return (
    <div className="group rounded-2xl border border-white/10 bg-white/[0.02] p-6 hover:bg-white/[0.04] transition-colors">
      <div className="flex items-start justify-between gap-4">
        <div>
          <h3 className="text-lg font-semibold text-white">{title}</h3>
          <p className="mt-1 text-xs uppercase tracking-wider text-zinc-400">{stack}</p>
        </div>
      </div>
      <p className="mt-4 text-sm text-zinc-300 leading-relaxed">{description}</p>
      <div className="mt-6 flex items-center gap-3">
        {demo && (
          <a href={demo} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-md border border-white/15 px-3 py-2 text-xs font-medium hover:bg-white/10 transition-colors">
            <ExternalLink size={14} /> Demo
          </a>
        )}
        {github && (
          <a href={github} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-md border border-white/15 px-3 py-2 text-xs font-medium hover:bg-white/10 transition-colors">
            <Github size={14} /> GitHub
          </a>
        )}
      </div>
    </div>
  );
}
