import type { Metadata } from 'next';
import { Inter, Lexend } from 'next/font/google';
import './globals.css';
import { themeInitScript } from '@/lib/theme-script';
import { personalInfo } from '@/data/data';
import { BackgroundEffects } from '@/components/BackgroundEffects';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

const lexend = Lexend({
  subsets: ['latin'],
  variable: '--font-lexend',
  display: 'swap',
});

const description =
  'Frontend Developer specializing in scalable, responsive React and Next.js applications with TypeScript, clean component architecture, and enterprise-grade UI.';

export const metadata: Metadata = {
  metadataBase: new URL(personalInfo.siteUrl),
  title: {
    default: `${personalInfo.name} — ${personalInfo.title}`,
    template: `%s — ${personalInfo.name}`,
  },
  description,
  keywords: [
    'Frontend Developer',
    'React Developer',
    'Next.js Developer',
    'TypeScript',
    'Ajinkya Darkase',
    'Web Developer Pune',
  ],
  authors: [{ name: personalInfo.name, url: personalInfo.siteUrl }],
  creator: personalInfo.name,
  openGraph: {
    type: 'website',
    url: personalInfo.siteUrl,
    title: `${personalInfo.name} — ${personalInfo.title}`,
    description,
    siteName: `${personalInfo.name} Portfolio`,
    images: [
      {
        url: '/images/og-image.png', // PLACEHOLDER: add a 1200x630 OG image
        width: 1200,
        height: 630,
        alt: `${personalInfo.name} — ${personalInfo.title}`,
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: `${personalInfo.name} — ${personalInfo.title}`,
    description,
    images: ['/images/og-image.png'],
  },
  robots: {
    index: true,
    follow: true,
  },
};

const personJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: personalInfo.name,
  jobTitle: personalInfo.title,
  email: `mailto:${personalInfo.email}`,
  telephone: personalInfo.phone,
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Pune',
    addressRegion: 'Maharashtra',
    addressCountry: 'IN',
  },
  url: personalInfo.siteUrl,
  sameAs: [personalInfo.github, personalInfo.linkedin],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} ${lexend.variable}`} suppressHydrationWarning>
      <head>
        {/* Prevents a flash of the wrong theme by setting the class before paint. */}
        <script dangerouslySetInnerHTML={{ __html: themeInitScript }} />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
        />
        {/* Framer Motion's initial (pre-animation) styles are baked into the static HTML.
            Without JS to run the animation, force content visible so it isn't stuck hidden. */}
        <noscript>
          <style>{'.reveal { opacity: 1 !important; transform: none !important; }'}</style>
        </noscript>
      </head>
      <body className="font-sans">
        <BackgroundEffects />
        {children}
      </body>
    </html>
  );
}
