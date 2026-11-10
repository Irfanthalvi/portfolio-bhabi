import type { ReactNode } from 'react';
import Image from 'next/image';
import {
  ExternalLink,
  Clapperboard,
  Palette,
  Gamepad2,
} from 'lucide-react';

import SectionHeader from './SectionHeader';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';

interface Project {
  title: string;
  category: string;
  description: string;
  highlights: string[];
  technologies: string[];
  icon: ReactNode;
  projectUrl: string;
  linkLabel: string;
  thumbnailUrl?: string;
  logoImages?: { src: string; alt: string }[];
  referenceLinks?: { label: string; url: string }[];
}

const projects: Project[] = [
  {
    title: 'Mobile App Promotional Video Editing',
    category: 'App Promotion',
    description:
      'Promotional videos edited with CapCut Pro for mobile apps. The client app listings and a competitor reference are linked below.',
    highlights: [
      'Edited promotional app videos with CapCut Pro',
      'Includes puzzle, arcade, and utility app listings',
      'Block Blast is identified separately as a competitor reference',
    ],
    technologies: ['CapCut Pro', 'Video Editing', 'App Promotion'],
    icon: <Gamepad2 size={22} />,
    projectUrl: 'https://play.google.com/store/apps/details?id=com.sid.arrowdrift.puzzlegame',
    linkLabel: 'Arrow Drift App',
    referenceLinks: [
      {
        label: 'Our video: Arrow Puzzle app listing',
        url: 'https://play.google.com/store/apps/details?id=com.easybrain.arrow.puzzle.game',
      },
      {
        label: 'Bounzo: Panda Jump & Bounce app',
        url: 'https://play.google.com/store/apps/details?id=com.sid.bounzo.panda.bounce',
      },
      {
        label: 'Signature Maker app',
        url: 'https://play.google.com/store/apps/details?id=com.sid.signature.maker',
      },
      {
        label: 'Competitor reference: Block Blast',
        url: 'https://play.google.com/store/search?q=block%20blast&c=apps',
      },
    ],
  },
  {
    title: 'Hope Is Stronger Than Fear',
    category: 'Motivational Story Video',
    description:
      'YouTube motivational story video shared as a content sample.',
    highlights: [
      'Story-led motivational content',
      'Published on YouTube',
      'Shared as a video work sample',
    ],
    technologies: ['YouTube Video', 'Storytelling', 'Video Content'],
    icon: <Clapperboard size={22} />,
    projectUrl: 'https://youtu.be/x_p2KROTAkY',
    linkLabel: 'Watch Video',
    thumbnailUrl: 'https://i.ytimg.com/vi/x_p2KROTAkY/hqdefault.jpg',
  },
  {
    title: 'Cars Song for Kids',
    category: 'YouTube Short',
    description:
      'Kids-focused YouTube Short: “Cars Song for Kids | Beep Beep Car Adventure.”',
    highlights: [
      'Short-form kids-focused video',
      'Simple, audience-friendly content',
      'Shared as a YouTube work sample',
    ],
    technologies: ['YouTube Shorts', 'Kids Content', 'Video Content'],
    icon: <Clapperboard size={22} />,
    projectUrl: 'https://youtube.com/shorts/9T6UUv81IWc',
    linkLabel: 'Watch Short',
    thumbnailUrl: 'https://i.ytimg.com/vi/9T6UUv81IWc/hq2.jpg',
  },
  {
    title: 'Janjua Services Logo Designs',
    category: 'Brand Identity',
    description:
      'Three logo variations for Janjua Services, created as client branding samples.',
    highlights: [
      'Three logo concepts for one client brand',
      'Designed using Canva',
      'Completed as part of a three-month internship',
    ],
    technologies: ['Canva', 'Logo Design', 'Graphic Design'],
    icon: <Palette size={22} />,
    projectUrl: 'mailto:rubab1668@gmail.com?subject=Logo%20Design%20Inquiry',
    linkLabel: 'Contact for Design Work',
    logoImages: [
      { src: '/janjua-services-logo-1.jpeg', alt: 'Janjua Services logo with JS mark and blue swoosh' },
      { src: '/janjua-services-logo-2.jpeg', alt: 'Janjua Services blue geometric logo variation' },
      { src: '/janjua-services-logo-3.jpeg', alt: 'Janjua Services script logo with gold accents' },
    ],
  },
];

export default function Projects() {
  return (
    <section
      id="projects"
      className="relative overflow-hidden bg-background py-20"
    >
      <div className="mx-auto max-w-6xl px-6">

        {/* Header */}

        <SectionHeader
          label="Portfolio"
          title="Featured"
          highlight="Work"
          subtitle="Game-app video editing, YouTube video samples, and logo design work."
        />

        {/* =================================================
            PROJECTS

            ALL SCREEN SIZES
            -> Compact horizontal slow marquee
        ================================================= */}

        <div className="relative mt-10">

          {/* =================================================
              PROJECT MARQUEE
          ================================================= */}

          <div className="relative overflow-hidden">

            {/* Left Fade */}

            <div
              className="
                pointer-events-none
                absolute
                left-0
                top-0
                bottom-0
                z-10
                w-8
                sm:w-12
              "
              style={{
                background:
                  'linear-gradient(to right, var(--color-background), transparent)',
              }}
            />

            {/* Right Fade */}

            <div
              className="
                pointer-events-none
                absolute
                right-0
                top-0
                bottom-0
                z-10
                w-8
                sm:w-12
              "
              style={{
                background:
                  'linear-gradient(to left, var(--color-background), transparent)',
              }}
            />

            {/* Moving Track */}

            <div className="projects-marquee flex w-max">

              {/* First Set */}

              <div className="flex shrink-0 gap-5 pr-5">
                {projects.map((project) => (
                  <ProjectCard
                    key={`first-${project.title}`}
                    project={project}
                  />
                ))}
              </div>

              {/* Duplicate Set */}

              <div
                className="flex shrink-0 gap-5 pr-5"
                aria-hidden="true"
              >
                {projects.map((project) => (
                  <ProjectCard
                    key={`second-${project.title}`}
                    project={project}
                  />
                ))}
              </div>

            </div>
          </div>

        </div>
      </div>

      {/* =================================================
          MARQUEE ANIMATION
      ================================================= */}

      <style>{`
        .projects-marquee {
          animation: projectsScroll 70s linear infinite;
          will-change: transform;
        }

        .projects-marquee:hover {
          animation-play-state: paused;
        }

        @keyframes projectsScroll {
          from {
            transform: translateX(0);
          }

          to {
            transform: translateX(-50%);
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .projects-marquee {
            animation: none;
          }
        }
      `}</style>
    </section>
  );
}

/* =========================================================
   PROJECT CARD
========================================================= */

function ProjectCard({
  project,
}: {
  project: Project;
}) {
  return (
    <Card
      className="
        flex
        w-[280px]
        shrink-0
        flex-col
        overflow-hidden
        rounded-xl
        border-border/80
        bg-card/60
        p-4
        backdrop-blur-md

        transition-all
        duration-300

        hover:-translate-y-1
        hover:border-primary/50
        hover:shadow-xl
        hover:shadow-primary/10

        sm:w-[320px]
        sm:p-5
      "
    >

      {project.thumbnailUrl && (
        <div className="relative -mx-4 -mt-4 mb-4 aspect-video overflow-hidden bg-muted sm:-mx-5 sm:-mt-5">
          <Image
            src={project.thumbnailUrl}
            alt={`${project.title} video thumbnail`}
            width={480}
            height={360}
            unoptimized
            className="h-full w-full object-cover"
          />
        </div>
      )}

      {project.logoImages && (
        <div className="mb-4 grid grid-cols-3 gap-2">
          {project.logoImages.map((logo) => (
            <div
              key={logo.src}
              className="flex aspect-square items-center justify-center overflow-hidden rounded-lg border border-border/50 bg-white p-1.5"
            >
              <Image
                src={logo.src}
                alt={logo.alt}
                width={220}
                height={220}
                className="h-full w-full object-contain"
              />
            </div>
          ))}
        </div>
      )}

      {/* =================================================
          HEADER
      ================================================= */}

      <div className="mb-4 flex items-start gap-3">

        {/* Project Icon */}

        <div
          className="
            flex
            h-10
            w-10
            shrink-0
            items-center
            justify-center
            rounded-xl
            border
            border-primary/30
            bg-primary/10
            text-primary
            shadow-[0_0_12px_var(--color-accent-glow)]
          "
        >
          {project.icon}
        </div>

        {/* Title */}

        <div className="min-w-0 flex-1">

          <Badge
            variant="cyan"
            className="
              mb-1.5
              text-[10px]
              font-bold
              uppercase
              tracking-wider
            "
          >
            {project.category}
          </Badge>

          <h3
            className="
              text-lg
              font-extrabold
              leading-snug
              tracking-tight
              text-foreground
              sm:text-lg
            "
          >
            {project.title}
          </h3>

        </div>
      </div>

      {/* =================================================
          DESCRIPTION
      ================================================= */}

      <p
        className="
          mb-4
          text-xs
          leading-relaxed
          text-muted-foreground
          sm:text-xs
        "
      >
        {project.description}
      </p>

      {project.referenceLinks && (
        <div className="mb-4 rounded-lg border border-border/50 bg-background/50 p-3">
          <h4 className="mb-2 text-[10px] font-bold uppercase tracking-wider text-muted-foreground">
            App Links & References
          </h4>
          <ul className="flex flex-col gap-1.5">
            {project.referenceLinks.map((link) => (
              <li key={link.url}>
                <a
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-start gap-2 text-xs font-medium leading-snug text-foreground/85 transition-colors hover:text-primary"
                >
                  <ExternalLink size={14} className="mt-0.5 shrink-0 text-primary" />
                  <span>{link.label}</span>
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}

      {/* =================================================
          HIGHLIGHTS
      ================================================= */}

      {!project.referenceLinks && (
        <div
          className="
          mb-4
          flex-1
          rounded-xl
          border
          border-border/50
          bg-background/50
          p-3
        "
        >
          <h4
            className="
            mb-2
            text-[10px]
            font-bold
            uppercase
            tracking-wider
            text-muted-foreground
          "
          >
            Key Features
          </h4>

          <ul className="flex flex-col gap-1.5">

            {project.highlights.map((item) => (
              <li
                key={item}
                className="
                relative
                pl-4
                text-xs
                leading-relaxed
                text-foreground/85
                sm:text-xs

                before:absolute
                before:left-0
                before:top-2
                before:h-1.5
                before:w-1.5
                before:rounded-full
                before:bg-primary
                before:shadow-[0_0_6px_var(--color-accent-glow)]
                "
              >
                {item}
              </li>
            ))}

          </ul>
        </div>
      )}

      {/* =================================================
          FOOTER
      ================================================= */}

      <div
        className="
          mt-auto
          flex
          flex-col
          gap-2
          border-t
          border-border/60
          pt-3
        "
      >

        {/* Technologies */}

        <div className="flex flex-wrap gap-1">

          {project.technologies.map((tech) => (
            <Badge
              key={tech}
              variant="tech"
              className="text-[9px] font-medium"
            >
              {tech}
            </Badge>
          ))}

        </div>

        {/* Live Demo */}

        <Button
          asChild
          variant="glow"
          size="sm"
          className="
            w-full
            shrink-0
            rounded-full
            px-3
            py-1
            text-[11px]
            font-bold
          "
        >
          <a
            href={project.projectUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`${project.linkLabel}: ${project.title}`}
          >
            <span>{project.linkLabel}</span>

            <ExternalLink
              size={14}
              className="ml-1"
            />
          </a>
        </Button>

      </div>
    </Card>
  );
}