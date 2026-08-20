import { Bot, Building2, UsersRound, type LucideIcon } from 'lucide-react';
import type { ProjectCoverIcon } from '@/data/data';

const iconMap: Record<ProjectCoverIcon, LucideIcon> = {
  vendor: Building2,
  recruit: UsersRound,
  bot: Bot,
};

interface ProjectCoverProps {
  icon: ProjectCoverIcon;
  title: string;
}

// Generated cover art used in place of a real screenshot — an on-brand gradient
// with a representative icon, so project cards never show a blank placeholder.
export function ProjectCover({ icon, title }: ProjectCoverProps) {
  const Icon = iconMap[icon];

  return (
    <div className="relative flex aspect-video items-center justify-center overflow-hidden bg-gradient-to-br from-accent-500 via-accent-700 to-accent-950">
      <div
        aria-hidden="true"
        className="absolute inset-0 opacity-[0.15] [background-image:radial-gradient(circle,white_1px,transparent_1px)] [background-size:22px_22px]"
      />
      <div aria-hidden="true" className="absolute -right-8 -top-8 h-32 w-32 rounded-full bg-white/10 blur-2xl" />
      <div aria-hidden="true" className="absolute -bottom-10 -left-10 h-36 w-36 rounded-full bg-accent-300/20 blur-2xl" />
      <Icon
        className="relative h-16 w-16 text-white/85 sm:h-20 sm:w-20"
        strokeWidth={1.25}
        aria-hidden="true"
      />
      <span className="sr-only">{title} project cover</span>
    </div>
  );
}
