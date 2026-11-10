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
    id: 'techsloab',
    company: 'Techsloab',
    role: 'Frontend Developer | React.js',
    period: 'January 2023 – Present',
    location: 'Karachi, Pakistan',
    type: 'Full-Time',
    status: 'Current Role',
    statusType: 'current',
    description:
      'Building responsive and user-friendly web applications using React.js and modern frontend technologies.',
    highlights: [
      'Developed responsive web applications using React.js and JavaScript ES6+',
      'Built reusable and modular UI components',
      'Integrated REST APIs and handled frontend data management',
      'Implemented form validation using React Hook Form and Zod',
      'Debugged and resolved frontend issues',
      'Improved frontend performance and user experience',
      'Used Git and GitHub for version control and collaboration',
      'Worked collaboratively in an Agile development environment',
    ],
    techStack: ['React.js', 'JavaScript (ES6+)', 'REST APIs', 'React Hook Form', 'Zod', 'Git', 'GitHub'],
  },
  {
    id: 'ascensie',
    company: 'Ascensie Online',
    role: 'Frontend Developer | React.js & Next.js',
    period: 'October 2025 – February 2026',
    location: 'Brussels, Belgium',
    type: 'Remote',
    status: 'Completed',
    statusType: 'remote',
    description:
      'Built scalable SaaS applications and modern business interfaces using React.js, Next.js, TypeScript, and Tailwind CSS.',
    highlights: [
      'Built scalable web applications using React.js and Next.js',
      'Developed responsive and pixel-perfect user interfaces',
      'Integrated REST APIs and third-party services',
      'Built reusable and maintainable UI components',
      'Worked with TypeScript and Tailwind CSS',
      'Improved frontend performance and scalability',
      'Collaborated with backend and product teams',
    ],
    techStack: ['Next.js', 'React.js', 'TypeScript', 'Tailwind CSS', 'REST APIs', 'Git'],
  },
];

export default function Experience() {
  return (
    <section id="experience" className="py-20 bg-background relative overflow-hidden">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeader
          label="Career"
          title="Professional"
          highlight="Experience"
          subtitle="Where I've worked and the impact I've made."
        />

        <div className="mt-10 grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
          {experiences.map((exp) => (
            <Card
              key={exp.id}
              className="relative flex flex-col bg-card/80 border-border/60 rounded-2xl p-8 backdrop-blur-md transition-all duration-300 hover:-translate-y-1.5 hover:border-primary/40 hover:shadow-[0_20px_45px_var(--color-accent-glow)] overflow-hidden"
            >
              {/* Top accent line */}
              <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-primary/60 to-transparent opacity-60" />

              {/* Header */}
              <div className="flex flex-col gap-4 mb-5 pb-5 border-b border-border/60">
                <div className="flex items-start gap-4">
                  <div className="flex items-center justify-center w-[52px] h-[52px] bg-primary/10 text-primary border border-primary/30 rounded-xl shrink-0 shadow-[0_0_15px_var(--color-accent-glow)] transition-transform duration-300 hover:scale-105">
                    {exp.statusType === 'current' ? <Building2 size={24} /> : <Globe2 size={24} />}
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between gap-3 mb-1 flex-wrap">
                      <h3 className="text-xl font-extrabold text-foreground tracking-tight">{exp.company}</h3>
                      <span
                        className={`inline-flex items-center gap-1.5 text-[0.72rem] font-bold uppercase tracking-[0.05em] px-2.5 py-1 rounded-full shrink-0
                          ${exp.statusType === 'current'
                            ? 'text-emerald-500 bg-emerald-500/10 border border-emerald-500/30 shadow-[0_0_10px_rgba(16,185,129,0.15)]'
                            : 'text-primary bg-primary/10 border border-primary/30 shadow-[0_0_10px_var(--color-accent-glow)]'
                          }`}
                      >
                        <span className="w-[7px] h-[7px] rounded-full bg-current shadow-[0_0_8px_currentColor] animate-pulse" />
                        {exp.status}
                      </span>
                    </div>
                    <p className="text-sm font-semibold text-primary leading-snug">{exp.role}</p>
                  </div>
                </div>

                {/* Pills */}
                <div className="flex flex-wrap gap-2">
                  <span className="inline-flex items-center gap-1 text-[0.78rem] font-medium text-muted-foreground bg-background border border-border/60 px-2.5 py-1 rounded-lg">
                    <Calendar size={13} className="text-primary shrink-0" />{exp.period}
                  </span>
                  <span className="inline-flex items-center gap-1 text-[0.78rem] font-medium text-muted-foreground bg-background border border-border/60 px-2.5 py-1 rounded-lg">
                    <MapPin size={13} className="text-primary shrink-0" />{exp.location}
                  </span>
                  <span className="inline-flex items-center gap-1 text-[0.78rem] font-medium text-foreground bg-primary/10 border border-primary/30 px-2.5 py-1 rounded-lg">
                    <Briefcase size={13} className="text-primary shrink-0" />{exp.type}
                  </span>
                </div>
              </div>

              {/* Description */}
              <p className="text-[0.92rem] text-muted-foreground leading-relaxed mb-5">{exp.description}</p>

              {/* Responsibilities */}
              <div className="flex-1 mb-6">
                <h4 className="flex items-center gap-1.5 text-[0.82rem] font-bold uppercase tracking-[0.06em] text-muted-foreground mb-3">
                  <Sparkles size={14} className="text-primary" />
                  Key Responsibilities
                </h4>
                <ul className="flex flex-col gap-2.5">
                  {exp.highlights.map((item) => (
                    <li key={item} className="flex items-start gap-2.5 text-[0.86rem] text-muted-foreground leading-snug">
                      <CheckCircle2 size={15} className="text-primary shrink-0 mt-0.5 drop-shadow-[0_0_4px_var(--color-accent-glow)]" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Tech Stack Footer */}
              <div className="mt-auto pt-4 border-t border-border/60">
                <span className="block text-[0.75rem] font-semibold text-muted-foreground uppercase tracking-[0.05em] mb-2">
                  Technologies Used:
                </span>
                <div className="flex flex-wrap gap-1.5">
                  {exp.techStack.map((tech) => (
                    <Badge key={tech} variant="tech" className="text-xs transition-all hover:bg-primary hover:border-primary hover:text-primary-foreground">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
