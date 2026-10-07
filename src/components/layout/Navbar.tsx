'use client';

import Link from 'next/link';
import { useTheme } from '@/app/theme-context';
import { ThemeToggle } from '@/components/ui/ThemeToggle';
import { Mail, Github, Linkedin } from 'lucide-react';

export default function Navbar() {
  const { theme, setTheme } = useTheme();

  return (
    <nav className="px-6 py-4 flex flex-col sm:flex-row sm:items-center sm:justify-between bg-base rounded-md shadow-sm backdrop-blur-sm">
      <div className="flex items-center space-x-3 mb-2 sm:mb-0">
        <Link href="/" className="text-xl font-bold text-primary">
          RIYA
        </Link>
        <div className="hidden sm:flex flex-col items-start space-y-1">
          <Link href="/about" className="text-muted hover:text-primary transition-colors">
            About
          </Link>
          <Link href="/experience" className="text-muted hover:text-primary transition-colors">
            Experience
          </Link>
          <Link href="/projects" className="text-muted hover:text-primary transition-colors">
            Projects
          </Link>
          <Link href="/skills" className="text-muted hover:text-primary transition-colors">
            Skills
          </Link>
          <Link href="/education" className="text-muted hover:text-primary transition-colors">
            Education
          </Link>
          <Link href="/programs-affiliations" className="text-muted hover:text-primary transition-colors">
            Programs & Affiliations
          </Link>
        </div>
      </div>
      <div className="flex items-center space-x-4">
        <Link href="/resume-riyashika-nedunchezhian.pdf" target="_blank" rel="noopener noreferrer" className="flex items-center space-x-2 text-muted hover:text-primary transition-colors">
          <Mail className="h-4 w-4" />
          <span>Resume</span>
        </Link>
        <div className="flex items-center space-x-2">
          <a
            href="https://github.com/riyashikanedunchezhian-lgtm"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted hover:text-primary transition-colors"
            title="GitHub"
          >
            <Github className="h-5 w-5" />
          </a>
          <a
            href="https://www.linkedin.com/in/riyashika-nedunchezhian-a17227390/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted hover:text-primary transition-colors"
            title="LinkedIn"
          >
            <Linkedin className="h-5 w-5" />
          </a>
          <a
            href="mailto:riyashikanedunchezhian@gmail.com"
            className="text-muted hover:text-primary transition-colors"
            title="Email"
          >
            <Mail className="h-5 w-5" />
          </a>
        </div>
        <ThemeToggle />
      </div>
    </nav>
  );
}

export { Navbar };