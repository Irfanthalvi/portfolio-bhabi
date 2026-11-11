'use client';

import { useState } from 'react';
import { Download, Mail, Play, Video } from 'lucide-react';
import Image from 'next/image';

/* =========================================================
   HERO COMPONENT
========================================================= */

export default function Hero() {
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);

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

      <div className="relative z-10 mx-auto w-full max-w-7xl px-5 sm:px-6">
        <div className="mx-auto flex w-full flex-col items-center gap-7 sm:gap-9 lg:gap-12">
          <div className="w-full max-w-[22rem] sm:max-w-2xl lg:max-w-5xl">
            <div className="relative overflow-hidden rounded-2xl bg-card p-2 shadow-[0_24px_80px_var(--color-accent-glow)] sm:rounded-3xl sm:p-3">
              <div className="relative aspect-video overflow-hidden rounded-xl bg-black sm:rounded-2xl lg:aspect-[2/1]">
                {isVideoPlaying ? (
                  <iframe
                    className="absolute inset-0 h-full w-full"
                    src="https://www.youtube-nocookie.com/embed/x_p2KROTAkY?autoplay=1&rel=0"
                    title="Hope Is Stronger Than Fear - featured video by Rubab Fatima"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    referrerPolicy="strict-origin-when-cross-origin"
                    allowFullScreen
                  />
                ) : (
                  <>
                    <Image
                      src="https://i.ytimg.com/vi/x_p2KROTAkY/hqdefault.jpg"
                      alt="Preview of Hope Is Stronger Than Fear"
                      fill
                      sizes="(max-width: 640px) 100vw, (max-width: 1280px) 90vw, 1024px"
                      unoptimized
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-transparent to-black/10" />
                    <button
                      type="button"
                      onClick={() => setIsVideoPlaying(true)}
                      aria-label="Play Hope Is Stronger Than Fear"
                      className="group absolute inset-0 flex items-center justify-center text-white"
                    >
                      <span className="flex size-14 items-center justify-center rounded-full bg-white/25 shadow-lg backdrop-blur-md transition duration-300 group-hover:scale-110 group-hover:bg-primary sm:size-16">
                        <Play size={25} fill="currentColor" className="ml-1" />
                      </span>
                    </button>
                  </>
                )}
              </div>
              <div className="flex flex-col gap-1 px-2 py-3 sm:px-3">
                <p className="text-sm font-bold text-foreground sm:text-base">
                  Hope Is Stronger Than Fear
                </p>
                <div className="flex items-center justify-between gap-3 text-[11px] font-medium text-muted-foreground sm:text-xs">
                  <span>Storytelling · YouTube</span>
                  <span className="text-primary">Featured video</span>
                </div>
              </div>
            </div>
          </div>

          <div className="flex w-full max-w-3xl flex-col items-center text-center">
            <p className="mb-6 text-sm leading-7 text-muted-foreground sm:text-base">
              Physics graduate and creative content creator with experience in{' '}
              <strong className="font-semibold text-primary">
                teaching since 2019
              </strong>{' '}
              and YouTube content creation since 2025. Skilled in{' '}
              <strong className="font-semibold text-primary">
                CapCut Pro, Canva, and AI-assisted content creation
              </strong>{' '}
              with a focus on engaging short-form video.
            </p>

            <div className="flex flex-col items-center gap-4">
              <div className="flex w-full flex-col justify-center gap-3 sm:w-auto sm:flex-row">
                <a
                  href="#projects"
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-[var(--color-accent-dark)] to-[var(--color-accent)] px-6 py-3 text-sm font-bold text-primary-foreground shadow-[0_4px_20px_var(--color-accent-glow)] transition-all duration-300 hover:-translate-y-0.5 hover:brightness-110 sm:px-7 sm:text-base"
                >
                  <Video size={18} />
                  View Videos
                </a>
                <a
                  href="#contact"
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-card/80 px-6 py-3 text-sm font-semibold text-foreground transition-all duration-300 hover:-translate-y-0.5 hover:bg-primary/10 sm:px-7 sm:text-base"
                >
                  <Mail size={18} />
                  Discuss a Project
                </a>
              </div>
              <div className="flex flex-wrap items-center justify-center gap-2">
                <a
                  href="/Rubab_Fatima_ATS_CV.docx"
                  download="Rubab_Fatima_ATS_CV.docx"
                  aria-label="Download CV"
                  className="inline-flex items-center gap-2 rounded-full bg-card/80 px-5 py-3 text-sm font-semibold text-muted-foreground transition-all duration-300 hover:-translate-y-0.5 hover:text-primary"
                >
                  <Download size={18} />
                  Download CV
                </a>
                <a
                  href="mailto:rubab1668@gmail.com"
                  aria-label="Email"
                  className="inline-flex items-center gap-2 rounded-full bg-card/80 px-5 py-3 text-sm font-semibold text-muted-foreground transition-all duration-300 hover:-translate-y-0.5 hover:text-primary"
                >
                  <Mail size={18} />
                  Email
                </a>
              </div>
            </div>
          </div>
        </div>

      </div>



    </section>
  );
}
