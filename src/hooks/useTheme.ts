import { useCallback, useSyncExternalStore } from 'react';
import { flushSync } from 'react-dom';

export type Theme = 'light' | 'dark';

const listeners = new Set<() => void>();
const read = (): Theme => (document.documentElement.dataset.theme === 'dark' ? 'dark' : 'light');

export function setTheme(next: Theme) {
  document.documentElement.dataset.theme = next;
  try {
    localStorage.setItem('theme', next);
  } catch {
    // private mode: the theme just won't be remembered
  }
  listeners.forEach((l) => l());
}

/** Switch theme with a circle that grows from (x, y), where the View Transitions API exists. */
export function switchTheme(next: Theme, x = innerWidth / 2, y = 0) {
  const reduce = matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (!document.startViewTransition || reduce) return setTheme(next);
  const r = Math.hypot(Math.max(x, innerWidth - x), Math.max(y, innerHeight - y));
  const t = document.startViewTransition(() => flushSync(() => setTheme(next)));
  t.ready.then(() => {
    document.documentElement.animate(
      { clipPath: [`circle(0 at ${x}px ${y}px)`, `circle(${r}px at ${x}px ${y}px)`] },
      { duration: 650, easing: 'cubic-bezier(.7,0,.2,1)', pseudoElement: '::view-transition-new(root)' },
    );
  });
}

export function useTheme() {
  const theme = useSyncExternalStore(
    (l) => (listeners.add(l), () => listeners.delete(l)),
    read,
    () => 'light' as Theme,
  );
  const toggle = useCallback((x?: number, y?: number) => switchTheme(read() === 'dark' ? 'light' : 'dark', x, y), []);
  return { theme, toggle };
}
