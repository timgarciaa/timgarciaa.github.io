import { AnimatePresence, motion } from 'motion/react';
import { useEffect, useRef, useState, type ReactNode } from 'react';
import { games, profile, stack } from '../content.ts';
import { useGames } from '../hooks/useGames.tsx';
import { switchTheme } from '../hooks/useTheme.ts';
import { sfx } from '../sound.ts';

type Line = { kind: 'in' | 'out'; text: ReactNode };
type Props = { open: boolean; onClose: () => void; onArcade: () => void; onRobot: () => void };

const HELP = `commands:
  help            this list
  whoami          who's this guy
  ls              list sections
  ls games        list the games
  play <game>     boot a game (robogolf, roboblast, robojump)
  stack           the tech stack
  cv              how to get my CV
  theme <light|dark>
  goto <section>  scroll to about, stack, credentials, work, games, contact
  clear           clear the screen
  exit            close the terminal`;

export function Terminal({ open, onClose, onArcade, onRobot }: Props) {
  const { play } = useGames();
  const [lines, setLines] = useState<Line[]>([{ kind: 'out', text: "tim@portfolio ~ type 'help' to begin." }]);
  const [value, setValue] = useState('');
  const [history, setHistory] = useState<string[]>([]);
  const [hIndex, setHIndex] = useState(-1);
  const input = useRef<HTMLInputElement>(null);
  const body = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (open) setTimeout(() => input.current?.focus(), 50);
  }, [open]);
  useEffect(() => {
    body.current?.scrollTo({ top: body.current.scrollHeight });
  }, [lines]);

  const goto = (id: string) => {
    onClose();
    setTimeout(() => document.getElementById(id === 'top' ? 'top' : id)?.scrollIntoView({ behavior: 'smooth' }), 150);
  };

  const run = (raw: string): ReactNode => {
    const [cmd, ...args] = raw.trim().toLowerCase().split(/\s+/);
    const arg = args.join(' ');
    switch (cmd) {
      case '':
        return null;
      case 'help':
      case '?':
        return HELP;
      case 'whoami':
        return `${profile.name}: ${profile.role}. AWS Certified Developer. Builds robot games after hours.`;
      case 'ls':
        if (arg === 'games') return games.map((g) => `${g.id.padEnd(11)}${g.genre}`).join('\n');
        return 'about/  stack/  credentials/  work/  games/  contact/  .secrets';
      case 'cat':
        if (arg.includes('secret')) return 'nice try. but have you tried ↑↑↓↓←→←→BA?';
        return `cat: ${arg || '?'}: try 'ls'`;
      case 'play': {
        const g = games.find((x) => x.id === arg || x.name.toLowerCase() === arg);
        if (!g) return `play: which one? ${games.map((x) => x.id).join(', ')}`;
        sfx.powerUp();
        onClose();
        play(g.id);
        return `booting ${g.name}…`;
      }
      case 'stack':
        return stack.map((s) => `${s.group.padEnd(10)}${s.items.slice(0, 8).join(', ')}…`).join('\n');
      case 'cv':
      case 'resume':
        goto('contact');
        return 'opening the contact form…';
      case 'theme':
        if (arg !== 'light' && arg !== 'dark') return 'usage: theme <light|dark>';
        switchTheme(arg);
        return `theme set to ${arg}.`;
      case 'goto':
      case 'cd':
        if (!['about', 'stack', 'credentials', 'work', 'games', 'contact', 'top'].includes(arg)) return `${cmd}: no such section: ${arg}`;
        goto(arg);
        return `→ ${arg}`;
      case 'sudo':
        if (arg.startsWith('hire')) {
          goto('contact');
          return 'permission granted. great choice. routing you to contact…';
        }
        return `${profile.name.split(' ')[0].toLowerCase()} is not in the sudoers file. this incident will be reported.`;
      case 'konami':
      case 'arcade':
        onArcade();
        return 'INSERT COIN';
      case 'robot':
        onClose();
        onRobot();
        return 'beep boop.';
      case 'rm':
        return 'rm: nice try.';
      case 'vim':
      case 'nvim':
        return 'you can check out any time you like, but you can never leave. (type exit)';
      case 'clear':
        setLines([]);
        return null;
      case 'exit':
      case 'quit':
        onClose();
        return null;
      default:
        return `command not found: ${cmd}. try 'help'`;
    }
  };

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    const out = run(value);
    if (value.trim().toLowerCase() !== 'clear') {
      setLines((l) => [...l, { kind: 'in', text: value }, ...(out ? [{ kind: 'out' as const, text: out }] : [])]);
    }
    if (value.trim()) setHistory((h) => [value, ...h]);
    setHIndex(-1);
    setValue('');
  };

  const onKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Escape') onClose();
    if (e.key === 'ArrowUp' && history.length) {
      e.preventDefault();
      const i = Math.min(hIndex + 1, history.length - 1);
      setHIndex(i);
      setValue(history[i]);
    }
    if (e.key === 'ArrowDown') {
      e.preventDefault();
      const i = hIndex - 1;
      setHIndex(Math.max(i, -1));
      setValue(i < 0 ? '' : history[i]);
    }
  };

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          className="fixed inset-0 z-[78] flex items-start justify-center bg-black/50 px-4 pt-[12vh] backdrop-blur-sm"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={(e) => e.target === e.currentTarget && onClose()}
        >
          <motion.div
            role="dialog"
            aria-label="Terminal"
            className="w-full max-w-2xl overflow-hidden rounded-xl border border-white/10 bg-[#0b0000] font-mono text-sm text-neutral-200 shadow-[0_30px_80px_-20px_var(--glow)]"
            initial={{ y: -20, scale: 0.97 }}
            animate={{ y: 0, scale: 1 }}
            exit={{ y: -20, scale: 0.97 }}
          >
            <div className="flex items-center gap-2 border-b border-white/10 px-4 py-2.5">
              <button type="button" onClick={onClose} aria-label="Close terminal" className="size-3 rounded-full bg-hot" />
              <span className="size-3 rounded-full bg-mid opacity-60" />
              <span className="size-3 rounded-full bg-deep opacity-60" />
              <span className="ml-3 text-xs text-white/40">tim@portfolio: ~</span>
            </div>
            <div ref={body} className="max-h-[50vh] overflow-y-auto p-4" onClick={() => input.current?.focus()}>
              {lines.map((l, i) => (
                <pre key={i} className={`whitespace-pre-wrap ${l.kind === 'in' ? 'text-white' : 'mb-2 text-white/60'}`}>
                  {l.kind === 'in' && <span className="text-hot">❯ </span>}
                  {l.text}
                </pre>
              ))}
              <form onSubmit={submit} className="flex items-center">
                <span className="text-hot">❯&nbsp;</span>
                <input
                  ref={input}
                  value={value}
                  onChange={(e) => setValue(e.target.value)}
                  onKeyDown={onKeyDown}
                  aria-label="Terminal command"
                  autoCapitalize="off"
                  autoComplete="off"
                  spellCheck={false}
                  className="flex-1 bg-transparent text-white caret-hot outline-none focus-visible:outline-none"
                />
              </form>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
