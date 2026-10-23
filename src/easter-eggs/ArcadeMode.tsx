import { AnimatePresence, motion } from 'motion/react';
import { useEffect } from 'react';

/** CRT scanlines and a neon boost over the whole page, toggled by the Konami code. */
export function ArcadeMode({ on }: { on: boolean }) {
  useEffect(() => {
    document.documentElement.classList.toggle('arcade', on);
  }, [on]);

  return (
    <AnimatePresence>
      {on && (
        <>
          <div className="arcade-scanlines" aria-hidden />
          <motion.div
            className="pointer-events-none fixed inset-0 z-[75] grid place-items-center"
            initial={{ opacity: 1 }}
            animate={{ opacity: 0 }}
            transition={{ delay: 1.2, duration: 0.6 }}
          >
            <motion.p
              className="font-display text-5xl font-black text-hot md:text-8xl"
              style={{ textShadow: '0 0 30px var(--hot), 0 0 60px var(--hot)' }}
              initial={{ scale: 3, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ type: 'spring', stiffness: 300, damping: 15 }}
            >
              ARCADE MODE
            </motion.p>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
