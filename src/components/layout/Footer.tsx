import { Github, Linkedin, Mail } from 'lucide-react';
import { navLinks, personalInfo } from '@/data/data';

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-slate-200 py-10 dark:border-slate-800">
      <div className="container-narrow flex flex-col items-center gap-6 sm:flex-row sm:justify-between">
        <p className="font-display text-base font-semibold text-slate-900 dark:text-white">
          {personalInfo.name}
        </p>

        <nav aria-label="Footer" className="flex flex-wrap justify-center gap-x-6 gap-y-2">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm text-slate-600 hover:text-accent-600 dark:text-slate-400 dark:hover:text-accent-400"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-4">
          <a
            href={personalInfo.github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub profile"
            className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-slate-200 text-slate-500 transition-colors hover:border-accent-300 hover:bg-slate-100 hover:text-slate-900 dark:border-slate-700 dark:text-slate-400 dark:hover:border-accent-700 dark:hover:bg-slate-800 dark:hover:text-white"
          >
            <Github className="h-5 w-5" aria-hidden="true" />
          </a>
          <a
            href={personalInfo.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn profile"
            className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-slate-200 text-slate-500 transition-colors hover:border-accent-300 hover:bg-slate-100 hover:text-slate-900 dark:border-slate-700 dark:text-slate-400 dark:hover:border-accent-700 dark:hover:bg-slate-800 dark:hover:text-white"
          >
            <Linkedin className="h-5 w-5" aria-hidden="true" />
          </a>
          <a
            href={`mailto:${personalInfo.email}`}
            aria-label="Send an email"
            className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-slate-200 text-slate-500 transition-colors hover:border-accent-300 hover:bg-slate-100 hover:text-slate-900 dark:border-slate-700 dark:text-slate-400 dark:hover:border-accent-700 dark:hover:bg-slate-800 dark:hover:text-white"
          >
            <Mail className="h-5 w-5" aria-hidden="true" />
          </a>
        </div>
      </div>

      <p className="container-narrow mt-8 text-center text-sm text-slate-400 dark:text-slate-600">
        © {year} {personalInfo.name}. All rights reserved.
      </p>
    </footer>
  );
}
