'use client';

import Link from 'next/link';
import { useState } from 'react';

export default function Home() {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus('loading');
    try {
      const res = await fetch('/api/subscribe', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email }),
      });
      setStatus(res.ok ? 'success' : 'error');
    } catch {
      setStatus('error');
    }
  }

  return (
    <main id="main-content">

      {/* ── HERO ─────────────────────────────────────────────────── */}
      <section className="relative h-screen w-full overflow-hidden bg-cyanotype">

        {/* Video */}
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src="/video/hero-quoin.mp4" type="video/mp4" />
        </video>

        {/* Gradient overlay — light at top for nav legibility, darker at bottom */}
        <div
          className="absolute inset-0"
          style={{
            background: 'linear-gradient(to bottom, rgba(0,0,0,0.35) 0%, rgba(0,0,0,0.05) 40%, rgba(0,0,0,0.4) 100%)',
          }}
        />

        {/* Floating nav */}
        <nav className="absolute top-0 left-0 right-0 flex items-baseline justify-between px-8 md:px-14 pt-8 z-10">
          <span className="hidden md:block font-mono text-xs tracking-widest" style={{ color: 'rgba(247,243,234,0.55)' }}>
            QUOIN
          </span>
          <div className="flex gap-5 md:gap-8 ml-auto md:ml-0">
            {[['/', 'HOME'], ['/studio', 'STUDIO'], ['/sources', 'SOURCES']].map(([href, label]) => (
              <Link
                key={href}
                href={href}
                className="font-mono text-xs tracking-wider md:tracking-widest transition-opacity hover:opacity-100"
                style={{ color: 'rgba(247,243,234,0.7)' }}
              >
                {label}
              </Link>
            ))}
          </div>
        </nav>

        {/* Wordmark */}
        <div className="absolute inset-0 flex flex-col items-center justify-center z-10 text-center px-6">
          <h1
            className="font-serif leading-none"
            style={{
              fontSize: 'clamp(80px, 14vw, 180px)',
              color: '#f7f3ea',
              letterSpacing: '-0.02em',
            }}
          >
            Quoin
          </h1>
          <p
            className="font-serif italic mt-5"
            style={{ fontSize: 'clamp(0.9rem, 1.4vw, 1.1rem)', color: 'rgba(247,243,234,0.5)', letterSpacing: '0.01em' }}
          >
            drawn from the archive
          </p>
        </div>

        {/* Bottom caption */}
        <div className="absolute bottom-8 left-8 md:left-14 z-10">
          <p className="font-mono text-xs tracking-widest" style={{ color: 'rgba(247,243,234,0.4)' }}>
            VENICE, CALIFORNIA
          </p>
        </div>

      </section>

      {/* ── DESCRIPTION ──────────────────────────────────────────── */}
      <section className="bg-paper px-8 md:px-14 py-24 md:py-36">
        <div className="max-w-[640px]">
          <p
            className="font-serif leading-relaxed text-inkSoft"
            style={{ fontSize: 'clamp(1.05rem, 1.5vw, 1.2rem)' }}
          >
            Quoin is a fine-press print studio opening in Venice, California. We publish
            architectural prints of the great American sporting venues — drawn from primary
            archival reference, printed in two colorways, and issued in numbered editions.
          </p>
          <p
            className="font-serif leading-relaxed text-inkFaint mt-6"
            style={{ fontSize: 'clamp(1.05rem, 1.5vw, 1.2rem)' }}
          >
            The first series of twelve plates is in production. The studio opens this autumn.
          </p>
        </div>
      </section>

      {/* ── CONTACT BAR ──────────────────────────────────────────── */}
      <section className="bg-paper border-t border-inkFaint" style={{ borderTopWidth: '1px', borderTopColor: '#888780' }}>
        <div className="px-8 md:px-14 py-8 flex flex-col sm:flex-row sm:items-center gap-6 sm:gap-12">

          {/* Email capture */}
          {status === 'success' ? (
            <p className="font-mono text-xs tracking-widest text-inkFaint">
              Thank you. We'll be in touch.
            </p>
          ) : (
            <form onSubmit={handleSubmit} className="flex items-baseline gap-4">
              <input
                type="email"
                required
                value={email}
                onChange={e => setEmail(e.target.value)}
                placeholder="your@email.com"
                className="font-mono text-xs tracking-widest bg-transparent text-ink placeholder:text-inkFaint focus:outline-none pb-0.5"
                style={{ borderBottom: '1px solid #888780', minWidth: '200px' }}
              />
              <button
                type="submit"
                disabled={status === 'loading'}
                className="font-mono text-xs tracking-widest text-inkFaint hover:text-ink transition-colors disabled:opacity-40 cursor-pointer"
              >
                {status === 'loading' ? '...' : '→ notify me'}
              </button>
            </form>
          )}

          {/* Divider */}
          <div className="hidden sm:block h-4 w-px bg-inkFaint opacity-40" />

          {/* Contact link */}
          <a
            href="mailto:press@byquoin.com"
            className="font-mono text-xs tracking-widest text-inkFaint hover:text-ink transition-colors"
          >
            press@byquoin.com
          </a>

        </div>
      </section>

      {/* ── BOTTOM CHROME ────────────────────────────────────────── */}
      <footer className="bg-paper border-t px-8 md:px-14 py-3 flex items-center justify-between" style={{ borderTopColor: '#888780', borderTopWidth: '1px' }}>
        <span className="font-mono text-xs tracking-widest text-inkFaint">QUOIN · BYQUOIN.COM</span>
        <span className="font-mono text-xs tracking-widest text-inkFaint">© 2026</span>
      </footer>

    </main>
  );
}
