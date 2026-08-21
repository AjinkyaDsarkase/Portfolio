'use client';

import { motion } from 'framer-motion';
import { ArrowRight, Download, Github, Linkedin, Mail } from 'lucide-react';
import { personalInfo } from '@/data/data';
import { HeroPortrait } from './HeroPortrait';

export function Hero() {
  return (
    <section
      id="hero"
      className="flex min-h-[90vh] scroll-mt-20 items-center py-20"
      aria-label="Introduction"
    >
      <div className="container-narrow">
        <div className="grid items-center gap-12 lg:grid-cols-[1.15fr_0.85fr] lg:gap-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className="reveal text-center lg:text-left"
          >
            <p className="mb-4 text-sm font-semibold uppercase tracking-widest text-accent-600 dark:text-accent-400">
              Hi, I&apos;m
            </p>
            <h1 className="font-display text-4xl font-bold tracking-tight text-slate-900 dark:text-white sm:text-5xl md:text-6xl">
              {personalInfo.name}
            </h1>
            <p className="mt-3 font-display text-xl font-medium text-slate-600 dark:text-slate-300 sm:text-2xl">
              {personalInfo.title}
            </p>
            <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-slate-600 dark:text-slate-400 lg:mx-0">
              {personalInfo.tagline}
            </p>

            <div className="mt-10 flex flex-wrap items-center justify-center gap-4 lg:justify-start">
              <motion.a
                href="#projects"
                whileHover={{ scale: 1.04, y: -2 }}
                whileTap={{ scale: 0.97 }}
                transition={{ type: 'spring', stiffness: 400, damping: 17 }}
                className="inline-flex items-center gap-2 rounded-lg bg-accent-600 px-5 py-3 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-accent-700"
              >
                View Projects
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </motion.a>
              <motion.a
                href={personalInfo.resumeUrl}
                download
                whileHover={{ scale: 1.04, y: -2 }}
                whileTap={{ scale: 0.97 }}
                transition={{ type: 'spring', stiffness: 400, damping: 17 }}
                className="inline-flex items-center gap-2 rounded-lg border border-slate-300 px-5 py-3 text-sm font-semibold text-slate-700 transition-colors hover:bg-slate-50 dark:border-slate-700 dark:text-slate-200 dark:hover:bg-slate-800"
              >
                Download Resume
                <Download className="h-4 w-4" aria-hidden="true" />
              </motion.a>
              <motion.a
                href="#contact"
                whileHover={{ scale: 1.04, y: -2 }}
                whileTap={{ scale: 0.97 }}
                transition={{ type: 'spring', stiffness: 400, damping: 17 }}
                className="inline-flex items-center gap-2 rounded-lg px-5 py-3 text-sm font-semibold text-slate-700 transition-colors hover:bg-slate-100 dark:text-slate-200 dark:hover:bg-slate-800"
              >
                Contact Me
                <Mail className="h-4 w-4" aria-hidden="true" />
              </motion.a>
            </div>

            <div className="mt-10 flex items-center justify-center gap-4 lg:justify-start">
              <motion.a
                href={personalInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub profile"
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.92 }}
                transition={{ type: 'spring', stiffness: 400, damping: 15 }}
                className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 text-slate-500 transition-colors hover:border-accent-300 hover:bg-slate-100 hover:text-slate-900 dark:border-slate-700 dark:text-slate-400 dark:hover:border-accent-700 dark:hover:bg-slate-800 dark:hover:text-white"
              >
                <Github className="h-5 w-5" aria-hidden="true" />
              </motion.a>
              <motion.a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn profile"
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.92 }}
                transition={{ type: 'spring', stiffness: 400, damping: 15 }}
                className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 text-slate-500 transition-colors hover:border-accent-300 hover:bg-slate-100 hover:text-slate-900 dark:border-slate-700 dark:text-slate-400 dark:hover:border-accent-700 dark:hover:bg-slate-800 dark:hover:text-white"
              >
                <Linkedin className="h-5 w-5" aria-hidden="true" />
              </motion.a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.92 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.15, ease: 'easeOut' }}
            className="reveal order-first lg:order-last"
          >
            <HeroPortrait />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
