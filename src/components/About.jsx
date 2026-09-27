import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { portfolioData } from '../data/portfolioData';

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

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
    <section id="about" className="py-24 px-6" ref={ref}>
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
            About
          </motion.h2>

          <div className="grid md:grid-cols-2 gap-12 items-start">
            <motion.div variants={itemVariants} className="space-y-6">
              <p className="text-lg leading-relaxed" style={{ color: 'var(--color-text-secondary)' }}>
                {portfolioData.about.summary}
              </p>
              <div className="font-mono text-sm" style={{ color: 'var(--color-text-secondary)' }}>
                {portfolioData.about.education}
              </div>
            </motion.div>

            <motion.div
              variants={itemVariants}
              className="grid grid-cols-2 gap-4"
            >
              {portfolioData.about.stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  className="glass rounded-xl p-6 hover:bg-white/10 transition-colors"
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.2 }}
                >
                  <div className="text-2xl mb-2">{stat.icon}</div>
                  <div className="font-mono text-sm" style={{ color: 'var(--color-accent-indigo)' }}>
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
