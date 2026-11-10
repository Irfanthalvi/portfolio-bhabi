'use client';

import type { ReactNode } from 'react';
import { useState } from 'react';
import {
  Code2,
  Layout,
  Layers,
  Database,
  Zap,
} from 'lucide-react';

import SectionHeader from './SectionHeader';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

interface SkillItem {
  name: string;
  category:
  | 'frontend'
  | 'frameworks'
  | 'state'
  | 'forms'
  | 'backend'
  | 'tools';
  categoryLabel: string;
  level: 'Expert' | 'Advanced' | 'Proficient';
  tags: string[];
}

const categories = [
  { id: 'all', label: 'All Technologies' },
  { id: 'frontend', label: 'Frontend Core' },
  { id: 'frameworks', label: 'Frameworks & Libraries' },
  { id: 'state', label: 'State & Data' },
  { id: 'forms', label: 'Forms & Validation' },
  { id: 'backend', label: 'Backend Services' },
  { id: 'tools', label: 'Tools' },
];

const skillsList: SkillItem[] = [
  {
    name: 'HTML5',
    category: 'frontend',
    categoryLabel: 'Frontend Core',
    level: 'Expert',
    tags: ['Semantic HTML', 'Accessibility', 'SEO'],
  },
  {
    name: 'CSS3',
    category: 'frontend',
    categoryLabel: 'Frontend Core',
    level: 'Expert',
    tags: ['Flexbox', 'CSS Grid', 'Animations'],
  },
  {
    name: 'JavaScript (ES6+)',
    category: 'frontend',
    categoryLabel: 'Frontend Core',
    level: 'Expert',
    tags: ['Async/Await', 'DOM APIs', 'ES Modules'],
  },
  {
    name: 'TypeScript',
    category: 'frontend',
    categoryLabel: 'Frontend Core',
    level: 'Expert',
    tags: ['Type Safety', 'Generics', 'Interfaces'],
  },
  {
    name: 'React.js',
    category: 'frameworks',
    categoryLabel: 'Frameworks',
    level: 'Expert',
    tags: ['Hooks', 'Context API', 'Performance'],
  },
  {
    name: 'Next.js',
    category: 'frameworks',
    categoryLabel: 'Frameworks',
    level: 'Expert',
    tags: ['App Router', 'SSR / SSG', 'API Routes'],
  },
  {
    name: 'Tailwind CSS',
    category: 'frameworks',
    categoryLabel: 'Frameworks',
    level: 'Expert',
    tags: ['Utility-First', 'Custom Config', 'Responsive'],
  },
  {
    name: 'Redux Toolkit',
    category: 'state',
    categoryLabel: 'State & Data',
    level: 'Advanced',
    tags: ['Slices', 'RTK Query', 'Middleware'],
  },
  {
    name: 'Context API',
    category: 'state',
    categoryLabel: 'State & Data',
    level: 'Advanced',
    tags: ['Provider Pattern', 'Global State', 'Hooks'],
  },
  {
    name: 'REST APIs',
    category: 'state',
    categoryLabel: 'State & Data',
    level: 'Expert',
    tags: ['Fetch / Axios', 'Data Fetching', 'Error Handling'],
  },
  {
    name: 'React Hook Form',
    category: 'forms',
    categoryLabel: 'Forms & Validation',
    level: 'Advanced',
    tags: ['Form State', 'Validation', 'Performance'],
  },
  {
    name: 'Zod',
    category: 'forms',
    categoryLabel: 'Forms & Validation',
    level: 'Advanced',
    tags: ['Schema Validation', 'Type Inference', 'Parsing'],
  },
  {
    name: 'Firebase',
    category: 'backend',
    categoryLabel: 'Backend Services',
    level: 'Advanced',
    tags: ['Firestore', 'Authentication', 'Storage'],
  },
  {
    name: 'Supabase',
    category: 'backend',
    categoryLabel: 'Backend Services',
    level: 'Advanced',
    tags: ['Postgres DB', 'Auth Flow', 'Realtime'],
  },
  {
    name: 'Git',
    category: 'tools',
    categoryLabel: 'Tools',
    level: 'Expert',
    tags: ['Version Control', 'Branching', 'Merge'],
  },
  {
    name: 'GitHub',
    category: 'tools',
    categoryLabel: 'Tools',
    level: 'Expert',
    tags: ['Collaboration', 'Pull Requests', 'CI/CD'],
  },
];

const engineeringHighlights = [
  {
    icon: Zap,
    title: 'Performance & Optimization',
    desc: 'Code-splitting with React Lazy & Suspense, dynamic imports, optimized rendering, and responsive UIs across all devices.',
  },
  {
    icon: Layout,
    title: 'Pixel-Perfect UI',
    desc: 'Translating Figma designs into clean, responsive, and fully accessible components using Tailwind CSS and modern layout techniques.',
  },
  {
    icon: Layers,
    title: 'Scalable Frontend Architecture',
    desc: 'Clean component trees, reusable modules, proper TypeScript types, and maintainable state management patterns.',
  },
  {
    icon: Database,
    title: 'API Integration & Auth',
    desc: 'REST API communication, Firebase & Supabase integration, authentication workflows, and form validation with React Hook Form & Zod.',
  },
];

const levelStyles: Record<string, string> = {
  Expert:
    'text-primary bg-primary/10 border border-primary/30',
  Advanced:
    'text-cyan-400 bg-cyan-400/10 border border-cyan-400/30',
  Proficient:
    'text-violet-400 bg-violet-400/10 border border-violet-400/30',
};

const categoryIcon: Record<string, ReactNode> = {
  frontend: <Code2 size={13} className="text-primary" />,
  frameworks: <Layout size={13} className="text-primary" />,
  state: <Database size={13} className="text-primary" />,
  forms: <Layers size={13} className="text-primary" />,
  backend: <Database size={13} className="text-primary" />,
  tools: <Code2 size={13} className="text-primary" />,
};

export default function Skills() {
  const [activeTab, setActiveTab] = useState('all');

  const filteredSkills =
    activeTab === 'all'
      ? skillsList
      : skillsList.filter(
        (skill) => skill.category === activeTab
      );

  /*
   * =========================================================
   * ROW LOGIC
   *
   * 5 OR LESS  -> ONE ROW
   * MORE THAN 5 -> TWO ROWS
   * =========================================================
   */

  const shouldUseTwoRows = filteredSkills.length > 5;

  const firstRow = shouldUseTwoRows
    ? filteredSkills.slice(
      0,
      Math.ceil(filteredSkills.length / 2)
    )
    : filteredSkills;

  const secondRow = shouldUseTwoRows
    ? filteredSkills.slice(
      Math.ceil(filteredSkills.length / 2)
    )
    : [];

  const shouldEngineeringUseTwoRows =
    engineeringHighlights.length > 5;

  const firstEngineeringRow = shouldEngineeringUseTwoRows
    ? engineeringHighlights.slice(
      0,
      Math.ceil(engineeringHighlights.length / 2)
    )
    : engineeringHighlights;

  const secondEngineeringRow = shouldEngineeringUseTwoRows
    ? engineeringHighlights.slice(
      Math.ceil(engineeringHighlights.length / 2)
    )
    : [];

  return (
    <section
      id="skills"
      className="relative overflow-hidden bg-background py-20"
    >
      <div className="mx-auto max-w-6xl px-6">

        {/* =================================================
            HEADER
        ================================================= */}

        <SectionHeader
          label="Tech Stack"
          title="Skills &"
          highlight="Technologies"
          subtitle="Technologies I use to build modern, scalable web applications."
        />

        {/* =================================================
            CATEGORY FILTERS
        ================================================= */}

        <div className="mt-8 mb-10 flex flex-wrap items-center justify-center gap-3">
          {categories.map((cat) => {
            const count =
              cat.id === 'all'
                ? skillsList.length
                : skillsList.filter(
                  (skill) => skill.category === cat.id
                ).length;

            const isActive = activeTab === cat.id;

            return (
              <button
                key={cat.id}
                type="button"
                onClick={() => setActiveTab(cat.id)}
                className={`
                  inline-flex items-center gap-2
                  rounded-full border
                  px-[18px] py-[10px]
                  text-sm font-semibold
                  backdrop-blur-sm
                  transition-all duration-200
                  ${isActive
                    ? 'border-primary bg-gradient-to-r from-[var(--color-accent-dark)] to-[var(--color-accent)] text-white shadow-[0_0_20px_var(--color-accent-glow)] -translate-y-0.5'
                    : 'border-border bg-card/80 text-muted-foreground hover:border-primary/40 hover:bg-background hover:text-foreground hover:-translate-y-0.5'
                  }
                `}
              >
                <span>{cat.label}</span>

                <span
                  className={`
                    rounded-full
                    px-1.5 py-0.5
                    text-[0.72rem] font-bold
                    ${isActive
                      ? 'bg-black/20 text-white'
                      : 'bg-white/15 text-inherit'
                    }
                  `}
                >
                  {count}
                </span>
              </button>
            );
          })}
        </div>

        {/* =================================================
            SKILLS
        ================================================= */}

        <div className="mb-16 space-y-5">

          {/* FIRST ROW */}

          <MarqueeRow
            items={firstRow}
            animationClass="skills-marquee-left"
            renderItem={(skill) => (
              <SkillCard
                key={skill.name}
                skill={skill}
              />
            )}
          />

          {/* SECOND ROW ONLY WHEN MORE THAN 5 */}

          {shouldUseTwoRows && (
            <MarqueeRow
              items={secondRow}
              animationClass="skills-marquee-right"
              renderItem={(skill) => (
                <SkillCard
                  key={skill.name}
                  skill={skill}
                />
              )}
            />
          )}
        </div>

        {/* =================================================
            ENGINEERING STRENGTHS
        ================================================= */}

        <div className="mt-8 border-t border-border/60 pt-10">

          <div className="mb-8 flex items-center justify-center gap-2">
            <Zap
              size={20}
              className="text-primary"
            />

            <h3 className="text-2xl font-extrabold tracking-tight text-foreground">
              Core Engineering Strengths
            </h3>
          </div>

          <div className="space-y-5">

            {/* FIRST ENGINEERING ROW */}

            <MarqueeRow
              items={firstEngineeringRow}
              animationClass="strength-marquee-left"
              renderItem={(item) => (
                <EngineeringCard
                  key={item.title}
                  item={item}
                />
              )}
            />

            {/* SECOND ENGINEERING ROW */}

            {shouldEngineeringUseTwoRows && (
              <MarqueeRow
                items={secondEngineeringRow}
                animationClass="strength-marquee-right"
                renderItem={(item) => (
                  <EngineeringCard
                    key={item.title}
                    item={item}
                  />
                )}
              />
            )}

          </div>
        </div>
      </div>

      {/* =================================================
          NORMAL CSS
          No styled-jsx — avoids Next.js Server Component
          styled-jsx errors.
      ================================================= */}

      <style>{`
        .marquee-container {
          position: relative;
          width: 100%;
          overflow: hidden;
        }

        .marquee-container::before {
          content: '';
          position: absolute;
          left: 0;
          top: 0;
          bottom: 0;
          width: 60px;
          z-index: 10;
          pointer-events: none;
          background: linear-gradient(
            to right,
            var(--color-background),
            transparent
          );
        }

        .marquee-container::after {
          content: '';
          position: absolute;
          right: 0;
          top: 0;
          bottom: 0;
          width: 60px;
          z-index: 10;
          pointer-events: none;
          background: linear-gradient(
            to left,
            var(--color-background),
            transparent
          );
        }

        .marquee-track {
          display: flex;
          width: max-content;
        }

        /*
         * Slow animation
         * First row moves left
         */
        .skills-marquee-left {
          animation: skillsLeft 65s linear infinite;
        }

        /*
         * Second row moves right
         */
        .skills-marquee-right {
          animation: skillsRight 70s linear infinite;
        }

        /*
         * Engineering rows
         */
        .strength-marquee-left {
          animation: strengthLeft 70s linear infinite;
        }

        .strength-marquee-right {
          animation: strengthRight 75s linear infinite;
        }

        @keyframes skillsLeft {
          from {
            transform: translateX(0);
          }

          to {
            transform: translateX(-50%);
          }
        }

        @keyframes skillsRight {
          from {
            transform: translateX(-50%);
          }

          to {
            transform: translateX(0);
          }
        }

        @keyframes strengthLeft {
          from {
            transform: translateX(0);
          }

          to {
            transform: translateX(-50%);
          }
        }

        @keyframes strengthRight {
          from {
            transform: translateX(-50%);
          }

          to {
            transform: translateX(0);
          }
        }

        /*
         * Pause on hover
         */
        .marquee-track:hover {
          animation-play-state: paused;
        }

        /*
         * Accessibility
         */
        @media (prefers-reduced-motion: reduce) {
          .skills-marquee-left,
          .skills-marquee-right,
          .strength-marquee-left,
          .strength-marquee-right {
            animation: none;
            transform: none;
          }
        }
      `}</style>
    </section>
  );
}

/* =========================================================
   GENERIC MARQUEE ROW
========================================================= */

function MarqueeRow<T>({
  items,
  animationClass,
  renderItem,
}: {
  items: T[];
  animationClass: string;
  renderItem: (item: T) => ReactNode;
}) {
  return (
    <div className="marquee-container">

      <div
        className={`marquee-track ${animationClass}`}
      >
        {/* FIRST SET */}

        <div className="flex shrink-0 gap-5 pr-5">
          {items.map(renderItem)}
        </div>

        {/* DUPLICATE SET FOR SEAMLESS LOOP */}

        <div
          className="flex shrink-0 gap-5 pr-5"
          aria-hidden="true"
        >
          {items.map((item, index) => (
            <div key={`duplicate-${index}`}>
              {renderItem(item)}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

/* =========================================================
   SKILL CARD
========================================================= */

function SkillCard({
  skill,
}: {
  skill: SkillItem;
}) {
  return (
    <Card
      className="
        flex
        min-h-[190px]
        w-[290px]
        shrink-0
        flex-col
        rounded-2xl
        border-border/60
        bg-card/80
        p-6
        backdrop-blur-sm
        transition-all
        duration-300
        hover:-translate-y-1
        hover:border-primary/40
        hover:shadow-[0_16px_36px_var(--color-accent-glow)]
      "
    >
      {/* HEADER */}

      <div className="mb-4 flex items-start justify-between gap-2">

        <div className="flex flex-col gap-1">

          <div className="flex items-center gap-[5px]">
            {categoryIcon[skill.category]}

            <span className="text-[0.7rem] font-semibold uppercase tracking-[0.06em] text-muted-foreground">
              {skill.categoryLabel}
            </span>
          </div>

          <h3 className="text-[1.1rem] font-bold tracking-tight text-foreground">
            {skill.name}
          </h3>

        </div>

        {/* LEVEL */}

        <span
          className={`
            shrink-0
            rounded-full
            px-2 py-0.5
            text-[0.68rem]
            font-bold
            uppercase
            tracking-[0.05em]
            ${levelStyles[skill.level]}
          `}
        >
          {skill.level}
        </span>

      </div>

      {/* TAGS */}

      <div className="mt-auto flex flex-wrap gap-1.5 border-t border-border/60 pt-3">

        {skill.tags.map((tag) => (
          <Badge
            key={tag}
            variant="tech"
            className="text-[0.72rem]"
          >
            {tag}
          </Badge>
        ))}

      </div>
    </Card>
  );
}

/* =========================================================
   ENGINEERING CARD
========================================================= */

function EngineeringCard({
  item,
}: {
  item: {
    icon: typeof Zap;
    title: string;
    desc: string;
  };
}) {
  const IconComp = item.icon;

  return (
    <Card
      className="
        flex
        min-h-[235px]
        w-[320px]
        shrink-0
        flex-col
        rounded-2xl
        border-border/60
        bg-card/80
        p-6
        backdrop-blur-sm
        transition-all
        duration-300
        hover:-translate-y-1
        hover:border-primary/40
        hover:shadow-[0_12px_30px_var(--color-accent-glow)]
      "
    >
      {/* ICON */}

      <div
        className="
          mb-4
          flex
          h-12
          w-12
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
        <IconComp size={24} />
      </div>

      {/* TITLE */}

      <h4 className="mb-2 text-[1.05rem] font-bold leading-snug text-foreground">
        {item.title}
      </h4>

      {/* DESCRIPTION */}

      <p className="text-[0.84rem] leading-relaxed text-muted-foreground">
        {item.desc}
      </p>
    </Card>
  );
}