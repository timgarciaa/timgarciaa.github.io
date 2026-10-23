import { useSyncExternalStore } from 'react';

const q = () => matchMedia('(prefers-reduced-motion: reduce)');

export function useReducedMotion() {
  return useSyncExternalStore(
    (l) => (q().addEventListener('change', l), () => q().removeEventListener('change', l)),
    () => q().matches,
    () => false,
  );
}
