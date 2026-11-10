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
  title: 'Irfan Ali | React.js & Next.js Frontend Developer',
  description:
    'Frontend Developer specializing in React.js, Next.js, TypeScript, SaaS dashboards, admin panels, CRM interfaces, and responsive web applications.',
  keywords: [
    'Frontend Developer',
    'React.js',
    'Next.js',
    'TypeScript',
    'SaaS Dashboard',
    'Admin Panel',
    'CRM',
    'Responsive Web Applications',
    'Irfan Ali',
  ],
  authors: [{ name: 'Irfan Ali' }],
  openGraph: {
    title: 'Irfan Ali | React.js & Next.js Frontend Developer',
    description:
      'Frontend Developer specializing in React.js, Next.js, TypeScript, SaaS dashboards, admin panels, CRM interfaces, and responsive web applications.',
    type: 'website',
    locale: 'en_US',
    siteName: 'Irfan Ali Portfolio',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Irfan Ali | React.js & Next.js Frontend Developer',
    description:
      'Frontend Developer specializing in React.js, Next.js, TypeScript, SaaS dashboards, admin panels, CRM interfaces, and responsive web applications.',
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
