'use client';

import type { ReactNode } from 'react';
import { useState } from 'react';
import {
  Code2,
  Layout,
  Layers,
  Zap,
} from 'lucide-react';

import SectionHeader from './SectionHeader';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

interface SkillItem {
  name: string;
  category:
  | 'content'
  | 'video'
  | 'design'
  | 'teaching'
  | 'professional';
  categoryLabel: string;
  level: 'CV-listed';
  tags: string[];
}

const categories = [
  { id: 'all', label: 'All Skills' },
  { id: 'content', label: 'Content Creation' },
  { id: 'video', label: 'Video & Editing' },
  { id: 'design', label: 'Design' },
  { id: 'teaching', label: 'Teaching' },
  { id: 'professional', label: 'Professional Skills' },
];

const skillsList: SkillItem[] = [
  {
    name: 'Social Media Content Creation',
    category: 'content',
    categoryLabel: 'Content Creation',
    level: 'CV-listed',
    tags: ['YouTube Shorts', 'Digital Content'],
  },
  {
    name: 'YouTube Shorts',
    category: 'content',
    categoryLabel: 'Content Creation',
    level: 'CV-listed',
    tags: ['Short-Form Video', 'Audience-Friendly'],
  },
  {
    name: 'YouTube Video Content',
    category: 'content',
    categoryLabel: 'Content Creation',
    level: 'CV-listed',
    tags: ['Educational', 'Kids-Focused'],
  },
  {
    name: 'AI-Assisted Content Creation',
    category: 'content',
    categoryLabel: 'Content Creation',
    level: 'CV-listed',
    tags: ['Content Ideas', 'Visual Creation', 'Video Production'],
  },
  {
    name: 'Video Editing',
    category: 'video',
    categoryLabel: 'Video & Editing',
    level: 'CV-listed',
    tags: ['CapCut Pro', 'Promotional Videos'],
  },
  {
    name: 'CapCut Pro',
    category: 'video',
    categoryLabel: 'Video & Editing',
    level: 'CV-listed',
    tags: ['Video Editing', 'Game App Promos'],
  },
  {
    name: 'Canva',
    category: 'design',
    categoryLabel: 'Design',
    level: 'CV-listed',
    tags: ['Logo Design', 'Graphic Design'],
  },
  {
    name: 'Logo & Graphic Design',
    category: 'design',
    categoryLabel: 'Design',
    level: 'CV-listed',
    tags: ['Canva', 'Brand Logos'],
  },
  {
    name: 'Creative Writing & Storytelling',
    category: 'content',
    categoryLabel: 'Content Creation',
    level: 'CV-listed',
    tags: ['Story Ideas', 'Engaging Content'],
  },
  {
    name: 'Scriptwriting',
    category: 'content',
    categoryLabel: 'Content Creation',
    level: 'CV-listed',
    tags: ['Stories', 'Video Scripts'],
  },
  {
    name: 'Thumbnails, Titles & Descriptions',
    category: 'content',
    categoryLabel: 'Content Creation',
    level: 'CV-listed',
    tags: ['YouTube Content', 'Audience-Friendly'],
  },
  {
    name: 'Physics & Mathematics Teaching',
    category: 'teaching',
    categoryLabel: 'Teaching',
    level: 'CV-listed',
    tags: ['Primary Students', 'Concept Clarity'],
  },
  {
    name: 'Interactive Primary Tutoring',
    category: 'teaching',
    categoryLabel: 'Teaching',
    level: 'CV-listed',
    tags: ['Customized Tests', 'Student Feedback'],
  },
  {
    name: 'Adapting to Individual Needs',
    category: 'teaching',
    categoryLabel: 'Teaching',
    level: 'CV-listed',
    tags: ['Learning Support', 'Clear Communication'],
  },
  {
    name: 'Research & Learning',
    category: 'professional',
    categoryLabel: 'Professional Skills',
    level: 'CV-listed',
    tags: ['Digital Trends', 'Quick Learner'],
  },
  {
    name: 'Communication',
    category: 'professional',
    categoryLabel: 'Professional Skills',
    level: 'CV-listed',
    tags: ['Teaching', 'Feedback'],
  },
];

const engineeringHighlights = [
  {
    icon: Zap,
    title: 'Short-Form Video',
    desc: 'Creates educational and kids-focused YouTube videos and edits promotional game-app videos with CapCut Pro.',
  },
  {
    icon: Layout,
    title: 'Creative Content',
    desc: 'Develops story ideas, scripts, thumbnails, titles, and descriptions for simple, engaging video content.',
  },
  {
    icon: Layers,
    title: 'Canva Design',
    desc: 'Creates client logos and graphic designs using Canva.',
  },
  {
    icon: Code2,
    title: 'Teaching & Communication',
    desc: 'Tutors primary students with interactive lessons, concept-focused teaching, customized tests, and feedback.',
  },
];

const levelStyles: Record<SkillItem['level'], string> = {
  'CV-listed': 'text-primary bg-primary/10 border border-primary/30',
};

const categoryIcon: Record<string, ReactNode> = {
  content: <Code2 size={13} className="text-primary" />,
  video: <Zap size={13} className="text-primary" />,
  design: <Layout size={13} className="text-primary" />,
  teaching: <Layers size={13} className="text-primary" />,
  professional: <Code2 size={13} className="text-primary" />,
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
          label="Skills"
          title="Skills &"
          highlight="Expertise"
          subtitle="Content creation, design, video editing, teaching, and communication skills from my CV."
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
              Core Strengths
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