import { useEffect, useRef, useState } from 'react';
import { Logo } from './Logo.tsx';
import { ThemeToggle } from './ThemeToggle.tsx';

const links = [
  { href: '#stack', label: 'Stack' },
  { href: '#credentials', label: 'Certs' },
  { href: '#work', label: 'Work' },
  { href: '#games', label: 'Play' },
  { href: '#contact', label: 'Contact' },
];

type Props = { onLogoSpam: () => void; onTerminal: () => void };

export function Nav({ onLogoSpam, onTerminal }: Props) {
  const [scrolled, setScrolled] = useState(false);
  const clicks = useRef<number[]>([]);

  useEffect(() => {
    const onScroll = () => setScrolled(scrollY > 24);
    onScroll();
    addEventListener('scroll', onScroll, { passive: true });
    return () => removeEventListener('scroll', onScroll);
  }, []);

  // Five quick clicks on the logo let the robot out.
  const onLogo = (e: React.MouseEvent) => {
    const now = Date.now();
    clicks.current = [...clicks.current.filter((t) => now - t < 2000), now];
    if (clicks.current.length >= 5) {
      e.preventDefault();
      clicks.current = [];
      onLogoSpam();
    }
  };

  return (
    <header
      className={`fixed inset-x-0 top-0 z-40 transition-all duration-300 ${
        scrolled ? 'border-b border-line bg-bg/80 backdrop-blur-md' : ''
      }`}
    >
      <nav className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-8">
        <a href="#top" onClick={onLogo} className="text-fg transition-colors hover:text-accent" aria-label="Tim Garcia, back to top">
          <Logo className="h-6 w-auto" />
        </a>
        <div className="flex items-center gap-1 sm:gap-2">
          <ul className="hidden items-center gap-1 md:flex">
            {links.map((l) => (
              <li key={l.href}>
                <a href={l.href} className="rounded-full px-3 py-2 text-sm text-muted transition-colors hover:text-fg">
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
          <button
            type="button"
            onClick={onTerminal}
            title="Open terminal (~)"
            aria-label="Open terminal"
            className="grid size-10 place-items-center rounded-full border border-line font-mono text-xs transition-colors hover:border-accent hover:text-accent"
          >
            &gt;_
          </button>
          <ThemeToggle />
        </div>
      </nav>
    </header>
  );
}
