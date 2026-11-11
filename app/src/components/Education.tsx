import type { ComponentType } from 'react';
import {
  GraduationCap,
  Calendar,
  MapPin,
  Trophy,
  Medal,
  Star,
  Award,
} from 'lucide-react';

import SectionHeader from './SectionHeader';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

type IconComponent = ComponentType<{
  size?: number;
  className?: string;
  'aria-hidden'?: boolean;
}>;

interface Achievement {
  icon: IconComponent;
  text: string;
}

interface EducationItem {
  id: string;
  degree: string;
  institution: string;
  board?: string;
  period: string;
  location: string;
  status: 'Completed' | 'In Progress';
  statusClass: 'completed' | 'ongoing';
  description?: string;
  achievements: Achievement[];
  certificates: string[];
}

const educationData: EducationItem[] = [
  {
    id: 'bsc-physics',
    degree: 'Bachelor of Science in Physics',
    institution: 'Federal Urdu University',
    period: '2021 – 2025',
    location: 'Karachi, Pakistan',
    status: 'Completed',
    statusClass: 'completed',
    achievements: [],
    certificates: [],
  },
  {
    id: 'secondary-school',
    degree: 'Secondary School',
    institution: 'Government Degree College for Women, Block M, North Nazimabad',
    period: '2019 – 2020',
    location: 'Karachi, Pakistan',
    status: 'Completed',
    statusClass: 'completed',
    achievements: [],
    certificates: [],
  },
  {
    id: 'electronics-fundamentals',
    degree: 'Electronics Fundamentals Course',
    institution: 'Creative Institute',
    period: '2024 (3 months)',
    location: 'Karachi, Pakistan',
    status: 'Completed',
    statusClass: 'completed',
    description:
      'Completed a three-month course covering fundamental electronics concepts, practical experiments, and demonstrations.',
    achievements: [],
    certificates: ['Electronics Fundamentals Course'],
  },
];

/* =========================================================
   ICON COLOR
========================================================= */

const achieveIconColor = (icon: IconComponent): string => {
  if (
    icon === Trophy ||
    icon === Medal ||
    icon === Star
  ) {
    return 'text-amber-400 drop-shadow-[0_0_4px_rgba(245,158,11,0.4)]';
  }

  return 'text-primary drop-shadow-[0_0_4px_var(--color-accent-glow)]';
};

/* =========================================================
   EDUCATION
========================================================= */

export default function Education() {
  return (
    <section
      id="education"
      className="relative overflow-hidden bg-background py-20"
    >
      <div className="mx-auto max-w-6xl px-6">

        {/* Section Header */}
        <SectionHeader
          label="Academic Background"
          title="Education &"
          highlight="Certification"
          subtitle="Physics graduate with secondary education and an electronics fundamentals course."
        />

        {/* Education Cards */}
        <div className="mt-10 grid grid-cols-1 items-stretch gap-5 sm:grid-cols-2 xl:grid-cols-3">
          {educationData.map((edu) => (
            <Card
              key={edu.id}
              className="
                relative
                flex
                w-full
                flex-col
                overflow-hidden
                rounded-xl
                border-border/60
                bg-card/80
                p-4
                backdrop-blur-md
                transition-all
                duration-300
                hover:-translate-y-1
                hover:border-primary/40
                hover:shadow-[0_20px_45px_var(--color-accent-glow)]
                sm:p-5
              "
            >
              {/* Top Accent */}
              <div
                className="
                  absolute
                  left-0
                  right-0
                  top-0
                  h-[2px]
                  bg-gradient-to-r
                  from-transparent
                  via-primary/60
                  to-transparent
                  opacity-50
                "
              />

              {/* =================================================
                  HEADER
              ================================================= */}

              <div
                className="
                  mb-4
                  flex
                  items-start
                  gap-3
                  border-b
                  border-border/60
                  pb-4
                "
              >
                {/* Graduation Icon */}
                <div
                  className="
                    flex
                    h-10
                    w-10
                    shrink-0
                    items-center
                    justify-center
                    rounded-xl
                    border
                    border-primary/30
                    bg-primary/10
                    text-primary
                    shadow-[0_0_15px_var(--color-accent-glow)]
                  "
                >
                  <GraduationCap size={21} />
                </div>

                {/* Header Content */}
                <div className="min-w-0 flex-1">
                  <div
                    className="
                      mb-1
                      flex
                      flex-wrap
                      items-start
                      justify-between
                      gap-2
                    "
                  >
                    <h3
                      className="
                        flex-1
                        text-base
                        font-extrabold
                        leading-snug
                        tracking-tight
                        text-foreground
                        sm:text-lg
                      "
                    >
                      {edu.degree}
                    </h3>

                    {/* Status */}
                    <span
                      className={`
                        inline-flex
                        shrink-0
                        items-center
                        gap-1.5
                        rounded-full
                        border
                        px-2.5
                        py-1
                        text-[0.68rem]
                        font-bold
                        uppercase
                        tracking-[0.05em]
                        ${edu.statusClass === 'completed'
                          ? 'border-emerald-500/30 bg-emerald-500/10 text-emerald-500'
                          : 'border-amber-400/30 bg-amber-400/10 text-amber-400'
                        }
                      `}
                    >
                      <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-current" />

                      {edu.status}
                    </span>
                  </div>

                  <p className="mb-0.5 text-xs font-bold text-primary">
                    {edu.institution}
                  </p>

                  {edu.board && (
                    <p className="mb-3 text-[0.78rem] font-medium leading-snug text-muted-foreground">
                      {edu.board}
                    </p>
                  )}

                  {/* Meta */}
                  <div className="flex flex-wrap gap-1.5">
                    <span
                      className="
                        inline-flex
                        items-center
                        gap-1
                        rounded-lg
                        border
                        border-border/60
                        bg-background
                        px-2
                        py-1
                        text-[0.68rem]
                        font-medium
                        text-muted-foreground
                      "
                    >
                      <Calendar
                        size={13}
                        className="shrink-0 text-primary"
                      />

                      {edu.period}
                    </span>

                    <span
                      className="
                        inline-flex
                        items-center
                        gap-1
                        rounded-lg
                        border
                        border-border/60
                        bg-background
                        px-2
                        py-1
                        text-[0.68rem]
                        font-medium
                        text-muted-foreground
                      "
                    >
                      <MapPin
                        size={13}
                        className="shrink-0 text-primary"
                      />

                      {edu.location}
                    </span>
                  </div>
                </div>
              </div>

              {/* =================================================
                  DESCRIPTION
              ================================================= */}

              {edu.description && (
                <p
                  className="
                    mb-4
                    text-xs
                    leading-relaxed
                    text-muted-foreground
                  "
                >
                  {edu.description}
                </p>
              )}

              {/* =================================================
                  ACHIEVEMENTS
              ================================================= */}

              {edu.achievements.length > 0 && (
                <div className="mb-5">
                  <h4
                    className="
                      mb-3
                      flex
                      items-center
                      gap-1.5
                      text-[0.78rem]
                      font-bold
                      uppercase
                      tracking-[0.06em]
                      text-muted-foreground
                    "
                  >
                    <Trophy
                      size={14}
                      className="text-amber-400"
                    />

                    Achievements & Honors
                  </h4>

                  <ul className="flex flex-col gap-2.5">
                    {edu.achievements.map((item, index) => {
                      const IconComp = item.icon;

                      return (
                        <li
                          key={`${edu.id}-achievement-${index}`}
                          className="
                            flex
                            items-start
                            gap-2.5
                            text-[0.84rem]
                            leading-snug
                            text-muted-foreground
                          "
                        >
                          <IconComp
                            size={15}
                            className={`mt-0.5 shrink-0 ${achieveIconColor(
                              item.icon
                            )}`}
                            aria-hidden
                          />

                          <span>{item.text}</span>
                        </li>
                      );
                    })}
                  </ul>
                </div>
              )}

              {/* =================================================
                  CERTIFICATES
              ================================================= */}

              {edu.certificates.length > 0 && (
                <div
                  className="
                    mt-auto
                    border-t
                    border-border/60
                    pt-4
                  "
                >
                  <h4
                    className="
                      mb-3
                      flex
                      items-center
                      gap-1.5
                      text-[0.78rem]
                      font-bold
                      uppercase
                      tracking-[0.06em]
                      text-muted-foreground
                    "
                  >
                    <Award
                      size={14}
                      className="text-primary"
                    />

                    Certificates Received
                  </h4>

                  <div className="flex flex-wrap gap-1.5">
                    {edu.certificates.map((certificate) => (
                      <Badge
                        key={certificate}
                        variant="tech"
                        className="
                          text-[0.74rem]
                          transition-all
                          hover:border-primary
                          hover:bg-primary
                          hover:text-primary-foreground
                        "
                      >
                        {certificate}
                      </Badge>
                    ))}
                  </div>
                </div>
              )}
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}