import Image from 'next/image';
import { UserRound } from 'lucide-react';
import { personalInfo } from '@/data/data';

// Renders the real photo when personalInfo.avatarUrl is set; otherwise falls back to a
// generated placeholder (matching ProjectCover's style). Driven by data, not a runtime
// image-load error, so it renders correctly with or without JavaScript.
export function HeroPortrait() {
  return (
    <div className="relative mx-auto h-64 w-64 sm:h-72 sm:w-72 lg:mx-0 lg:h-80 lg:w-80">
      <div
        aria-hidden="true"
        className="absolute inset-0 rounded-full bg-gradient-to-br from-accent-400 to-accent-700 opacity-30 blur-2xl dark:opacity-20"
      />
      <div className="relative h-full w-full overflow-hidden rounded-full border-4 border-white shadow-xl dark:border-slate-800">
        {personalInfo.avatarUrl ? (
          <Image
            src={personalInfo.avatarUrl}
            alt={`Portrait of ${personalInfo.name}`}
            fill
            sizes="(min-width: 1024px) 320px, 288px"
            className="object-cover"
            priority
          />
        ) : (
          <div className="flex h-full w-full items-center justify-center bg-gradient-to-br from-accent-500 via-accent-700 to-accent-950">
            <UserRound className="h-24 w-24 text-white/80" strokeWidth={1.25} aria-hidden="true" />
          </div>
        )}
      </div>
    </div>
  );
}
