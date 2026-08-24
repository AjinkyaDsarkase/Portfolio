'use client';

import { motion } from 'framer-motion';
import { ArrowRight, Download, Github, Linkedin, Mail } from 'lucide-react';
import { personalInfo } from '@/data/data';
import { HeroPortrait } from './HeroPortrait';
import { buttonVariants } from './ui/button';

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
                className={buttonVariants({ variant: 'default' })}
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
                className={buttonVariants({ variant: 'outline' })}
              >
                Download Resume
                <Download className="h-4 w-4" aria-hidden="true" />
              </motion.a>
              <motion.a
                href="#contact"
                whileHover={{ scale: 1.04, y: -2 }}
                whileTap={{ scale: 0.97 }}
                transition={{ type: 'spring', stiffness: 400, damping: 17 }}
                className={buttonVariants({ variant: 'ghost' })}
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
                className={buttonVariants({ variant: 'icon', size: 'icon' })}
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
                className={buttonVariants({ variant: 'icon', size: 'icon' })}
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
