import { useParams, Link, Navigate } from 'react-router-dom';
import { projects } from '../data/portfolioData';
import Reveal from '../components/Reveal';
import SectionIndicator from '../components/SectionIndicator';

export default function CaseStudy() {
  const { id } = useParams();
  const project = projects.find(p => p.id === id);

  if (!project) return <Navigate to="/" />;

  const sections = [
    { id: 'overview', label: 'Overview' },
    { id: 'challenge', label: 'Challenge' },
    { id: 'goals', label: 'Goals' },
    { id: 'constraints', label: 'Constraints' },
    { id: 'my-role', label: 'My Role' },
    { id: 'discovery', label: 'Discovery' },
    { id: 'strategy', label: 'Strategy' },
    { id: 'process', label: 'Process' },
    { id: 'key-decisions', label: 'Key Decisions' },
    { id: 'solution', label: 'Solution' },
    { id: 'outcomes', label: 'Outcomes' },
    { id: 'reflection', label: 'Reflection' },
  ];

  return (
    <div className="relative">
      <SectionIndicator sections={sections} />

      {/* HERO */}
      <section id="overview" className="bg-surface border-b border-border pt-28 pb-16 px-gutter">
        <div className="max-w-[1200px] mx-auto">
          <Link to="/" className="text-text-muted text-[0.875rem] hover:text-accent transition-colors">
            ← All work
          </Link>
          <div className="flex flex-wrap gap-2 mt-6">
            {project.tags.map(tag => (
              <span key={tag} className="bg-surface-2 text-text-muted text-[0.7rem] border border-border px-2 py-1">
                {tag}
              </span>
            ))}
          </div>
          <h1 className="text-h2 text-text-primary mt-6">{project.title}</h1>
          <p className="text-accent text-lg font-medium mt-3 max-w-[800px]">
            {project.outcome}
          </p>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-12">
            <div>
              <div className="text-text-faint text-xs uppercase tracking-widest font-bold mb-1">Client</div>
              <div className="text-text-primary text-sm">{project.client}</div>
            </div>
            <div>
              <div className="text-text-faint text-xs uppercase tracking-widest font-bold mb-1">Industry</div>
              <div className="text-text-primary text-sm">{project.industry}</div>
            </div>
            <div>
              <div className="text-text-faint text-xs uppercase tracking-widest font-bold mb-1">Role</div>
              <div className="text-text-primary text-sm">{project.role}</div>
            </div>
            <div>
              <div className="text-text-faint text-xs uppercase tracking-widest font-bold mb-1">Platform</div>
              <div className="text-text-primary text-sm">{project.platform}</div>
            </div>
          </div>

          <div className="mt-12 aspect-video bg-surface-2 border border-border flex items-center justify-center text-text-faint">
            {project.title} — Product Preview
          </div>
        </div>
      </section>

      {/* CONTENT SECTIONS */}
      <div className="max-w-[780px] mx-auto px-gutter py-16">
        
        {/* CHALLENGE */}
        <section id="challenge" className="mb-24">
          <Reveal>
            <span className="text-accent text-[0.7rem] uppercase tracking-[0.15em] block mb-2">THE CHALLENGE</span>
            <h2 className="text-[1.8rem] text-text-primary mb-6">{project.challenge.heading}</h2>
            <div className="text-text-muted leading-relaxed space-y-6">
              <p>{project.challenge.body}</p>
              <div className="space-y-4">
                {project.challenge.blocks.map((block, i) => {
                  const [title, ...rest] = block.split(':');
                  return (
                    <div key={i} className="bg-surface border-l-3 border-accent p-6">
                      <strong className="text-text-primary block mb-1">{title}</strong>
                      <p className="text-sm">{rest.join(':')}</p>
                    </div>
                  );
                })}
              </div>
              <div className="bg-accent/5 border border-accent/20 p-8 mt-8">
                <p className="text-text-primary italic text-lg leading-relaxed">
                  "{project.challenge.businessGoal}"
                </p>
              </div>
            </div>
          </Reveal>
        </section>

        <hr className="border-none border-t border-border my-16" />

        {/* GOALS */}
        <section id="goals" className="mb-24">
          <Reveal>
            <span className="text-accent text-[0.7rem] uppercase tracking-[0.15em] block mb-2">GOALS</span>
            <h2 className="text-[1.8rem] text-text-primary mb-8">What success looked like before we started.</h2>
            <div className="space-y-6">
              {project.goals.map((goal, i) => (
                <div key={i} className="flex gap-6">
                  <span className="text-accent font-bold">0{i + 1}</span>
                  <p className="text-text-muted">{goal}</p>
                </div>
              ))}
            </div>
          </Reveal>
        </section>

        <hr className="border-none border-t border-border my-16" />

        {/* CONSTRAINTS */}
        <section id="constraints" className="mb-24">
          <Reveal>
            <span className="text-accent text-[0.7rem] uppercase tracking-[0.15em] block mb-2">CONSTRAINTS</span>
            <h2 className="text-[1.8rem] text-text-primary mb-8">The real-world conditions that shaped every decision.</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {project.constraints.map((c, i) => {
                const [title, ...rest] = c.split(':');
                return (
                  <div key={i} className="border border-border p-6 bg-surface/50">
                    <div className="text-accent font-bold text-xs mb-2">0{i + 1}</div>
                    <h4 className="text-text-primary font-bold text-sm mb-2">{title}</h4>
                    <p className="text-text-muted text-xs leading-relaxed">{rest.join(':')}</p>
                  </div>
                );
              })}
            </div>
          </Reveal>
        </section>

        <hr className="border-none border-t border-border my-16" />

        {/* MY ROLE */}
        <section id="my-role" className="mb-24">
          <Reveal>
            <span className="text-accent text-[0.7rem] uppercase tracking-[0.15em] block mb-2">MY ROLE</span>
            <h2 className="text-[1.8rem] text-text-primary mb-6">What I owned. All of it.</h2>
            <p className="text-text-muted mb-8">
              Sole designer across the entire product surface. This meant no design handoffs between team members — every decision started and ended with me.
            </p>
            <div className="space-y-4">
              {project.myRole.map((role, i) => (
                <div key={i} className="flex items-center gap-3 text-text-muted">
                  <span className="text-accent">→</span>
                  <span>{role}</span>
                </div>
              ))}
            </div>
          </Reveal>
        </section>

        <hr className="border-none border-t border-border my-16" />

        {/* DISCOVERY */}
        <section id="discovery" className="mb-24">
          <Reveal>
            <span className="text-accent text-[0.7rem] uppercase tracking-[0.15em] block mb-2">DISCOVERY & DIAGNOSIS</span>
            <h2 className="text-[1.8rem] text-text-primary mb-6">{project.discovery.heading}</h2>
            <p className="text-text-muted leading-relaxed mb-10">{project.discovery.body}</p>
            <div className="bg-surface border border-border p-8 md:p-10">
              <span className="text-accent text-[0.7rem] uppercase font-bold block mb-4">KEY INSIGHT</span>
              <p className="text-text-primary text-xl font-display leading-relaxed">
                "{project.discovery.insight}"
              </p>
            </div>
          </Reveal>
        </section>

        <hr className="border-none border-t border-border my-16" />

        {/* STRATEGY */}
        <section id="strategy" className="mb-24">
          <Reveal>
            <span className="text-accent text-[0.7rem] uppercase tracking-[0.15em] block mb-2">STRATEGY</span>
            <h2 className="text-[1.8rem] text-text-primary mb-8">{project.strategy.heading}</h2>
            <div className="space-y-8">
              {project.strategy.principles.map((p, i) => (
                <div key={i} className="space-y-2">
                  <div className="flex items-center gap-4">
                    <span className="text-accent font-bold">0{i + 1}</span>
                    <h4 className="text-text-primary font-bold text-lg">{p.title}</h4>
                  </div>
                  <p className="text-text-muted leading-relaxed pl-10">{p.body}</p>
                </div>
              ))}
            </div>
          </Reveal>
        </section>

        <hr className="border-none border-t border-border my-16" />

        {/* PROCESS */}
        <section id="process" className="mb-24">
          <Reveal>
            <span className="text-accent text-[0.7rem] uppercase tracking-[0.15em] block mb-2">PROCESS</span>
            <h2 className="text-[1.8rem] text-text-primary mb-8">{project.process.heading}</h2>
            <div className="space-y-12 relative">
              <div className="absolute left-0 top-0 bottom-0 w-[1px] bg-border" />
              {project.process.steps.map((step, i) => (
                <div key={i} className="pl-10 relative">
                  <div className="absolute left-[-4px] top-2 w-2 h-2 rounded-full bg-accent" />
                  <h4 className="text-text-primary font-bold mb-2">Step {i + 1}: {step.title}</h4>
                  <p className="text-text-muted leading-relaxed text-sm">{step.body}</p>
                </div>
              ))}
            </div>
          </Reveal>
        </section>

        <hr className="border-none border-t border-border my-16" />

        {/* KEY DECISIONS */}
        <section id="key-decisions" className="mb-24">
          <Reveal>
            <span className="text-accent text-[0.7rem] uppercase tracking-[0.15em] block mb-2">KEY DECISIONS</span>
            <h2 className="text-[1.8rem] text-text-primary mb-8">{project.keyDecisions.heading}</h2>
            <div className="space-y-8">
              {project.keyDecisions.decisions.map((d, i) => (
                <div key={i} className="bg-surface border border-border p-8 space-y-6">
                  <h4 className="text-text-primary font-bold text-lg border-b border-border pb-4">DECISION {i + 1}: {d.title}</h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div>
                      <span className="text-text-faint text-[0.7rem] uppercase font-bold block mb-2">What we could have done</span>
                      <p className="text-text-muted text-sm leading-relaxed">{d.before}</p>
                    </div>
                    <div>
                      <span className="text-accent text-[0.7rem] uppercase font-bold block mb-2">What we chose</span>
                      <p className="text-text-muted text-sm leading-relaxed">{d.after}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </Reveal>
        </section>

        <hr className="border-none border-t border-border my-16" />

        {/* SOLUTION */}
        <section id="solution" className="mb-24">
          <Reveal>
            <span className="text-accent text-[0.7rem] uppercase tracking-[0.15em] block mb-2">FINAL SOLUTION</span>
            <h2 className="text-[1.8rem] text-text-primary mb-6">{project.solution.heading}</h2>
            <p className="text-text-muted leading-relaxed mb-10">{project.solution.body}</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {project.solution.placeholders.map((p, i) => (
                <div key={i} className="space-y-2">
                  <div className="aspect-[4/3] bg-surface-2 border border-border flex items-center justify-center text-text-faint text-xs text-center p-4">
                    {p}
                  </div>
                  <span className="text-text-faint text-[0.7rem] block text-center italic">{p}</span>
                </div>
              ))}
            </div>
          </Reveal>
        </section>

        <hr className="border-none border-t border-border my-16" />

        {/* OUTCOMES */}
        <section id="outcomes" className="mb-24">
          <Reveal>
            <span className="text-accent text-[0.7rem] uppercase tracking-[0.15em] block mb-2">OUTCOMES</span>
            <h2 className="text-[1.8rem] text-text-primary mb-8">{project.outcomes.heading}</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {project.outcomes.items.map((item, i) => {
                const [title, ...rest] = item.split(':');
                return (
                  <div key={i} className="bg-surface border border-border p-6">
                    <h4 className="text-accent font-bold text-sm mb-2 uppercase tracking-wide">{title}</h4>
                    <p className="text-text-muted text-sm leading-relaxed">{rest.join(':')}</p>
                  </div>
                );
              })}
            </div>
            <p className="text-text-muted text-sm italic mt-8">
              "Specific conversion and revenue metrics are confidential to the client. Results available in conversation."
            </p>
          </Reveal>
        </section>

        <hr className="border-none border-t border-border my-16" />

        {/* REFLECTION */}
        <section id="reflection" className="mb-24">
          <Reveal>
            <span className="text-accent text-[0.7rem] uppercase tracking-[0.15em] block mb-2">REFLECTION</span>
            <h2 className="text-[1.8rem] text-text-primary mb-6">What I'd do differently.</h2>
            <p className="text-text-muted italic">
              This section will include Abhishek's honest reflection on what he learned, what surprised him, and what he'd approach differently with more time or resources.
            </p>
          </Reveal>
        </section>

        {/* CASE STUDY CTA */}
        <section className="bg-surface border border-border p-10 md:p-16 text-center mt-24">
          <Reveal>
            <h3 className="text-h3 text-text-primary mb-8">Designing a 0→1 product and need someone who can handle the full surface?</h3>
            <a
              href="mailto:kumarabhishekbuild@gmail.com?subject=Discovery Call Request"
              className="inline-block bg-accent text-black px-10 py-4 font-semibold text-lg hover:bg-accent-dim transition-all"
            >
              Book a discovery call →
            </a>
            <div className="mt-8 text-text-muted text-sm">
              Or view the next project → 
              <div className="flex justify-center gap-4 mt-4">
                {projects.filter(p => p.id !== project.id).map(p => (
                  <Link key={p.id} to={`/work/${p.id}`} className="text-accent hover:underline">
                    [{p.title.split('—')[0].trim()}]
                  </Link>
                ))}
              </div>
            </div>
          </Reveal>
        </section>
      </div>
    </div>
  );
}
