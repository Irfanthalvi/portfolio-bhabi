import type { ReactNode } from 'react';
import {
  ExternalLink,
  FileText,
  IceCreamBowl,
  LayoutDashboard,
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
}

const projects: Project[] = [
  {
    title: 'Ice Pop Product Selling Dashboard',
    category: 'E-Commerce Dashboard',
    description:
      'A modern product selling dashboard for managing ice pop products with a clean interface, responsive layout, and interactive product management experience.',
    highlights: [
      'Product selling and management interface',
      'Modern responsive dashboard UI',
      'Clean product-focused user experience',
      'Fully responsive across all devices',
    ],
    technologies: [
      'React.js',
      'TypeScript',
      'Tailwind CSS',
      'Responsive UI',
    ],
    icon: <IceCreamBowl size={22} />,
    projectUrl: 'https://lush-crush.vercel.app/',
    linkLabel: 'Live Demo',
  },

  {
    title: 'Invoice Generator Dashboard',
    category: 'SaaS & Enterprise Tools',
    description:
      'A modern invoice management dashboard with CRUD functionality, backend/API integration, responsive UI, and PDF invoice generation.',
    highlights: [
      'Full CRUD operations for invoice management',
      'Backend / REST API integration',
      'PDF invoice generation and export',
      'Responsive dashboard UI',
    ],
    technologies: [
      'Next.js',
      'TypeScript',
      'REST API',
      'CRUD',
    ],
    icon: <FileText size={22} />,
    projectUrl: 'https://invoice-form-three.vercel.app/',
    linkLabel: 'Live Demo',
  },

  {
    title: 'School Management System',
    category: 'Admin Dashboard',
    description:
      'A responsive school management and admin dashboard with analytics, user management, reusable components, and a modern dashboard interface.',
    highlights: [
      'Analytics & reporting dashboard',
      'User management interface',
      'Reusable component architecture',
      'Modern admin dashboard UI',
    ],
    technologies: [
      'Next.js',
      'Tailwind CSS',
      'TypeScript',
      'shadcn/ui',
    ],
    icon: <LayoutDashboard size={22} />,
    projectUrl: 'https://shadcn-lms-dev-afif.vercel.app/',
    linkLabel: 'Live Demo',
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
          highlight="Projects"
          subtitle="Real-world applications I've built using modern frontend technologies."
        />

        {/* =================================================
            PROJECTS

            MOBILE / TABLET
            -> Horizontal slow marquee

            DESKTOP / LAPTOP
            -> Normal 3-column grid
        ================================================= */}

        <div className="relative mt-10">

          {/* =================================================
              MOBILE / TABLET MARQUEE
          ================================================= */}

          <div className="relative overflow-hidden lg:hidden">

            {/* Left Fade */}

            <div
              className="
                pointer-events-none
                absolute
                left-0
                top-0
                bottom-0
                z-10
                w-10
                sm:w-14
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
                w-10
                sm:w-14
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
                    key={`mobile-first-${project.title}`}
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
                    key={`mobile-second-${project.title}`}
                    project={project}
                  />
                ))}
              </div>

            </div>
          </div>

          {/* =================================================
              LAPTOP / DESKTOP
              NORMAL GRID — NO SCROLL
          ================================================= */}

          <div className="hidden lg:grid lg:grid-cols-3 gap-6">

            {projects.map((project) => (
              <ProjectCard
                key={`desktop-${project.title}`}
                project={project}
              />
            ))}

          </div>

        </div>
      </div>

      {/* =================================================
          MOBILE MARQUEE ANIMATION ONLY
      ================================================= */}

      <style>{`
        .projects-marquee {
          animation: projectsScroll 55s linear infinite;
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
        w-[310px]
        shrink-0
        flex-col
        overflow-hidden
        rounded-2xl
        border-border/80
        bg-card/60
        p-6
        backdrop-blur-md

        transition-all
        duration-300

        hover:-translate-y-1
        hover:border-primary/50
        hover:shadow-xl
        hover:shadow-primary/10

        sm:w-[350px]
        sm:p-7

        lg:w-auto
        lg:min-w-0
      "
    >

      {/* =================================================
          HEADER
      ================================================= */}

      <div className="mb-5 flex items-start gap-4">

        {/* Project Icon */}

        <div
          className="
            flex
            h-12
            w-12
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
              sm:text-xl
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
          mb-6
          text-xs
          leading-relaxed
          text-muted-foreground
          sm:text-sm
        "
      >
        {project.description}
      </p>

      {/* =================================================
          HIGHLIGHTS
      ================================================= */}

      <div
        className="
          mb-6
          flex-1
          rounded-xl
          border
          border-border/50
          bg-background/50
          p-4
          sm:p-5
        "
      >
        <h4
          className="
            mb-3
            text-xs
            font-bold
            uppercase
            tracking-wider
            text-muted-foreground
          "
        >
          Key Features
        </h4>

        <ul className="flex flex-col gap-2">

          {project.highlights.map((item) => (
            <li
              key={item}
              className="
                relative
                pl-4
                text-xs
                leading-relaxed
                text-foreground/85
                sm:text-sm

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

      {/* =================================================
          FOOTER
      ================================================= */}

      <div
        className="
          mt-auto
          flex
          flex-col
          gap-4
          border-t
          border-border/60
          pt-4

          sm:flex-row
          sm:items-center
          sm:justify-between
        "
      >

        {/* Technologies */}

        <div className="flex flex-wrap gap-1.5">

          {project.technologies.map((tech) => (
            <Badge
              key={tech}
              variant="tech"
              className="text-[11px] font-medium"
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
            px-4
            py-1.5
            text-xs
            font-bold

            sm:w-auto
          "
        >
          <a
            href={project.projectUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`Open ${project.title} live demo`}
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