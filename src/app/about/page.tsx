'use client';

import Link from 'next/link';
import { useTheme } from '@/app/theme-context';

export default function About() {
  const { theme } = useTheme();

  return (
    <section className="min-h-[90vh] flex flex-col items-center justify-center px-6 py-20 bg-background text-foreground">
      <div className="max-w-4xl text-center">
        <h1 className="mb-6 text-4xl font-bold text-primary">About Me</h1>
        <p className="mb-6 text-lg leading-relaxed text-muted">
          I am a first-year B.E. Computer Science undergraduate at Coimbatore Institute of Technology, currently serving as Founding Engineer at OBLIQ.in. My work focuses on building transparent, failure‑aware AI systems rather than opaque API wrappers.
        </p>
        <p className="text-lg leading-relaxed text-muted">
          I design end‑to‑end architectures that expose their own reasoning, handle failures gracefully, and provide clear audit trails. This philosophy drives every project I undertake, from multi‑agent research assistants to traceable forecasting dashboards.
        </p>
        <div className="mt-8 flex justify-center gap-4">
          <Link href="/" className="btn-secondary btn">
            ← Back to Home
          </Link>
          <Link href="/projects" className="btn-primary btn">
            View Projects →
          </Link>
        </div>
      </div>
    </section>
  );
}