import { motion } from 'motion/react';
import type { ReactNode } from 'react';

/** Fades and lifts its children in the first time they scroll into view. */
export function Reveal({ children, delay = 0, className }: { children: ReactNode; delay?: number; className?: string }) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.7, delay, ease: [0.2, 0.8, 0.2, 1] }}
    >
      {children}
    </motion.div>
  );
}

export function SectionHeading({ index, eyebrow, title }: { index: string; eyebrow: string; title: ReactNode }) {
  return (
    <Reveal className="mb-12 md:mb-16">
      <p className="eyebrow mb-4">
        <span className="text-muted">{index} /</span> {eyebrow}
      </p>
      <h2 className="font-display text-4xl leading-[1.05] font-bold tracking-tight md:text-6xl">{title}</h2>
    </Reveal>
  );
}
