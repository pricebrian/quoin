import Nav from '@/components/Nav';
import SectionMarker from '@/components/SectionMarker';
import HairlineRule from '@/components/HairlineRule';
import SiteFooter from '@/components/SiteFooter';

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
          Quoin is an independent print studio in Venice, California. The studio is currently developing
          a body of architectural work drawn from primary archival reference.
        </p>

        <p className="font-serif text-base leading-relaxed text-inkSoft">
          The initial focus is on the great American sporting venues — stadiums, ballparks, racetracks,
          and arenas — approached not as merchandise subjects but as works of architecture, civic memory,
          and regional identity.
        </p>

        <p className="font-serif text-base leading-relaxed text-inkSoft">
          Research begins with original drawings, period photography, and institutional collections held in
          public archives, libraries, and university repositories. Current inquiries focus on architectural
          drawings, construction records, period photography, and related rights and reproduction information.
          Quoin is especially interested in the architectural record of the early twentieth century, when the
          modern American stadium first took form.
        </p>

        <p className="font-serif text-base leading-relaxed text-inkSoft">
          Stadiums are the opening subject, not the limit of the project. Over time, the studio intends to
          extend the same editorial and print approach into adjacent areas of American built history.
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
            Trade, press, and archival inquiries are welcome. We respond personally.
          </p>

          <div className="pt-2">
            <p className="text-[2rem] leading-none text-inkSoft" style={{ fontFamily: 'var(--font-signature)' }}>
              Quoin
            </p>
          </div>
        </div>
      </div>
      </div>
      <SiteFooter />
    </div>
  );
}
