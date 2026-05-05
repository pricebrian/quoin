import Nav from '@/components/Nav';
import SectionMarker from '@/components/SectionMarker';
import SiteFooter from '@/components/SiteFooter';

export const metadata = {
  title: 'Terms — Quoin',
  description: 'Terms of use for byquoin.com.',
};

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-paper flex flex-col">
      <Nav />
      <div className="flex-1 px-8 md:px-14 py-16 max-w-[760px]">
        <SectionMarker>V — Terms</SectionMarker>
        <h1 className="font-serif text-4xl text-ink mb-10 leading-tight">Terms of Use</h1>

        <div className="flex flex-col gap-6 font-serif text-base leading-relaxed text-inkSoft">
          <p>
            By using byquoin.com, you agree to use the site lawfully and respectfully.
          </p>
          <p>
            Unless otherwise noted, the content and design of this site belong to Quoin and may not be reproduced
            without permission.
          </p>
          <p>
            References to archives, libraries, and other repositories are included for acknowledgment and source
            identification only.
          </p>
          <p>
            Questions may be directed to <a href="mailto:press@byquoin.com" className="text-ink hover:text-inkSoft transition-colors">press@byquoin.com</a>.
          </p>
        </div>
      </div>
      <SiteFooter />
    </div>
  );
}
