import { AnimatePresence, motion } from 'motion/react';
import { useEffect, useRef, useState } from 'react';
import type { Game } from '../content.ts';

type Props = { game: Game | null; onClose: () => void };

/** Boots a game build from /games/<id>/ in an iframe. Nothing loads until a game is picked. */
export function GameModal({ game, onClose }: Props) {
  const [booted, setBooted] = useState(false);
  const frameRef = useRef<HTMLIFrameElement>(null);

  useEffect(() => {
    if (!game) return;
    setBooted(false);
    const t = setTimeout(() => setBooted(true), 1100);
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && onClose();
    addEventListener('keydown', onKey);
    const overflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => {
      clearTimeout(t);
      removeEventListener('keydown', onKey);
      document.body.style.overflow = overflow;
    };
  }, [game, onClose]);

  const fullscreen = () => frameRef.current?.requestFullscreen?.();

  return (
    <AnimatePresence>
      {game && (
        <motion.div
          key={game.id}
          role="dialog"
          aria-modal="true"
          aria-label={`${game.name}, playable game`}
          className="fixed inset-0 z-[80] flex flex-col bg-black/90 backdrop-blur-sm md:flex-row md:items-center md:justify-center md:gap-8 md:p-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={(e) => e.target === e.currentTarget && onClose()}
        >
          {/* On phones: a slim bar above the game, so nothing covers its HUD. */}
          <div className="flex h-12 shrink-0 items-center justify-between px-4 text-white md:hidden">
            <span className="font-display font-bold">{game.name}</span>
            <button type="button" onClick={onClose} className="rounded-full bg-hot px-4 py-1.5 text-sm font-semibold" aria-label="Close game">
              ✕ Exit
            </button>
          </div>
          {/* Phone-shaped screen: the games are built for a phone held upright. */}
          <motion.div
            className="relative w-full flex-1 overflow-hidden bg-black md:aspect-[9/19] md:h-[min(92vh,900px)] md:w-auto md:flex-none md:rounded-[2.5rem] md:border-[10px] md:border-neutral-900 md:shadow-[0_0_80px_-10px_var(--glow)]"
            initial={{ y: 60, scale: 0.9, rotateX: 25 }}
            animate={{ y: 0, scale: 1, rotateX: 0 }}
            exit={{ y: 60, scale: 0.9, opacity: 0 }}
            transition={{ type: 'spring', stiffness: 200, damping: 22 }}
          >
            {booted ? (
              <iframe
                ref={frameRef}
                src={`/games/${game.id}/index.html`}
                title={game.name}
                className="size-full border-0"
                allow="fullscreen; autoplay; gamepad"
                onLoad={() => {
                  const frame = frameRef.current;
                  frame?.focus();
                  // Keys go to the game while it has focus; same origin, so listen for Esc in there too.
                  frame?.contentWindow?.addEventListener('keydown', (e) => e.key === 'Escape' && onClose());
                }}
              />
            ) : (
              <BootScreen name={game.name} />
            )}
          </motion.div>

          <div className="hidden w-64 flex-col justify-center gap-6 md:flex">
            <div className="text-white">
              <p className="font-mono text-[10px] tracking-[0.3em] text-white/50 uppercase">Now playing</p>
              <h2 className="font-display text-3xl font-bold">{game.name}</h2>
              <p className="mt-1 text-sm text-white/60">{game.genre}</p>
              <ul className="mt-6 space-y-2 border-t border-white/10 pt-4 text-sm text-white/80">
                {game.controls.map((c) => (
                  <li key={c} className="flex gap-2">
                    <span className="text-hot">▸</span>
                    {c}
                  </li>
                ))}
              </ul>
            </div>
            <div className="flex gap-2">
              <button type="button" onClick={fullscreen} className="btn bg-white/10 text-white hover:bg-white/20">
                Fullscreen
              </button>
              <button
                type="button"
                onClick={onClose}
                className="btn bg-hot text-white hover:brightness-110"
              >
                ✕ Exit (Esc)
              </button>
            </div>
            {game.repo && (
              <a href={game.repo} target="_blank" rel="noreferrer" className="font-mono text-xs text-white/50 hover:text-white">
                View source ↗
              </a>
            )}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

function BootScreen({ name }: { name: string }) {
  return (
    <div className="flex size-full flex-col items-center justify-center gap-6 bg-black font-mono text-hot">
      <motion.p
        className="font-display text-3xl font-bold tracking-tight"
        initial={{ opacity: 0, letterSpacing: '0.6em' }}
        animate={{ opacity: 1, letterSpacing: '0em' }}
        transition={{ duration: 0.6 }}
      >
        {name.toUpperCase()}
      </motion.p>
      <div className="h-2 w-40 overflow-hidden rounded-full bg-white/10">
        <motion.div className="h-full bg-hot" initial={{ width: 0 }} animate={{ width: '100%' }} transition={{ duration: 1, ease: 'easeInOut' }} />
      </div>
      <p className="text-[10px] tracking-[0.3em] text-white/50">INSERTING CARTRIDGE…</p>
    </div>
  );
}
