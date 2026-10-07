'use client';

import Link from 'next/link';
import { useTheme } from '@/app/theme-context';
import { motion } from 'framer-motion';

export default function Project2() {
  const { theme } = useTheme();

  return (
    <section className="min-h-[90vh] flex flex-col items-center justify-center px-6 py-20 bg-background text-foreground">
      <div className="max-w-4xl space-y-12">
        {/* Header with back link */}
        <div className="flex w-full items-center space-x-4 mb-8">
          <Link href="/projects" className="text-muted hover:text-primary transition-colors">
            ← Back to Projects
          </Link>
          <h1 className="text-3xl font-bold text-primary">LLM Evaluation Harness</h1>
        </div>

        {/* Animated Diagram Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          className="mb-8"
        >
          <div className="w-full h-64 bg-surface/50 rounded-xl border border-muted/20 flex items-center justify-center">
            {/* Placeholder for evaluation framework diagram */}
            <div className="text-muted">
              <svg className="w-24 h-24 text-primary mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" stroke-width="2" d="M9 12h6m2 0a2 2 0 100-4 2 2 0 000 4zm-8 0a2 2 0 100-4 2 2 0 000 4zm12 0a2 2 0 100-4 2 2 0 000 4zM4 7h16"/>
              </svg>
              <p className="text-sm">LLM evaluation framework visualization</p>
            </div>
          </div>
        </motion.div>

        {/* Problem Statement */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -20 }}
          className="mb-6"
        >
          <h2 className="text-2xl font-semibold text-primary mb-4">Problem</h2>
          <p className="text-lg leading-relaxed text-muted">
            Evaluating Large Language Models requires rigorous, reproducible benchmarks that test capabilities across multiple dimensions. Current evaluation tools lack transparency in their scoring mechanisms, making it difficult to trust results or understand failure modes.
          </p>
        </motion.div>

        {/* Architecture */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: 20 }}
          className="mb-6"
        >
          <h2 className="text-2xl font-semibold text-primary mb-4">Architecture</h2>
          <div className="space-y-4">
            <div className="flex items-start space-x-3">
              <div className="flex-shrink-0">
                <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 018.382 4.258M12 20v-9"/>
                </svg>
              </div>
              <div>
                <h3 className="font-semibold text-primary">Modular Evaluation Pipeline</h3>
                <p className="text-sm text-muted">Pluggable components for data loading, model inference, metric computation, and result aggregation.</p>
              </div>
            </div>
            <div className="flex items-start space-x-3">
              <div className="flex-shrink-0">
                <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" stroke-width="2" d="M9 12l2 2 4-4M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2-2v12a2 2 0 002 2z"/>
                </svg>
              </div>
              <div>
                <h3 className="font-semibold text-primary">Transparent Scoring</h3>
                <p className="text-sm text-muted">Every score is fully traceable to the underlying data points and computation steps.</p>
              </div>
            </div>
            <div className="flex items-start space-x-3">
              <div className="flex-shrink-0">
                <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" stroke-width="2" d="M9 12l2 2 4-4M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2-2v12a2 2 0 002 2z"/>
                </svg>
              </div>
              <div>
                <h3 className="font-semibold text-primary">Benchmark Reproducibility</h3>
                <p className="text-sm text-muted">Fixed random seeds, version-controlled datasets, and deterministic computation ensure identical results across runs.</p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Key Design Decisions */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -20 }}
          className="mb-6"
        >
          <h2 className="text-2xl font-semibold text-primary mb-4">Key Design Decisions</h2>
          <div className="space-y-4">
            <div className="flex items-start space-x-3">
              <div className="flex-shrink-0">
                <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" stroke-width="2" d="M9 12l2 2 4-4M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2-2v12a2 2 0 002 2z"/>
                </svg>
              </div>
              <div>
                <h3 className="font-semibold text-primary">Statistical Rigor</h3>
                <p className="text-sm text-muted">Proper confidence intervals, significance testing, and effect size reporting for all metrics.</p>
              </div>
            </div>
            <div className="flex items-start space-x-3">
              <div className="flex-shrink-0">
                <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" stroke-width="2" d="M9 12l2 2 4-4M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2-2v12a2 2 0 002 2z"/>
                </svg>
              </div>
              <div>
                <h3 className="font-semibold text-primary">Multi-dimensional Assessment</h3>
                <p className="text-sm text-muted">Evaluates reasoning, knowledge, safety, efficiency, and robustness across diverse task types.</p>
              </div>
            </div>
            <div className="flex items-start space-x-3">
              <div className="flex-shrink-0">
                <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" stroke-width="2" d="M9 12l2 2 4-4M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2-2v12a2 2 0 002 2z"/>
                </svg>
              </div>
              <div>
                <h3 className="font-semibold text-primary">Continuous Evaluation</h3>
                <p className="text-sm text-muted">Designed for ongoing assessment as models evolve, with baseline tracking and drift detection.</p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Engineering Challenges & Solutions */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: 20 }}
          className="mb-6"
        >
          <h2 className="text-2xl font-semibold text-primary mb-4">Engineering Challenges & Solutions</h2>
          <div className="space-y-4">
            <div className="flex items-start space-x-3">
              <div className="flex-shrink-0">
                <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" stroke-width="2" d="M9 12l2 2 4-4M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2-2v12a2 2 0 002 2z"/>
                </svg>
              </div>
              <div>
                <h3 className="font-semibold text-primary">Challenge: Prompt Variability</h3>
                <p className="text-sm text-muted">Ensuring consistent evaluation despite minor prompt variations.</p>
                <p className="mt-1 text-xs text-primary">Solution: Normalized prompt templates with controlled variable substitution and equivalence testing.</p>
              </div>
            </div>
            <div className="flex items-start space-x-3">
              <div className="flex-shrink-0">
                <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" stroke-width="2" d="M9 12l2 2 4-4M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2-2v12a2 2 0 002 2z"/>
                </svg>
              </div>
              <div>
                <h3 className="font-semibold text-primary">Challenge: Computational Cost</h3>
                <p className="text-sm text-muted">Running large models for evaluation can be prohibitively expensive.</p>
                <p className="mt-1 text-xs text-primary">Solution: Sampling strategies, early stopping criteria, and model distillation for preliminary screening.</p>
              </div>
            </div>
            <div className="flex items-start space-x-3">
              <div className="flex-shrink-0">
                <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" stroke-width="2" d="M9 12l2 2 4-4M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2-2v12a2 2 0 002 2z"/>
                </svg>
              </div>
              <div>
                <h3 className="font-semibold text-primary">Challenge: Result Interpretation</h3>
                <p className="text-sm text-muted">Making evaluation results actionable for model improvement.</p>
                <p className="mt-1 text-xs text-primary">Solution: Detailed error analysis, failure mode categorization, and targeted recommendation generation.</p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Honest Limitations */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -20 }}
          className="mb-6"
        >
          <h2 className="text-2xl font-semibold text-primary mb-4">Honest Limitations</h2>
          <div className="space-y-4">
            <div className="flex items-start space-x-3">
              <div className="flex-shrink-0">
                <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" stroke-width="2" d="M9 12l2 2 4-4M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2-2v12a2 2 0 002 2z"/>
                </svg>
              </div>
              <div>
                <h3 className="font-semibold text-primary">Benchmark Coverage</h3>
                <p className="text-sm text-muted">No single benchmark can capture all aspects of LLM capability; results should be interpreted in context.</p>
              </div>
            </div>
            <div className="flex items-start space-x-3">
              <div className="flex-shrink-0">
                <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" stroke-width="2" d="M9 12l2 2 4-4M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2-2v12a2 2 0 002 2z"/>
                </svg>
              </div>
              <div>
                <h3 className="font-semibold text-primary">Evaluation Bias</h3>
                <p className="text-sm text-muted">Benchmarks may inadvertently favor certain model architectures or training approaches.</p>
              </div>
            </div>
            <div className="flex items-start space-x-3">
              <div className="flex-shrink-0">
                <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" stroke-width="2" d="M9 12l2 2 4-4M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2-2v12a2 2 0 002 2z"/>
                </svg>
              </div>
              <div>
                <h3 className="font-semibold text-primary">Human Correlation</h3>
                <p className="text-sm text-muted">Automated metrics don't always correlate with human judgment of model quality.</p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Navigation */}
        <div className="mt-12 flex justify-center gap-4">
          <Link href="/projects/1" className="btn-secondary btn">
            ← Previous Project
          </Link>
          <Link href="/projects" className="btn-outline btn">
            Back to Projects Grid
          </Link>
          <Link href="/projects/3" className="btn-primary btn">
            Next Project →
          </Link>
        </div>
      </div>
    </section>
  );
}