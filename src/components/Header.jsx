import React from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';

export default function Header() {
  return (
    <header className="sticky top-0 z-20 backdrop-blur supports-[backdrop-filter]:bg-black/30 bg-black/10 border-b border-white/10">
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <a href="#" className="font-semibold tracking-tight text-zinc-100">Sri Charan</a>
        <nav className="hidden md:flex items-center gap-6 text-sm text-zinc-300">
          <a href="#about" className="hover:text-white transition-colors">About</a>
          <a href="#projects" className="hover:text-white transition-colors">Projects</a>
          <a href="#experience" className="hover:text-white transition-colors">Experience</a>
          <a href="#contact" className="hover:text-white transition-colors">Contact</a>
        </nav>
        <div className="flex items-center gap-3">
          <a aria-label="Email" href="mailto:chief@example.com" className="p-2 rounded-md hover:bg-white/10 transition-colors"><Mail size={18} /></a>
          <a aria-label="GitHub" href="https://github.com/srichief" target="_blank" rel="noreferrer" className="p-2 rounded-md hover:bg-white/10 transition-colors"><Github size={18} /></a>
          <a aria-label="LinkedIn" href="https://linkedin.com/in/srichief" target="_blank" rel="noreferrer" className="p-2 rounded-md hover:bg-white/10 transition-colors"><Linkedin size={18} /></a>
      </div>
      </div>
    </header>
  );
}
