import { Code, Layers, Zap } from 'lucide-react';
import SectionHeader from './SectionHeader';
import { Card, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const skills = [
  'Social Media Content',
  'YouTube Shorts',
  'Video Editing',
  'CapCut Pro',
  'Canva',
  'AI-Assisted Content',
  'Creative Writing',
  'Storytelling',
  'Scriptwriting',
  'Thumbnails & Titles',
  'Research',
  'Communication',
  'Physics Teaching',
  'Mathematics Teaching',
];

const highlights = [
  {
    icon: Code,
    title: 'Social Media Content',
    desc: 'Creates short-form educational and kids-focused YouTube content, with ideas, scripts, thumbnails, titles, and descriptions.',
  },
  {
    icon: Zap,
    title: 'Video Editing & Design',
    desc: 'Edits promotional videos with CapCut Pro and creates client logos and graphics using Canva.',
  },
  {
    icon: Layers,
    title: 'Teaching & Communication',
    desc: 'Supports primary students with clear explanations, interactive learning, customized tests, and feedback.',
  },
];

export default function About() {
  return (
    <section id="about" className="py-20 bg-background relative">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeader
          label="About Me"
          title="Creative Content"
          highlight="& Teaching"
          subtitle="A Physics graduate with experience in digital content creation and primary tutoring."
        />

        <div className="mt-8 grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Left: Bio & Tech Chips */}
          <div className="flex flex-col gap-5 text-left">
            <p className="text-base sm:text-lg text-foreground/90 leading-relaxed">
              I&apos;m <strong className="text-primary font-bold">Rubab Fatima</strong>, a Physics graduate and creative content creator based in Karachi, Pakistan. I create short-form educational and kids-focused videos for YouTube and have worked on promotional video editing and logo design.
            </p>

            <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
              Since 2019, I&apos;ve tutored primary students, focusing on concept clarity and interactive learning. I use <strong className="text-foreground">CapCut Pro</strong>, <strong className="text-foreground">Canva</strong>, and AI tools for video editing, design, content ideas, and production.
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
