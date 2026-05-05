import Nav from '@/components/Nav';
import SectionMarker from '@/components/SectionMarker';
import HairlineRule from '@/components/HairlineRule';
import SiteFooter from '@/components/SiteFooter';
import { archives } from '@/content/archives';

export const metadata = {
  title: 'Sources — Quoin',
  description: 'The archival sources consulted in the production of Quoin plates.',
};

export default function SourcesPage() {
  return (
    <div className="min-h-screen bg-paper flex flex-col">
      <Nav />
      <div className="flex-1 px-8 md:px-14 py-16 max-w-[860px]">
      <SectionMarker>III — Sources</SectionMarker>

      <h1 className="font-serif text-4xl text-ink mb-10 leading-tight">The Archives</h1>

      <p className="font-serif text-base leading-relaxed text-inkSoft mb-16 max-w-[680px]">
        Every Quoin plate is composed from primary archival reference. The following institutions hold
        the documents we work from. We are grateful to their archivists for the work of preserving and
        making accessible the records of American civic and sporting architecture.
      </p>

      <div className="flex flex-col">
        {archives.map((archive, i) => (
          <div key={archive.name}>
            <div className="py-6">
              <h2 className="font-serif font-bold text-base text-ink mb-2 leading-snug">
                {archive.name}
              </h2>
              <p className="font-serif text-sm text-inkSoft leading-relaxed mb-3">
                {archive.description}
              </p>
              <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:gap-6">
                <span className="font-mono text-xs italic text-inkFaint">{archive.plates}</span>
                <a
                  href={archive.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-mono text-xs tracking-widest text-inkFaint hover:text-ink transition-colors"
                >
                  → {archive.url.replace(/^https?:\/\//, '')}
                </a>
              </div>
            </div>
            {i < archives.length - 1 && <HairlineRule />}
          </div>
        ))}
      </div>

      <div className="mt-16">
        <HairlineRule className="mb-6" />
        <div className="flex flex-col gap-4 max-w-[720px]">
          <p className="font-mono text-xs text-inkFaint leading-relaxed">
            Sources current as of April 2026. Additional repositories will be added as research progresses.
            If you are an archivist with relevant holdings and we have not yet contacted you, we would
            welcome correspondence at{' '}
            <a href="mailto:archives@byquoin.com" className="hover:text-ink transition-colors">
              archives@byquoin.com
            </a>
            .
          </p>
          <p className="font-serif text-sm text-inkSoft leading-relaxed">
            Quoin works from primary source materials and credits the repositories consulted in the research and
            composition of each plate. References to archives and collections are provided for source identification
            and acknowledgment only; unless expressly stated, they do not imply endorsement, partnership, or
            affiliation.
          </p>
          <p className="font-serif text-sm text-inkSoft leading-relaxed">
            Rights status varies by item. Quoin reviews copyright, attribution, and reproduction requirements on an
            item-by-item basis and seeks permission where required before commercial use.
          </p>
        </div>
      </div>
      </div>
      <SiteFooter />
    </div>
  );
}
