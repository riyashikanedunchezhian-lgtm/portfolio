'use client';

import Link from 'next/link';
import { useTheme } from '@/app/theme-context';

export default function Projects() {
  const { theme } = useTheme();

  return (
    <section className="min-h-[90vh] flex flex-col items-center justify-center px-6 py-20 bg-background text-foreground">
      <div className="max-w-6xl text-center">
        <h1 className="mb-8 text-4xl font-bold text-primary">Projects</h1>
        <p className="mb-12 text-lg leading-relaxed text-muted max-w-2xl">
          Explore my work — from multi-agent research assistants to traceable forecasting dashboards.
          Each project represents a deep dive into transparent, failure-aware systems.
        </p>

        {/* Project Cards Grid */}
        <div className="grid gap-8 sm:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 w-full max-w-6xl">

          {/* Project 1: Multi-Agent Research Assistant */}
          <Link href="/projects/1" className="group block bg-surface/50 rounded-xl border border-muted/20 p-6 hover:border-primary/50 transition-all">
            <div className="flex flex-col items-center space-y-4">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center">
                <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" stroke-width="2" d="M12 8c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 12c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm0-12c-2.21 0-4 1.79-4 4h2c0-1.1.9-2 2-2s2 .9 2 2-1.79 2-4 2z"/>
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-primary">Multi-Agent Research Assistant</h3>
              <p className="text-sm text-muted text-center">AI agents collaborating with transparent reasoning</p>
              <span className="mt-2 inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-primary/20 text-primary">
                View Details →
              </span>
            </div>
          </Link>

          {/* Project 2: LLM Evaluation Harness */}
          <Link href="/projects/2" className="group block bg-surface/50 rounded-xl border border-muted/20 p-6 hover:border-primary/50 transition-all">
            <div className="flex flex-col items-center space-y-4">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center">
                <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m2 0a2 2 0 100-4 2 2 0 000 4zm-8 0a2 2 0 100-4 2 2 0 000 4zm12 0a2 2 0 100-4 2 2 0 000 4zM4 7h16"/>
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-primary">LLM Evaluation Harness</h3>
              <p className="text-sm text-muted text-center">Framework for rigorous LLM benchmarking</p>
              <span className="mt-2 inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-primary/20 text-primary">
                View Details →
              </span>
            </div>
          </Link>

          {/* Project 3: Traceable Sales Forecasting Dashboard */}
          <Link href="/projects/3" className="group block bg-surface/50 rounded-xl border border-muted/20 p-6 hover:border-primary/50 transition-all">
            <div className="flex flex-col items-center space-y-4">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center">
                <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" stroke-width="2" d="M12 8c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 12c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm0-12c-2.21 0-4 1.79-4 4h2c0-1.1.9-2 2-2s2 .9 2 2-1.79 2-4 2z"/>
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-primary">Traceable Sales Forecasting Dashboard</h3>
              <p className="text-sm text-muted text-center">Forecasting with full audit trails</p>
              <span className="mt-2 inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-primary/20 text-primary">
                View Details →
              </span>
            </div>
          </Link>

          {/* Project 4: Agentic Debugger */}
          <Link href="/projects/4" className="group block bg-surface/50 rounded-xl border border-muted/20 p-6 hover:border-primary/50 transition-all">
            <div className="flex flex-col items-center space-y-4">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center">
                <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4M7 20h10a2 2 0 002-2V6a2 2 0 00-2-2H7a2 2 0 00-2 2v12a2 2 0 002 2z"/>
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-primary">Agentic Debugger</h3>
              <p className="text-sm text-muted text-center">Debug AI agents with step-by-step tracing</p>
              <span className="mt-2 inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-primary/20 text-primary">
                View Details →
              </span>
            </div>
          </Link>

          {/* Project 5: Webhook Notification Hub */}
          <Link href="/projects/5" className="group block bg-surface/50 rounded-xl border border-muted/20 p-6 hover:border-primary/50 transition-all">
            <div className="flex flex-col items-center space-y-4">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center">
                <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3"/>
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13h14"/>
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-primary">Webhook Notification Hub</h3>
              <p className="text-sm text-muted text-center">Reliable webhook delivery with retry logic</p>
              <span className="mt-2 inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-primary/20 text-primary">
                View Details →
              </span>
            </div>
          </Link>

        </div>

        <div className="mt-12 flex justify-center gap-4">
          <Link href="/" className="btn-secondary btn">
            ← Back to Home
          </Link>
          <Link href="/resume-riyashika-nedunchezhian.pdf" target="_blank" rel="noopener noreferrer" className="btn-primary btn">
            Download Resume
          </Link>
        </div>
      </div>
    </section>
  );
}