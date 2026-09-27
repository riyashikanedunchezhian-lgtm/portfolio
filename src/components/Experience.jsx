import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { portfolioData } from '../data/portfolioData';

const Experience = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.5,
        ease: [0.16, 1, 0.3, 1],
      },
    },
  };

  return (
    <section id="experience" className="py-24 px-6" ref={ref}>
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
            Experience
          </motion.h2>

          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px" style={{ backgroundColor: 'var(--color-border)' }}>
              <motion.div
                className="absolute top-0 left-0 w-full"
                style={{ backgroundColor: 'var(--color-accent-indigo)' }}
                initial={{ height: 0 }}
                animate={isInView ? { height: '100%' } : { height: 0 }}
                transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
              />
            </div>

            <div className="space-y-12">
              {portfolioData.experience.map((exp, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className={`relative md:grid md:grid-cols-2 md:gap-8 ${
                    index % 2 === 0 ? 'md:text-right' : 'md:text-left'
                  }`}
                >
                  {/* Timeline dot */}
                  <div className="absolute left-0 md:left-1/2 top-6 w-4 h-4 rounded-full -translate-x-1/2 z-10" style={{ backgroundColor: 'var(--color-accent-indigo)' }}>
                    <motion.div
                      className="absolute inset-0 rounded-full"
                      style={{ backgroundColor: 'var(--color-accent-indigo)' }}
                      animate={{ scale: [1, 1.5, 1] }}
                      transition={{ duration: 2, repeat: Infinity }}
                    />
                  </div>

                  <div className={`md:col-span-1 ${index % 2 === 0 ? 'md:pr-12' : 'md:pl-12 md:col-start-2'}`}>
                    <div className="glass rounded-xl p-6 hover:bg-white/10 transition-colors">
                      <div className="font-mono text-sm mb-2" style={{ color: 'var(--color-accent-indigo)' }}>
                        {exp.period}
                      </div>
                      <h3 className="font-display font-semibold text-2xl mb-1" style={{ color: 'var(--color-text-primary)' }}>
                        {exp.role}
                      </h3>
                      <div style={{ color: 'var(--color-text-secondary)' }}>{exp.company}</div>
                      <ul className="space-y-2 mb-4">
                        {exp.achievements.map((achievement, i) => (
                          <li key={i} className="text-sm" style={{ color: 'var(--color-text-secondary)' }}>
                            • {achievement}
                          </li>
                        ))}
                      </ul>
                      <div className="flex flex-wrap gap-2">
                        {exp.tech.map((tech) => (
                          <span
                            key={tech}
                            className="font-mono text-xs px-2 py-1 rounded"
                            style={{ backgroundColor: 'rgba(108, 92, 231, 0.1)', color: 'var(--color-accent-indigo)' }}
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;
