import HairlineRule from './HairlineRule';

export default function SectionMarker({ children }: { children: React.ReactNode }) {
  return (
    <div className="mb-8">
      <HairlineRule className="mb-3" />
      <span className="font-mono text-xs tracking-widest text-inkFaint uppercase">{children}</span>
    </div>
  );
}
