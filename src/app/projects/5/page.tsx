'use client';

import Link from 'next/link';
import { useTheme } from '@/app/theme-context';
import { motion } from 'framer-motion';

export default function Project5() {
  const { theme } = useTheme();

  return (
    <section className="min-h-[90vh] flex flex-col items-center justify-center px-6 py-20 bg-background text-foreground">
      <div className="max-w-4xl space-y-12">
        {/* Header with back link */}
        <div className="flex w-full items-center space-x-4 mb-8">
          <Link href="/projects" className="text-muted hover:text-primary transition-colors">
            ← Back to Projects
          </Link>
          <h1 className="text-3xl font-bold text-primary">Webhook Notification Hub</h1>
        </div>

        {/* Animated Diagram Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          className="mb-8"
        >
          <div className="w-full h-64 bg-surface/50 rounded-xl border border-muted/20 flex items-center justify-center">
            {/* Placeholder for webhook diagram */}
            <div className="text-muted">
              <svg className="w-24 h-24 text-primary mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3"/>
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13h14"/>
              </svg>
              <p className="text-sm">Webhook delivery system with retry logic</p>
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
            Webhook delivery is notoriously unreliable due to network issues, server downtime, and rate limiting. Missing critical notifications can lead to data inconsistencies, failed integrations, and business process disruptions. Existing solutions often lack transparency into delivery attempts and failure reasons.
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
                <h3 className="font-semibold text-primary">Reliable Delivery Engine</h3>
                <p className="text-sm text-muted">Exponential backoff retry logic with jitter to prevent thundering herd problems.</p>
              </div>
            </div>
            <div className="flex items-start space-x-3">
              <div className="flex-shrink-0">
                <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" stroke-width="2" d="M9 12l2 2 4-4M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2-2v12a2 2 0 002 2z"/>
                </svg>
              </div>
              <div>
                <h3 className="font-semibold text-primary">Delivery Attempt Logging</h3>
                <p className="text-sm text-muted">Every webhook delivery attempt is logged with timestamp, HTTP status, response body, and error details.</p>
              </div>
            </div>
            <div className="flex items-start space-x-3">
              <div className="flex-shrink-0">
                <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" stroke-width="2" d="M9 12l2 2 4-4M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2-2v12a2 2 0 002 2z"/>
                </svg>
              </div>
              <div>
                <h3 className="font-semibold text-primary">Dead Letter Queue</h3>
                <p className="text-sm text-muted">Failed webhooks that exceed retry limits are moved to a DLQ for manual inspection and replay.</p>
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
                  <path strokeLinecap="round" strokeLinejoin="round" stroke-width="2" d="M9 12l2 2 4-4M5 20h14a2 2 0 002-2V6a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2-2v12a2 2 0 002 2z"/>
                </svg>
              </div>
              <div>
                <h3 className="font-semibold text-primary">Idempotency Support</h3>
                <p className="text-sm text-muted">Webhook payloads include unique identifiers to prevent duplicate processing when retries succeed after the initial delivery was actually successful.</p>
              </div>
            </div>
            <div className="flex items-start space-x-3">
              <div className="flex-shrink-0">
                <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" stroke-width="2" d="M9 12l2 2 4-4M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2-2v12a2 2 0 002 2z"/>
                </svg>
              </div>
              <div>
                <h3 className="font-semibold text-primary">Circuit Breaker Pattern</h3>
                <p className="text-sm text-muted">Temporarily stops delivery attempts to consistently failing endpoints to prevent resource exhaustion.</p>
              </div>
            </div>
            <div className="flex items-start space-x-3">
              <div className="flex-shrink-0">
                <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" stroke-width="2" d="M9 12l2 2 4-4M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2-2v12a2 2 0 002 2z"/>
                </svg>
              </div>
              <div>
                <h3 className="font-semibold text-primary">Rate Limit Awareness</h3>
                <p className="text-sm text-muted">Respects HTTP 429 responses and Retry-After headers to avoid being blocked by receiving services.</p>
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
                  <path strokeLinecap="round" strokeLinejoin="round" stroke-width="2" d="M9 12l2 2 4-4M5 20h14a2 2 0 002-2V6a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2-2v12a2 2 0 002 2z"/>
                </svg>
              </div>
              <div>
                <h3 className="font-semibold text-primary">Challenge: Duplicate Notifications</h3>
                <p className="text-sm text-muted">Retries can cause duplicate webhook deliveries if the initial attempt succeeded but timed out.</p>
                <p className="mt-1 text-xs text-primary">Solution: Idempotency keys in webhook payloads and deduplication logic in the receiving endpoint.</p>
              </div>
            </div>
            <div className="flex items-start space-x-3">
              <div className="flex-shrink-0">
                <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" stroke-width="2" d="M9 12l2 2 4-4M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2-2v12a2 2 0 002 2z"/>
                </svg>
              </div>
              <div>
                <h3 className="font-semibold text-primary">Challenge: Network Partition Handling</h3>
                <p className="text-sm text-muted">What happens when the system loses network connectivity entirely?</p>
                <p className="mt-1 text-xs text-primary">Solution: Persistent queue storage with automatic retry when connectivity is restored.</p>
              </div>
            </div>
            <div className="flex items-start space-x-3">
              <div className="flex-shrink-0">
                <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" stroke-width="2" d="M9 12l2 2 4-4M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2-2v12a2 2 0 002 2z"/>
                </svg>
              </div>
              <div>
                <h3 className="font-semibold text-primary">Challenge: Monitoring Visibility</h3>
                <p className="text-sm text-muted">Operations teams need insight into delivery success rates and failure patterns.</p>
                <p className="mt-1 text-xs text-primary">Solution: Real-time metrics dashboard showing delivery rates, latency distributions, and failure categorization.</p>
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
                  <path strokeLinecap="round" strokeLinejoin="round" stroke-width="2" d="M9 12l2 2 4-4M5 20h14a2 2 0 002-2V6a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2-2v12a2 2 0 002 2z"/>
                </svg>
              </div>
              <div>
                <h3 className="font-semibold text-primary">Delivery Guarantees</h3>
                <p className="text-sm text-muted">At-least-once delivery is guaranteed, but exactly-once delivery requires cooperation from the receiving endpoint.</p>
              </div>
            </div>
            <div className="flex items-start space-x-3">
              <div className="flex-shrink-0">
                <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" stroke-width="2" d="M9 12l2 2 4-4M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2-2v12a2 2 0 002 2z"/>
                </svg>
              </div>
              <div>
                <h3 className="font-semibold text-primary">Payload Size Limits</h3>
                <p className="text-sm text-muted">Very large webhook payloads may be impacted by timeout constraints during delivery attempts.</p>
              </div>
            </div>
            <div className="flex items-start space-x-3">
              <div className="flex-shrink-0">
                <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" stroke-width="2" d="M9 12l2 2 4-4M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2-2v12a2 2 0 002 2z"/>
                </svg>
              </div>
              <div>
                <h3 className="font-semibold text-primary">Initial Delay</h3>
                <p className="text-sm text-muted">There's an inherent delay between the triggering event and the first webhook delivery attempt due to queueing and processing overhead.</p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Navigation */}
        <div className="mt-12 flex justify-center gap-4">
          <Link href="/projects/4" className="btn-secondary btn">
            ← Previous Project
          </Link>
          <Link href="/projects" className="btn-outline btn">
            Back to Projects Grid
          </Link>
        </div>
      </div>
    </section>
  );
}