import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { portfolioData } from '../data/portfolioData';

const Skills = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [hoveredSkill, setHoveredSkill] = useState(null);

  // Related skills for highlighting
  const relatedSkills = {
    'LangGraph': ['RAG', 'Vector DBs', 'Agentic AI', 'LangChain'],
    'RAG': ['LangGraph', 'Vector DBs', 'ChromaDB', 'Pinecone'],
    'Vector DBs': ['RAG', 'ChromaDB', 'Pinecone', 'LangGraph'],
    'LangChain': ['LangGraph', 'Agentic AI', 'RAG'],
    'Agentic AI': ['LangGraph', 'LangChain', 'RAG'],
    'ChromaDB': ['RAG', 'Vector DBs', 'Python'],
    'Pinecone': ['RAG', 'Vector DBs', 'Python'],
    'FastAPI': ['Python', 'Redis', 'Docker'],
    'Redis': ['FastAPI', 'Celery'],
    'Celery': ['FastAPI', 'Redis'],
    'Python': ['FastAPI', 'PyTorch', 'TensorFlow', 'Scikit-learn'],
    'PyTorch': ['Python', 'NumPy'],
    'TensorFlow': ['Python', 'NumPy'],
    'Docker': ['FastAPI', 'Python'],
  };

  const isRelated = (skill) => {
    if (!hoveredSkill) return false;
    const related = relatedSkills[hoveredSkill] || [];
    return related.includes(skill);
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.3,
        ease: [0.16, 1, 0.3, 1],
      },
    },
  };

  return (
    <section id="skills" className="py-24 px-6" ref={ref}>
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
            Skills
          </motion.h2>

          <div className="space-y-8">
            {Object.entries(portfolioData.skills).map(([category, skills], categoryIndex) => (
              <motion.div
                key={category}
                variants={itemVariants}
                className="space-y-4"
              >
                <h3 className="font-mono text-sm uppercase tracking-wider" style={{ color: 'var(--color-accent-indigo)' }}>
                  {category.replace('_', ' ')}
                </h3>
                <div className="flex flex-wrap gap-3">
                  {skills.map((skill, skillIndex) => (
                    <motion.span
                      key={skill}
                      className="font-mono text-sm px-4 py-2 rounded-lg border transition-all cursor-default"
                      style={{
                        backgroundColor: hoveredSkill === skill 
                          ? 'var(--color-accent-indigo)' 
                          : isRelated(skill)
                          ? 'rgba(108, 92, 231, 0.2)'
                          : 'transparent',
                        color: hoveredSkill === skill 
                          ? 'white' 
                          : isRelated(skill)
                          ? 'var(--color-accent-indigo)'
                          : 'var(--color-text-secondary)',
                        borderColor: hoveredSkill === skill 
                          ? 'var(--color-accent-indigo)' 
                          : isRelated(skill)
                          ? 'rgba(108, 92, 231, 0.5)'
                          : 'transparent',
                      }}
                      onHoverStart={() => setHoveredSkill(skill)}
                      onHoverEnd={() => setHoveredSkill(null)}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      {skill}
                    </motion.span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
