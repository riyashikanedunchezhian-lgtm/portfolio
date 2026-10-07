'use client';

import Link from 'next/link';
import Image from 'next/image';
import { Github, Linkedin, Mail } from 'lucide-react';
import { useTheme } from '@/app/theme-context';

export default function Hero() {
  const { theme } = useTheme();

  return (
    <section className="min-h-[90vh] flex flex-col items-center justify-center px-6 py-20 text-center bg-background text-foreground">
      <div className="max-w-4xl">
        <h1 className="mb-4 text-5xl font-bold tracking-tight text-primary">
          Riyashika Nedunchezhian
        </h1>
        <p className="mb-6 text-xl text-muted">
          Founding Engineer @ OBLIQ.in · CS Undergrad
        </p>
        <p className="mb-8 text-lg leading-relaxed">
          A systems thinker who designs multi-component AI architectures with explicit attention to efficiency, failure handling, and honest evaluation — not someone who wraps an API call and calls it a project.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <Link href="/projects" className="btn-primary btn">
            View Projects
          </Link>
          <Link href="/programs-affiliations" className="btn-secondary btn">
            Programs & Affiliations
          </Link>
          <a
            href="/resume-riyashika-nedunchezhian.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-outline btn"
          >
            Download Resume
          </a>
        </div>
        <div className="mt-10 flex justify-center gap-6">
          <a
            href="https://github.com/riyashikanedunchezhian-lgtm"
            target="_blank"
            rel="noopener noreferrer"
            className="icon-link"
            title="GitHub"
          >
            <Github className={`h-6 w-6 ${theme === 'dark' ? 'text-primary' : 'text-muted'}`} />
          </a>
          <a
            href="https://www.linkedin.com/in/riyashika-nedunchezhian-a17227390/"
            target="_blank"
            rel="noopener noreferrer"
            className="icon-link"
            title="LinkedIn"
          >
            <Linkedin className={`h-6 w-6 ${theme === 'dark' ? 'text-primary' : 'text-muted'}`} />
          </a>
          <a
            href="mailto:riyashikanedunchezhian@gmail.com"
            className="icon-link"
            title="Email"
          >
            <Mail className={`h-6 w-6 ${theme === 'dark' ? 'text-primary' : 'text-muted'}`} />
          </a>
        </div>
      </div>
    </section>
  );
}

// Button helper classes (we can reuse from ui/Button but keep simple)