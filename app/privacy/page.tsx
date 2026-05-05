import Nav from '@/components/Nav';
import SectionMarker from '@/components/SectionMarker';
import SiteFooter from '@/components/SiteFooter';

export const metadata = {
  title: 'Privacy — Quoin',
  description: 'Privacy policy for byquoin.com.',
};

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-paper flex flex-col">
      <Nav />
      <div className="flex-1 px-8 md:px-14 py-16 max-w-[760px]">
        <SectionMarker>IV — Privacy</SectionMarker>
        <h1 className="font-serif text-4xl text-ink mb-10 leading-tight">Privacy Policy</h1>

        <div className="flex flex-col gap-6 font-serif text-base leading-relaxed text-inkSoft">
          <p>
            If you write to Quoin or submit your email through byquoin.com, we may retain your contact information
            in order to respond, correspond, and share studio updates.
          </p>
          <p>
            We do not sell personal information. We may use standard third-party services necessary to operate the
            site and manage correspondence.
          </p>
          <p>
            To update or remove your information, write to <a href="mailto:press@byquoin.com" className="text-ink hover:text-inkSoft transition-colors">press@byquoin.com</a>.
          </p>
        </div>
      </div>
      <SiteFooter />
    </div>
  );
}
