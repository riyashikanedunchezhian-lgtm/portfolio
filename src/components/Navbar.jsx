import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTheme } from '../contexts/ThemeContext';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: 'About', href: '#about' },
    { label: 'Experience', href: '#experience' },
    { label: 'Projects', href: '#projects' },
    { label: 'Skills', href: '#skills' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <motion.nav
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        scrolled
          ? 'py-3'
          : 'py-6'
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          className={`flex items-center justify-between ${
            scrolled
              ? 'glass rounded-full px-6 py-3'
              : ''
          }`}
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          <a
            href="#"
            className="font-display font-semibold text-xl transition-colors"
            style={{ color: 'var(--color-text-primary)' }}
            onMouseEnter={(e) => e.target.style.color = 'var(--color-accent-indigo)'}
            onMouseLeave={(e) => e.target.style.color = 'var(--color-text-primary)'}
          >
            RN
          </a>

          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item, index) => (
              <a
                key={item.label}
                href={item.href}
                className="text-sm transition-colors relative group"
                style={{ color: 'var(--color-text-secondary)' }}
                onMouseEnter={(e) => e.target.style.color = 'var(--color-text-primary)'}
                onMouseLeave={(e) => e.target.style.color = 'var(--color-text-secondary)'}
              >
                {item.label}
                <motion.span
                  className="absolute bottom-0 left-0 h-0.5 transition-all"
                  style={{ backgroundColor: 'var(--color-accent-indigo)', width: 0 }}
                  whileHover={{ width: '100%' }}
                  transition={{ duration: 0.3 }}
                />
              </a>
            ))}
          </div>

          <button
            onClick={toggleTheme}
            className="p-2 rounded-lg hover:bg-white/5 transition-colors"
            aria-label="Toggle theme"
          >
            {theme === 'dark' ? (
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" style={{ color: 'var(--color-text-primary)' }}>
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
              </svg>
            ) : (
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" style={{ color: 'var(--color-text-primary)' }}>
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
              </svg>
            )}
          </button>
        </motion.div>
      </div>
    </motion.nav>
  );
};

export default Navbar;
