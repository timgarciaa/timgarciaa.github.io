import { motion } from 'motion/react';
import { games } from '../content.ts';
import { useGames } from '../hooks/useGames.tsx';
import { sfx } from '../sound.ts';
import { Reveal, SectionHeading } from './Reveal.tsx';

export function GameLab() {
  const { play } = useGames();

  return (
    <section id="games" className="relative overflow-hidden bg-invert-bg text-invert-fg">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-[0.07]"
        style={{
          backgroundImage: 'linear-gradient(currentColor 1px, transparent 1px), linear-gradient(90deg, currentColor 1px, transparent 1px)',
          backgroundSize: '48px 48px',
        }}
      />
      <div className="section relative">
        <SectionHeading
          index="05"
          eyebrow="Game lab · after hours"
          title={
            <>
              Don’t just read about them. <span className="text-accent">Play them.</span>
            </>
          }
        />
        <Reveal>
          <p className="-mt-6 mb-12 max-w-xl opacity-70">
            Three toon-shaded 3D games I built from scratch with Three.js and TypeScript. No engine, no image files, all
            code. Pick a cartridge and it boots right here in the page.
          </p>
        </Reveal>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {games.map((g, i) => (
            <Reveal key={g.id} delay={i * 0.1}>
              <motion.button
                type="button"
                onClick={() => (sfx.powerUp(), play(g.id))}
                whileHover={{ y: -8, rotate: i === 1 ? 0 : i === 0 ? -1.5 : 1.5 }}
                whileTap={{ scale: 0.97, y: 4 }}
                className="group relative block w-full text-left"
                aria-label={`Play ${g.name}`}
              >
                {/* Cartridge body */}
                <div className="relative rounded-t-[1.6rem] rounded-b-lg bg-accent p-3 pb-5 shadow-[0_20px_40px_-20px_var(--glow)]">
                  <div className="mb-2 flex items-center justify-between px-1 text-accent-fg">
                    <span className="font-mono text-[10px] tracking-[0.25em] opacity-80">TG-0{i + 1}</span>
                    <span className="flex gap-1">
                      {[0, 1, 2, 3, 4].map((n) => (
                        <span key={n} className="h-3 w-1 rounded-full bg-black/25" />
                      ))}
                    </span>
                  </div>
                  <div className="relative aspect-[4/5] overflow-hidden rounded-xl bg-ink">
                    <img
                      src={g.cover}
                      alt={`${g.name} gameplay`}
                      loading="lazy"
                      className="size-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/10 to-transparent" />
                    <div className="absolute inset-x-0 bottom-0 p-4 text-white">
                      <p className="font-mono text-[10px] tracking-[0.25em] uppercase opacity-70">{g.genre}</p>
                      <h3 className="font-display text-2xl font-bold">{g.name}</h3>
                    </div>
                    <span className="absolute top-3 right-3 grid size-12 scale-75 place-items-center rounded-full bg-hot text-white opacity-0 shadow-lg transition-all group-hover:scale-100 group-hover:opacity-100">
                      <svg viewBox="0 0 24 24" className="ml-0.5 size-5" fill="currentColor" aria-hidden>
                        <path d="M7 4.5v15l13-7.5z" />
                      </svg>
                    </span>
                  </div>
                </div>
                {/* Contacts at the bottom of the cartridge */}
                <div className="mx-auto flex h-3 w-3/4 justify-between rounded-b-md bg-accent-strong px-2">
                  {Array.from({ length: 12 }, (_, n) => (
                    <span key={n} className="h-2 w-1 bg-yellow-200/60" />
                  ))}
                </div>
                <p className="mt-4 text-sm opacity-70">{g.pitch}</p>
              </motion.button>
            </Reveal>
          ))}
        </div>

        <p className="mt-12 text-center font-mono text-xs opacity-50">
          Best on a phone or with a keyboard. Your high scores stay in this browser.
        </p>
      </div>
    </section>
  );
}
