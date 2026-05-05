import Nav from '@/components/Nav';
import SectionMarker from '@/components/SectionMarker';
import HairlineRule from '@/components/HairlineRule';

export const metadata = {
  title: 'Studio — Quoin',
  description: 'About the Quoin press and its methods.',
};

export default function StudioPage() {
  return (
    <div className="min-h-screen bg-paper flex flex-col">
      <Nav />
      <div className="flex-1 px-8 md:px-14 py-16 max-w-[680px]">
      <SectionMarker>II — The Studio</SectionMarker>

      <h1 className="font-serif text-4xl text-ink mb-10 leading-tight">About Quoin</h1>

      <div className="flex flex-col gap-6">
        <p className="font-serif text-base leading-relaxed text-inkSoft">
          Quoin is a small independent press based in Cleveland, Ohio. We publish a series of architectural
          prints depicting the great American sporting venues — stadiums, ballparks, racetracks, and arenas
          — drawn from primary archival reference.
        </p>

        <p className="font-serif text-base leading-relaxed text-inkSoft">
          The premise is simple. The category of stadium prints is dominated by decorative work composed
          from photographs and Wikipedia stats. We work differently: from the original architectural drawings
          and period photography held in named archives — the Osborn Engineering Records at Cleveland State
          University, the HABS/HAER collection at the Library of Congress, university archives at Yale,
          Notre Dame, Michigan, Ohio State. Every plate cites its sources on the work itself and in an
          accompanying provenance card.
        </p>

        <p className="font-serif text-base leading-relaxed text-inkSoft">
          The first series of twelve plates covers buildings constructed between 1895 and 1930 — the era
          when the modern American stadium took form, largely under the direction of a single Cleveland
          firm, Osborn Engineering. Six of the twelve plates depict Osborn buildings.
        </p>

        <p className="font-serif text-base leading-relaxed text-inkSoft">
          Each plate is printed in two colorways: cyanotype blue and sepia cream. Sizes range from
          12 × 18 inches unframed to 30 × 40 inches framed in white oak or matte black. Numbered
          editions of 250 are available alongside open editions for the unframed prints.
        </p>

        <p className="font-serif text-base leading-relaxed text-inkSoft">
          The press is run by Brian Price.
        </p>
      </div>

      <div className="mt-16">
        <SectionMarker>Correspondence</SectionMarker>

        <div className="flex flex-col gap-4">
          <div>
            <p className="font-mono text-xs tracking-widest text-inkFaint uppercase mb-1">Press &amp; General</p>
            <a
              href="mailto:press@byquoin.com"
              className="font-serif text-base text-ink hover:text-inkSoft transition-colors"
            >
              press@byquoin.com
            </a>
          </div>

          <HairlineRule className="my-2" />

          <div>
            <p className="font-mono text-xs tracking-widest text-inkFaint uppercase mb-1">Research &amp; Archive</p>
            <a
              href="mailto:archives@byquoin.com"
              className="font-serif text-base text-ink hover:text-inkSoft transition-colors"
            >
              archives@byquoin.com
            </a>
          </div>

          <HairlineRule className="my-2" />

          <p className="font-serif text-sm text-inkFaint leading-relaxed">
            Trade and press inquiries are welcome. We respond personally.
          </p>
        </div>
      </div>
      </div>
    </div>
  );
}
