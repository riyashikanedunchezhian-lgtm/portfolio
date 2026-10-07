'use client';

import Link from 'next/link';
import { useTheme } from '@/app/theme-context';

export default function Experience() {
  const { theme } = useTheme();

  return (
    <section className="min-h-[90vh] flex flex-col items-center justify-center px-6 py-20 bg-background text-foreground">
      <div className="max-w-4xl text-center">
        <h1 className="mb-6 text-4xl font-bold text-primary">Experience</h1>
        <div className="mb-8 text-lg leading-relaxed text-muted">
          <strong className="text-primary">Founding Engineer — OBLIQ.in</strong><br />
          <span className="block mb-2">September 2026 – Present</span>
          <span className="block">Related skills: Backend architecture, data modeling, security design, audit/traceability systems, FastAPI, SQLite.</span>
        </div>
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