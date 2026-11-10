'use client';

import { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import { Mail, Code2, Briefcase } from 'lucide-react';
import {
  WhatsappIcon,
} from './Icons';

import { Canvas, useFrame } from '@react-three/fiber';
import { Float, Stars } from '@react-three/drei';
import * as THREE from 'three';

const roles = [
  'Physics Graduate',
  'Social Media Content Creator',
  'Primary Tutor',
  'Video Editor & Canva Designer',
];

/* =========================================================
   THREE.JS — TECH SPHERE
========================================================= */

function TechSphere() {
  const sphereRef = useRef<THREE.Mesh>(null);
  const ringRef = useRef<THREE.Mesh>(null);
  const ringRef2 = useRef<THREE.Mesh>(null);

  useFrame((state, delta) => {
    if (!sphereRef.current || !ringRef.current || !ringRef2.current) {
      return;
    }

    // Main sphere rotation
    sphereRef.current.rotation.x += delta * 0.08;
    sphereRef.current.rotation.y += delta * 0.14;

    // Rings rotation
    ringRef.current.rotation.x += delta * 0.12;
    ringRef.current.rotation.y += delta * 0.18;

    ringRef2.current.rotation.x -= delta * 0.08;
    ringRef2.current.rotation.z += delta * 0.15;

    // Subtle mouse interaction
    const targetX = state.pointer.y * 0.15;
    const targetY = state.pointer.x * 0.15;

    sphereRef.current.rotation.x +=
      (targetX - sphereRef.current.rotation.x) * 0.005;

    sphereRef.current.rotation.y +=
      (targetY - sphereRef.current.rotation.y) * 0.005;
  });

  return (
    <Float
      speed={1}
      rotationIntensity={0.25}
      floatIntensity={0.4}
    >
      {/* Main wireframe */}
      <mesh ref={sphereRef}>
        <icosahedronGeometry args={[1.65, 3]} />

        <meshBasicMaterial
          color="#3b82f6"
          wireframe
          transparent
          opacity={0.2}
        />
      </mesh>

      {/* Inner sphere */}
      <mesh scale={1.45}>
        <icosahedronGeometry args={[1, 2]} />

        <meshBasicMaterial
          color="#60a5fa"
          wireframe
          transparent
          opacity={0.07}
        />
      </mesh>

      {/* First orbit */}
      <mesh ref={ringRef} rotation={[1.1, 0.2, 0]}>
        <torusGeometry args={[2.05, 0.012, 16, 100]} />

        <meshBasicMaterial
          color="#60a5fa"
          transparent
          opacity={0.3}
        />
      </mesh>

      {/* Second orbit */}
      <mesh ref={ringRef2} rotation={[0.4, 1.1, 0]}>
        <torusGeometry args={[2.35, 0.008, 16, 100]} />

        <meshBasicMaterial
          color="#2563eb"
          transparent
          opacity={0.2}
        />
      </mesh>

      {/* Center */}
      <mesh>
        <sphereGeometry args={[0.11, 32, 32]} />

        <meshBasicMaterial
          color="#93c5fd"
          transparent
          opacity={0.9}
        />
      </mesh>
    </Float>
  );
}


/* =========================================================
   THREE.JS SCENE
========================================================= */

function HeroScene() {
  return (
    <Canvas
      camera={{
        position: [0, 0, 6],
        fov: 45,
      }}
      dpr={[1, 1.5]}
      gl={{
        antialias: true,
        alpha: true,
      }}
    >
      {/* Stars / particles */}
      <Stars
        radius={7}
        depth={5}
        count={650}
        factor={1.2}
        saturation={0}
        fade
        speed={0.2}
      />

      {/* Light */}
      <ambientLight intensity={0.5} />

      <pointLight
        position={[2, 2, 3]}
        intensity={1.5}
        color="#60a5fa"
      />

      <TechSphere />
    </Canvas>
  );
}


/* =========================================================
   HERO COMPONENT
========================================================= */

export default function Hero() {
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  // Flip state
  const [isFlipped, setIsFlipped] = useState(false);

  // Scroll progress
  const [scrollProgress, setScrollProgress] = useState(0);


  /* =======================================================
     TYPING ANIMATION
  ======================================================= */

  useEffect(() => {
    const currentRole = roles[roleIndex];

    let timer: NodeJS.Timeout;

    if (!isDeleting && displayText !== currentRole) {
      timer = setTimeout(() => {
        setDisplayText(
          currentRole.slice(
            0,
            displayText.length + 1
          )
        );
      }, 90);
    } else if (
      !isDeleting &&
      displayText === currentRole
    ) {
      timer = setTimeout(() => {
        setIsDeleting(true);
      }, 2000);
    } else if (
      isDeleting &&
      displayText !== ''
    ) {
      timer = setTimeout(() => {
        setDisplayText(
          currentRole.slice(
            0,
            displayText.length - 1
          )
        );
      }, 50);
    } else if (
      isDeleting &&
      displayText === ''
    ) {
      setIsDeleting(false);

      setRoleIndex(
        (prev) => (prev + 1) % roles.length
      );
    }

    return () => clearTimeout(timer);
  }, [
    displayText,
    isDeleting,
    roleIndex,
  ]);


  /* =======================================================
     SCROLL ANIMATION
  ======================================================= */

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;

      const maxScroll =
        window.innerHeight * 0.8;

      const progress = Math.min(
        scrollY / maxScroll,
        1
      );

      setScrollProgress(progress);
    };

    window.addEventListener(
      'scroll',
      handleScroll,
      { passive: true }
    );

    handleScroll();

    return () => {
      window.removeEventListener(
        'scroll',
        handleScroll
      );
    };
  }, []);


  /* =======================================================
     SCROLL TRANSFORMS
  ======================================================= */

  const backTransform = `
    translateY(${scrollProgress * -45}px)
    scale(${1 + scrollProgress * 0.08})
    rotate(${scrollProgress * 7}deg)
  `;

  const imageTransform = `
    translateY(${scrollProgress * 12}px)
    scale(${1 - scrollProgress * 0.025})
  `;


  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden bg-background"
      style={{
        paddingTop: 'calc(72px + 30px)',
        paddingBottom: '80px',
      }}
    >

      {/* =================================================
          BACKGROUND GLOWS
      ================================================= */}

      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-52 -left-52 w-[650px] h-[650px] rounded-full z-0"
        style={{
          background:
            'radial-gradient(circle, var(--color-accent-glow) 0%, var(--color-accent-subtle) 50%, transparent 70%)',
        }}
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute top-[10%] -right-52 w-[700px] h-[700px] rounded-full z-0"
        style={{
          background:
            'radial-gradient(circle, var(--color-accent-subtle) 0%, var(--color-accent-glow) 50%, transparent 70%)',
        }}
      />


      {/* =================================================
          MAIN CONTAINER
      ================================================= */}

      <div className="relative z-10 mx-auto max-w-6xl w-full px-6">

        <div className="grid grid-cols-1 lg:grid-cols-[1.15fr_0.85fr] items-center gap-12">


          {/* =================================================
              LEFT — TEXT CONTENT
          ================================================= */}

          <div className="flex flex-col text-center lg:text-left items-center lg:items-start">

            {/* Available badge */}

            <div className="inline-flex items-center gap-2 text-xs font-bold tracking-[0.08em] uppercase text-primary bg-primary/10 border border-primary/30 px-4 py-1.5 rounded-full mb-6">

              <span className="w-2 h-2 rounded-full bg-emerald-400 shadow-[0_0_10px_#10b981] animate-pulse" />

              Available for New Projects

            </div>


            {/* Greeting */}

            <h3 className="text-xl font-semibold text-muted-foreground mb-0.5">
              Hi, I&apos;m
            </h3>


            {/* Name */}

            <h1
              className="font-extrabold leading-[1.1] tracking-[-0.03em] mb-3"
              style={{
                fontSize:
                  'clamp(2.25rem, 5.5vw, 3.75rem)',

                background:
                  'linear-gradient(135deg, var(--color-text-primary) 30%, var(--color-accent) 70%, var(--color-accent-light) 100%)',

                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',

                filter:
                  'drop-shadow(0 4px 24px var(--color-accent-glow))',
              }}
            >
              Rubab Fatima
            </h1>


            {/* Animated Role */}

            <h2
              className="font-bold text-muted-foreground mb-6 min-h-[42px] flex items-center justify-center lg:justify-start"
              style={{
                fontSize:
                  'clamp(1.25rem, 2.8vw, 1.875rem)',
              }}
            >
              <span className="text-primary">
                {displayText}
              </span>

              <span className="text-primary font-light animate-[blink_1s_infinite]">
                |
              </span>
            </h2>


            {/* Description */}

            <p className="text-base text-muted-foreground leading-[1.75] mb-8 max-w-[600px]">
              Physics graduate and creative content creator with experience in{' '}

              <strong className="text-primary font-semibold">
                teaching since 2019
              </strong>
              {' '}and YouTube content creation since 2025. Skilled in{' '}

              <strong className="text-primary font-semibold">
                CapCut Pro, Canva, and AI-assisted content creation
              </strong>{' '}

              with a focus on engaging short-form video.
            </p>


            {/* =================================================
                SOCIAL LINKS
            ================================================= */}

            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3 mb-8">

              {[
                {
                  href: 'https://wa.me/923468074658',
                  icon: <WhatsappIcon size={18} />,
                  label: 'WhatsApp',
                },

                {
                  href: 'mailto:rubab1668@gmail.com',
                  icon: <Mail size={18} />,
                  label: 'Email',
                },
              ].map((s) => (

                <a
                  key={s.href}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  className="inline-flex items-center gap-2 text-xs font-semibold text-muted-foreground bg-card/80 border border-border/60 px-4 py-2 rounded-full backdrop-blur-sm transition-all duration-300 hover:text-white hover:bg-primary hover:border-primary hover:-translate-y-[3px] hover:shadow-[0_4px_20px_var(--color-accent-glow)]"
                >

                  {s.icon}

                  {s.label && (
                    <span>{s.label}</span>
                  )}

                </a>

              ))}

            </div>


            {/* =================================================
                CTA BUTTONS
            ================================================= */}

            <div className="flex flex-col sm:flex-row gap-4 mb-10 w-full sm:w-auto">

              <a
                href="mailto:rubab1668@gmail.com?subject=Resume%20Request"
                className="inline-flex items-center justify-center gap-2 text-base font-bold text-white bg-gradient-to-r from-[var(--color-accent-dark)] to-[var(--color-accent)] px-7 py-3.5 rounded-full transition-all duration-300 shadow-[0_4px_20px_var(--color-accent-glow)] hover:-translate-y-[3px] hover:shadow-[0_6px_28px_var(--color-accent-glow)] hover:brightness-110"
              >
                <Mail size={18} />
                Request Resume
              </a>


              <a
                href="#contact"
                className="inline-flex items-center justify-center gap-2 text-base font-semibold text-foreground bg-card/80 border border-border/60 px-7 py-3.5 rounded-full transition-all duration-300 hover:border-primary hover:bg-primary/10 hover:-translate-y-[3px] hover:shadow-[0_4px_20px_var(--color-accent-glow)]"
              >

                <Mail size={18} />

                Contact Me

              </a>

            </div>


            {/* =================================================
                STATS
            ================================================= */}

            <div className="grid grid-cols-3 gap-4 max-w-[520px] w-full">

              {[
                {
                  value: '2019+',
                  label: 'Tutoring Since',
                },

                {
                  value: '2025+',
                  label: 'Content Creation',
                },

                {
                  value: 'BSc',
                  label: 'Physics Graduate',
                },
              ].map((stat) => (

                <div
                  key={stat.label}
                  className="bg-card/80 border border-border/60 rounded-xl px-5 py-4 backdrop-blur-sm flex flex-col items-start transition-all duration-300 hover:border-primary/40 hover:-translate-y-0.5"
                >

                  <span className="text-2xl font-extrabold text-primary">
                    {stat.value}
                  </span>

                  <span className="text-xs font-semibold uppercase tracking-[0.05em] text-muted-foreground">
                    {stat.label}
                  </span>

                </div>

              ))}

            </div>

          </div>


          {/* =================================================
              RIGHT — THREE.JS + FLIP CARD
          ================================================= */}

          <div className="relative hidden lg:flex justify-center items-center">

            {/* =================================================
                THREE.JS BACKGROUND
            ================================================= */}

            <div
              className="absolute w-[500px] h-[500px] pointer-events-none transition-transform duration-100"
              style={{
                transform: backTransform,
              }}
            >

              <HeroScene />

            </div>


            {/* =================================================
                FLIP CARD CONTAINER
            ================================================= */}

            <div
              className="relative w-[320px] h-[400px]"
              style={{
                perspective: '1200px',
              }}
            >

              {/* =================================================
                  CARD
              ================================================= */}

              <div
                className="relative w-full h-full cursor-pointer transition-transform duration-700"
                onClick={() =>
                  setIsFlipped((prev) => !prev)
                }
                style={{
                  transformStyle: 'preserve-3d',

                  transform: isFlipped
                    ? 'rotateY(180deg)'
                    : 'rotateY(0deg)',
                }}
              >


                {/* =================================================
                    FRONT IMAGE
                ================================================= */}

                {/* <div
                  className="absolute inset-0 rounded-[28px] p-[3px]"
                  style={{
                    backfaceVisibility: 'hidden',
                    WebkitBackfaceVisibility: 'hidden',

                    background:
                      'linear-gradient(145deg, var(--color-accent), var(--color-border), transparent 75%)',

                    boxShadow:
                      '0 20px 50px rgba(0,0,0,0.18)',
                  }}
                >

                  <div className="relative w-full h-full overflow-hidden rounded-[25px] bg-background">

                    <Image
                      src="/irfan-new.jpg"
                      alt="Portfolio portrait"
                      width={400}
                      height={480}
                      className="w-full h-full object-cover object-top"
                      priority
                    />



                    <div
                      className="absolute inset-x-0 bottom-0 h-24 pointer-events-none"
                      style={{
                        background:
                          'linear-gradient(to top, var(--color-background), transparent)',
                      }}
                    />


                    <div className="absolute bottom-4 left-1/2 -translate-x-1/2">

                      <span className="text-[10px] font-semibold text-white/80 bg-black/30 backdrop-blur-sm px-3 py-1 rounded-full whitespace-nowrap">
                        Click to view back
                      </span>

                    </div>

                  </div>

                </div> */}


                {/* =================================================
                    BACK IMAGE
                ================================================= */}

                {/* <div
                  className="absolute inset-0 rounded-[28px] p-[3px]"
                  style={{
                    backfaceVisibility: 'hidden',
                    WebkitBackfaceVisibility: 'hidden',

                    transform:
                      'rotateY(180deg)',

                    background:
                      'linear-gradient(145deg, var(--color-accent), var(--color-border), transparent 75%)',

                    boxShadow:
                      '0 20px 50px rgba(0,0,0,0.18)',
                  }}
                >

                  <div className="relative w-full h-full overflow-hidden rounded-[25px] bg-background">

                    <Image
                      src="/irfan-back.jpg"
                      alt="Portfolio portrait"
                      width={400}
                      height={480}
                      className="w-full h-full object-cover object-center"
                    />



                    <div
                      className="absolute inset-0 pointer-events-none"
                      style={{
                        background:
                          'linear-gradient(to top, rgba(0,0,0,0.5), transparent 50%)',
                      }}
                    />



                    <div className="absolute bottom-4 left-1/2 -translate-x-1/2">

                      <span className="text-[10px] font-semibold text-white/80 bg-black/30 backdrop-blur-sm px-3 py-1 rounded-full whitespace-nowrap">
                        Click to view front
                      </span>

                    </div>

                  </div>

                </div> */}

              </div>


              {/* =================================================
                  FRONT BADGES
              ================================================= */}

              {!isFlipped && (
                <>

                  {/* React Badge */}

                  <div className="absolute -top-4 -right-6 flex items-center gap-2 bg-background/95 border border-primary/30 text-foreground px-3.5 py-2 rounded-2xl text-xs font-bold backdrop-blur-md shadow-lg pointer-events-none">

                    <Code2
                      size={15}
                      className="text-primary"
                    />

                    <span>
                      CapCut Pro &amp; Canva
                    </span>

                  </div>


                  {/* Experience Badge */}

                  <div className="absolute -bottom-4 -left-6 flex items-center gap-2 bg-background/95 border border-amber-400/30 text-foreground px-3.5 py-2 rounded-2xl text-xs font-bold backdrop-blur-md shadow-lg pointer-events-none">

                    <Briefcase
                      size={15}
                      className="text-amber-400"
                    />

                    <span>
                      Tutor Since 2019
                    </span>

                  </div>

                </>
              )}

            </div>

          </div>

        </div>

      </div>



    </section>
  );
}