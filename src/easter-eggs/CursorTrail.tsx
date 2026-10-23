import { useEffect, useRef } from 'react';
import { useTheme } from '../hooks/useTheme.ts';
import { useReducedMotion } from '../hooks/useReducedMotion.ts';

/** Red sparks that follow the mouse, in dark mode only. */
export function CursorTrail() {
  const { theme } = useTheme();
  const reduce = useReducedMotion();
  const canvas = useRef<HTMLCanvasElement>(null);
  const active = theme === 'dark' && !reduce;

  useEffect(() => {
    if (!active || !matchMedia('(pointer: fine)').matches) return;
    const c = canvas.current!;
    const ctx = c.getContext('2d')!;
    const color = getComputedStyle(document.documentElement).getPropertyValue('--brand-hot').trim() || '#f00';
    const sparks: { x: number; y: number; vx: number; vy: number; life: number }[] = [];
    let raf = 0;

    const resize = () => {
      c.width = innerWidth * devicePixelRatio;
      c.height = innerHeight * devicePixelRatio;
      ctx.setTransform(devicePixelRatio, 0, 0, devicePixelRatio, 0, 0);
    };
    const onMove = (e: PointerEvent) => {
      for (let i = 0; i < 2; i++)
        sparks.push({ x: e.clientX, y: e.clientY, vx: (Math.random() - 0.5) * 1.2, vy: Math.random() * 1.2, life: 1 });
    };
    const tick = () => {
      ctx.clearRect(0, 0, innerWidth, innerHeight);
      ctx.fillStyle = color;
      for (let i = sparks.length - 1; i >= 0; i--) {
        const s = sparks[i];
        s.x += s.vx;
        s.y += s.vy;
        s.life -= 0.035;
        if (s.life <= 0) {
          sparks.splice(i, 1);
          continue;
        }
        ctx.globalAlpha = s.life * 0.6;
        ctx.fillRect(s.x, s.y, 2.5 * s.life, 2.5 * s.life);
      }
      raf = requestAnimationFrame(tick);
    };

    resize();
    addEventListener('resize', resize);
    addEventListener('pointermove', onMove);
    raf = requestAnimationFrame(tick);
    return () => {
      cancelAnimationFrame(raf);
      removeEventListener('resize', resize);
      removeEventListener('pointermove', onMove);
      ctx.clearRect(0, 0, innerWidth, innerHeight);
    };
  }, [active]);

  return <canvas ref={canvas} aria-hidden className="pointer-events-none fixed inset-0 z-[55] size-full" />;
}
