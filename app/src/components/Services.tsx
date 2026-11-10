import type { ReactNode } from 'react';
import {
  Code,
  Layout,
  BarChart3,
  Settings,
  Users,
  Plug,
  Smartphone,
  RefreshCw,
  Bug,
} from 'lucide-react';

import { FigmaIcon } from './Icons';
import SectionHeader from './SectionHeader';
import { Card } from '@/components/ui/card';

interface Service {
  icon: ReactNode;
  title: string;
  description: string;
}

const services: Service[] = [
  {
    icon: <Code size={22} />,
    title: 'React.js Development',
    description:
      'Building dynamic, component-based web applications with React.js and modern JavaScript.',
  },
  {
    icon: <Layout size={22} />,
    title: 'Next.js Development',
    description:
      'Server-side rendered and statically generated applications with Next.js for performance and SEO.',
  },
  {
    icon: <BarChart3 size={22} />,
    title: 'SaaS Dashboard Development',
    description:
      'Data-driven SaaS dashboards with analytics, reporting interfaces, and data visualization.',
  },
  {
    icon: <Settings size={22} />,
    title: 'Admin Panel Development',
    description:
      'Feature-rich admin panels with user management, data tables, search, filtering, and CRUD operations.',
  },
  {
    icon: <Users size={22} />,
    title: 'CRM Frontend Development',
    description:
      'Customer relationship management interfaces with role-based dashboards and data management.',
  },
  {
    icon: <Plug size={22} />,
    title: 'API Integration',
    description:
      'REST API integration, data fetching, state management, and third-party service connections.',
  },
  {
    icon: <FigmaIcon size={22} />,
    title: 'Figma to React / Next.js',
    description:
      'Pixel-perfect conversion of Figma designs into responsive React and Next.js components.',
  },
  {
    icon: <Smartphone size={22} />,
    title: 'Responsive UI Development',
    description:
      'Mobile-first responsive interfaces that work seamlessly across all screen sizes and devices.',
  },
  {
    icon: <RefreshCw size={22} />,
    title: 'Existing Project Improvements',
    description:
      'Upgrading, refactoring, and enhancing existing frontend projects with modern practices.',
  },
  {
    icon: <Bug size={22} />,
    title: 'Bug Fixing & Optimization',
    description:
      'Debugging frontend issues, resolving performance bottlenecks, and improving user experience.',
  },
];

/*
  Split services into two rows.

  Row 1:
  1 - 5

  Row 2:
  6 - 10
*/
const firstRow = services.slice(0, 5);
const secondRow = services.slice(5);

export default function Services() {
  return (
    <section
      id="services"
      className="relative overflow-hidden bg-background py-20"
    >
      <div className="mx-auto max-w-6xl px-6">

        {/* Header */}
        <SectionHeader
          label="What I Do"
          title="My"
          highlight="Services"
          subtitle="Frontend development services tailored for startups, businesses, and SaaS products."
        />

        {/* =================================================
            ROW 1
        ================================================= */}

        <ServiceMarquee
          services={firstRow}
          direction="left"
        />

        {/* =================================================
            ROW 2
        ================================================= */}

        <div className="mt-5">
          <ServiceMarquee
            services={secondRow}
            direction="right"
          />
        </div>

      </div>
    </section>
  );
}

/* =========================================================
   SERVICE MARQUEE
========================================================= */

function ServiceMarquee({
  services,
  direction,
}: {
  services: Service[];
  direction: 'left' | 'right';
}) {
  return (
    <div className="relative w-full overflow-hidden">

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
          sm:w-16
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
          sm:w-16
        "
        style={{
          background:
            'linear-gradient(to left, var(--color-background), transparent)',
        }}
      />

      {/* Moving Track */}
      <div
        className={
          direction === 'left'
            ? 'services-marquee-left flex w-max'
            : 'services-marquee-right flex w-max'
        }
      >

        {/* First Set */}
        <div className="flex shrink-0 gap-5 pr-5">
          {services.map((service) => (
            <ServiceCard
              key={`first-${service.title}`}
              service={service}
            />
          ))}
        </div>

        {/* Duplicate Set */}
        <div
          className="flex shrink-0 gap-5 pr-5"
          aria-hidden="true"
        >
          {services.map((service) => (
            <ServiceCard
              key={`second-${service.title}`}
              service={service}
            />
          ))}
        </div>

      </div>

      {/* =================================================
          ANIMATION
      ================================================= */}

      <style>{`
        .services-marquee-left {
          animation: servicesScrollLeft 70s linear infinite;
          will-change: transform;
        }

        .services-marquee-right {
          animation: servicesScrollRight 70s linear infinite;
          will-change: transform;
        }

        .services-marquee-left:hover,
        .services-marquee-right:hover {
          animation-play-state: paused;
        }

        @keyframes servicesScrollLeft {
          from {
            transform: translateX(0);
          }

          to {
            transform: translateX(-50%);
          }
        }

        @keyframes servicesScrollRight {
          from {
            transform: translateX(-50%);
          }

          to {
            transform: translateX(0);
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .services-marquee-left,
          .services-marquee-right {
            animation: none;
          }
        }
      `}</style>
    </div>
  );
}

/* =========================================================
   SERVICE CARD
========================================================= */

function ServiceCard({
  service,
}: {
  service: Service;
}) {
  return (
    <Card
      className="
        group
        flex
        w-[280px]
        min-h-[210px]
        shrink-0
        flex-col
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

        sm:w-[320px]
        sm:min-h-[220px]

        lg:w-[350px]
      "
    >

      {/* Icon */}
      <div
        className="
          mb-5
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
          shadow-[0_0_10px_var(--color-accent-glow)]
          transition-transform
          duration-300
          group-hover:scale-105
        "
      >
        {service.icon}
      </div>

      {/* Title */}
      <h3
        className="
          mb-2
          text-base
          font-bold
          leading-snug
          text-foreground
          transition-colors
          duration-300
          group-hover:text-primary
          sm:text-lg
        "
      >
        {service.title}
      </h3>

      {/* Description */}
      <p
        className="
          mt-auto
          text-xs
          leading-relaxed
          text-muted-foreground
          sm:text-sm
        "
      >
        {service.description}
      </p>

    </Card>
  );
}