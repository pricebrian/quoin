import Link from 'next/link';

export default function SiteFooter() {
  return (
    <footer
      className="bg-paper border-t px-8 md:px-14 py-3 flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between"
      style={{ borderTopColor: '#888780', borderTopWidth: '1px' }}
    >
      <span className="font-mono text-xs tracking-widest text-inkFaint">QUOIN · BYQUOIN.COM</span>
      <div className="flex items-center gap-4 text-xs font-mono tracking-widest text-inkFaint">
        <Link href="/privacy" className="hover:text-ink transition-colors">PRIVACY</Link>
        <Link href="/terms" className="hover:text-ink transition-colors">TERMS</Link>
        <span>© 2026</span>
      </div>
    </footer>
  );
}
