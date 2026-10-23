import { useState } from 'react';
import { awards, featuredCert, trainings } from '../content.ts';
import { Reveal, SectionHeading } from './Reveal.tsx';

export function Credentials() {
  const [flipped, setFlipped] = useState(false);

  return (
    <section id="credentials" className="section">
      <SectionHeading index="03" eyebrow="Certified" title={<>Paper that backs the work.</>} />

      <div className="grid gap-10 lg:grid-cols-[1fr_1.2fr]">
        <Reveal>
          <button
            type="button"
            onClick={() => setFlipped((f) => !f)}
            onMouseEnter={() => setFlipped(true)}
            onMouseLeave={() => setFlipped(false)}
            aria-label={`${featuredCert.title}. Flip card for details.`}
            className="group block aspect-[4/3] w-full text-left [perspective:1200px]"
          >
            <div
              className="relative size-full transition-transform duration-700 [transform-style:preserve-3d]"
              style={{ transform: flipped ? 'rotateY(180deg)' : undefined }}
            >
              {/* Front */}
              <div className="absolute inset-0 flex flex-col justify-between overflow-hidden rounded-3xl bg-invert-bg p-7 text-invert-fg [backface-visibility:hidden]">
                <div className="absolute -top-16 -right-16 size-56 rounded-full bg-accent opacity-90 blur-2xl" />
                <div className="relative flex items-start justify-between">
                  <span className="font-mono text-xs tracking-[0.3em] uppercase opacity-70">Certification</span>
                  <Hexagon />
                </div>
                <div className="relative">
                  <p className="font-display text-sm font-bold tracking-widest text-accent">AWS</p>
                  <h3 className="mt-2 font-display text-2xl leading-tight font-bold md:text-3xl">{featuredCert.title}</h3>
                  <p className="mt-3 text-sm opacity-70">{featuredCert.issuer}</p>
                </div>
              </div>
              {/* Back */}
              <div className="absolute inset-0 flex flex-col justify-between rounded-3xl bg-accent p-7 text-accent-fg [backface-visibility:hidden] [transform:rotateY(180deg)]">
                <span className="font-mono text-xs tracking-[0.3em] uppercase opacity-80">What it covers</span>
                <p className="font-display text-xl leading-snug md:text-2xl">{featuredCert.blurb}</p>
                <span className="font-mono text-xs opacity-80">Used daily: Lambda · DynamoDB · CloudFront · IAM</span>
              </div>
            </div>
          </button>
        </Reveal>

        <div className="flex flex-col gap-10">
          <Reveal delay={0.1}>
            <h3 className="mb-4 font-mono text-xs tracking-widest text-muted uppercase">Training</h3>
            <ul className="divide-y divide-line border-y border-line">
              {trainings.map((t) => (
                <li key={t.title} className="group flex items-baseline justify-between gap-4 py-3 transition-colors hover:text-accent">
                  <span>
                    <span className="font-medium">{t.title}</span>
                    <span className="block text-xs text-muted">{t.issuer}</span>
                  </span>
                  <span className="shrink-0 font-mono text-xs text-muted">{t.date}</span>
                </li>
              ))}
            </ul>
          </Reveal>
          <Reveal delay={0.2}>
            <h3 className="mb-4 font-mono text-xs tracking-widest text-muted uppercase">Awards</h3>
            <ul className="grid gap-3 sm:grid-cols-3">
              {awards.map((a) => (
                <li key={a.title} className="rounded-2xl border border-line bg-surface p-4">
                  <span className="font-display text-2xl font-bold text-accent">2nd</span>
                  <p className="mt-1 text-sm font-medium">{a.title.replace('2nd Place, ', '')}</p>
                  <p className="mt-1 text-xs text-muted">
                    {a.where} · {a.date}
                  </p>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function Hexagon() {
  return (
    <svg viewBox="0 0 48 52" className="size-12" aria-hidden>
      <path d="M24 2 45 14v24L24 50 3 38V14z" fill="none" stroke="currentColor" strokeWidth="2" opacity=".6" />
      <path d="M15 27l6 6 12-13" fill="none" stroke="var(--accent)" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}
