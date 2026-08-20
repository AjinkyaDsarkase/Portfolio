'use client';

import { motion } from 'framer-motion';
import { Section } from './Section';
import { ProjectCard } from './ProjectCard';
import { projects } from '@/data/data';

export function Projects() {
  return (
    <Section id="projects" title="Projects" eyebrow="What I've built">
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((project, index) => (
          <motion.div
            key={project.slug}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.4, delay: index * 0.08 }}
            className="reveal"
          >
            <ProjectCard project={project} />
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
