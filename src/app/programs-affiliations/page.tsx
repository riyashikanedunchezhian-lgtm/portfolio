'use client';

'use client';

import Link from 'next/link';
import { useTheme } from '@/app/theme-context';
import { motion } from 'framer-motion';

export default function ProgramsAffiliations() {
  const { theme } = useTheme();

  return (
    <section className="min-h-[90vh] flex flex-col items-center justify-center px-6 py-20 bg-background text-foreground">
      <div className="max-w-4xl space-y-12">
        {/* Header with back link */}
        <div className="flex w-full items-center space-x-4 mb-8">
          <Link href="/" className="text-muted hover:text-primary transition-colors">
            ← Back to Home
          </Link>
          <h1 className="text-3xl font-bold text-primary">Programs & Affiliations</h1>
        </div>

        {/* Programs & Affiliations Content */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          className="mb-8"
        >
          <div className="space-y-6">
            <h2 className="text-2xl font-semibold text-primary mb-4">Professional Communities & Programs</h2>
            <p className="text-lg leading-relaxed text-muted max-w-2xl">
              Actively engaged in various technical communities and developer programs that foster learning, collaboration, and innovation in the software engineering ecosystem.
            </p>

            {/* Affiliations List */}
            <div className="space-y-4">
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                  <div className="h-10 w-10 bg-primary/20 rounded flex items-center justify-center text-primary">
                    <span className="text-xl">•</span>
                  </div>
                </div>
                <div>
                  <h3 className="font-semibold text-primary">FOSS CIT</h3>
                  <p className="text-sm text-muted">Free and Open Source Software community at Coimbatore Institute of Technology</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                  <div className="h-10 w-10 bg-primary/20 rounded flex items-center justify-center text-primary">
                    <span className="text-xl">•</span>
                  </div>
                </div>
                <div>
                  <h3 className="font-semibold text-primary">AMD Developer Program</h3>
                  <p className="text-sm text-muted">Access to AMD hardware, tools, and resources for high-performance computing development</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                  <div className="h-10 w-10 bg-primary/20 rounded flex items-center justify-center text-primary">
                    <span className="text-xl">•</span>
                  </div>
                </div>
                <div>
                  <h3 className="font-semibold text-primary">NVIDIA Developer Program</h3>
                  <p className="text-sm text-muted">Resources for GPU-accelerated computing, AI, and graphics development</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                  <div className="h-10 w-10 bg-primary/20 rounded flex items-center justify-center text-primary">
                    <span className="text-xl">•</span>
                  </div>
                </div>
                <div>
                  <h3 className="font-semibold text-primary">6G Developer Program</h3>
                  <p className="text-sm text-muted">Early access to research and development resources for next-generation wireless technology</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                  <div className="h-10 w-10 bg-primary/20 rounded flex items-center justify-center text-primary">
                    <span className="text-xl">•</span>
                  </div>
                </div>
                <div>
                  <h3 className="font-semibold text-primary">FOSSASIA</h3>
                  <p className="text-sm text-muted">Asian Free and Open Source Software community promoting open technologies</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                  <div className="h-10 w-10 bg-primary/20 rounded flex items-center justify-center text-primary">
                    <span className="text-xl">•</span>
                  </div>
                </div>
                <div>
                  <h3 className="font-semibold text-primary">Google Product Expert</h3>
                  <p className="text-sm text-muted">Recognized expertise in Google products and technologies through community contributions</p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Navigation */}
        <div className="mt-12 flex justify-center gap-4">
          <Link href="/education" className="btn-secondary btn">
            ← Education
          </Link>
          <Link href="/projects" className="btn-primary btn">
            Projects →
          </Link>
        </div>
      </div>
    </section>
  );
}