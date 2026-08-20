'use client';

import { motion } from 'framer-motion';
import { Section } from './Section';
import { Tag } from './Tag';
import { skillGroups } from '@/data/data';

export function Skills() {
  return (
    <Section id="skills" title="Skills" eyebrow="What I work with">
      <div className="grid gap-8 sm:grid-cols-2">
        {skillGroups.map((group, index) => (
          <motion.div
            key={group.category}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.4, delay: index * 0.05 }}
            className="reveal"
          >
            <h3 className="mb-3 font-display text-base font-semibold text-slate-900 dark:text-white">
              {group.category}
            </h3>
            <div className="flex flex-wrap gap-2">
              {group.skills.map((skill) => (
                <Tag key={skill}>{skill}</Tag>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
