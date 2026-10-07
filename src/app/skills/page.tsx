'use client';

import Link from 'next/link';
import { useTheme } from '@/app/theme-context';
import { motion } from 'framer-motion';

export default function Skills() {
  const { theme } = useTheme();

  return (
    <section className="min-h-[90vh] flex flex-col items-center justify-center px-6 py-20 bg-background text-foreground">
      <div className="max-w-4xl space-y-12">
        {/* Header with back link */}
        <div className="flex w-full items-center space-x-4 mb-8">
          <Link href="/" className="text-muted hover:text-primary transition-colors">
            ← Back to Home
          </Link>
          <h1 className="text-3xl font-bold text-primary">Technical Skills</h1>
        </div>

        {/* Skills Categories */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          className="mb-8"
        >
          <div className="space-y-6">
            {/* AI/LLM */}
            <div>
              <h2 className="text-2xl font-semibold text-primary mb-4">AI/LLM</h2>
              <div className="flex flex-wrap gap-4">
                <span className="bg-primary/20 text-primary px-3 py-1 rounded text-sm">LLM Evaluation</span>
                <span className="bg-primary/20 text-primary px-3 py-1 rounded text-sm">Prompt Engineering</span>
                <span className="bg-primary/20 text-primary px-3 py-1 rounded text-sm">Agent Architectures</span>
                <span className="bg-primary/20 text-primary px-3 py-1 rounded text-sm">Retrieval-Augmented Generation</span>
                <span className="bg-primary/20 text-primary px-3 py-1 rounded text-sm">Fine-tuning & Alignment</span>
                <span className="bg-primary/20 text-primary px-3 py-1 rounded text-sm">AI Safety & Guardrails</span>
                <span className="bg-primary/20 text-primary px-3 py-1 rounded text-sm">Multi-agent Systems</span>
                <span className="bg-primary/20 text-primary px-3 py-1 rounded text-sm">Explainable AI</span>
              </div>
            </div>

            {/* Backend & Platform */}
            <div>
              <h2 className="text-2xl font-semibold text-primary mb-4">Backend & Platform</h2>
              <div className="flex flex-wrap gap-4">
                <span className="bg-primary/20 text-primary px-3 py-1 rounded text-sm">FastAPI</span>
                <span className="bg-primary/20 text-primary px-3 py-1 rounded text-sm">Node.js</span>
                <span className="bg-primary/20 text-primary px-3 py-1 rounded text-sm">Python</span>
                <span className="bg-primary/20 text-primary px-3 py-1 rounded text-sm">RESTful APIs</span>
                <span className="bg-primary/20 text-primary px-3 py-1 rounded text-sm">GraphQL</span>
                <span className="bg-primary/20 text-primary px-3 py-1 rounded text-sm">WebSockets</span>
                <span className="bg-primary/20 text-primary px-3 py-1 rounded text-sm">SQL & NoSQL Databases</span>
                <span className="bg-primary/20 text-primary px-3 py-1 rounded text-sm">Docker & Containerization</span>
                <span className="bg-primary/20 text-primary px-3 py-1 rounded text-sm">CI/CD Pipelines</span>
                <span className="bg-primary/20 text-primary px-3 py-1 rounded text-sm">Cloud Platforms (AWS, Vercel)</span>
                <span className="bg-primary/20 text-primary px-3 py-1 rounded text-sm">Serverless Architecture</span>
                <span className="bg-primary/20 text-primary px-3 py-1 rounded text-sm">Microservices</span>
              </div>
            </div>

            {/* ML & Data */}
            <div>
              <h2 className="text-2xl font-semibold text-primary mb-4">ML & Data</h2>
              <div className="flex flex-wrap gap-4">
                <span className="bg-primary/20 text-primary px-3 py-1 rounded text-sm">Statistical Modeling</span>
                <span className="bg-primary/20 text-primary px-3 py-1 rounded text-sm">Time Series Forecasting</span>
                <span className="bg-primary/20 text-primary px-3 py-1 rounded text-sm">Feature Engineering</span>
                <span className="bg-primary/20 text-primary px-3 py-1 rounded text-sm">Data Pipeline Design</span>
                <span className="bg-primary/20 text-primary px-3 py-1 rounded text-sm">Experiment Tracking</span>
                <span className="bg-primary/20 text-primary px-3 py-1 rounded text-sm">Model Versioning</span>
                <span className="bg-primary/20 text-primary px-3 py-1 rounded text-sm">A/B Testing</span>
                <span className="bg-primary/20 text-primary px-3 py-1 rounded text-sm">Data Visualization</span>
                <span className="bg-primary/20 text-primary px-3 py-1 rounded text-sm">SQL & Data Querying</span>
                <span className="bg-primary/20 text-primary px-3 py-1 rounded text-sm">ETL Processes</span>
              </div>
            </div>

            {/* Languages */}
            <div>
              <h2 className="text-2xl font-semibold text-primary mb-4">Languages</h2>
              <div className="flex flex-wrap gap-4">
                <span className="bg-primary/20 text-primary px-3 py-1 rounded text-sm">TypeScript</span>
                <span className="bg-primary/20 text-primary px-3 py-1 rounded text-sm">JavaScript</span>
                <span className="bg-primary/20 text-primary px-3 py-1 rounded text-sm">Python</span>
                <span className="bg-primary/20 text-primary px-3 py-1 rounded text-sm">HTML/CSS</span>
                <span className="bg-primary/20 text-primary px-3 py-1 rounded text-sm">SQL</span>
                <span className="bg-primary/20 text-primary px-3 py-1 rounded text-sm">Bash/Shell</span>
                <span className="bg-primary/20 text-primary px-3 py-1 rounded text-sm">Java</span>
                <span className="bg-primary/20 text-primary px-3 py-1 rounded text-sm">C++</span>
                <span className="bg-primary/20 text-primary px-3 py-1 rounded text-sm">Go</span>
                <span className="bg-primary/20 text-primary px-3 py-1 rounded text-sm">Rust</span>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Navigation */}
        <div className="mt-12 flex justify-center gap-4">
          <Link href="/" className="btn-secondary btn">
            ← Back to Home
          </Link>
          <Link href="/education" className="btn-primary btn">
            Education →
          </Link>
        </div>
      </div>
    </section>
  );
}