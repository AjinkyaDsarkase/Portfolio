import { Section } from './Section';
import { aboutMe } from '@/data/data';

export function About() {
  return (
    <Section id="about" title="About Me" eyebrow="Get to know me">
      <p className="max-w-3xl text-lg leading-relaxed text-slate-600 dark:text-slate-300">
        {aboutMe}
      </p>
    </Section>
  );
}
