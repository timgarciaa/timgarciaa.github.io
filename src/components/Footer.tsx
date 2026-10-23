import { Logo } from './Logo.tsx';

export function Footer() {
  return (
    <footer className="border-t border-line">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-4 py-10 text-sm text-muted sm:flex-row sm:px-8">
        <div className="flex items-center gap-3">
          <Logo className="h-5 w-auto text-fg" />
          <span>© {new Date().getFullYear()} Tim Garcia</span>
        </div>
        <p className="font-mono text-xs opacity-60 transition-opacity hover:opacity-100" title="It's a classic.">
          psst… ↑ ↑ ↓ ↓ ← → ← → B A
        </p>
      </div>
    </footer>
  );
}
