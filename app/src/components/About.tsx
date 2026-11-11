import SectionHeader from './SectionHeader';
import { Badge } from '@/components/ui/badge';

export default function About() {
  return (
    <section id="about" className="bg-background py-12 sm:py-16">
      <div className="mx-auto max-w-4xl px-6">
        <SectionHeader
          label="A Little About Me"
          title="Creative"
          highlight="Background"
        />

        <div className="mx-auto max-w-3xl text-center">
          <p className="text-base leading-relaxed text-muted-foreground sm:text-lg">
            I&apos;m Rubab Fatima, a Karachi-based content creator with a BSc in Physics. I make educational and kids-focused videos, edit app promotions with CapCut Pro, and create designs in Canva. My tutoring background since 2019 helps me turn ideas into clear, engaging content; I began creating YouTube content in 2025.
          </p>
          <div className="mt-5 flex flex-wrap justify-center gap-2">
            {['BSc Physics', 'Tutoring Since 2019', 'Content Creation Since 2025', 'CapCut Pro', 'Canva Design'].map((item) => (
              <Badge key={item} variant="brand" className="rounded-full px-3 py-1 text-xs">
                {item}
              </Badge>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
