'use client';
import { useState } from 'react';

export default function EmailSignup() {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [errorMsg, setErrorMsg] = useState('');

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus('loading');
    setErrorMsg('');

    try {
      const res = await fetch('/api/subscribe', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email }),
      });

      if (res.ok) {
        setStatus('success');
        setEmail('');
      } else {
        const data = await res.json();
        setErrorMsg(data.error || 'Something went wrong.');
        setStatus('error');
      }
    } catch {
      setErrorMsg('Could not reach the server.');
      setStatus('error');
    }
  }

  if (status === 'success') {
    return (
      <p className="font-serif text-base text-inkSoft">
        Thank you. We'll be in touch.
      </p>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4 max-w-sm">
      <input
        type="email"
        required
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="your@email.com"
        className="border-none border-b border-inkFaint bg-transparent font-mono text-sm text-ink placeholder:text-inkFaint focus:outline-none pb-1"
        style={{ borderBottom: '1px solid #888780' }}
      />
      {errorMsg && (
        <p className="font-mono text-xs text-sepia">{errorMsg}</p>
      )}
      <button
        type="submit"
        disabled={status === 'loading'}
        className="font-mono text-sm text-inkSoft hover:text-ink transition-colors text-left cursor-pointer disabled:opacity-50"
      >
        {status === 'loading' ? '...' : '→ subscribe'}
      </button>
    </form>
  );
}
