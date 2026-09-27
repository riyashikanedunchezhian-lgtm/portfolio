import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { portfolioData } from '../data/portfolioData';

const Affiliations = () => {
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
    <section className="py-24 px-6" ref={ref}>
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
            Affiliations
          </motion.h2>

          <motion.div
            variants={itemVariants}
            className="flex flex-wrap justify-center gap-8 md:gap-12"
          >
            {portfolioData.affiliations.map((affiliation, index) => (
              <motion.div
                key={affiliation.name}
                className="glass rounded-xl px-8 py-6 hover:bg-white/10 transition-colors cursor-default"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <div className="font-mono text-sm grayscale hover:grayscale-0 transition-all" style={{ color: 'var(--color-text-secondary)' }}>
                  {affiliation.logo}
                </div>
                <div className="text-sm mt-2" style={{ color: 'var(--color-text-primary)' }}>
                  {affiliation.name}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Affiliations;
