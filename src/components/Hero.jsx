import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { portfolioData } from '../data/portfolioData';

const Hero = () => {
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const rotatingText = portfolioData.hero.rotatingText;
    const currentWord = rotatingText[currentTextIndex];

    const timeout = setTimeout(() => {
      if (!isDeleting) {
        if (displayText !== currentWord) {
          setDisplayText(currentWord.slice(0, displayText.length + 1));
        } else {
          setTimeout(() => setIsDeleting(true), 1500);
        }
      } else {
        if (displayText !== '') {
          setDisplayText(displayText.slice(0, -1));
        } else {
          setIsDeleting(false);
          setCurrentTextIndex((prev) => (prev + 1) % rotatingText.length);
        }
      }
    }, isDeleting ? 50 : 100);

    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, currentTextIndex]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: [0.16, 1, 0.3, 1],
      },
    },
  };

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Animated gradient background */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute inset-0 opacity-30"
          animate={{
            background: [
              'radial-gradient(circle at 20% 50%, rgba(108, 92, 231, 0.15) 0%, transparent 50%)',
              'radial-gradient(circle at 80% 50%, rgba(108, 92, 231, 0.15) 0%, transparent 50%)',
              'radial-gradient(circle at 50% 80%, rgba(108, 92, 231, 0.15) 0%, transparent 50%)',
              'radial-gradient(circle at 20% 50%, rgba(108, 92, 231, 0.15) 0%, transparent 50%)',
            ],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: 'linear',
          }}
        />
        {/* Grid pattern */}
        <div className="absolute inset-0 opacity-[0.03]" style={{
          backgroundImage: `
            linear-gradient(to right, rgba(108, 92, 231, 1) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(108, 92, 231, 1) 1px, transparent 1px)
          `,
          backgroundSize: '50px 50px',
        }} />
      </div>

      <motion.div
        className="max-w-7xl mx-auto px-6 text-center relative z-10"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.div variants={itemVariants} className="mb-4">
          <span className="font-mono text-sm" style={{ color: 'var(--color-accent-indigo)' }}>
            {portfolioData.hero.role}
          </span>
        </motion.div>

        <motion.h1
          variants={itemVariants}
          className="font-display font-bold text-5xl md:text-7xl lg:text-8xl mb-6 tracking-tight"
          style={{ color: 'var(--color-text-primary)' }}
        >
          {portfolioData.hero.name}
        </motion.h1>

        <motion.p
          variants={itemVariants}
          className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto"
          style={{ color: 'var(--color-text-secondary)' }}
        >
          {portfolioData.hero.tagline}
        </motion.p>

        <motion.div variants={itemVariants} className="mb-12">
          <span style={{ color: 'var(--color-text-secondary)' }}>
            Building{' '}
            <span className="font-mono" style={{ color: 'var(--color-accent-indigo)' }}>
              {displayText}
              <motion.span
                animate={{ opacity: [1, 0] }}
                transition={{ duration: 0.5, repeat: Infinity, repeatDelay: 0.5 }}
                className="inline-block w-0.5 h-6 ml-1 align-middle"
                style={{ backgroundColor: 'var(--color-accent-indigo)' }}
              />
            </span>
          </span>
        </motion.div>

        <motion.div
          variants={itemVariants}
          className="flex flex-wrap gap-4 justify-center"
        >
          {portfolioData.hero.ctas.map((cta, index) => (
            <motion.a
              key={cta.label}
              href={cta.href}
              className="px-6 py-3 rounded-lg font-medium transition-all"
              style={{
                backgroundColor: index === 0 ? 'var(--color-accent-indigo)' : 'transparent',
                color: index === 0 ? 'white' : 'var(--color-text-primary)',
                border: index === 0 ? 'none' : '1px solid rgba(255, 255, 255, 0.1)',
              }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {cta.label}
            </motion.a>
          ))}
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" style={{ color: 'var(--color-text-secondary)' }}>
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </motion.div>
    </section>
  );
};

export default Hero;
