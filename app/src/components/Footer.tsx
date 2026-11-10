'use client';

import { useEffect, useState } from 'react';
import { ArrowUp, Mail } from 'lucide-react';
import { GithubIcon, WhatsappIcon, LinkedinIcon } from './Icons';

const navLinks = [
  { href: '#about', label: 'About' },
  { href: '#skills', label: 'Skills' },
  { href: '#experience', label: 'Experience' },
  { href: '#projects', label: 'Projects' },
  { href: '#services', label: 'Services' },
  { href: '#education', label: 'Education' },
  { href: '#contact', label: 'Contact' },
];

const socialLinks = [
  {
    href: 'mailto:irfanthalvi@gmail.com',
    icon: Mail,
    label: 'Email',
  },
  {
    href: 'https://www.linkedin.com/in/irfan-ali-66205a2b3',
    icon: LinkedinIcon,
    label: 'LinkedIn',
  },
  {
    href: 'https://github.com/Irfanthalvi',
    icon: GithubIcon,
    label: 'GitHub',
  },
  {
    href: 'https://wa.me/923337484980?text=Hi%20I%20want%20to%20connect%20with%20you',
    icon: WhatsappIcon,
    label: 'WhatsApp',
  },
];

export default function Footer() {
  const [currentYear, setCurrentYear] = useState<number | null>(null);

  useEffect(() => {
    setCurrentYear(new Date().getFullYear());
  }, []);

  return (
    <footer className="w-full border-t border-border/60 bg-background/80 backdrop-blur-md">
      <div className="mx-auto max-w-6xl px-6 py-8">
        <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
          {/* Brand */}
          <div className="flex flex-col gap-1">
            <a
              href="#home"
              className="text-xl font-bold tracking-tight text-foreground transition-colors hover:text-primary"
            >
              Irfan<span className="text-primary drop-shadow-[0_0_8px_var(--color-accent-glow)]">.</span>
            </a>
            <p className="text-xs text-muted-foreground">
              Frontend Developer specializing in React.js, Next.js &amp; TypeScript.
            </p>
          </div>

          {/* Quick Nav Links */}
          <nav aria-label="Footer navigation">
            <ul className="flex flex-wrap items-center gap-x-5 gap-y-2 text-xs font-medium text-muted-foreground">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="transition-colors hover:text-primary"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Social Icons & Back to Top */}
          <div className="flex items-center gap-3">
            <div className="flex items-center gap-2">
              {socialLinks.map((s) => {
                const Icon = s.icon;
                return (
                  <a
                    key={s.label}
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={s.label}
                    className="flex h-8 w-8 items-center justify-center rounded-lg border border-border/60 bg-card/60 text-muted-foreground transition-all duration-200 hover:border-primary/50 hover:bg-primary/10 hover:text-primary hover:-translate-y-0.5"
                  >
                    <Icon size={14} />
                  </a>
                );
              })}
            </div>

            <a
              href="#home"
              aria-label="Back to top"
              className="flex h-8 w-8 items-center justify-center rounded-lg border border-border/60 bg-card/60 text-muted-foreground transition-all duration-200 hover:border-primary/50 hover:bg-primary hover:text-primary-foreground hover:-translate-y-0.5"
            >
              <ArrowUp size={14} />
            </a>
          </div>
        </div>

        {/* Bottom Bar: Copyright */}
        <div className="mt-6 flex flex-col items-center justify-between border-t border-border/40 pt-4 text-xs text-muted-foreground/80 sm:flex-row">
          <p>
            &copy; {currentYear ?? 2025} <span className="font-semibold text-foreground">Irfan Ali</span>. All rights reserved.
          </p>
          <p className="mt-2 text-muted-foreground/60 sm:mt-0">
            Engineered with modern React, Next.js &amp; Tailwind CSS
          </p>
        </div>
      </div>
    </footer>
  );
}
