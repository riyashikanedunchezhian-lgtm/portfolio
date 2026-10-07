'use client';

import { useTheme } from '@/app/theme-context';
import { Moon, Sun } from 'lucide-react';

export const ThemeToggle = () => {
  const { theme, setTheme } = useTheme();

  const handleToggle = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  return (
    <button
      onClick={handleToggle}
      className="flex items-center space-x-2 rounded-md border border-muted px-3 py-2 text-sm font-medium transition-colors hover:bg-muted/20 focus:outline-none focus:ring-2 focus:ring-primary"
      aria-label="Toggle theme"
    >
      {theme === 'dark' ? (
        <>
          <Sun className="h-4 w-4" />
          <span className="sr-only">Switch to light mode</span>
        </>
      ) : (
        <>
          <Moon className="h-4 w-4" />
          <span className="sr-only">Switch to dark mode</span>
        </>
      )}
    </button>
  );
};