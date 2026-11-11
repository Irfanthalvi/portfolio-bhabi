import type { ReactNode } from 'react';
import {
  Code,
  Layout,
  Clapperboard,
  Palette,
  PenTool,
  BookOpen,
  Smartphone,
  Sparkles,
  MessageSquareText,
  GraduationCap,
} from 'lucide-react';

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
    title: 'Social Media Content',
    description:
      'Creating engaging social media content, including short-form educational and kids-focused videos.',
  },
  {
    icon: <Clapperboard size={22} />,
    title: 'YouTube Shorts & Videos',
    description:
      'Developing YouTube video content with story ideas, scripts, thumbnails, titles, and descriptions.',
  },
  {
    icon: <Smartphone size={22} />,
    title: 'Video Editing with CapCut Pro',
    description:
      'Editing promotional videos for game apps using CapCut Pro.',
  },
  {
    icon: <Palette size={22} />,
    title: 'Canva Logo Design',
    description:
      'Designing brand logos for clients using Canva.',
  },
  {
    icon: <Layout size={22} />,
    title: 'Canva Graphic Design',
    description:
      'Creating graphics with Canva as part of digital content creation.',
  },
  {
    icon: <Sparkles size={22} />,
    title: 'AI-Assisted Content',
    description:
      'Using AI tools for content ideation, visual creation, and video production.',
  },
  {
    icon: <PenTool size={22} />,
    title: 'Creative Writing & Storytelling',
    description:
      'Developing story ideas and writing simple, engaging scripts for video content.',
  },
  {
    icon: <MessageSquareText size={22} />,
    title: 'Thumbnails, Titles & Descriptions',
    description:
      'Preparing audience-friendly thumbnails, titles, and descriptions for YouTube videos.',
  },
  {
    icon: <BookOpen size={22} />,
    title: 'Physics & Mathematics Tutoring',
    description:
      'Tutoring primary students with a focus on concept clarity and interactive learning.',
  },
  {
    icon: <GraduationCap size={22} />,
    title: 'Customized Student Support',
    description:
      'Assessing student progress through customized tests and feedback, and adapting lessons to individual needs.',
  },
];

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
          subtitle="Content creation, design, video editing, and tutoring skills described in my CV."
        />

        <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 xl:grid-cols-3">
          {services.map((service) => (
            <ServiceCard key={service.title} service={service} />
          ))}
        </div>
      </div>
    </section>
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
        w-full
        min-h-[210px]
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

        sm:min-h-[220px]
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