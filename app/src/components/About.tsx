import { Code, Layers, Zap } from 'lucide-react';
import SectionHeader from './SectionHeader';
import { Card, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const skills = [
  'React.js',
  'Next.js',
  'TypeScript',
  'JavaScript (ES6+)',
  'Tailwind CSS',
  'HTML5',
  'CSS3',
  'Redux Toolkit',
  'Context API',
  'REST APIs',
  'React Hook Form',
  'Zod',
  'Firebase',
  'Supabase',
  'Git',
  'GitHub',
];

const highlights = [
  {
    icon: Code,
    title: 'Clean & Modular Code',
    desc: 'Reusable component architecture with proper TypeScript types, clean naming, and maintainable project structure.',
  },
  {
    icon: Zap,
    title: 'Performance Focused',
    desc: 'Optimized rendering, lazy loading, and responsive UIs built with React best practices and modern tooling.',
  },
  {
    icon: Layers,
    title: 'Scalable Architecture',
    desc: 'State management with Redux Toolkit and Context API, API integration patterns, and authentication flows.',
  },
];

export default function About() {
  return (
    <section id="about" className="py-20 bg-background relative">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeader
          label="About Me"
          title="Building Scalable"
          highlight="Frontend Solutions"
          subtitle="Focused on delivering clean, performant, and maintainable web applications."
        />

        <div className="mt-8 grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Left: Bio & Tech Chips */}
          <div className="flex flex-col gap-5 text-left">
            <p className="text-base sm:text-lg text-foreground/90 leading-relaxed">
              I&apos;m <strong className="text-primary font-bold">Irfan Ali</strong>, a Frontend Developer with{' '}
              <strong className="text-primary font-bold">3+ years of experience</strong> specializing in{' '}
              <strong className="text-primary font-bold">React.js</strong>,{' '}
              <strong className="text-primary font-bold">Next.js</strong>, and{' '}
              <strong className="text-primary font-bold">TypeScript</strong>.
              I build responsive, high-performance web applications focused on SaaS dashboards, admin panels,
              CRM interfaces, and API-integrated business tools.
            </p>

            <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
              My work spans from translating Figma designs into pixel-perfect UIs to building complex state management
              with <strong className="text-foreground">Redux Toolkit</strong>, implementing authentication flows with{' '}
              <strong className="text-foreground">Firebase</strong> and <strong className="text-foreground">Supabase</strong>,
              validating forms with <strong className="text-foreground">React Hook Form</strong> and{' '}
              <strong className="text-foreground">Zod</strong>, and integrating <strong className="text-foreground">REST APIs</strong>.
              I write clean, maintainable code and follow modern frontend development practices.
            </p>

            {/* Tech Badges */}
            <div className="mt-2 flex flex-wrap gap-2">
              {skills.map((tech) => (
                <Badge
                  key={tech}
                  variant="brand"
                  className="px-3.5 py-1 text-xs font-semibold rounded-full hover:scale-105 transition-transform"
                >
                  {tech}
                </Badge>
              ))}
            </div>
          </div>

          {/* Right: Highlights Bento Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-1 gap-4">
            {highlights.map((item) => {
              const IconComp = item.icon;
              return (
                <Card
                  key={item.title}
                  className="border-border/60 bg-card/60 backdrop-blur-md transition-all duration-300 hover:border-primary/50 hover:-translate-y-1 hover:shadow-lg hover:shadow-primary/10"
                >
                  <CardHeader className="p-6">
                    <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl border border-primary/30 bg-primary/10 text-primary shadow-[0_0_10px_var(--color-accent-glow)]">
                      <IconComp size={22} />
                    </div>
                    <CardTitle className="text-base font-bold text-foreground mb-2">
                      {item.title}
                    </CardTitle>
                    <CardDescription className="text-xs text-muted-foreground leading-relaxed">
                      {item.desc}
                    </CardDescription>
                  </CardHeader>
                </Card>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
