import dynamic from 'next/dynamic';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import About from '@/components/About';

// Dynamic code-splitting for non-critical below-the-fold components
const Skills = dynamic(() => import('@/components/Skills'));
const Experience = dynamic(() => import('@/components/Experience'));
const Projects = dynamic(() => import('@/components/Projects'));
const Freelance = dynamic(() => import('@/components/Freelance'));
const Services = dynamic(() => import('@/components/Services'));
const Process = dynamic(() => import('@/components/Process'));
const Education = dynamic(() => import('@/components/Education'));
const Contact = dynamic(() => import('@/components/Contact'));
const Footer = dynamic(() => import('@/components/Footer'));

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen">
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Freelance />
        <Services />
        <Process />
        <Education />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
