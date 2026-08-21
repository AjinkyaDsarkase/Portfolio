'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { motion } from 'framer-motion';
import { CheckCircle2, Github, Linkedin, Loader2, Mail, MapPin, Phone, XCircle } from 'lucide-react';
import { Section } from './Section';
import { Card } from './Card';
import { formspreeEndpoint, personalInfo } from '@/data/data';

const contactSchema = z.object({
  name: z.string().min(2, 'Please enter your name'),
  email: z.string().email('Please enter a valid email address'),
  message: z.string().min(10, 'Message should be at least 10 characters'),
});

type ContactFormValues = z.infer<typeof contactSchema>;

type SubmitStatus = 'idle' | 'submitting' | 'success' | 'error';

export function Contact() {
  const [status, setStatus] = useState<SubmitStatus>('idle');

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactFormValues>({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = async (data: ContactFormValues) => {
    setStatus('submitting');
    try {
      const response = await fetch(formspreeEndpoint, {
        method: 'POST',
        headers: { Accept: 'application/json' },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        setStatus('success');
        reset();
      } else {
        setStatus('error');
      }
    } catch {
      setStatus('error');
    }
  };

  return (
    <Section id="contact" title="Get In Touch" eyebrow="Let's work together">
      <div className="grid gap-10 lg:grid-cols-5">
        <div className="lg:col-span-2">
          <p className="text-slate-600 dark:text-slate-300">
            Have a project in mind or just want to say hi? My inbox is always open.
          </p>
          <ul className="mt-6 space-y-4">
            <li>
              <a
                href={`mailto:${personalInfo.email}`}
                className="flex items-center gap-3 text-sm text-slate-600 hover:text-accent-600 dark:text-slate-300 dark:hover:text-accent-400"
              >
                <Mail className="h-5 w-5 flex-shrink-0" aria-hidden="true" />
                {personalInfo.email}
              </a>
            </li>
            <li>
              <a
                href={`tel:${personalInfo.phone.replace(/\s+/g, '')}`}
                className="flex items-center gap-3 text-sm text-slate-600 hover:text-accent-600 dark:text-slate-300 dark:hover:text-accent-400"
              >
                <Phone className="h-5 w-5 flex-shrink-0" aria-hidden="true" />
                {personalInfo.phone}
              </a>
            </li>
            <li className="flex items-center gap-3 text-sm text-slate-600 dark:text-slate-300">
              <MapPin className="h-5 w-5 flex-shrink-0" aria-hidden="true" />
              {personalInfo.location}
            </li>
            <li>
              <a
                href={personalInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-sm text-slate-600 hover:text-accent-600 dark:text-slate-300 dark:hover:text-accent-400"
              >
                <Github className="h-5 w-5 flex-shrink-0" aria-hidden="true" />
                github.com/AjinkyaDsarkase
              </a>
            </li>
            <li>
              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-sm text-slate-600 hover:text-accent-600 dark:text-slate-300 dark:hover:text-accent-400"
              >
                <Linkedin className="h-5 w-5 flex-shrink-0" aria-hidden="true" />
                linkedin.com/in/ajinkyadarkase121373
              </a>
            </li>
          </ul>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.4 }}
          className="reveal lg:col-span-3"
        >
          <Card as="article">
            <form onSubmit={handleSubmit(onSubmit)} noValidate className="space-y-5">
              <div>
                <label htmlFor="name" className="mb-1.5 block text-sm font-medium text-slate-700 dark:text-slate-200">
                  Name
                </label>
                <input
                  id="name"
                  type="text"
                  autoComplete="name"
                  aria-invalid={errors.name ? 'true' : 'false'}
                  aria-describedby={errors.name ? 'name-error' : undefined}
                  className="w-full rounded-lg border border-slate-300 bg-white px-4 py-2.5 text-sm text-slate-900 placeholder:text-slate-400 dark:border-slate-700 dark:bg-slate-800 dark:text-white"
                  placeholder="Your name"
                  {...register('name')}
                />
                {errors.name && (
                  <p id="name-error" role="alert" className="mt-1.5 text-sm text-red-600 dark:text-red-400">
                    {errors.name.message}
                  </p>
                )}
              </div>

              <div>
                <label htmlFor="email" className="mb-1.5 block text-sm font-medium text-slate-700 dark:text-slate-200">
                  Email
                </label>
                <input
                  id="email"
                  type="email"
                  autoComplete="email"
                  aria-invalid={errors.email ? 'true' : 'false'}
                  aria-describedby={errors.email ? 'email-error' : undefined}
                  className="w-full rounded-lg border border-slate-300 bg-white px-4 py-2.5 text-sm text-slate-900 placeholder:text-slate-400 dark:border-slate-700 dark:bg-slate-800 dark:text-white"
                  placeholder="you@example.com"
                  {...register('email')}
                />
                {errors.email && (
                  <p id="email-error" role="alert" className="mt-1.5 text-sm text-red-600 dark:text-red-400">
                    {errors.email.message}
                  </p>
                )}
              </div>

              <div>
                <label htmlFor="message" className="mb-1.5 block text-sm font-medium text-slate-700 dark:text-slate-200">
                  Message
                </label>
                <textarea
                  id="message"
                  rows={5}
                  aria-invalid={errors.message ? 'true' : 'false'}
                  aria-describedby={errors.message ? 'message-error' : undefined}
                  className="w-full resize-none rounded-lg border border-slate-300 bg-white px-4 py-2.5 text-sm text-slate-900 placeholder:text-slate-400 dark:border-slate-700 dark:bg-slate-800 dark:text-white"
                  placeholder="Tell me about your project..."
                  {...register('message')}
                />
                {errors.message && (
                  <p id="message-error" role="alert" className="mt-1.5 text-sm text-red-600 dark:text-red-400">
                    {errors.message.message}
                  </p>
                )}
              </div>

              <motion.button
                type="submit"
                disabled={status === 'submitting'}
                whileHover={status !== 'submitting' ? { scale: 1.03, y: -1 } : undefined}
                whileTap={status !== 'submitting' ? { scale: 0.97 } : undefined}
                transition={{ type: 'spring', stiffness: 400, damping: 17 }}
                className="inline-flex w-full items-center justify-center gap-2 rounded-lg bg-accent-600 px-5 py-3 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-accent-700 disabled:cursor-not-allowed disabled:opacity-70 sm:w-auto"
              >
                {status === 'submitting' ? (
                  <>
                    <Loader2 className="h-4 w-4 animate-spin" aria-hidden="true" />
                    Sending...
                  </>
                ) : (
                  'Send Message'
                )}
              </motion.button>

              {status === 'success' && (
                <p
                  role="status"
                  className="flex items-center gap-2 text-sm font-medium text-green-600 dark:text-green-400"
                >
                  <CheckCircle2 className="h-4 w-4" aria-hidden="true" />
                  Thanks! Your message has been sent — I&apos;ll get back to you soon.
                </p>
              )}
              {status === 'error' && (
                <p role="alert" className="flex items-center gap-2 text-sm font-medium text-red-600 dark:text-red-400">
                  <XCircle className="h-4 w-4" aria-hidden="true" />
                  Something went wrong. Please try again or email me directly.
                </p>
              )}
            </form>
          </Card>
        </motion.div>
      </div>
    </Section>
  );
}
