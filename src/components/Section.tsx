'use client';

import { motion } from 'framer-motion';
import type { ReactNode } from 'react';

interface SectionProps {
  id: string;
  title: string;
  eyebrow?: string;
  children: ReactNode;
  className?: string;
}

// Reusable section wrapper: consistent spacing, heading style, and scroll-in animation.
export function Section({ id, title, eyebrow, children, className = '' }: SectionProps) {
  return (
    <section id={id} className={`scroll-mt-20 py-20 sm:py-28 ${className}`} aria-labelledby={`${id}-heading`}>
      <div className="container-narrow">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
          className="reveal mb-12"
        >
          {eyebrow && (
            <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-accent-600 dark:text-accent-400">
              {eyebrow}
            </p>
          )}
          <h2
            id={`${id}-heading`}
            className="font-display text-3xl font-bold tracking-tight text-slate-900 dark:text-white sm:text-4xl"
          >
            {title}
          </h2>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.5, delay: 0.1, ease: 'easeOut' }}
          className="reveal"
        >
          {children}
        </motion.div>
      </div>
    </section>
  );
}
