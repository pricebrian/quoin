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
            By using byquoin.com, you agree to use the site only for lawful purposes and in a manner that does not
            interfere with the site’s operation or misrepresent your identity.
          </p>
          <p>
            All original Quoin text, design, graphics, and site materials are the property of Quoin unless otherwise
            noted. No reproduction, republication, or commercial reuse is permitted without prior written consent.
          </p>
          <p>
            Historical source materials referenced on this site remain subject to their own rights status,
            attribution requirements, and repository-specific terms where applicable.
          </p>
          <p>
            References to archives, libraries, collections, universities, and other repositories are provided for
            source identification and acknowledgment only. Unless expressly stated, such references do not imply
            sponsorship, partnership, endorsement, or affiliation.
          </p>
          <p>
            This site is provided on an “as is” basis without warranties of any kind. Quoin may revise site content,
            product details, and these terms from time to time without prior notice.
          </p>
          <p>
            Questions regarding use of Quoin materials may be directed to <a href="mailto:press@byquoin.com" className="text-ink hover:text-inkSoft transition-colors">press@byquoin.com</a>.
          </p>
        </div>
      </div>
      <SiteFooter />
    </div>
  );
}
