'use client';

import { useState, useEffect } from 'react';
import { Menu, X, Sun, Moon } from 'lucide-react';
import { Button } from '@/components/ui/button';

const navLinks = [
  { href: '#home', label: 'Home' },
  { href: '#about', label: 'About' },
  { href: '#skills', label: 'Skills' },
  { href: '#experience', label: 'Experience' },
  { href: '#projects', label: 'Projects' },
  { href: '#freelance', label: 'Freelance' },
  { href: '#services', label: 'Services' },
  { href: '#education', label: 'Education' },
  { href: '#contact', label: 'Contact' },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [isDark, setIsDark] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
      setIsDark(true);
      document.documentElement.classList.add('dark');
    } else {
      setIsDark(false);
      document.documentElement.classList.remove('dark');
    }
  }, []);

  const toggleTheme = () => {
    if (isDark) {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
      setIsDark(false);
    } else {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
      setIsDark(true);
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  const handleLinkClick = () => {
    setIsOpen(false);
  };

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-background/90 backdrop-blur-xl border-b border-border/80 shadow-lg shadow-black/10 dark:shadow-black/40 py-3'
          : 'bg-transparent py-5'
      }`}
    >
      <nav className="mx-auto max-w-6xl px-6 flex items-center justify-between">
        {/* Brand Logo */}
        <a
          href="#home"
          className="text-2xl font-black tracking-tight text-foreground transition-colors hover:text-primary"
        >
          Irfan
          <span className="text-primary drop-shadow-[0_0_12px_var(--color-accent-glow)]">.</span>
        </a>

        {/* Desktop Navigation Links */}
        <ul className="hidden lg:flex items-center gap-1">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="px-3 py-1.5 text-sm font-semibold text-muted-foreground transition-colors rounded-md hover:text-primary hover:bg-primary/10"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Desktop Theme Toggle & CTA */}
        <div className="hidden lg:flex items-center gap-3">
          {mounted && (
            <button
              onClick={toggleTheme}
              aria-label={isDark ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
              className="flex h-9 w-9 items-center justify-center rounded-full border border-border/80 bg-card/60 text-foreground transition-all duration-200 hover:border-primary/50 hover:bg-primary/10 hover:text-primary hover:scale-105"
            >
              {isDark ? (
                <Sun size={18} className="text-primary drop-shadow-[0_0_8px_var(--color-accent-glow)]" />
              ) : (
                <Moon size={18} className="text-foreground" />
              )}
            </button>
          )}

          <Button
            asChild
            variant="glow"
            size="sm"
            className="rounded-full px-5 py-2 text-xs uppercase tracking-wider"
          >
            <a href="#contact">Get In Touch</a>
          </Button>
        </div>

        {/* Mobile Actions: Theme Toggle + Menu Toggle */}
        <div className="flex lg:hidden items-center gap-2">
          {mounted && (
            <button
              onClick={toggleTheme}
              aria-label={isDark ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
              className="p-2 text-foreground rounded-md transition-colors hover:text-primary"
            >
              {isDark ? (
                <Sun size={20} className="text-primary" />
              ) : (
                <Moon size={20} className="text-foreground" />
              )}
            </button>
          )}

          <button
            className="p-2 text-foreground rounded-md transition-colors hover:text-primary"
            onClick={() => setIsOpen(!isOpen)}
            aria-label={isOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={isOpen}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu Overlay */}
        <div
          className={`lg:hidden fixed top-[68px] left-0 w-full h-[calc(100vh-68px)] bg-background/98 backdrop-blur-2xl px-6 py-8 transition-all duration-300 ${
            isOpen
              ? 'opacity-100 pointer-events-auto visible'
              : 'opacity-0 pointer-events-none invisible'
          }`}
        >
          <ul className="flex flex-col gap-2">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="block text-lg font-semibold text-muted-foreground px-4 py-3 rounded-lg transition-colors hover:text-primary hover:bg-primary/10"
                  onClick={handleLinkClick}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
          <div className="mt-6 px-4">
            <Button
              asChild
              variant="glow"
              className="w-full py-3 text-sm font-bold uppercase tracking-wider rounded-xl"
            >
              <a href="#contact" onClick={handleLinkClick}>
                Get In Touch
              </a>
            </Button>
          </div>
        </div>
      </nav>
    </header>
  );
}
