import HairlineRule from './HairlineRule';

export default function Chrome({ position }: { position: 'top' | 'bottom' }) {
  if (position === 'top') {
    return (
      <div>
        <div className="flex items-center justify-between px-8 md:px-16 py-2">
          <span className="font-mono text-xs tracking-widest text-inkFaint">QUOIN · DRAWN FROM THE ARCHIVE</span>
          <span className="font-mono text-xs tracking-widest text-inkFaint">VOL. I · 2026</span>
        </div>
        <HairlineRule />
      </div>
    );
  }

  return (
    <div>
      <HairlineRule />
      <div className="flex items-center justify-between px-8 md:px-16 py-2">
        <span className="font-mono text-xs tracking-widest text-inkFaint">QUOIN · BYQUOIN.COM</span>
        <span className="font-mono text-xs tracking-widest text-inkFaint">© 2026 · ALL RIGHTS RESERVED</span>
      </div>
    </div>
  );
}
