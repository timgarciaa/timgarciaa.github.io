import { createContext, useCallback, useContext, useMemo, useState, type ReactNode } from 'react';
import { games, type Game } from '../content.ts';
import { GameModal } from '../components/GameModal.tsx';

type Ctx = { play: (id: Game['id']) => void; playRandom: () => void; close: () => void; current: Game | null };
const GamesContext = createContext<Ctx | null>(null);

/** Any part of the site (cards, terminal, robot, Konami code) can launch a game through this. */
export function GamesProvider({ children }: { children: ReactNode }) {
  const [current, setCurrent] = useState<Game | null>(null);
  const play = useCallback((id: Game['id']) => setCurrent(games.find((g) => g.id === id) ?? null), []);
  const playRandom = useCallback(() => setCurrent(games[Math.floor(Math.random() * games.length)]), []);
  const close = useCallback(() => setCurrent(null), []);
  const value = useMemo(() => ({ play, playRandom, close, current }), [play, playRandom, close, current]);
  return (
    <GamesContext.Provider value={value}>
      {children}
      <GameModal game={current} onClose={close} />
    </GamesContext.Provider>
  );
}

export function useGames() {
  const ctx = useContext(GamesContext);
  if (!ctx) throw new Error('useGames must be used inside GamesProvider');
  return ctx;
}
