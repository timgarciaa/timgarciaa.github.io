import { motion, useMotionValue, useSpring, useTransform } from 'motion/react';
import { profile } from '../content.ts';
import { useReducedMotion } from '../hooks/useReducedMotion.ts';

function SplitWord({ text, delay }: { text: string; delay: number }) {
  return (
    <span className="inline-block whitespace-nowrap" aria-hidden>
      {[...text].map((ch, i) => (
        <motion.span
          key={i}
          className="inline-block"
          initial={{ y: '110%', rotate: 8, opacity: 0 }}
          animate={{ y: 0, rotate: 0, opacity: 1 }}
          transition={{ delay: delay + i * 0.05, type: 'spring', stiffness: 260, damping: 22 }}
        >
          {ch}
        </motion.span>
      ))}
    </span>
  );
}

export function Hero() {
  const reduce = useReducedMotion();
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const rx = useSpring(useTransform(my, [-0.5, 0.5], [7, -7]), { stiffness: 120, damping: 14 });
  const ry = useSpring(useTransform(mx, [-0.5, 0.5], [-9, 9]), { stiffness: 120, damping: 14 });

  const onMove = (e: React.PointerEvent<HTMLDivElement>) => {
    if (reduce || e.pointerType !== 'mouse') return;
    const r = e.currentTarget.getBoundingClientRect();
    mx.set((e.clientX - r.left) / r.width - 0.5);
    my.set((e.clientY - r.top) / r.height - 0.5);
  };

  return (
    <section id="top" className="relative isolate overflow-hidden pt-24 md:pt-28">
      {/* Giant outlined initials in the background. */}
      <div
        aria-hidden
        className="pointer-events-none absolute -right-10 bottom-0 -z-10 font-display text-[44vw] leading-[0.75] font-black text-transparent select-none md:text-[30vw]"
        style={{ WebkitTextStroke: '1px var(--line)' }}
      >
        TG
      </div>

      <div className="mx-auto grid max-w-6xl items-center gap-12 px-4 pb-20 sm:px-8 md:grid-cols-[1.2fr_1fr] md:pb-28">
        <div>
          <motion.p
            className="eyebrow mb-6 flex items-center gap-3"
            initial={{ opacity: 0, x: -12 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="relative flex size-2">
              <span className="absolute inline-flex size-full animate-ping rounded-full bg-hot opacity-70" />
              <span className="relative inline-flex size-2 rounded-full bg-hot" />
            </span>
            Open to new projects
          </motion.p>

          <h1 className="font-display text-[17vw] leading-[0.85] font-black tracking-tight sm:text-[14vw] md:text-[8.5rem]">
            <span className="sr-only">{profile.name}</span>
            <span className="block overflow-hidden pb-2">
              <SplitWord text="TIM" delay={0.1} />
              <span className="text-accent">.</span>
            </span>
            <span className="block overflow-hidden pb-2">
              <SplitWord text="GARCIA" delay={0.3} />
            </span>
          </h1>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.6 }}
          >
            <p className="mt-6 max-w-md text-lg text-muted">
              <strong className="font-semibold text-fg">{profile.role}</strong> with 10+ years of building fast,
              accessible web apps on React, Node and AWS. Also makes robot games.
            </p>

            <div className="mt-6 flex flex-wrap gap-2">
              <span className="chip border-accent/40 font-medium">
                <AwsMark /> AWS Certified Developer – Associate
              </span>
              <span className="chip text-muted">{profile.location}</span>
            </div>

            <div className="mt-8 flex flex-wrap gap-3">
              <a href="#work" className="btn-primary">
                See my work <span aria-hidden>→</span>
              </a>
              <a href="#contact" className="btn-ghost">
                Request my CV
              </a>
            </div>
          </motion.div>
        </div>

        <motion.div
          className="relative mx-auto w-full max-w-sm [perspective:1000px]"
          initial={{ opacity: 0, scale: 0.92 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.4, duration: 0.8, ease: [0.2, 0.8, 0.2, 1] }}
          onPointerMove={onMove}
          onPointerLeave={() => (mx.set(0), my.set(0))}
        >
          <motion.div style={{ rotateX: rx, rotateY: ry }} className="group relative">
            <div className="absolute -inset-3 -z-10 translate-x-4 translate-y-4 rounded-[2rem] border-2 border-accent" />
            <div className="relative aspect-[4/5] overflow-hidden rounded-[2rem] bg-[var(--duo-hi)]">
              <img
                src="/tim.webp"
                alt="Tim Garcia in a dark three-piece suit, smiling by a balcony railing"
                className="absolute inset-0 size-full scale-110 object-cover object-[50%_20%] mix-blend-multiply grayscale contrast-125 transition-all duration-700 group-hover:scale-100 group-hover:mix-blend-normal"
              />
              {/* Lift the shadows to the duotone's low color; fades away on hover to reveal the real photo. */}
              <div className="absolute inset-0 bg-[var(--duo-lo)] mix-blend-lighten transition-opacity duration-700 group-hover:opacity-0" />
            </div>
            <RotatingBadge />
          </motion.div>
        </motion.div>
      </div>

      <a
        href="#about"
        className="absolute bottom-6 left-1/2 hidden -translate-x-1/2 font-mono text-[10px] tracking-[0.3em] text-muted uppercase md:block"
      >
        scroll
        <span className="mx-auto mt-2 block h-8 w-px animate-pulse bg-accent" />
      </a>
    </section>
  );
}

function RotatingBadge() {
  const text = 'PRESS ~ FOR A SECRET · PRESS ~ FOR A SECRET · ';
  return (
    <div className="absolute -bottom-8 -left-8 size-28 rounded-full bg-invert-bg text-invert-fg shadow-xl md:size-32">
      <svg viewBox="0 0 100 100" className="size-full animate-[spin_14s_linear_infinite] motion-reduce:animate-none">
        <defs>
          <path id="badge-circle" d="M50 50m-37 0a37 37 0 1 1 74 0a37 37 0 1 1-74 0" />
        </defs>
        <text className="fill-current font-mono text-[8.6px] tracking-[0.12em]">
          <textPath href="#badge-circle">{text}</textPath>
        </text>
      </svg>
      <span className="absolute inset-0 grid place-items-center font-display text-2xl text-accent">~</span>
    </div>
  );
}

function AwsMark() {
  return (
    <svg viewBox="0 0 24 24" className="size-4 text-accent" fill="currentColor" aria-hidden>
      <path d="M12 2 3 6.5v5c0 5 3.8 9.4 9 10.5 5.2-1.1 9-5.5 9-10.5v-5L12 2zm-1.2 14.2-3.5-3.5 1.4-1.4 2.1 2.1 4.9-4.9 1.4 1.4-6.3 6.3z" />
    </svg>
  );
}
