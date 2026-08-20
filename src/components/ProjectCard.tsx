import Image from 'next/image';
import { ExternalLink, Github } from 'lucide-react';
import { Card } from './Card';
import { Tag } from './Tag';
import { ProjectCover } from './ProjectCover';
import type { Project } from '@/data/data';

interface ProjectCardProps {
  project: Project;
}

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <Card as="article" className="flex h-full flex-col overflow-hidden !p-0">
      {project.image ? (
        <div className="relative aspect-video">
          <Image
            src={project.image}
            alt={`${project.title} screenshot`}
            fill
            className="object-cover"
            sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
          />
        </div>
      ) : (
        <ProjectCover icon={project.coverIcon} title={project.title} />
      )}

      <div className="flex flex-1 flex-col p-6">
        <h3 className="font-display text-lg font-semibold text-slate-900 dark:text-white">
          {project.title}
        </h3>
        <p className="text-sm font-medium text-accent-600 dark:text-accent-400">{project.subtitle}</p>
        <p className="mt-3 flex-1 text-sm leading-relaxed text-slate-600 dark:text-slate-300">
          {project.description}
        </p>

        <div className="mt-4 flex flex-wrap gap-2">
          {project.techStack.map((tech) => (
            <Tag key={tech}>{tech}</Tag>
          ))}
        </div>

        <div className="mt-6 flex items-center gap-4 border-t border-slate-100 pt-4 dark:border-slate-800">
          {project.liveUrl ? (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-sm font-semibold text-accent-600 hover:text-accent-700 dark:text-accent-400 dark:hover:text-accent-300"
            >
              Live Demo
              <ExternalLink className="h-4 w-4" aria-hidden="true" />
            </a>
          ) : (
            <span
              className="inline-flex items-center gap-1.5 text-sm font-medium text-slate-400 dark:text-slate-600"
              title="PLACEHOLDER: add live demo URL in src/data/data.ts"
            >
              Live Demo
              <ExternalLink className="h-4 w-4" aria-hidden="true" />
            </span>
          )}

          {project.githubUrl ? (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-sm font-semibold text-slate-700 hover:text-slate-900 dark:text-slate-300 dark:hover:text-white"
            >
              GitHub
              <Github className="h-4 w-4" aria-hidden="true" />
            </a>
          ) : (
            <span
              className="inline-flex items-center gap-1.5 text-sm font-medium text-slate-400 dark:text-slate-600"
              title="PLACEHOLDER: add GitHub repo URL in src/data/data.ts"
            >
              GitHub
              <Github className="h-4 w-4" aria-hidden="true" />
            </span>
          )}
        </div>
      </div>
    </Card>
  );
}
