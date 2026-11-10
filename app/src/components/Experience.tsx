import { Briefcase, MapPin, Calendar, CheckCircle2, Sparkles, Building2, Globe2 } from 'lucide-react';
import SectionHeader from './SectionHeader';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

interface ExperienceItem {
  id: string;
  company: string;
  role: string;
  period: string;
  location: string;
  type: string;
  status: string;
  statusType: 'current' | 'remote';
  description: string;
  highlights: string[];
  techStack: string[];
}

const experiences: ExperienceItem[] = [
  {
    id: 'home-tuition',
    company: 'Home Tuition',
    role: 'Primary Tutor',
    period: '2019 – Present',
    location: 'Karachi, Pakistan',
    type: 'Tutoring',
    status: 'Current',
    statusType: 'current',
    description:
      'Tutors primary students with a focus on concept clarity and interactive learning.',
    highlights: [
      'Teaches primary students using clear, interactive lessons',
      'Assesses student progress with customized tests and feedback sessions',
      'Adapts teaching methods to individual student needs',
      'Teaches with clear communication',
    ],
    techStack: ['Primary Tutoring', 'Concept Clarity', 'Interactive Learning', 'Customized Tests', 'Communication'],
  },
  {
    id: 'youtube-content',
    company: 'YouTube / Digital Content',
    role: 'Content Creator',
    period: '2025 – Present',
    location: 'Karachi, Pakistan',
    type: 'Digital Content',
    status: 'Current',
    statusType: 'remote',
    description:
      'Creates short-form educational and kids-focused video content for YouTube.',
    highlights: [
      'Develops story ideas and scripts',
      'Creates thumbnails, titles, and descriptions',
      'Uses AI tools for content ideation, visual creation, and video production',
      'Focuses on simple, engaging, and audience-friendly content',
    ],
    techStack: ['YouTube Shorts', 'Scriptwriting', 'AI-Assisted Content', 'Video Content'],
  },
  {
    id: 'heaven-technologies',
    company: 'Heaven Technologies',
    role: 'Intern',
    period: '3 Months',
    location: 'Karachi, Pakistan',
    type: 'Internship',
    status: 'Completed',
    statusType: 'remote',
    description:
      'Edited promotional videos for game apps and designed client brand logos.',
    highlights: [
      'Edited promotional game-app videos using CapCut Pro',
      'Designed brand logos for clients using Canva',
    ],
    techStack: ['CapCut Pro', 'Canva', 'Video Editing', 'Logo Design'],
  },
];

export default function Experience() {
  return (
    <section id="experience" className="py-20 bg-background relative overflow-hidden">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeader
          label="Work History"
          title="Professional"
          highlight="Experience"
          subtitle="Content creation, design, and tutoring experience from my CV."
        />

        <div className="relative mt-10 overflow-hidden">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-y-0 left-0 z-10 w-8 sm:w-12"
            style={{
              background:
                'linear-gradient(to right, var(--color-background), transparent)',
            }}
          />
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-y-0 right-0 z-10 w-8 sm:w-12"
            style={{
              background:
                'linear-gradient(to left, var(--color-background), transparent)',
            }}
          />
          <div className="experience-marquee flex w-max">
            {[0, 1].map((set) => (
              <div
                key={set}
                className="flex shrink-0 gap-5 pr-5"
                aria-hidden={set === 1}
              >
                {experiences.map((exp) => (
            <Card
              key={`${set}-${exp.id}`}
              className="relative flex w-[280px] shrink-0 flex-col overflow-hidden rounded-xl border-border/60 bg-card/80 p-4 backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 hover:shadow-[0_20px_45px_var(--color-accent-glow)] sm:w-[320px] sm:p-5"
            >
              {/* Top accent line */}
              <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-primary/60 to-transparent opacity-60" />

              {/* Header */}
              <div className="mb-4 flex flex-col gap-3 border-b border-border/60 pb-4">
                <div className="flex items-start gap-3">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-primary/30 bg-primary/10 text-primary shadow-[0_0_15px_var(--color-accent-glow)] transition-transform duration-300 hover:scale-105">
                    {exp.statusType === 'current' ? <Building2 size={20} /> : <Globe2 size={20} />}
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="mb-1 flex flex-wrap items-center justify-between gap-2">
                      <h3 className="text-lg font-extrabold tracking-tight text-foreground">{exp.company}</h3>
                      <span
                        className={`inline-flex shrink-0 items-center gap-1.5 rounded-full px-2 py-1 text-[0.65rem] font-bold uppercase tracking-[0.05em]
                          ${exp.statusType === 'current'
                            ? 'text-emerald-500 bg-emerald-500/10 border border-emerald-500/30 shadow-[0_0_10px_rgba(16,185,129,0.15)]'
                            : 'text-primary bg-primary/10 border border-primary/30 shadow-[0_0_10px_var(--color-accent-glow)]'
                          }`}
                      >
                        <span className="w-[7px] h-[7px] rounded-full bg-current shadow-[0_0_8px_currentColor] animate-pulse" />
                        {exp.status}
                      </span>
                    </div>
                    <p className="text-xs font-semibold leading-snug text-primary">{exp.role}</p>
                  </div>
                </div>

                {/* Pills */}
                <div className="flex flex-wrap gap-1.5">
                  <span className="inline-flex items-center gap-1 rounded-lg border border-border/60 bg-background px-2 py-1 text-[0.68rem] font-medium text-muted-foreground">
                    <Calendar size={13} className="text-primary shrink-0" />{exp.period}
                  </span>
                  <span className="inline-flex items-center gap-1 rounded-lg border border-border/60 bg-background px-2 py-1 text-[0.68rem] font-medium text-muted-foreground">
                    <MapPin size={13} className="text-primary shrink-0" />{exp.location}
                  </span>
                  <span className="inline-flex items-center gap-1 rounded-lg border border-primary/30 bg-primary/10 px-2 py-1 text-[0.68rem] font-medium text-foreground">
                    <Briefcase size={13} className="text-primary shrink-0" />{exp.type}
                  </span>
                </div>
              </div>

              {/* Description */}
              <p className="mb-4 text-xs leading-relaxed text-muted-foreground">{exp.description}</p>

              {/* Responsibilities */}
              <div className="mb-4 flex-1">
                <h4 className="mb-2 flex items-center gap-1.5 text-[0.68rem] font-bold uppercase tracking-[0.06em] text-muted-foreground">
                  <Sparkles size={14} className="text-primary" />
                  Key Responsibilities
                </h4>
                <ul className="flex flex-col gap-1.5">
                  {exp.highlights.map((item) => (
                    <li key={item} className="flex items-start gap-2 text-xs leading-snug text-muted-foreground">
                      <CheckCircle2 size={13} className="mt-0.5 shrink-0 text-primary drop-shadow-[0_0_4px_var(--color-accent-glow)]" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Tech Stack Footer */}
              <div className="mt-auto border-t border-border/60 pt-3">
                <span className="mb-2 block text-[0.65rem] font-semibold uppercase tracking-[0.05em] text-muted-foreground">
                  Technologies Used:
                </span>
                <div className="flex flex-wrap gap-1">
                  {exp.techStack.map((tech) => (
                    <Badge key={tech} variant="tech" className="text-[9px] transition-all hover:border-primary hover:bg-primary hover:text-primary-foreground">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </div>
            </Card>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>
      <style>{`
        .experience-marquee {
          animation: experienceScroll 70s linear infinite;
          will-change: transform;
        }

        .experience-marquee:hover {
          animation-play-state: paused;
        }

        @keyframes experienceScroll {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }

        @media (prefers-reduced-motion: reduce) {
          .experience-marquee { animation: none; }
        }
      `}</style>
    </section>
  );
}
