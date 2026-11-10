import { Mail, Send, Clock, CheckCircle2 } from 'lucide-react';
import { GithubIcon, WhatsappIcon, LinkedinIcon } from './Icons';
import SectionHeader from './SectionHeader';
import { Card } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

export default function Contact() {
  return (
    <section id="contact" className="py-20 bg-background relative">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeader
          label="Get in Touch"
          title="Let's Work"
          highlight="Together"
          subtitle="Have a project in mind? I'd love to hear about it."
        />

        {/* 2-Column Equal Size & Shape Grid */}
        <div className="mt-8 grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
          {/* Left Card: Contact Info & Channels */}
          <Card className="flex flex-col justify-between border-border/80 bg-card/60 p-6 sm:p-8 rounded-2xl backdrop-blur-xl shadow-xl shadow-black/10 dark:shadow-black/30">
            <div>
              <div className="flex items-center justify-between gap-2 mb-3">
                <h3 className="text-xl sm:text-2xl font-bold text-foreground">
                  Contact Information
                </h3>
                <Badge variant="cyan" className="text-[11px] font-semibold gap-1.5 py-1 px-3">
                  <span className="h-2 w-2 rounded-full bg-primary animate-pulse" />
                  Available for Hire
                </Badge>
              </div>

              <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed mb-6">
                Feel free to reach out via email, LinkedIn, GitHub, or WhatsApp. 
                I&apos;m open to discussing new projects, remote positions, and frontend engineering opportunities.
              </p>

              {/* Direct Channels */}
              <div className="flex flex-col gap-3">
                <a
                  href="mailto:irfanthalvi@gmail.com"
                  className="group flex items-center gap-4 rounded-xl border border-border/60 bg-background/50 p-3.5 transition-all duration-300 hover:border-primary/50 hover:bg-primary/5 hover:translate-x-1"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg border border-primary/30 bg-primary/10 text-primary shrink-0 transition-transform group-hover:scale-105 shadow-[0_0_8px_var(--color-accent-glow)]">
                    <Mail size={18} />
                  </div>
                  <div className="min-w-0">
                    <span className="block text-[10px] font-bold text-muted-foreground uppercase tracking-wider">
                      Email
                    </span>
                    <span className="block text-xs sm:text-sm font-semibold text-foreground truncate group-hover:text-primary transition-colors">
                      irfanthalvi@gmail.com
                    </span>
                  </div>
                </a>

                <a
                  href="https://www.linkedin.com/in/irfan-ali-66205a2b3"
                  className="group flex items-center gap-4 rounded-xl border border-border/60 bg-background/50 p-3.5 transition-all duration-300 hover:border-primary/50 hover:bg-primary/5 hover:translate-x-1"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg border border-primary/30 bg-primary/10 text-primary shrink-0 transition-transform group-hover:scale-105 shadow-[0_0_8px_var(--color-accent-glow)]">
                    <LinkedinIcon size={18} />
                  </div>
                  <div className="min-w-0">
                    <span className="block text-[10px] font-bold text-muted-foreground uppercase tracking-wider">
                      LinkedIn
                    </span>
                    <span className="block text-xs sm:text-sm font-semibold text-foreground truncate group-hover:text-primary transition-colors">
                      linkedin.com/in/irfan-ali-66205a2b3
                    </span>
                  </div>
                </a>

                <a
                  href="https://github.com/Irfanthalvi"
                  className="group flex items-center gap-4 rounded-xl border border-border/60 bg-background/50 p-3.5 transition-all duration-300 hover:border-primary/50 hover:bg-primary/5 hover:translate-x-1"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg border border-primary/30 bg-primary/10 text-primary shrink-0 transition-transform group-hover:scale-105 shadow-[0_0_8px_var(--color-accent-glow)]">
                    <GithubIcon size={18} />
                  </div>
                  <div className="min-w-0">
                    <span className="block text-[10px] font-bold text-muted-foreground uppercase tracking-wider">
                      GitHub
                    </span>
                    <span className="block text-xs sm:text-sm font-semibold text-foreground truncate group-hover:text-primary transition-colors">
                      github.com/Irfanthalvi
                    </span>
                  </div>
                </a>

                <a
                  href="https://wa.me/923337484980?text=Hi%20I%20want%20to%20connect%20with%20you"
                  className="group flex items-center gap-4 rounded-xl border border-border/60 bg-background/50 p-3.5 transition-all duration-300 hover:border-primary/50 hover:bg-primary/5 hover:translate-x-1"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg border border-primary/30 bg-primary/10 text-primary shrink-0 transition-transform group-hover:scale-105 shadow-[0_0_8px_var(--color-accent-glow)]">
                    <WhatsappIcon size={18} />
                  </div>
                  <div className="min-w-0">
                    <span className="block text-[10px] font-bold text-muted-foreground uppercase tracking-wider">
                      WhatsApp / Call
                    </span>
                    <span className="block text-xs sm:text-sm font-semibold text-foreground truncate group-hover:text-primary transition-colors">
                      +92 333 7484980
                    </span>
                  </div>
                </a>
              </div>
            </div>

            {/* Left Card Bottom Info */}
            <div className="mt-6 flex items-center justify-between border-t border-border/60 pt-4 text-xs text-muted-foreground">
              <div className="flex items-center gap-1.5">
                <Clock size={14} className="text-primary" />
                <span>Quick response within 24 hours</span>
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle2 size={14} className="text-emerald-400" />
                <span>100% Job Success</span>
              </div>
            </div>
          </Card>

          {/* Right Card: Send Message Form */}
          <Card className="flex flex-col justify-between border-border/80 bg-card/60 p-6 sm:p-8 rounded-2xl backdrop-blur-xl shadow-xl shadow-black/10 dark:shadow-black/30">
            <div>
              <h3 className="text-xl sm:text-2xl font-bold text-foreground mb-3">
                Send a Message
              </h3>
              <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed mb-6">
                Fill out the form below and I&apos;ll get back to you as soon as possible.
              </p>

              <form action="https://formsubmit.co/irfanthalvi@gmail.com" method="POST" className="flex flex-col gap-4">
                <input type="hidden" name="_captcha" value="false" />
                <input type="hidden" name="_template" value="table" />

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="flex flex-col gap-1.5">
                    <label htmlFor="contact-name" className="text-xs font-semibold text-foreground/80">
                      Your Name
                    </label>
                    <Input
                      type="text"
                      id="contact-name"
                      name="name"
                      placeholder="e.g. John Doe"
                      required
                    />
                  </div>

                  <div className="flex flex-col gap-1.5">
                    <label htmlFor="contact-email" className="text-xs font-semibold text-foreground/80">
                      Your Email
                    </label>
                    <Input
                      type="email"
                      id="contact-email"
                      name="email"
                      placeholder="e.g. john@example.com"
                      required
                    />
                  </div>
                </div>

                <div className="flex flex-col gap-1.5">
                  <label htmlFor="contact-subject" className="text-xs font-semibold text-foreground/80">
                    Subject
                  </label>
                  <Input
                    type="text"
                    id="contact-subject"
                    name="subject"
                    placeholder="Project Inquiry / Frontend Development"
                    required
                  />
                </div>

                <div className="flex flex-col gap-1.5">
                  <label htmlFor="contact-message" className="text-xs font-semibold text-foreground/80">
                    Message
                  </label>
                  <Textarea
                    id="contact-message"
                    name="message"
                    placeholder="Tell me about your project, timeline, and goals..."
                    rows={4}
                    required
                  />
                </div>

                <Button
                  type="submit"
                  variant="glow"
                  size="lg"
                  className="mt-2 w-full rounded-xl py-3.5 text-sm font-bold uppercase tracking-wider"
                >
                  <Send size={16} />
                  Send Message
                </Button>
              </form>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
}
