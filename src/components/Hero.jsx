import React from 'react';
import Spline from '@splinetool/react-spline';

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 opacity-60">
        <Spline scene="https://prod.spline.design/41MGRk-UDPKO-l6W/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="relative max-w-6xl mx-auto px-6 pt-28 pb-24">
        <div className="max-w-2xl">
          <p className="text-sm uppercase tracking-widest text-zinc-400">Sri Charan (Chief)</p>
          <h1 className="mt-3 text-4xl md:text-6xl font-semibold leading-tight text-white">
            Backend Developer
          </h1>
          <p className="mt-4 text-zinc-300">
            Python • FastAPI • PostgreSQL • Supabase
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a href="#projects" className="inline-flex items-center justify-center rounded-md bg-white text-black px-5 py-2.5 text-sm font-medium hover:bg-zinc-200 transition-colors">
              View Projects
            </a>
            <a href="/resume.pdf" className="inline-flex items-center justify-center rounded-md border border-white/20 px-5 py-2.5 text-sm font-medium hover:bg-white/10 transition-colors">
              Download Resume
            </a>
          </div>
        </div>
      </div>

      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(60%_50%_at_20%_10%,rgba(99,102,241,0.15),transparent),radial-gradient(50%_40%_at_80%_0%,rgba(236,72,153,0.1),transparent)]" />
    </section>
  );
}
