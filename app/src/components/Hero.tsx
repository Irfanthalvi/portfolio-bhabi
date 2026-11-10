'use client';

import { useState, useEffect } from 'react';
import { Mail } from 'lucide-react';
import { WhatsappIcon } from './Icons';

const roles = [
  'Physics Graduate',
  'Social Media Content Creator',
  'Primary Tutor',
  'Video Editor & Canva Designer',
];

/* =========================================================
   HERO COMPONENT
========================================================= */

export default function Hero() {
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  /* =======================================================
     TYPING ANIMATION
  ======================================================= */

  useEffect(() => {
    const currentRole = roles[roleIndex];

    let timer: NodeJS.Timeout;

    if (!isDeleting && displayText !== currentRole) {
      timer = setTimeout(() => {
        setDisplayText(
          currentRole.slice(
            0,
            displayText.length + 1
          )
        );
      }, 90);
    } else if (
      !isDeleting &&
      displayText === currentRole
    ) {
      timer = setTimeout(() => {
        setIsDeleting(true);
      }, 2000);
    } else if (
      isDeleting &&
      displayText !== ''
    ) {
      timer = setTimeout(() => {
        setDisplayText(
          currentRole.slice(
            0,
            displayText.length - 1
          )
        );
      }, 50);
    } else if (
      isDeleting &&
      displayText === ''
    ) {
      timer = setTimeout(() => {
        setIsDeleting(false);
        setRoleIndex((prev) => (prev + 1) % roles.length);
      }, 0);
    }

    return () => clearTimeout(timer);
  }, [
    displayText,
    isDeleting,
    roleIndex,
  ]);
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden bg-background"
      style={{ paddingTop: 'calc(72px + 24px)', paddingBottom: '56px' }}
    >

      {/* =================================================
          BACKGROUND GLOWS
      ================================================= */}

      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-52 -left-52 w-[650px] h-[650px] rounded-full z-0"
        style={{
          background:
            'radial-gradient(circle, var(--color-accent-glow) 0%, var(--color-accent-subtle) 50%, transparent 70%)',
        }}
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute top-[10%] -right-52 w-[700px] h-[700px] rounded-full z-0"
        style={{
          background:
            'radial-gradient(circle, var(--color-accent-subtle) 0%, var(--color-accent-glow) 50%, transparent 70%)',
        }}
      />


      {/* =================================================
          MAIN CONTAINER
      ================================================= */}

      <div className="relative z-10 mx-auto w-full max-w-6xl px-6">
        <div className="mx-auto flex max-w-4xl flex-col items-center text-center">


          <div className="flex w-full flex-col items-center">

            {/* Available badge */}

            <div className="inline-flex items-center gap-2 text-xs font-bold tracking-[0.08em] uppercase text-primary bg-primary/10 border border-primary/30 px-4 py-1.5 rounded-full mb-6">

              <span className="w-2 h-2 rounded-full bg-emerald-400 shadow-[0_0_10px_#10b981] animate-pulse" />

              Available for New Projects

            </div>


            {/* Greeting */}

            <h3 className="text-xl font-semibold text-muted-foreground mb-0.5">
              Hi, I&apos;m
            </h3>


            {/* Name */}

            <h1
              className="font-extrabold leading-[1.1] tracking-[-0.03em] mb-3"
              style={{
                fontSize:
                  'clamp(2.25rem, 5.5vw, 3.75rem)',

                background:
                  'linear-gradient(135deg, var(--color-text-primary) 30%, var(--color-accent) 70%, var(--color-accent-light) 100%)',

                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',

                filter:
                  'drop-shadow(0 4px 24px var(--color-accent-glow))',
              }}
            >
              Rubab Fatima
            </h1>


            {/* Animated Role */}

            <h2
              className="mb-6 flex min-h-[42px] items-center justify-center font-bold text-muted-foreground"
              style={{
                fontSize:
                  'clamp(1.25rem, 2.8vw, 1.875rem)',
              }}
            >
              <span className="text-primary">
                {displayText}
              </span>

              <span className="text-primary font-light animate-[blink_1s_infinite]">
                |
              </span>
            </h2>


            {/* Description */}

            <p className="mb-8 max-w-2xl text-base leading-[1.75] text-muted-foreground">
              Physics graduate and creative content creator with experience in{' '}

              <strong className="text-primary font-semibold">
                teaching since 2019
              </strong>
              {' '}and YouTube content creation since 2025. Skilled in{' '}

              <strong className="text-primary font-semibold">
                CapCut Pro, Canva, and AI-assisted content creation
              </strong>{' '}

              with a focus on engaging short-form video.
            </p>


            {/* =================================================
                SOCIAL LINKS
            ================================================= */}

            <div className="mb-8 flex flex-wrap items-center justify-center gap-3">

              {[
                {
                  href: 'https://wa.me/923468074658',
                  icon: <WhatsappIcon size={18} />,
                  label: 'WhatsApp',
                },

                {
                  href: 'mailto:rubab1668@gmail.com',
                  icon: <Mail size={18} />,
                  label: 'Email',
                },
              ].map((s) => (

                <a
                  key={s.href}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  className="inline-flex items-center gap-2 text-xs font-semibold text-muted-foreground bg-card/80 border border-border/60 px-4 py-2 rounded-full backdrop-blur-sm transition-all duration-300 hover:text-white hover:bg-primary hover:border-primary hover:-translate-y-[3px] hover:shadow-[0_4px_20px_var(--color-accent-glow)]"
                >

                  {s.icon}

                  {s.label && (
                    <span>{s.label}</span>
                  )}

                </a>

              ))}

            </div>


            {/* =================================================
                CTA BUTTONS
            ================================================= */}

            <div className="flex flex-col sm:flex-row gap-4 mb-10 w-full sm:w-auto">

              <a
                href="mailto:rubab1668@gmail.com?subject=Resume%20Request"
                className="inline-flex items-center justify-center gap-2 text-base font-bold text-primary-foreground bg-gradient-to-r from-[var(--color-accent-dark)] to-[var(--color-accent)] px-7 py-3.5 rounded-full transition-all duration-300 shadow-[0_4px_20px_var(--color-accent-glow)] hover:-translate-y-[3px] hover:shadow-[0_6px_28px_var(--color-accent-glow)] hover:brightness-110"
              >
                <Mail size={18} />
                Request Resume
              </a>


              <a
                href="#contact"
                className="inline-flex items-center justify-center gap-2 text-base font-semibold text-foreground bg-card/80 border border-border/60 px-7 py-3.5 rounded-full transition-all duration-300 hover:border-primary hover:bg-primary/10 hover:-translate-y-[3px] hover:shadow-[0_4px_20px_var(--color-accent-glow)]"
              >

                <Mail size={18} />

                Contact Me

              </a>

            </div>


            {/* =================================================
                STATS
            ================================================= */}

            <div className="grid w-full max-w-2xl grid-cols-1 gap-3 sm:grid-cols-3 sm:gap-4">

              {[
                {
                  value: '2019+',
                  label: 'Tutoring Since',
                },

                {
                  value: '2025+',
                  label: 'Content Creation',
                },

                {
                  value: 'BSc',
                  label: 'Physics Graduate',
                },
              ].map((stat) => (

                <div
                  key={stat.label}
                  className="flex flex-col items-center rounded-xl border border-border/60 bg-card/80 px-4 py-4 text-center backdrop-blur-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-primary/40 sm:px-5"
                >

                  <span className="text-2xl font-extrabold text-primary">
                    {stat.value}
                  </span>

                  <span className="text-xs font-semibold uppercase tracking-[0.05em] text-muted-foreground">
                    {stat.label}
                  </span>

                </div>

              ))}

            </div>

          </div>

        </div>

      </div>



    </section>
  );
}