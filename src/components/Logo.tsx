/** The TG mark from TIM.png, redrawn as SVG so it takes the theme color. */
export function Logo({ className = '' }: { className?: string }) {
  return (
    <svg viewBox="0 0 120 64" className={className} fill="currentColor" aria-hidden>
      <path d="M0 0h52v13H32.5v51h-13V13H0z" />
      <path d="M110.6 9.4A32 32 0 1 0 120 32h-13A19 19 0 1 1 101.4 18.6z" />
      <path d="M88 25.5h32v13H88z" />
    </svg>
  );
}
