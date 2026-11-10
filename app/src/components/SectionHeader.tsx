import { Badge } from '@/components/ui/badge';

interface SectionHeaderProps {
  label?: string;
  title: string;
  highlight?: string;
  subtitle?: string;
  className?: string;
}

export default function SectionHeader({
  label,
  title,
  highlight,
  subtitle,
  className = '',
}: SectionHeaderProps) {
  return (
    <div className={`mb-12 text-center ${className}`}>
      {label && (
        <Badge
          variant="brand"
          className="mb-3 px-4 py-1 text-xs uppercase tracking-widest font-bold"
        >
          {label}
        </Badge>
      )}
      <h2 className="text-3xl font-extrabold tracking-tight text-foreground sm:text-4xl md:text-5xl leading-tight">
        {title}{' '}
        {highlight && (
          <span className="bg-gradient-to-r from-teal-500 via-cyan-400 to-teal-400 bg-clip-text text-transparent font-extrabold">
            {highlight}
          </span>
        )}
      </h2>
      {subtitle && (
        <p className="mx-auto mt-3 max-w-2xl text-sm md:text-base leading-relaxed text-muted-foreground">
          {subtitle}
        </p>
      )}
      <div className="mx-auto mt-4 h-1 w-14 rounded-full bg-gradient-to-r from-teal-500 via-cyan-400 to-emerald-500 shadow-[0_0_12px_var(--color-accent-glow)]" />
    </div>
  );
}
