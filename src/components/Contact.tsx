import emailjs from '@emailjs/browser';
import { useRef, useState } from 'react';
import { profile } from '../content.ts';
import { Reveal, SectionHeading } from './Reveal.tsx';

const env = {
  service: import.meta.env.VITE_EMAILJS_SERVICE_ID as string | undefined,
  template: import.meta.env.VITE_EMAILJS_TEMPLATE_ID as string | undefined,
  key: import.meta.env.VITE_EMAILJS_PUBLIC_KEY as string | undefined,
};

type Status = 'idle' | 'sending' | 'sent' | 'error';

export function Contact() {
  const form = useRef<HTMLFormElement>(null);
  const [status, setStatus] = useState<Status>('idle');

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    if (data.get('website')) return setStatus('sent'); // honeypot: bots fill every field
    if (!env.service || !env.template || !env.key) return setStatus('error');
    setStatus('sending');
    try {
      await emailjs.sendForm(env.service, env.template, form.current!, { publicKey: env.key });
      setStatus('sent');
      form.current?.reset();
    } catch {
      setStatus('error');
    }
  };

  return (
    <section id="contact" className="section">
      <SectionHeading
        index="06"
        eyebrow="Contact"
        title={
          <>
            Want the full story? <br />
            <span className="text-accent">Ask for my CV.</span>
          </>
        }
      />

      <div className="grid gap-12 lg:grid-cols-[1fr_1.3fr]">
        <Reveal>
          <p className="text-lg text-muted">
            My work history lives in my CV, not on the internet. Drop your details and I’ll send it over, or just say
            hi about a role, a project, or the games.
          </p>
          <ul className="mt-8 space-y-3">
            <ContactLink href={`mailto:${profile.email}`} label="Email" value={profile.email} />
            <ContactLink href={profile.github} label="GitHub" value="@timgarciaa" />
            {profile.linkedin && <ContactLink href={profile.linkedin} label="LinkedIn" value="Connect" />}
          </ul>
        </Reveal>

        <Reveal delay={0.1}>
          {status === 'sent' ? (
            <div className="flex h-full min-h-80 flex-col items-center justify-center gap-3 rounded-3xl border border-accent bg-surface p-10 text-center">
              <span className="font-display text-5xl text-accent">✓</span>
              <p className="font-display text-2xl font-bold">Message received.</p>
              <p className="text-muted">I’ll reply with my CV soon. Thanks for reaching out.</p>
              <button type="button" onClick={() => setStatus('idle')} className="btn-ghost mt-4">
                Send another
              </button>
            </div>
          ) : (
            <form ref={form} onSubmit={onSubmit} className="grid gap-4 rounded-3xl border border-line bg-surface p-6 sm:grid-cols-2 md:p-8">
              <Field name="from_name" label="Name" autoComplete="name" required />
              <Field name="reply_to" label="Email" type="email" autoComplete="email" required />
              <Field name="company" label="Company (optional)" autoComplete="organization" className="sm:col-span-2" />
              <label className="flex flex-col gap-2 sm:col-span-2">
                <span className="text-sm font-medium">Message</span>
                <textarea
                  name="message"
                  rows={5}
                  required
                  defaultValue="Hi Tim, I'd like a copy of your CV."
                  className="resize-y rounded-xl border border-line bg-bg px-4 py-3 outline-none transition-colors focus:border-accent"
                />
              </label>
              {/* Honeypot, hidden from people. */}
              <input type="text" name="website" tabIndex={-1} autoComplete="off" className="hidden" aria-hidden />
              <div className="flex flex-wrap items-center gap-4 sm:col-span-2">
                <button type="submit" disabled={status === 'sending'} className="btn-primary disabled:opacity-60">
                  {status === 'sending' ? 'Sending…' : 'Request my CV →'}
                </button>
                {status === 'error' && (
                  <p role="alert" className="text-sm text-accent">
                    That didn’t go through. Email me at{' '}
                    <a className="underline" href={`mailto:${profile.email}`}>
                      {profile.email}
                    </a>
                    .
                  </p>
                )}
              </div>
            </form>
          )}
        </Reveal>
      </div>
    </section>
  );
}

function Field({ label, className = '', ...input }: { label: string; className?: string } & React.InputHTMLAttributes<HTMLInputElement>) {
  return (
    <label className={`flex flex-col gap-2 ${className}`}>
      <span className="text-sm font-medium">{label}</span>
      <input
        {...input}
        className="rounded-xl border border-line bg-bg px-4 py-3 outline-none transition-colors focus:border-accent"
      />
    </label>
  );
}

function ContactLink({ href, label, value }: { href: string; label: string; value: string }) {
  return (
    <li>
      <a
        href={href}
        target={href.startsWith('http') ? '_blank' : undefined}
        rel="noreferrer"
        className="group flex items-center justify-between border-b border-line py-3 transition-colors hover:border-accent"
      >
        <span className="font-mono text-xs tracking-widest text-muted uppercase">{label}</span>
        <span className="font-medium transition-colors group-hover:text-accent">
          {value} <span className="inline-block transition-transform group-hover:translate-x-1">→</span>
        </span>
      </a>
    </li>
  );
}
