import Nav from '@/components/Nav';
import SectionMarker from '@/components/SectionMarker';
import HairlineRule from '@/components/HairlineRule';
import SiteFooter from '@/components/SiteFooter';
import SourcesArchiveList from '@/components/SourcesArchiveList';
import { archives } from '@/content/archives';

export const metadata = {
  title: 'Sources — Quoin',
  description: 'The archival sources consulted in the production of Quoin plates.',
};

export default function SourcesPage() {
  return (
    <div className="min-h-screen bg-paper flex flex-col">
      <Nav />
      <div className="flex-1 w-full max-w-[1440px] px-8 md:px-14 py-16">
      <SectionMarker>III — Sources</SectionMarker>

      <h1 className="font-serif text-4xl text-ink mb-10 leading-tight">The Archives</h1>

      <p className="font-serif text-base leading-relaxed text-inkSoft mb-16 max-w-[680px]">
        Quoin’s research begins with primary source material. The following institutions are among the
        repositories being consulted as the studio develops its initial body of work on American sporting
        architecture. We are grateful to their archivists for preserving and making accessible these records.
      </p>

      <SourcesArchiveList archives={archives} />

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
            References to archives and collections are provided for research, source identification, and
            acknowledgment only; unless expressly stated, they do not imply endorsement, partnership, or affiliation.
          </p>
          <p className="font-serif text-sm text-inkSoft leading-relaxed">
            Rights status varies by item. Quoin reviews copyright, attribution, and reproduction requirements on an
            item-by-item basis as the work develops.
          </p>
        </div>
      </div>
      </div>
      <SiteFooter />
    </div>
  );
}
