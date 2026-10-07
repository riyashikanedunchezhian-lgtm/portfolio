'use client';

import Link from 'next/link';
import { useTheme } from '@/app/theme-context';
import { motion } from 'framer-motion';

export default function Project3() {
  const { theme } = useTheme();

  return (
    <section className="min-h-[90vh] flex flex-col items-center justify-center px-6 py-20 bg-background text-foreground">
      <div className="max-w-4xl space-y-12">
        {/* Header with back link */}
        <div className="flex w-full items-center space-x-4 mb-8">
          <Link href="/projects" className="text-muted hover:text-primary transition-colors">
            ← Back to Projects
          </Link>
          <h1 className="text-3xl font-bold text-primary">Traceable Sales Forecasting Dashboard</h1>
        </div>

        {/* Animated Diagram Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          className="mb-8"
        >
          <div className="w-full h-64 bg-surface/50 rounded-xl border border-muted/20 flex items-center justify-center">
            {/* Placeholder for forecasting dashboard diagram */}
            <div className="text-muted">
              <svg className="w-24 h-24 text-primary mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" stroke-width="2" d="M12 8c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 12c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm0-12c-2.21 0-4 1.79-4 4h2c0-1.1.9-2 2-2s2 .9 2 2-1.79 2-4 2z"/>
              </svg>
              <p className="text-sm">Sales forecasting system with audit trails</p>
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
            Traditional forecasting systems provide predictions without explaining how they arrived at those numbers. Business stakeholders struggle to trust forecasts they can't audit, and data scientists lack the traceability needed to improve models or debug unexpected results.
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
                <h3 className="font-semibold text-primary">Feature Engineering Pipeline</h3>
                <p className="text-sm text-muted">Transparent transformation of raw data into model features with full lineage tracking.</p>
              </div>
            </div>
            <div className="flex items-start space-x-3">
              <div className="flex-shrink-0">
                <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" stroke-width="2" d="M9 12l2 2 4-4M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2-2v12a2 2 0 002 2z"/>
                </svg>
              </div>
              <div>
                <h3 className="font-semibold text-primary">Model Prediction Logging</h3>
                <p className="text-sm text-muted">Every forecast is logged with input features, model version, and computation details for reproducibility.</p>
              </div>
            </div>
            <div className="flex items-start space-x-3">
              <div className="flex-shrink-0">
                <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" stroke-width="2" d="M9 12l2 2 4-4M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2-2v12a2 2 0 002 2z"/>
                </svg>
              </div>
              <div>
                <h3 className="font-semibold text-primary">Audit Trail Visualization</h3>
                <p className="text-sm text-muted">Interactive dashboards that show how each forecast was derived from source data.</p>
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
                <h3 className="font-semibold text-primary">Immutable Forecast Records</h3>
                <p className="text-sm text-muted">Each forecast is cryptographically signed and stored with all contributing factors, enabling forensic analysis of prediction accuracy.</p>
              </div>
            </div>
            <div className="flex items-start space-x-3">
              <div className="flex-shrink-0">
                <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" stroke-width="2" d="M9 12l2 2 4-4M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2-2v12a2 2 0 002 2z"/>
                </svg>
              </div>
              <div>
                <h3 className="font-semibold text-primary">Explainable AI Integration</h3>
                <p className="text-sm text-muted">SHAP values and feature importance scores are computed and stored alongside each prediction for interpretability.</p>
              </div>
            </div>
            <div className="flex items-start space-x-3">
              <div className="flex-shrink-0">
                <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" stroke-width="2" d="M9 12l2 2 4-4M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2-2v12a2 2 0 002 2z"/>
                </svg>
              </div>
              <div>
                <h3 className="font-semibold text-primary">Temporal Consistency</h3>
                <p className="text-sm text-muted">Forecasts are constrained to be temporally consistent, with violations flagged and explained in the audit trail.</p>
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
                <h3 className="font-semibold text-primary">Challenge: Data Drift Detection</h3>
                <p className="text-sm text-muted">Identifying when input data distributions change significantly over time.</p>
                <p className="mt-1 text-xs text-primary">Solution: Statistical process control charts with automated alerts for significant distribution shifts.</p>
              </div>
            </div>
            <div className="flex items-start space-x-3">
              <div className="flex-shrink-0">
                <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" stroke-width="2" d="M9 12l2 2 4-4M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2-2v12a2 2 0 002 2z"/>
                </svg>
              </div>
              <div>
                <h3 className="font-semibold text-primary">Challenge: Model Versioning</h3>
                <p className="text-sm text-muted">Managing multiple model versions while ensuring fair comparison and rollback capability.</p>
                <p className="mt-1 text-xs text-primary">Solution: Git-like model registry with semantic versioning and automated A/B testing frameworks.</p>
              </div>
            </div>
            <div className="flex items-start space-x-3">
              <div className="flex-shrink-0">
                <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" stroke-width="2" d="M9 12l2 2 4-4M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2-2v12a2 2 0 002 2z"/>
                </svg>
              </div>
              <div>
                <h3 className="font-semibold text-primary">Challenge: Real-time Dashboard Updates</h3>
                <p className="text-sm text-muted">Updating forecasts and audit trails as new data arrives without overwhelming the system.</p>
                <p className="mt-1 text-xs text-primary">Solution: Incremental computation with caching and stream-processing architecture for efficient updates.</p>
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
                <h3 className="font-semibold text-primary">Prediction Uncertainty</h3>
                <p className="text-sm text-muted">All forecasts contain inherent uncertainty that must be communicated alongside point predictions.</p>
              </div>
            </div>
            <div className="flex items-start space-x-3">
              <div className="flex-shrink-0">
                <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" stroke-width="2" d="M9 12l2 2 4-4M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2-2v12a2 2 0 002 2z"/>
                </svg>
              </div>
              <div>
                <h3 className="font-semibold text-primary">Explainability Complexity</h3>
                <p className="text-sm text-muted">As models grow more complex, generating complete explanations becomes computationally expensive.</p>
              </div>
            </div>
            <div className="flex items-start space-x-3">
              <div className="flex-shrink-0">
                <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" stroke-width="2" d="M9 12l2 2 4-4M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2-2v12a2 2 0 002 2z"/>
                </svg>
              </div>
              <div>
                <h3 className="font-semibold text-primary">Business Interpretation</h3>
                <p className="text-sm text-muted">Translating technical audit trails into actionable business insights requires domain expertise.</p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Navigation */}
        <div className="mt-12 flex justify-center gap-4">
          <Link href="/projects/2" className="btn-secondary btn">
            ← Previous Project
          </Link>
          <Link href="/projects" className="btn-outline btn">
            Back to Projects Grid
          </Link>
          <Link href="/projects/4" className="btn-primary btn">
            Next Project →
          </Link>
        </div>
      </div>
    </section>
  );
}