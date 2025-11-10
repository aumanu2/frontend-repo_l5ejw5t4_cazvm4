import React from 'react';
import { Mail, Github, Linkedin } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="py-20 border-t border-white/10">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-2xl md:text-3xl font-semibold text-white">Contact</h2>
        <p className="mt-3 text-zinc-400">Open to freelance/contract backend roles and collaborations.</p>
        <div className="mt-6 flex flex-wrap items-center gap-3">
          <a href="mailto:chief@example.com" className="inline-flex items-center gap-2 rounded-md bg-white text-black px-4 py-2 text-sm font-medium hover:bg-zinc-200 transition-colors">
            <Mail size={16} /> Email
          </a>
          <a href="https://github.com/srichief" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-md border border-white/15 px-4 py-2 text-sm font-medium hover:bg-white/10 transition-colors">
            <Github size={16} /> GitHub
          </a>
          <a href="https://linkedin.com/in/srichief" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-md border border-white/15 px-4 py-2 text-sm font-medium hover:bg-white/10 transition-colors">
            <Linkedin size={16} /> LinkedIn
          </a>
        </div>
      </div>
    </section>
  );
}
