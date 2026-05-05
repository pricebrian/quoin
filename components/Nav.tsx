'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Nav() {
  const pathname = usePathname();
  const links = [
    { href: '/', label: 'HOME' },
    { href: '/studio', label: 'STUDIO' },
    { href: '/sources', label: 'SOURCES' },
  ];
  return (
    <nav className="flex items-baseline justify-between px-8 md:px-14 py-6 border-b" style={{ borderBottomColor: '#888780', borderBottomWidth: '1px' }}>
      <Link href="/" className="font-mono text-xs tracking-widest text-inkFaint hover:text-ink transition-colors">
        QUOIN
      </Link>
      <div className="flex gap-6">
        {links.map(({ href, label }) => (
          <Link
            key={href}
            href={href}
            className={`font-mono text-xs tracking-widest transition-colors hover:text-ink ${
              pathname === href ? 'text-ink underline' : 'text-inkFaint'
            }`}
          >
            {label}
          </Link>
        ))}
      </div>
    </nav>
  );
}
