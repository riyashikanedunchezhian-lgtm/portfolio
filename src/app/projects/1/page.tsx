'use client';

import Link from 'next/link';
import { useTheme } from '@/app/theme-context';
import { motion } from 'framer-motion';

export default function Project1() {
  const { theme } = useTheme();

  return (
    <section className="min-h-[90vh] flex flex-col items-center justify-center px-6 py-20 bg-background text-foreground">
      <div className="max-w-4xl space-y-12">
        {/* Header with back link */}
        <div className="flex w-full items-center space-x-4 mb-8">
          <Link href="/projects" className="text-muted hover:text-primary transition-colors">
            ← Back to Projects
          </Link>
          <h1 className="text-3xl font-bold text-primary">Multi-Agent Research Assistant</h1>
        </div>

        {/* Animated Diagram Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          className="mb-8"
        >
          <div className="w-full h-64 bg-surface/50 rounded-xl border border-muted/20 flex items-center justify-center">
            {/* Placeholder for animated node graph */}
            <div className="text-muted">
              <svg className="w-24 h-24 text-primary mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" stroke-width="2" d="M12 8c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 12c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm0-12c-2.21 0-4 1.79-4 4h2c0-1.1.9-2 2-2s2 .9 2 2-1.79 2-4 2z"/>
              </svg>
              <p className="text-sm">Animated node graph showing agent interactions</p>
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
            Current AI agent systems operate as opaque black boxes, making it impossible to understand their reasoning process, debug failures, or trust their outputs. Researchers need transparent systems where agent interactions, decision-making processes, and knowledge sharing are fully traceable.
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
                <h3 className="font-semibold text-primary">Multi-agent Communication Layer</h3>
                <p className="text-sm text-muted">Agents communicate through a centralized message bus with full audit logging of all interactions.</p>
              </div>
            </div>
            <div className="flex items-start space-x-3">
              <div className="flex-shrink-0">
                <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" stroke-width="2" d="M9 12l2 2 4-4M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"/>
                </svg>
              </div>
              <div>
                <h3 className="font-semibold text-primary">Reasoning Trace Storage</h3>
                <p className="text-sm text-muted">Every agent's thought process, tool usage, and decision points are stored in an immutable log for later analysis.</p>
              </div>
            </div>
            <div className="flex items-start space-x-3">
              <div className="flex-shrink-0">
                <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" stroke-width="2" d="M12 8c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 12c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm0-12c-2.21 0-4 1.79-4 4h2c0-1.1.9-2 2-2s2 .9 2 2-1.79 2-4 2z"/>
                </svg>
              </div>
              <div>
                <h3 className="font-semibold text-primary">Knowledge Sharing Mechanism</h3>
                <p className="text-sm text-muted">Agents can share learned insights and patterns while maintaining attribution and traceability.</p>
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
                  <path strokeLinecap="round" strokeLinejoin="round" stroke-width="2" d="M9 12l2 2 4-4M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"/>
                </svg>
              </div>
              <div>
                <h3 className="font-semibold text-primary">Immutable Audit Trail</h3>
                <p className="text-sm text-muted">All agent actions are cryptographically signed and stored in an append-only log, ensuring data integrity and enabling forensic analysis.</p>
              </div>
            </div>
            <div className="flex items-start space-x-3">
              <div className="flex-shrink-0">
                <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" stroke-width="2" d="M9 12l2 2 4-4M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"/>
                </svg>
              </div>
              <div>
                <h3 className="font-semibold text-primary">Modular Agent Design</h3>
                <p className="text-sm text-muted">Agents are built as independent modules that can be mixed and matched, with standardized interfaces for communication and knowledge sharing.</p>
              </div>
            </div>
            <div className="flex items-start space-x-3">
              <div className="flex-shrink-0">
                <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" stroke-width="2" d="M9 12l2 2 4-4M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"/>
                </svg>
              </div>
              <div>
                <h3 className="font-semibold text-primary">Failure Isolation</h3>
                <p className="text-sm text-muted">Individual agent failures don't cascade; each agent operates in its own sandbox with clear error boundaries and recovery mechanisms.</p>
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
                <h3 className="font-semibold text-primary">Challenge: Message Ordering</h3>
                <p className="text-sm text-muted">Ensuring consistent message ordering across distributed agents.</p>
                <p className="mt-1 text-xs text-primary">Solution: Implemented Lamport timestamps with vector clocks for causal ordering.</p>
              </div>
            </div>
            <div className="flex items-start space-x-3">
              <div className="flex-shrink-0">
                <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" stroke-width="2" d="M9 12l2 2 4-4M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2-2v12a2 2 0 002 2z"/>
                </svg>
              </div>
              <div>
                <h3 className="font-semibold text-primary">Challenge: Storage Scalability</h3>
                <p className="text-sm text-muted">Managing growth of audit trails as agent interactions increase.</p>
                <p className="mt-1 text-xs text-primary">Solution: Hierarchical storage with hot/warm/cold tiers and automated archiving based on access patterns.</p>
              </div>
            </div>
            <div className="flex items-start space-x-3">
              <div className="flex-shrink-0">
                <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" stroke-width="2" d="M9 12l2 2 4-4M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2-2v12a2 2 0 002 2z"/>
                </svg>
              </div>
              <div>
                <h3 className="font-semibold text-primary">Challenge: Real-time Visualization</h3>
                <p className="text-sm text-muted">Rendering complex agent interactions in real-time without performance degradation.</p>
                <p className="mt-1 text-xs text-primary">Solution: WebGL-based rendering with level-of-detail techniques and GPU-accelerated force-directed layouts.</p>
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
                <h3 className="font-semibold text-primary">Performance Overhead</h3>
                <p className="text-sm text-muted">The audit trail and tracing mechanisms introduce approximately 15-20% performance overhead compared to opaque agent systems.</p>
              </div>
            </div>
            <div className="flex items-start space-x-3">
              <div className="flex-shrink-0">
                <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" stroke-width="2" d="M9 12l2 2 4-4M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2-2v12a2 2 0 002 2z"/>
                </svg>
              </div>
              <div>
                <h3 className="font-semibold text-primary">Storage Requirements</h3>
                <p className="text-sm text-muted">Detailed trace storage requires significant disk space - approximately 10x the storage of equivalent opaque systems.</p>
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
                <p className="text-sm text-muted">Developers need to adapt to tracing-first debugging approaches rather than traditional breakpoint-based debugging.</p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Navigation */}
        <div className="mt-12 flex justify-center gap-4">
          <Link href="/projects" className="btn-secondary btn">
            ← Back to Projects
          </Link>
          <Link href="/projects/2" className="btn-primary btn">
            Next Project →
          </Link>
        </div>
      </div>
    </section>
  );
}