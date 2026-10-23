import { profile } from '../content.ts';
import { Reveal, SectionHeading } from './Reveal.tsx';

export function About() {
  return (
    <section id="about" className="section">
      <SectionHeading
        index="01"
        eyebrow="About"
        title={
          <>
            Clean systems by day. <span className="text-accent">Robot games</span> by night.
          </>
        }
      />
      <div className="grid gap-12 md:grid-cols-[1.4fr_1fr]">
        <Reveal>
          <p className="text-xl leading-relaxed text-muted md:text-2xl">{profile.summary}</p>
        </Reveal>
        <div className="grid grid-cols-3 gap-3 md:grid-cols-1">
          {profile.stats.map((s, i) => (
            <Reveal key={s.label} delay={i * 0.1}>
              <div className="group flex flex-col gap-1 rounded-2xl border border-line bg-surface p-5 transition-colors hover:border-accent md:flex-row md:items-baseline md:gap-4">
                <span className="font-display text-3xl font-bold text-accent transition-transform group-hover:-translate-y-0.5 md:text-5xl">
                  {s.value}
                </span>
                <span className="text-xs text-muted md:text-sm">{s.label}</span>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
