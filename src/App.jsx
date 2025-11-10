import React from 'react';
import Header from './components/Header.jsx';
import Hero from './components/Hero.jsx';
import About from './components/About.jsx';
import Projects from './components/Projects.jsx';
import Experience from './components/Experience.jsx';
import Contact from './components/Contact.jsx';

export default function App() {
  return (
    <div className="min-h-screen bg-[#0b0b0d] text-zinc-200 antialiased">
      <Header />
      <main>
        <Hero />
        <About />
        <Projects />
        <Experience />
        <Contact />
      </main>
      <footer className="border-t border-white/10 mt-20">
        <div className="max-w-6xl mx-auto px-6 py-10 text-sm text-zinc-400">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <p>© {new Date().getFullYear()} Sri Charan (Chief). All rights reserved.</p>
            <div className="flex items-center gap-4">
              <a href="#about" className="hover:text-zinc-200 transition-colors">About</a>
              <a href="#projects" className="hover:text-zinc-200 transition-colors">Projects</a>
              <a href="#experience" className="hover:text-zinc-200 transition-colors">Experience</a>
              <a href="#contact" className="hover:text-zinc-200 transition-colors">Contact</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
