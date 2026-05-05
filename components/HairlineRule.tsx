export default function HairlineRule({ className = '' }: { className?: string }) {
  return <hr className={`border-none h-px bg-inkFaint ${className}`} />;
}
