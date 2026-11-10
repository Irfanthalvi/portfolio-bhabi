import { Star, CheckCircle, ArrowUpRight } from 'lucide-react';
import SectionHeader from './SectionHeader';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';

const focusAreas = [
  'Social Media Content Creation',
  'YouTube Shorts & Video Content',
  'Video Editing with CapCut Pro',
  'Canva Logo & Graphic Design',
  'AI-Assisted Content Creation',
  'Creative Writing & Storytelling',
  'Scriptwriting, Thumbnails & Titles',
  'Primary Student Tutoring',
];

const professionalStrengths = [
  'Quick Learner',
  'Creative',
  'Strong Communication',
  'Audience-Friendly Content',
];

export default function Freelance() {
  return (
    <section id="freelance" className="py-20 bg-background relative">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeader
          label="Opportunities"
          title="Open to"
          highlight="Remote Roles"
          subtitle="Seeking a remote social media role focused on content creation."
        />

        <div className="mt-8 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Main Card */}
          <Card className="lg:col-span-8 border-border/80 bg-card/60 p-6 sm:p-8 rounded-2xl backdrop-blur-md">
            <p className="text-base sm:text-lg text-foreground/90 leading-relaxed mb-3">
              I create short-form educational and kids-focused video content, develop scripts and story ideas, and edit promotional videos using CapCut Pro.
            </p>
            <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed mb-6">
              My experience also includes Canva logo design and tutoring primary students in Physics and Mathematics.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {focusAreas.map((area) => (
                <div
                  key={area}
                  className="flex items-center gap-2.5 text-xs sm:text-sm text-foreground/80 font-medium"
                >
                  <CheckCircle size={16} className="text-primary shrink-0" />
                  <span>{area}</span>
                </div>
              ))}
            </div>
          </Card>

          {/* Sidebar */}
          <div className="lg:col-span-4 flex flex-col gap-4">
            {/* Rating Card */}
            <Card className="border-border/80 bg-card/60 p-6 rounded-2xl backdrop-blur-md text-center">
              <div className="mb-2 flex items-center justify-center gap-2">
                <Star size={22} className="text-amber-400 fill-amber-400 drop-shadow-[0_0_8px_rgba(251,191,36,0.5)]" />
                <span className="text-2xl font-black text-foreground">Remote</span>
              </div>
              <p className="text-xs text-muted-foreground font-semibold uppercase tracking-wider">
                Preferred Work Setup
              </p>
            </Card>

            {/* Feedback Card */}
            <Card className="border-border/80 bg-card/60 p-6 rounded-2xl backdrop-blur-md">
              <h4 className="text-xs font-bold text-muted-foreground uppercase tracking-wider mb-3">
                Professional Strengths
              </h4>
              <div className="flex flex-wrap gap-2">
                {professionalStrengths.map((item) => (
                  <Badge
                    key={item}
                    variant="cyan"
                    className="text-xs font-semibold px-3 py-1"
                  >
                    {item}
                  </Badge>
                ))}
              </div>
            </Card>

            {/* CTA Button */}
            <Button
              asChild
              variant="glow"
              size="lg"
              className="w-full rounded-xl py-3 text-sm font-bold uppercase tracking-wider"
            >
              <a href="#contact">
                <ArrowUpRight size={18} />
                Contact Me
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
