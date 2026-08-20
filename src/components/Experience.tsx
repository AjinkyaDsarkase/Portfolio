'use client';

import { motion } from 'framer-motion';
import { Briefcase } from 'lucide-react';
import { Section } from './Section';
import { Card } from './Card';
import { experience } from '@/data/data';

export function Experience() {
  return (
    <Section id="experience" title="Experience" eyebrow="Where I've worked">
      <div className="space-y-6">
        {experience.map((entry, index) => (
          <motion.div
            key={`${entry.company}-${entry.role}`}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.4, delay: index * 0.05 }}
            className="reveal"
          >
            <Card as="article">
              <div className="flex items-start gap-4">
                <div className="mt-1 flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-accent-50 text-accent-600 dark:bg-accent-950 dark:text-accent-400">
                  <Briefcase className="h-5 w-5" aria-hidden="true" />
                </div>
                <div className="flex-1">
                  <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
                    <h3 className="font-display text-lg font-semibold text-slate-900 dark:text-white">
                      {entry.role}
                    </h3>
                    <span className="text-sm font-medium text-accent-600 dark:text-accent-400">
                      {entry.startDate} – {entry.endDate}
                    </span>
                  </div>
                  <p className="mt-0.5 text-sm font-medium text-slate-500 dark:text-slate-400">
                    {entry.company} · {entry.location}
                  </p>
                  <ul className="mt-4 space-y-2">
                    {entry.highlights.map((highlight) => (
                      <li
                        key={highlight}
                        className="flex gap-2 text-sm leading-relaxed text-slate-600 dark:text-slate-300"
                      >
                        <span className="mt-2 h-1 w-1 flex-shrink-0 rounded-full bg-accent-500" aria-hidden="true" />
                        {highlight}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </Card>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
