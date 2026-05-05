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
            Quoin collects only the information necessary to correspond with visitors, respond to inquiries,
            and notify subscribers about studio updates and releases.
          </p>
          <p>
            If you submit your email address through byquoin.com or write to us directly, we may retain your
            contact information and any message you send. We use that information only for Quoin correspondence,
            including release notices, studio updates, and replies to specific inquiries.
          </p>
          <p>
            We do not sell personal information, and we do not share it with third parties except as reasonably
            necessary to operate the website, deliver email, or comply with legal obligations.
          </p>
          <p>
            This site may use basic analytics, server logs, or platform-level tools that collect standard technical
            information such as browser type, device information, referring pages, and general usage patterns.
          </p>
          <p>
            You may request removal from future email correspondence at any time by replying to an email or writing
            to <a href="mailto:press@byquoin.com" className="text-ink hover:text-inkSoft transition-colors">press@byquoin.com</a>.
          </p>
          <p>
            Questions about this policy may be directed to <a href="mailto:press@byquoin.com" className="text-ink hover:text-inkSoft transition-colors">press@byquoin.com</a>.
          </p>
        </div>
      </div>
      <SiteFooter />
    </div>
  );
}
