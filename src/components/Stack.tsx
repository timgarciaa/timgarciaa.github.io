import { stack } from '../content.ts';
import { useGames } from '../hooks/useGames.tsx';
import { sfx } from '../sound.ts';
import { Reveal, SectionHeading } from './Reveal.tsx';

export function Stack() {
  const { playRandom } = useGames();

  return (
    <section id="stack" className="py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-4 sm:px-8">
        <SectionHeading
          index="02"
          eyebrow="Tech stack"
          title={
            <>
              The tools I reach for <br className="hidden md:block" />
              <span className="text-muted">(and keep sharp).</span>
            </>
          }
        />
      </div>

      <Reveal className="flex flex-col gap-4">
        {stack.map((row, r) => {
          // A secret coin hides in the last row.
          const items = r === stack.length - 1 ? [...row.items, '__coin__'] : row.items;
          return (
            <div key={row.group} className="marquee-host flex items-center gap-4 overflow-hidden">
              <span className="z-10 shrink-0 bg-bg py-2 pr-3 pl-4 font-mono text-xs tracking-widest text-accent uppercase sm:pl-8 md:w-32">
                {row.group}
              </span>
              <div className="relative flex-1 overflow-hidden [mask-image:linear-gradient(90deg,transparent,black_6%,black_94%,transparent)]">
                <ul
                  className={`marquee flex w-max gap-2 ${r % 2 ? 'marquee-reverse' : ''}`}
                  style={{ '--marquee-speed': `${items.length * 3.5}s` } as React.CSSProperties}
                >
                  {[0, 1].map((copy) =>
                    items.map((item) =>
                      item === '__coin__' ? (
                        <li key={`${copy}-coin`} aria-hidden={copy === 1}>
                          <button
                            type="button"
                            tabIndex={copy === 1 ? -1 : 0}
                            onClick={() => (sfx.coin(), playRandom())}
                            className="chip cursor-pointer border-dashed font-mono text-xs tracking-widest text-muted/70 hover:border-hot hover:bg-hot hover:text-white"
                            title="?"
                          >
                            INSERT COIN
                          </button>
                        </li>
                      ) : (
                        <li
                          key={`${copy}-${item}`}
                          aria-hidden={copy === 1}
                          className="chip cursor-default hover:border-accent hover:bg-accent hover:text-accent-fg"
                        >
                          {item}
                        </li>
                      ),
                    ),
                  )}
                </ul>
              </div>
            </div>
          );
        })}
      </Reveal>
    </section>
  );
}
