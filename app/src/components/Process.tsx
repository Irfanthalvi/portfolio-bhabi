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
    title: 'Discovery',
    description:
      'Understanding your requirements, goals, target users, and project scope to define the right approach.',
  },
  {
    icon: <PenTool size={22} />,
    number: '02',
    title: 'Design & Planning',
    description:
      'Planning the architecture, component structure, and UI layout before writing any code.',
  },
  {
    icon: <Code size={22} />,
    number: '03',
    title: 'Development',
    description:
      'Building the application with clean, modular code, reusable components, and API integrations.',
  },
  {
    icon: <Rocket size={22} />,
    number: '04',
    title: 'Testing & Launch',
    description:
      'Testing across devices, fixing issues, optimizing performance, and deploying the final product.',
  },
];

export default function Process() {
  return (
    <section className="py-20 bg-background relative">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeader
          label="How I Work"
          title="Development"
          highlight="Process"
          subtitle="A structured approach to delivering quality frontend solutions."
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
