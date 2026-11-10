import type { ReactNode } from 'react';
import { Search, PenTool, Code, Rocket } from 'lucide-react';
import SectionHeader from './SectionHeader';

interface Step {
  icon: ReactNode;
  number: string;
  title: string;
  description: string;
}

const steps: Step[] = [
  {
    icon: <Search size={22} />,
    number: '01',
    title: 'Research & Learning',
    description:
      'Researching ideas and learning about digital trends to guide engaging content.',
  },
  {
    icon: <PenTool size={22} />,
    number: '02',
    title: 'Story & Script',
    description:
      'Developing story ideas and writing scripts for educational and kids-focused videos.',
  },
  {
    icon: <Code size={22} />,
    number: '03',
    title: 'Create & Edit',
    description:
      'Using AI tools for ideation and visual creation, then editing video content with CapCut Pro.',
  },
  {
    icon: <Rocket size={22} />,
    number: '04',
    title: 'Prepare for YouTube',
    description:
      'Creating thumbnails, titles, and descriptions for simple, engaging, audience-friendly content.',
  },
];

export default function Process() {
  return (
    <section className="py-20 bg-background relative">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeader
          label="Content Creation"
          title="From Idea"
          highlight="to Video"
          subtitle="A snapshot of the content creation activities described in my CV."
        />
        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step, index) => (
            <div
              key={step.number}
              className="relative flex flex-col items-center text-center p-6 rounded-2xl border border-border/60 bg-card/40 backdrop-blur-sm transition-all duration-300 hover:border-primary/40 hover:-translate-y-1"
            >
              <div className="mb-3 text-xs font-black tracking-widest text-primary uppercase">
                {step.number}
              </div>
              <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-2xl border border-primary/30 bg-primary/10 text-primary shadow-[0_0_12px_var(--color-accent-glow)]">
                {step.icon}
              </div>
              <h3 className="mb-2 text-base font-bold text-foreground">
                {step.title}
              </h3>
              <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                {step.description}
              </p>
              {index < steps.length - 1 && (
                <div
                  className="hidden lg:block absolute top-1/2 -right-3 w-6 h-[2px] bg-gradient-to-r from-primary/60 to-transparent -translate-y-1/2"
                  aria-hidden="true"
                />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
