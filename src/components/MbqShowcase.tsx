import { mbq } from '../content.ts';
import { Reveal, SectionHeading } from './Reveal.tsx';

export function MbqShowcase() {
  return (
    <section id="work" className="section">
      <SectionHeading
        index="04"
        eyebrow="Featured build"
        title={
          <>
            A side project that runs <span className="text-accent">every club night.</span>
          </>
        }
      />

      <div className="grid items-center gap-12 lg:grid-cols-[1.35fr_1fr]">
        <Reveal>
          {/* iPad frame around live screenshots; the screen scrolls slowly between them on hover. */}
          <a
            href={mbq.live}
            target="_blank"
            rel="noreferrer"
            className="group relative block rounded-[2.2rem] bg-ink p-3 shadow-2xl ring-1 ring-line transition-transform duration-500 hover:-rotate-1 sm:p-4"
            aria-label={`Open ${mbq.name} live`}
          >
            <div className="relative aspect-[4/3] overflow-hidden rounded-[1.4rem] bg-bg-alt">
              <img
                src="/mbq/screen-1.jpg"
                alt={`${mbq.name} queue screen with courts and the next games`}
                className="absolute inset-0 size-full object-cover object-top transition-opacity duration-700 group-hover:opacity-0"
              />
              <img
                src="/mbq/screen-2.jpg"
                alt=""
                className="absolute inset-0 size-full object-cover object-top opacity-0 transition-opacity duration-700 group-hover:opacity-100"
              />
              <span className="absolute right-3 bottom-3 rounded-full bg-hot px-3 py-1 font-mono text-[10px] tracking-widest text-white uppercase opacity-0 transition-opacity group-hover:opacity-100">
                Open live ↗
              </span>
            </div>
            <span className="absolute top-1/2 right-1.5 size-1.5 -translate-y-1/2 rounded-full bg-white/20 sm:right-2" />
          </a>
        </Reveal>

        <Reveal delay={0.15}>
          <div className="flex items-center gap-3">
            <img src="/mbq/icon.png" alt="" className="size-12 rounded-xl" />
            <div>
              <h3 className="font-display text-2xl font-bold">{mbq.name}</h3>
              <p className="font-mono text-xs tracking-widest text-muted uppercase">{mbq.code} · iPad PWA</p>
            </div>
          </div>
          <p className="mt-5 text-lg font-medium">{mbq.tagline}</p>
          <p className="mt-3 text-muted">{mbq.description}</p>
          <ul className="mt-6 space-y-2">
            {mbq.features.map((f) => (
              <li key={f} className="flex gap-3 text-sm">
                <span className="mt-1.5 size-1.5 shrink-0 rotate-45 bg-accent" />
                {f}
              </li>
            ))}
          </ul>
          <div className="mt-6 flex flex-wrap gap-1.5">
            {mbq.stack.map((s) => (
              <span key={s} className="chip px-2.5 py-1 text-xs">
                {s}
              </span>
            ))}
          </div>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href={mbq.live} target="_blank" rel="noreferrer" className="btn-primary">
              Try it live ↗
            </a>
            <a href={mbq.repo} target="_blank" rel="noreferrer" className="btn-ghost">
              Source on GitHub
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
