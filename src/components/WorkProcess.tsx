'use client';

import { motion } from 'framer-motion';
import { CodeXml, FileText, PenTool, Rocket, Search, ShieldCheck, type LucideIcon } from 'lucide-react';
import { Section } from './Section';
import { processSteps, type ProcessStepIcon } from '@/data/data';

const iconMap: Record<ProcessStepIcon, LucideIcon> = {
  discover: Search,
  plan: FileText,
  design: PenTool,
  develop: CodeXml,
  test: ShieldCheck,
  deploy: Rocket,
};

export function WorkProcess() {
  return (
    <Section id="process" title="My Work Process" eyebrow="How I work">
      <div className="relative">
        {/* Connecting line — only meaningful once all steps sit in a single row. */}
        <div
          aria-hidden="true"
          className="absolute left-0 right-0 top-8 hidden h-px bg-slate-200 dark:bg-slate-800 lg:block"
        />
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 sm:gap-x-8 lg:grid-cols-6 lg:gap-x-4">
          {processSteps.map((step, index) => {
            const Icon = iconMap[step.icon];
            return (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.4, delay: index * 0.06 }}
                className="reveal group relative flex flex-col items-center text-center"
              >
                <motion.div
                  whileHover={{ scale: 1.12, y: -4 }}
                  whileTap={{ scale: 0.96 }}
                  transition={{ type: 'spring', stiffness: 350, damping: 15 }}
                  className="relative z-10 flex h-16 w-16 flex-shrink-0 items-center justify-center rounded-full border-2 border-accent-200 bg-white text-accent-600 shadow-sm transition-colors group-hover:border-accent-600 group-hover:bg-accent-600 group-hover:text-white dark:border-accent-800 dark:bg-slate-900 dark:text-accent-400 dark:group-hover:border-accent-500 dark:group-hover:bg-accent-500"
                >
                  <Icon className="h-6 w-6" strokeWidth={1.75} aria-hidden="true" />
                </motion.div>
                <p className="mt-4 text-sm font-semibold tracking-widest text-accent-500 dark:text-accent-400">
                  0{index + 1}
                </p>
                <h3 className="mt-1 font-display text-base font-semibold text-slate-900 dark:text-white">
                  {step.title}
                </h3>
                <p className="mt-2 max-w-[16rem] text-sm leading-relaxed text-slate-600 dark:text-slate-400">
                  {step.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </Section>
  );
}
