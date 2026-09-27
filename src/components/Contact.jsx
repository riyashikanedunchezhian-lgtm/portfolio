import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState, useEffect } from 'react';
import { portfolioData } from '../data/portfolioData';

const MagneticLink = ({ href, icon, label }) => {
  const ref = useRef(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    const { clientX, clientY } = e;
    const { left, top, width, height } = ref.current.getBoundingClientRect();
    const x = clientX - left - width / 2;
    const y = clientY - top - height / 2;
    setPosition({ x, y });
  };

  const handleMouseLeave = () => {
    setPosition({ x: 0, y: 0 });
  };

  return (
    <motion.a
      ref={ref}
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="glass rounded-xl p-6 flex items-center gap-4 hover:bg-white/10 transition-colors"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      animate={{ x: position.x, y: position.y }}
      transition={{ type: 'spring', stiffness: 150, damping: 15 }}
      data-interactive
    >
      <div className="text-2xl">{icon}</div>
      <span className="font-mono text-sm" style={{ color: 'var(--color-text-primary)' }}>{label}</span>
    </motion.a>
  );
};

const Contact = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [time, setTime] = useState('');

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const options = {
        timeZone: 'Asia/Kolkata',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: true,
      };
      setTime(now.toLocaleTimeString('en-US', options));
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
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
    <section id="contact" className="py-24 px-6" ref={ref}>
      <div className="max-w-7xl mx-auto">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
        >
          <motion.h2
            variants={itemVariants}
            className="font-display font-bold text-4xl md:text-5xl mb-12"
            style={{ color: 'var(--color-text-primary)' }}
          >
            Let's Build Something
          </motion.h2>

          <motion.div
            variants={itemVariants}
            className="grid md:grid-cols-3 gap-6 mb-12"
          >
            <MagneticLink
              href={`mailto:${portfolioData.contact.email}`}
              icon="📧"
              label="Email"
            />
            <MagneticLink
              href={portfolioData.contact.linkedin}
              icon="💼"
              label="LinkedIn"
            />
            <MagneticLink
              href={portfolioData.contact.github}
              icon="🔗"
              label="GitHub"
            />
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="text-center space-y-4"
          >
            <p className="font-mono text-sm" style={{ color: 'var(--color-text-secondary)' }}>
              {portfolioData.contact.location} · {portfolioData.contact.timezone}
            </p>
            <p className="font-mono text-xs" style={{ color: 'var(--color-text-secondary)' }}>
              Local time: {time}
            </p>
            <motion.a
              href={`mailto:${portfolioData.contact.email}`}
              className="inline-block px-8 py-4 rounded-lg font-medium transition-colors"
              style={{ backgroundColor: 'var(--color-accent-indigo)', color: 'white' }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              data-interactive
            >
              Get in Touch
            </motion.a>
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="mt-16 text-center"
          >
            <p className="font-mono text-xs" style={{ color: 'var(--color-text-secondary)' }}>
              Designed & Built by Riyashika Nedunchezhian
            </p>
            <p className="font-mono text-xs mt-2" style={{ color: 'var(--color-text-secondary)' }}>
              Powered by React · Framer Motion · Tailwind CSS
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
