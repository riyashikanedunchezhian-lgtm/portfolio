'use client';

import Link from 'next/link';
import { useTheme } from '@/app/theme-context';
import { motion } from 'framer-motion';

export default function Project4() {
  const { theme } = useTheme();

  return (
    <section className="min-h-[90vh] flex flex-col items-center justify-center px-6 py-20 bg-background text-foreground">
      <div className="max-w-4xl space-y-12">
        {/* Header with back link */}
        <div className="flex w-full items-center space-x-4 mb-8">
          <Link href="/projects" className="text-muted hover:text-primary transition-colors">
            ← Back to Projects
          </Link>
          <h1 className="text-3xl font-bold text-primary">Agentic Debugger</h1>
        </div>

        {/* Animated Diagram Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          className="mb-8"
        >
          <div className="w-full h-64 bg-surface/50 rounded-xl border border-muted/20 flex items-center justify-center">
            {/* Placeholder for debugger diagram */}
            <div className="text-muted">
              <svg className="w-24 h-24 text-primary mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4M7 20h10a2 2 0 002-2V6a2 2 0 00-2-2H7a2 2 0 00-2-2v12a2 2 0 002 2z"/>
              </svg>
              <p className="text-sm">AI agent debugging interface</p>
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
            Debugging AI agents is notoriously difficult due to their opaque reasoning processes, non-deterministic behavior, and complex tool interactions. Traditional debugging techniques like breakpoints and logs are insufficient for understanding why an agent made a particular decision or how it used its tools.
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
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 018.382 4.258M12 20v-9"/>
                </svg>
              </div>
              <div>
                <h3 className="font-semibold text-primary">Step-by-step Execution Tracing</h3>
                <p className="text-sm text-muted">Records every agent action, tool call, and reasoning step with timestamps and contextual information.</p>
              </div>
            </div>
            <div className="flex items-start space-x-3">
              <div className="flex-shrink-0">
                <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2-2v12a2 2 0 002 2z"/>
                </svg>
              </div>
              <div>
                <h3 className="font-semibold text-primary">Interactive Replay System</h3>
                <p className="text-sm text-muted">Allows developers to step forward and backward through agent execution, inspecting state at each point.</p>
              </div>
            </div>
            <div className="flex items-start space-x-3">
              <div className="flex-shrink-0">
                <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2-2v12a2 2 0 002 2z"/>
                </svg>
              </div>
              <div>
                <h3 className="font-semibold text-primary">Tool Call Visualization</h3>
                <p className="text-sm text-muted">Shows exactly how agents used their tools, including inputs, outputs, and timing information.</p>
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
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2-2v12a2 2 0 002 2z"/>
                </svg>
              </div>
              <div>
                <h3 className="font-semibold text-primary">Deterministic Replay</h3>
                <p className="text-sm text-muted">Given the same inputs and initial state, the agent will always produce identical execution traces.</p>
              </div>
            </div>
            <div className="flex items-start space-x-3">
              <div className="flex-shrink-0">
                <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" stroke-width="2" d="M9 12l2 2 4-4M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2-2v12a2 2 0 002 2z"/>
                </svg>
              </div>
              <div>
                <h3 className="font-semibold text-positive">Selective Tracing</h3>
                <p className="text-sm text-muted">Ability to focus tracing on specific agents, tools, or time periods to reduce noise and improve performance.</p>
              </div>
            </div>
            <div className="flex items-start space-x-3">
              <div className="flex-shrink-0">
                <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" stroke-width="2" d="M9 12l2 2 4-4M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2-2v12a2 2 0 002 2z"/>
                </svg>
              </div>
              <div>
                <h3 className="font-semibold text-primary">Performance Profiling</h3>
                <p className="text-sm text-muted">Identifies bottlenecks in agent execution, showing where time is spent across reasoning, tool use, and communication.</p>
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
                <h3 className="font-semibold text-primary">Challenge: Overhead Minimization</h3>
                <p className="text-sm text-muted">Tracing should not significantly impact agent performance during normal operation.</p>
                <p className="mt-1 text-xs text-primary">Solution: Sampling-based tracing with adaptive rates and asynchronous trace writing to minimize runtime impact.</p>
              </div>
            </div>
            <div className="flex items-start space-x-3">
              <div className="flex-shrink-0">
                <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" stroke-width="2" d="M9 12l2 2 4-4M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2-2v12a2 2 0 002 2z"/>
                </svg>
              </div>
              <div>
                <h3 className="font-semibold text-primary">Challenge: Trace Storage</h3>
                <p className="text-sm text-muted">Execution traces can grow large, especially for long-running agents.</p>
                <p className="mt-1 text-xs text-primary">Solution: Hierarchical trace storage with compression and automated summarization of less critical sections.</p>
              </div>
            </div>
            <div className="flex items-start space-x-3">
              <div className="flex-shrink-0">
                <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" stroke-width="2" d="M9 12l2 2 4-4M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2-2v12a2 2 0 002 2z"/>
                </svg>
              </div>
              <div>
                <h3 className="font-semibold text-primary">Challenge: Visual Complexity</h3>
                <p className="text-sm text-muted">Detailed traces can overwhelm developers with information.</p>
                <p className="mt-1 text-xs text-primary">Solution: Multiple abstraction levels and filtering options to show only relevant information based on debugging goals.</p>
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
                <h3 className="font-semibold text-primary">Performance Impact</h3>
                <p className="text-sm text-muted">Even with optimizations, tracing introduces measurable performance overhead during active debugging sessions.</p>
              </div>
            </div>
            <div className="flex items-start space-x-3">
              <div className="flex-shrink-0">
                <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" stroke-width="2" d="M9 12l2 2 4-4M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2-2v12a2 2 0 002 2z"/>
                </svg>
              </div>
              <div>
                <h3 className="font-semibold text-primary">Limited Language Support</h3>
                <p className="text-sm text-muted">Currently optimized for Python and JavaScript agents; other languages may require additional instrumentation.</p>
              </div>
            </div>
            <div className="flex items-start space-x-3">
              <div className="flex-shrink-0">
                <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" stroke-width="2" d="M9 12l2 2 4-4M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2-2v12a2 2 0 002 2z"/>
                </svg>
              </div>
              <div>
                <h3 className="font-semibold text-primary">Learning Curve</h3>
                <p className="text-sm text-muted">Effective use requires understanding of both the agent system and the debugging interface concepts.</p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Navigation */}
        <div className="mt-12 flex justify-center gap-4">
          <Link href="/projects/3" className="btn-secondary btn">
            ← Previous Project
          </Link>
          <Link href="/projects" className="btn-outline btn">
            Back to Projects Grid
          </Link>
          <Link href="/projects/5" className="btn-primary btn">
            Next Project →
          </Link>
        </div>
      </div>
    </section>
  );
}