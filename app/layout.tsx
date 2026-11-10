import type { Metadata } from 'next';
import type { ReactNode } from 'react';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({
  variable: '--font-inter',
  subsets: ['latin'],
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Rubab Fatima | Social Media Content Creator',
  description:
    'Rubab Fatima is a Physics graduate and social media content creator skilled in YouTube Shorts, CapCut Pro, Canva, AI-assisted content creation, and primary tutoring.',
  keywords: [
    'Social Media Content Creator',
    'YouTube Shorts',
    'Video Editing',
    'CapCut Pro',
    'Canva',
    'AI-Assisted Content Creation',
    'Physics Graduate',
    'Primary Tutor',
    'Rubab Fatima',
  ],
  authors: [{ name: 'Rubab Fatima' }],
  openGraph: {
    title: 'Rubab Fatima | Social Media Content Creator',
    description:
      'Physics graduate experienced in social media content creation, video editing, Canva design, and primary tutoring.',
    type: 'website',
    locale: 'en_PK',
    siteName: 'Rubab Fatima Portfolio',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Rubab Fatima | Social Media Content Creator',
    description:
      'Physics graduate experienced in social media content creation, video editing, Canva design, and primary tutoring.',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={inter.variable}
      suppressHydrationWarning
    >
      <body>{children}</body>
    </html>
  );
}
