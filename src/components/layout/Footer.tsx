'use client';

import Link from 'next/link';
import { useTheme } from '@/app/theme-context';
import { Mail, Github, Linkedin } from 'lucide-react';

export default function Footer() {
  const { theme } = useTheme();

  return (
    <footer className="mt-12 pt-8 border-t border-muted/20">
      <div className="max-w-4xl mx-auto px-6 py-4 flex flex-col sm:flex-row sm:justify-between sm:items-center text-center sm:text-left">
        <div className="mb-4 sm:mb-0">
          <Link href="/" className="text-xl font-bold text-primary">
            RIYA
          </Link>
          <p className="mt-2 text-sm text-muted">
            Founding Engineer @ OBLIQ.in · CS Undergrad
          </p>
        </div>
        <div className="flex flex-col sm:flex-row space-x-4 sm:space-x-6">
          <div className="flex space-x-3">
            <a
              href="https://github.com/riyashikanedunchezhian-lgtm"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted hover:text-primary transition-colors"
              title="GitHub"
            >
              <Github className={`h-5 w-5 ${theme === 'dark' ? 'text-primary' : ''}`} />
            </a>
            <a
              href="https://www.linkedin.com/in/riyashika-nedunchezhian-a17227390/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted hover:text-primary transition-colors"
              title="LinkedIn"
            >
              <Linkedin className={`h-5 w-5 ${theme === 'dark' ? 'text-primary' : ''}`} />
            </a>
            <a
              href="mailto:riyashikanedunchezhian@gmail.com"
              className="text-muted hover:text-primary transition-colors"
              title="Email"
            >
              <Mail className={`h-5 w-5 ${theme === 'dark' ? 'text-primary' : ''}`} />
            </a>
          </div>
          <div className="mt-4 sm:mt-0">
            <Link href="/programs-affiliations" className="text-muted hover:text-primary transition-colors">
              Programs & Affiliations
            </Link>
          </div>
          <div className="mt-4 sm:mt-0 text-sm text-muted">
            &copy; {new Date().getFullYear()} Riyashika Nedunchezhian. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
}

export { Footer };