import { Link } from 'react-router-dom';
import { projects, services, processSteps, testimonials, faqs } from '../data/portfolioData';
import Reveal from '../components/Reveal';
import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { Hero } from '@/src/components/ui/animated-hero';
import GeometricBackground from '@/src/components/ui/geometric';

export default function Home() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <div className="overflow-x-hidden">
      {/* SECTION 1: HERO */}
      <GeometricBackground>
        <Hero />
      </GeometricBackground>

      {/* SECTION 2: PROOF BAR */}
      <section className="bg-surface border-y border-border py-10 px-gutter">
        <div className="max-w-[1200px] mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { label: 'LIVE PRODUCTS', value: 'Skooltag.com · Stratalite.ca · Manbal.ai' },
              { label: 'INDUSTRIES', value: 'EdTech · E-commerce · B2B · Consumer' },
              { label: 'MARKETS', value: 'India · Canada (Vancouver)' },
              { label: 'BACKGROUND', value: 'BE Computer Science · 2024' }
            ].map((item, i) => (
              <Reveal key={i} delay={i * 100}>
                <div className="text-text-faint text-[0.7rem] uppercase tracking-widest font-bold mb-1">{item.label}</div>
                <div className="text-text-primary text-[1rem] font-semibold">{item.value}</div>
              </Reveal>
            ))}
          </div>
          <p className="text-text-muted text-center text-[0.9rem] italic mt-8">
            "From discovery workshops to dev handoff — across two countries, three live products, and four years of iteration."
          </p>
        </div>
      </section>

      {/* SECTION 3: SELECTED WORK */}
      <section id="work" className="space-section px-gutter max-w-[1200px] mx-auto">
        <Reveal className="mb-16">
          <span className="text-accent text-[0.75rem] font-bold uppercase tracking-[0.15em]">SELECTED WORK</span>
          <h2 className="text-h2 text-text-primary mt-4">Three products. Three real clients. All live.</h2>
          <p className="text-text-muted text-body-lg max-w-[500px] mt-4">
            Not concept exercises. Not Figma mockups labeled "in progress." Products that are running, being used, and earning money for real businesses.
          </p>
        </Reveal>

        <div className="space-y-12">
          {projects.map((project, i) => (
            <Reveal key={project.id} delay={i * 100}>
              <Link
                to={`/work/${project.id}`}
                className="group block bg-surface border border-border p-6 md:p-10 hover:border-accent hover:bg-surface-2 transition-all duration-300"
              >
                <div className="flex flex-col md:flex-row gap-10">
                  <div className="w-full md:w-[45%] aspect-[4/3] bg-surface-2 overflow-hidden relative border border-border/50">
                    <div className="absolute inset-0 flex items-center justify-center text-text-faint text-sm">
                      {project.title} Preview
                    </div>
                    <div className="absolute bottom-4 left-4 text-accent text-[0.7rem] font-bold">{project.liveLabel}</div>
                  </div>
                  <div className="w-full md:w-[55%] flex flex-col">
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tags.slice(0, 4).map(tag => (
                        <span key={tag} className="bg-surface-2 text-text-muted text-[0.7rem] border border-border px-2 py-1">
                          {tag}
                        </span>
                      ))}
                    </div>
                    <span className="text-text-faint text-[0.75rem] mb-2">{project.number}</span>
                    <h3 className="text-[1.8rem] text-text-primary mb-2">{project.title}</h3>
                    <span className="text-text-faint text-[0.8rem] mb-4">{project.location}</span>
                    <p className="text-text-muted leading-relaxed mb-6">
                      {project.description}
                    </p>
                    <div className="bg-accent/10 border border-accent/25 text-accent text-[0.8rem] px-4 py-2 self-start mb-6">
                      {project.outcome}
                    </div>
                    <div className="mt-auto flex items-center justify-between">
                      <span className="text-text-faint text-[0.85rem]">→ Live at {project.liveLabel}</span>
                      <span className="text-accent font-semibold group-hover:underline">View case study →</span>
                    </div>
                  </div>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </section>

      {/* SECTION 4: SERVICES */}
      <section id="services" className="space-section bg-surface px-gutter">
        <div className="max-w-[1200px] mx-auto">
          <Reveal className="mb-16">
            <span className="text-accent text-[0.75rem] font-bold uppercase tracking-[0.15em]">WHAT I ACTUALLY DO</span>
            <h2 className="text-h2 text-text-primary mt-4">Pick the engagement that matches your problem.</h2>
            <p className="text-text-muted text-body-lg max-w-[500px] mt-4">
              I don't do "full-service agency." I do specific, well-defined work that connects to real business outcomes.
            </p>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {services.map((service, i) => (
              <Reveal key={i} delay={i * 50}>
                <div className="border border-border p-8 hover:border-accent hover:bg-surface-2 transition-all group">
                  <span className="text-accent text-[0.75rem] font-bold">{service.number}</span>
                  <h3 className="text-[1.4rem] text-text-primary mt-2 mb-4">{service.title}</h3>
                  <p className="text-text-muted text-[0.95rem] leading-relaxed">{service.body}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 5: PROCESS */}
      <section id="process" className="space-section px-gutter max-w-[1200px] mx-auto">
        <Reveal className="mb-16">
          <span className="text-accent text-[0.75rem] font-bold uppercase tracking-[0.15em]">HOW A PROJECT WORKS</span>
          <h2 className="text-h2 text-text-primary mt-4">No surprises. No revision spirals.</h2>
          <p className="text-text-muted text-body-lg max-w-[500px] mt-4">
            Here's how I run engagements — from first call to shipped product.
          </p>
        </Reveal>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-5 top-0 bottom-0 w-[1px] bg-border md:hidden" />
          <div className="absolute left-0 right-0 top-5 h-[1px] bg-border hidden md:block" />

          <div className="grid grid-cols-1 md:grid-cols-6 gap-8 relative">
            {processSteps.map((step, i) => (
              <Reveal key={i} delay={i * 80} className="group">
                <div className="flex flex-col items-start md:items-center text-left md:text-center">
                  <div className="w-10 h-10 bg-surface-2 border border-accent text-accent flex items-center justify-center font-bold text-sm mb-6 group-hover:bg-accent group-hover:text-bg transition-colors relative z-10">
                    {step.number}
                  </div>
                  <h4 className="text-text-primary font-bold text-sm mb-2 uppercase tracking-wide">{step.title}</h4>
                  <p className="text-text-muted text-[0.85rem] leading-relaxed opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    {step.body}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 6: TESTIMONIALS */}
      <section className="space-section bg-surface px-gutter">
        <div className="max-w-[1200px] mx-auto">
          <Reveal className="mb-16">
            <span className="text-accent text-[0.75rem] font-bold uppercase tracking-[0.15em]">WHAT COLLABORATORS SAY</span>
            <h2 className="text-h2 text-text-primary mt-4">Proof, not promises.</h2>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((t, i) => (
              <Reveal key={i} delay={i * 100}>
                <div className="bg-bg border border-border p-8 h-full flex flex-col">
                  <div className="text-accent text-5xl font-serif opacity-30 mb-2">"</div>
                  <p className="text-text-primary italic leading-relaxed mb-8 flex-grow">
                    {t.quote}
                  </p>
                  <div className="pt-6 border-t border-border">
                    <div className="flex items-center gap-4">
                      <div className="w-9 h-9 bg-surface-2" />
                      <div>
                        <div className="text-text-primary text-[0.9rem] font-semibold">{t.author}</div>
                        <div className="text-text-muted text-[0.8rem]">{t.role}</div>
                      </div>
                    </div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 7: ABOUT */}
      <section id="about" className="space-section px-gutter max-w-[1200px] mx-auto">
        <div className="flex flex-col md:flex-row gap-16">
          <div className="w-full md:w-[60%]">
            <Reveal>
              <span className="text-accent text-[0.75rem] font-bold uppercase tracking-[0.15em]">ABOUT</span>
              <h2 className="text-h2 text-text-primary mt-4 mb-8">The slightly longer version.</h2>
              <div className="space-y-6 text-text-muted leading-relaxed">
                <p>
                  I'm Abhishek — a product designer turned design-led product manager, based in Bihar and working remotely with clients across India and Canada.
                </p>
                <p>
                  I started designing products at 21, working directly inside early-stage startups and a design agency. Over four years I shipped three live products — a D2C e-commerce platform used by Delhi schools, a B2B web platform for a Vancouver contracting firm, and a 0→1 campus networking app for an AI startup.
                </p>
                <p>
                  Every one of those shipped with real engineering constraints, real client stakeholders, and real budgets. I learned to make design decisions I could defend in a room with a founder, then hand off to a developer who had three days to build it.
                </p>
                <p>
                  My CS engineering background (BE, University of Mumbai, 2024) means I can read code, understand technical trade-offs, and have informed conversations with engineers — not just hand over a Figma file and hope.
                </p>
                <p>
                  Right now I'm at the intersection of UX design and product management — doing the work that falls between "designer" and "PM": defining product scope, running stakeholder alignment, designing what matters, and making sure it ships the right way.
                </p>
                <p className="font-bold text-text-primary">
                  I work best with:
                  <br />→ Founders building something real who need more than a contractor
                  <br />→ Product teams that need design thinking at the product level, not just UI polish
                  <br />→ Companies where "it needs to look good AND convert" is the brief
                </p>
              </div>
              <a href="mailto:kumarabhishekbuild@gmail.com" className="inline-block mt-8 text-accent font-semibold hover:underline">
                Let's talk about your product →
              </a>
            </Reveal>
          </div>

          <div className="w-full md:w-[40%] grid grid-cols-2 gap-8 content-start">
            {[
              { val: '4+', label: 'Years of product design' },
              { val: '3', label: 'Live products shipped' },
              { val: '2', label: 'Countries (India + Canada)' },
              { val: '2024', label: 'BE Computer Science, Mumbai' }
            ].map((stat, i) => (
              <Reveal key={i} delay={i * 100}>
                <div className="text-accent text-[3rem] font-display leading-tight">{stat.val}</div>
                <div className="text-text-muted text-[0.85rem] mt-1">{stat.label}</div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 8: FAQ */}
      <section className="space-section bg-surface px-gutter">
        <div className="max-w-[780px] mx-auto">
          <Reveal className="mb-12">
            <span className="text-accent text-[0.75rem] font-bold uppercase tracking-[0.15em]">COMMON QUESTIONS</span>
            <h2 className="text-h2 text-text-primary mt-4">Answered before you have to ask.</h2>
          </Reveal>

          <div className="space-y-2">
            {faqs.map((faq, i) => (
              <Reveal key={i} delay={i * 50}>
                <div className="border-b border-border py-5">
                  <button
                    className="w-full flex items-center justify-between text-left group"
                    onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  >
                    <span className="text-text-primary font-semibold group-hover:text-accent transition-colors">{faq.question}</span>
                    <ChevronDown
                      className={`text-accent transition-transform duration-300 ${openFaq === i ? 'rotate-180' : ''}`}
                      size={20}
                    />
                  </button>
                  <div
                    className={`overflow-hidden transition-all duration-300 ease-out ${
                      openFaq === i ? 'max-h-96 opacity-100 mt-4' : 'max-h-0 opacity-0'
                    }`}
                  >
                    <p className="text-text-muted leading-relaxed text-[0.95rem]">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 9: FINAL CTA */}
      <section id="contact" className="py-28 px-gutter text-center border-t border-border">
        <Reveal>
          <span className="text-accent text-[0.75rem] font-bold uppercase tracking-[0.15em]">LET'S WORK TOGETHER</span>
          <h2 className="text-h2 text-text-primary mt-6 max-w-[600px] mx-auto">Got a product flow that isn't performing?</h2>
          <p className="text-text-muted text-body-lg max-w-[500px] mx-auto mt-6 leading-relaxed">
            Whether it's a leaky onboarding, a confusing dashboard, or a product that needs to be built from scratch — let's spend 30 minutes looking at it together.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4 mt-12">
            <a
              href="mailto:kumarabhishekbuild@gmail.com?subject=Discovery Call Request"
              className="bg-accent text-black px-8 py-4 font-semibold text-lg hover:bg-accent-dim transition-all"
            >
              Book a discovery call
            </a>
            <a
              href="mailto:kumarabhishekbuild@gmail.com"
              className="border border-border text-text-muted px-8 py-4 font-semibold text-lg hover:bg-surface transition-all"
            >
              Or email me directly
            </a>
          </div>
          <p className="text-text-faint text-[0.85rem] mt-6">
            No pitch deck. Just a real conversation about your product.
          </p>
        </Reveal>
      </section>
    </div>
  );
}
