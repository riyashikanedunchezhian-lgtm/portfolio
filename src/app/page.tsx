import { ThemeProvider } from '@/design-system';
import Fragment from 'react';

export default function Home() {
  return (
    <ThemeProvider value={{ theme: 'dark', setTheme: () => {} }}>
      <div className="min-h-screen bg-background text-foreground antialiased">
        {/* NAVBAR – replace with real links later */}
        <nav className="px-6 py-4 flex justify-between items-center bg-base rounded-md shadow-sm">
          <a href="/">RIYA</a>
          <div className="space-x-2">
            <a href="/about">About</a>
            <a href="/experience">Experience</a>
            <a href="/projects">Projects</a>
            <a href="/skills">Skills</a>
            <a href="/education">Education</a>
            <a href="/affiliations">Affiliations</a>
          </div>
          <button className="flex items-center space-x-1">🌙</button>
        </nav>

        <main className="py-8 px-6">{/* Hero, About, etc. will be added here */}</main>
      </div>
    </ThemeProvider>
  );
}