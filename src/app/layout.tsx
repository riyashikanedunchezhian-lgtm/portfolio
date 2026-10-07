'use client';

import { useEffect, useState } from 'react';
import { Inter } from 'next/font/google';
import { ThemeProvider, createTheme, cssBaseline } from '@/design-system';

const inter = Inter({ subsets: ['latin'], variable: true });

export const metadata = {
  title: 'Riyashika Nedunchezhian',
  description: 'Founding Engineer @ OBLIQ.in · CS Undergrad',
  authors: [{ name: 'Riyashika Nedunchezhian', url: 'https://linkedin.com/in/riyashika-nedunchezhian-a17227390' }],
};

export default function RootLayout({
  children,
  params: { searchParams },
}: {
  children: React.ReactNode;
  params: { searchParams: Record<string, string> };
}) {
  const [theme, setTheme] = useState<'light' | 'dark'>('dark');

  useEffect(() => {
    const saved = localStorage.getItem('theme') as 'light' | 'dark' | null;
    setTheme(saved ?? 'dark');
  }, []);

  useEffect(() => {
    document.documentElement.classList.toggle('dark', theme === 'dark');
    localStorage.setItem('theme', theme);
  }, [theme]);

  return (
    <html lang="en">
      <body className={[theme === 'dark' && 'dark', cssBaseline].join(' ')}>
        <ThemeProvider value={{ theme, setTheme }}>{children}</ThemeProvider>
      </body>
    </html>
  );
}