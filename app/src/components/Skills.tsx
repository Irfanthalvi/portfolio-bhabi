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

        <div className="mb-16 grid grid-cols-1 gap-5 sm:grid-cols-2 xl:grid-cols-3">
          {filteredSkills.map((skill) => (
              <SkillCard
                key={skill.name}
                skill={skill}
              />
          ))}
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

          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 xl:grid-cols-3">
            {engineeringHighlights.map((item) => (
                <EngineeringCard
                  key={item.title}
                  item={item}
                />
            ))}
          </div>
        </div>
      </div>
    </section>
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
        w-full
        min-w-0
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
        w-full
        min-w-0
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