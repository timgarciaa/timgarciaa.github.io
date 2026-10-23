import { useCallback, useEffect, useState } from 'react';
import { About } from './components/About.tsx';
import { Contact } from './components/Contact.tsx';
import { Credentials } from './components/Credentials.tsx';
import { Footer } from './components/Footer.tsx';
import { GameLab } from './components/GameLab.tsx';
import { Hero } from './components/Hero.tsx';
import { MbqShowcase } from './components/MbqShowcase.tsx';
import { Nav } from './components/Nav.tsx';
import { Stack } from './components/Stack.tsx';
import { ArcadeMode } from './easter-eggs/ArcadeMode.tsx';
import { CursorTrail } from './easter-eggs/CursorTrail.tsx';
import { RoboWalker } from './easter-eggs/RoboWalker.tsx';
import { Terminal } from './easter-eggs/Terminal.tsx';
import { useKonami } from './easter-eggs/useKonami.ts';
import { GamesProvider, useGames } from './hooks/useGames.tsx';
import { sfx } from './sound.ts';

export default function App() {
  return (
    <GamesProvider>
      <Site />
    </GamesProvider>
  );
}

function Site() {
  const { playRandom, current } = useGames();
  const [terminal, setTerminal] = useState(false);
  const [arcade, setArcade] = useState(false);
  const [robot, setRobot] = useState(false);

  const startArcade = useCallback(() => {
    sfx.powerUp();
    setArcade(true);
    setTimeout(playRandom, 1600);
  }, [playRandom]);
  useKonami(startArcade);

  // ~ or ` opens the terminal from anywhere except text fields.
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      const t = e.target as HTMLElement;
      if (t.closest('input, textarea, [contenteditable]') || current) return;
      if (e.key === '~' || e.key === '`') {
        e.preventDefault();
        setTerminal((o) => !o);
      }
    };
    addEventListener('keydown', onKey);
    return () => removeEventListener('keydown', onKey);
  }, [current]);

  return (
    <>
      <a href="#about" className="sr-only focus:not-sr-only focus:fixed focus:top-2 focus:left-2 focus:z-[90] focus:rounded focus:bg-accent focus:px-3 focus:py-2 focus:text-accent-fg">
        Skip to content
      </a>
      <Nav onLogoSpam={() => setRobot(true)} onTerminal={() => setTerminal(true)} />
      <main>
        <Hero />
        <About />
        <Stack />
        <Credentials />
        <MbqShowcase />
        <GameLab />
        <Contact />
      </main>
      <Footer />

      <Terminal open={terminal} onClose={() => setTerminal(false)} onArcade={startArcade} onRobot={() => setRobot(true)} />
      {robot && <RoboWalker onDone={() => setRobot(false)} />}
      <ArcadeMode on={arcade} />
      {arcade && (
        <button
          type="button"
          onClick={() => setArcade(false)}
          className="fixed right-4 bottom-4 z-[76] rounded-full bg-hot px-4 py-2 font-mono text-xs text-white shadow-lg"
        >
          EXIT ARCADE
        </button>
      )}
      <CursorTrail />
    </>
  );
}
