import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { portfolioData } from '../data/portfolioData';

const ProjectCard = ({ project, index }) => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setMousePosition({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  const sizeClasses = {
    large: 'md:col-span-2 md:row-span-2',
    medium: 'md:col-span-1 md:row-span-1',
    small: 'md:col-span-1 md:row-span-1',
  };

  return (
    <motion.div
      className={`glass rounded-xl p-6 relative overflow-hidden group cursor-pointer ${sizeClasses[project.size]}`}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-100px' }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ y: -4 }}
    >
      {/* Spotlight effect */}
      {isHovered && (
        <motion.div
          className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          style={{
            background: `radial-gradient(600px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(108, 92, 231, 0.06), transparent 40%)`,
          }}
        />
      )}

      {/* Border glow */}
      <motion.div
        className="absolute inset-0 rounded-xl border-2 transition-colors duration-300"
        initial={false}
        style={{
          borderColor: isHovered ? 'rgba(108, 92, 231, 0.3)' : 'transparent',
        }}
      />

      <div className="relative z-10 h-full flex flex-col">
        <div className="flex items-start justify-between mb-4">
          <h3 className="font-display font-semibold text-xl" style={{ color: 'var(--color-text-primary)' }}>
            {project.name}
          </h3>
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="transition-colors"
            style={{ color: 'var(--color-text-secondary)' }}
            data-interactive
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
            </svg>
          </a>
        </div>

        <p className="text-sm mb-4 flex-grow" style={{ color: 'var(--color-text-secondary)' }}>
          {project.description}
        </p>

        <div className="flex flex-wrap gap-2 mb-4">
          {project.tech.map((tech) => (
            <span
              key={tech}
              className="font-mono text-xs px-2 py-1 rounded"
              style={{ backgroundColor: 'rgba(255, 255, 255, 0.05)', color: 'var(--color-text-secondary)' }}
            >
              {tech}
            </span>
          ))}
        </div>

        <div className="font-mono text-xs" style={{ color: 'var(--color-accent-indigo)' }}>
          {project.metric}
        </div>
      </div>
    </motion.div>
  );
};

const Projects = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="projects" className="py-24 px-6" ref={ref}>
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.5 }}
        >
          <motion.h2
            className="font-display font-bold text-4xl md:text-5xl mb-12"
            style={{ color: 'var(--color-text-primary)' }}
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.5 }}
          >
            Featured Projects
          </motion.h2>

          {/* Bento grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 auto-rows-[200px]">
            {portfolioData.projects.map((project, index) => (
              <ProjectCard key={index} project={project} index={index} />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
