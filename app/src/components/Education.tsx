import type { ComponentType } from 'react';
import {
  GraduationCap,
  Calendar,
  MapPin,
  Trophy,
  Medal,
  Star,
  BookOpen,
  Award,
  CheckCircle2,
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
  board: string;
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
    id: 'fsc',
    degree: 'FSc — Computer Science (Part I & II)',
    institution: 'Islamabad Model College',
    board: 'Federal Board of Intermediate Education (FBISE), Islamabad',
    period: '2020 – 2022',
    location: 'Islamabad, Pakistan',
    status: 'Completed',
    statusClass: 'completed',

    description:
      'Completed FSc Computer Science with distinction from FBISE Islamabad, securing 1st position in both 11th and 12th Grade and earning multiple merit certificates from the college.',

    achievements: [
      {
        icon: Trophy,
        text: '1st Position — FSc Part I (11th Grade), FBISE Islamabad',
      },
      {
        icon: Trophy,
        text: '1st Position — FSc Part II (12th Grade), FBISE Islamabad',
      },
      {
        icon: Star,
        text: 'Merit Certificate for Academic Excellence — Federal Govt College',
      },
      {
        icon: Medal,
        text: 'Certificate of Achievement — Top Performer of the Batch',
      },
    ],

    certificates: [
      'FBISE Merit Certificate — Part I',
      'FBISE Merit Certificate — Part II',
      'Certificate of Excellence',
      'Certificate of Achievement',
    ],
  },

  {
    id: 'bs',
    degree: 'BS — Software Engineering',
    institution: 'Virtual University of Pakistan',
    board: 'Higher Education Commission (HEC) Recognized',
    period: '2023 – 2027 (Expected)',
    location: 'Pakistan',
    status: 'In Progress',
    statusClass: 'ongoing',

    description:
      "Currently pursuing a 4-year Bachelor's in Software Engineering, focusing on web technologies, software architecture, data structures, and full-stack development.",

    achievements: [
      {
        icon: BookOpen,
        text: 'Core focus on Software Engineering & Modern Web Technologies',
      },
      {
        icon: CheckCircle2,
        text: 'Applying academic knowledge in real production projects simultaneously',
      },
      {
        icon: Star,
        text: '2+ years of professional frontend experience running alongside studies',
      },
      {
        icon: Award,
        text: 'Consistent performance combining industry work with university coursework',
      },
    ],

    certificates: [
      'Enrolled — BS Software Engineering',
      'HEC-Recognized Program',
      'Virtual University of Pakistan',
      'Expected Graduation: 2027',
    ],
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
          highlight="Achievements"
          subtitle="Combining strong academic foundations with real-world production experience in modern frontend development."
        />

        {/* Education Cards */}
        <div className="mt-10 grid grid-cols-1 items-stretch gap-8 lg:grid-cols-2">
          {educationData.map((edu) => (
            <Card
              key={edu.id}
              className="
                relative
                flex
                flex-col
                overflow-hidden
                rounded-2xl
                border-border/60
                bg-card/80
                p-6
                backdrop-blur-md
                transition-all
                duration-300
                hover:-translate-y-1
                hover:border-primary/40
                hover:shadow-[0_20px_45px_var(--color-accent-glow)]
                sm:p-8
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
                  mb-5
                  flex
                  items-start
                  gap-4
                  border-b
                  border-border/60
                  pb-5
                "
              >
                {/* Graduation Icon */}
                <div
                  className="
                    flex
                    h-[54px]
                    w-[54px]
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
                  <GraduationCap size={26} />
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
                        text-[1.1rem]
                        font-extrabold
                        leading-snug
                        tracking-tight
                        text-foreground
                        sm:text-[1.15rem]
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

                  <p className="mb-0.5 text-sm font-bold text-primary">
                    {edu.institution}
                  </p>

                  <p className="mb-3 text-[0.78rem] font-medium leading-snug text-muted-foreground">
                    {edu.board}
                  </p>

                  {/* Meta */}
                  <div className="flex flex-wrap gap-2">
                    <span
                      className="
                        inline-flex
                        items-center
                        gap-1
                        rounded-lg
                        border
                        border-border/60
                        bg-background
                        px-2.5
                        py-1
                        text-[0.76rem]
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
                        px-2.5
                        py-1
                        text-[0.76rem]
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
                    mb-5
                    text-[0.88rem]
                    leading-relaxed
                    text-muted-foreground
                    sm:text-[0.9rem]
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