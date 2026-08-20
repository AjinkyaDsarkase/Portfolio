import { GraduationCap } from 'lucide-react';
import { Section } from './Section';
import { Card } from './Card';
import { education } from '@/data/data';

export function Education() {
  return (
    <Section id="education" title="Education" eyebrow="Academic background">
      <div className="space-y-4">
        {education.map((entry) => (
          <Card as="article" key={entry.degree}>
            <div className="flex items-center gap-4">
              <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-accent-50 text-accent-600 dark:bg-accent-950 dark:text-accent-400">
                <GraduationCap className="h-5 w-5" aria-hidden="true" />
              </div>
              <div>
                <h3 className="font-display text-lg font-semibold text-slate-900 dark:text-white">
                  {entry.degree}
                </h3>
                {/* PLACEHOLDER: fill in institution and year in src/data/data.ts */}
                <p className="text-sm text-slate-500 dark:text-slate-400">
                  {entry.institution} · {entry.year}
                </p>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </Section>
  );
}
