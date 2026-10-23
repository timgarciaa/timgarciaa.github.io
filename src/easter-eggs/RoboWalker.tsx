import { motion } from 'motion/react';
import { useGames } from '../hooks/useGames.tsx';
import { sfx } from '../sound.ts';

/** A little robot that strolls across the bottom of the screen. Catch it to play. */
export function RoboWalker({ onDone }: { onDone: () => void }) {
  const { playRandom } = useGames();
  return (
    <motion.button
      type="button"
      aria-label="A wild robot appeared. Click it to play a game."
      title="Catch me!"
      className="fixed bottom-4 z-[65] cursor-pointer"
      initial={{ left: '-6rem' }}
      animate={{ left: '110vw' }}
      transition={{ duration: 12, ease: 'linear' }}
      onAnimationComplete={onDone}
      onClick={() => {
        sfx.coin();
        onDone();
        playRandom();
      }}
    >
      <motion.svg
        viewBox="0 0 64 80"
        className="h-20 w-16 drop-shadow-lg"
        animate={{ y: [0, -6, 0], rotate: [-4, 4, -4] }}
        transition={{ duration: 0.5, repeat: Infinity }}
      >
        <line x1="32" y1="4" x2="32" y2="14" stroke="var(--brand-ink)" strokeWidth="3" />
        <circle cx="32" cy="4" r="4" fill="var(--brand-hot)" />
        <rect x="10" y="14" width="44" height="32" rx="10" fill="var(--brand-mid)" stroke="var(--brand-ink)" strokeWidth="3" />
        <rect x="17" y="22" width="30" height="14" rx="7" fill="var(--brand-ink)" />
        <circle cx="25" cy="29" r="3.5" fill="#fff" />
        <circle cx="39" cy="29" r="3.5" fill="#fff" />
        <rect x="16" y="48" width="32" height="18" rx="6" fill="var(--brand-deep)" stroke="var(--brand-ink)" strokeWidth="3" />
        <rect x="18" y="66" width="9" height="10" rx="3" fill="var(--brand-ink)" />
        <rect x="37" y="66" width="9" height="10" rx="3" fill="var(--brand-ink)" />
      </motion.svg>
    </motion.button>
  );
}
