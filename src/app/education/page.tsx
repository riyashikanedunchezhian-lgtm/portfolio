'use client';

'use client';

import Link from 'next/link';
import { useTheme } from '@/app/theme-context';
import { motion } from 'framer-motion';

export default function Education() {
  const { theme } = useTheme();

  return (
    <section className="min-h-[90vh] flex flex-col items-center justify-center px-6 py-20 bg-background text-foreground">
      <div className="max-w-4xl space-y-12">
        {/* Header with back link */}
        <div className="flex w-full items-center space-x-4 mb-8">
          <Link href="/" className="text-muted hover:text-primary transition-colors">
            ← Back to Home
          </Link>
          <h1 className="text-3xl font-bold text-primary">Education</h1>
        </div>

        {/* Education Timeline */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          className="mb-8"
        >
          <div className="space-y-8">
            {/* Coimbatore Institute of Technology */}
            <div className="flex items-start space-x-6">
              <div className="flex-shrink-0 w-20">
                <div className="h-12 w-12 bg-primary/20 rounded-xl flex items-center justify-center text-primary">
                  <span className="text-2xl">2025</span>
                </div>
                <div className="h-0.5 w-full bg-primary/20"></div>
                <div className="h-12 w-12 bg-primary/20 rounded-xl flex items-center justify-center text-primary">
                  <span className="text-2xl">2029</span>
                </div>
              </div>
              <div className="flex-1 space-y-2">
                <h2 className="text-2xl font-semibold text-primary">B.E. Computer Science and Engineering</h2>
                <h3 className="text-lg font-medium text-muted">Coimbatore Institute of Technology</h3>
                <p className="text-sm text-muted">Expected Graduation: 2029</p>
                <div className="mt-4 space-y-2">
                  <h3 className="font-semibold text-primary">Relevant Coursework</h3>
                  <ul className="list-disc list-space-y-2 pl-5 text-muted">
                    <li>Data Structures and Algorithms</li>
                    <li>Database Management Systems</li>
                    <li>Operating Systems</li>
                    <li>Computer Networks</li>
                    <li>Software Engineering</li>
                    <li>Artificial Intelligence and Machine Learning</li>
                    <li>Web Technologies</li>
                    <li>Distributed Systems</li>
                  </ul>
                </div>
                <div className="mt-4 space-y-2">
                  <h3 className="font-semibold text-primary">Academic Projects</h3>
                  <ul className="list-disc list-space-y-2 pl-5 text-muted">
                    <li>
                      <strong>Multi-Agent Research Assistant</strong> - Designed and implemented a collaborative AI system using LangGraph for automated literature reviews and research synthesis.
                    </li>
                    <li>
                      <strong>LLM Evaluation Harness</strong> - Built a comprehensive framework for evaluating Large Language Models across multiple dimensions with transparent scoring mechanisms.
                    </li>
                    <li>
                      <strong>Traceable Sales Forecasting Dashboard</strong> - Created an explainable AI system for sales predictions with full audit trails and forensic analysis capabilities.
                    </li>
                    <li>
                      <strong>Webhook Notification Hub</strong> - Developed a reliable webhook delivery system with exponential backoff retry logic and dead letter queue management.
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Navigation */}
        <div className="mt-12 flex justify-center gap-4">
          <Link href="/skills" className="btn-secondary btn">
            ← Skills
          </Link>
          <Link href="/programs-affiliations" className="btn-primary btn">
            Programs & Affiliations →
          </Link>
        </div>
      </div>
    </section>
  );
}