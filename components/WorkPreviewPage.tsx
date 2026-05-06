import Link from 'next/link';
import SiteFooter from '@/components/SiteFooter';

export type WorkPreview = {
  slug: string;
  title: string;
  year: string;
  locationLine: string;
  stadiumLine: string;
  mediumLine: string;
  sizeLine: string;
  editionLine: string;
  priceLine: string;
  priceNote: string;
  inquirySubject: string;
  blurbLines: string[];
  details: Array<[string, string]>;
  facts: Array<[string, string]>;
  description: string;
  closingNote: string;
  placeholderLabel: string;
  placeholderTone?: 'stone' | 'blue' | 'green' | 'sepia' | 'gray';
};

const toneClasses = {
  stone: 'from-stone-50 to-stone-100 text-stone-600 border-stone-200',
  blue: 'from-sky-50 to-slate-100 text-slate-600 border-slate-200',
  green: 'from-emerald-50 to-stone-100 text-stone-600 border-stone-200',
  sepia: 'from-amber-50 to-stone-100 text-stone-600 border-stone-200',
  gray: 'from-zinc-50 to-neutral-100 text-neutral-600 border-neutral-200',
} as const;

export default function WorkPreviewPage({ work, otherPrints }: { work: WorkPreview; otherPrints: WorkPreview[] }) {
  const tone = toneClasses[work.placeholderTone ?? 'gray'];

  return (
    <div className="min-h-screen bg-white text-[#171717] flex flex-col">
      <header className="border-b border-neutral-200 px-8 md:px-14 py-5 flex items-center justify-between">
        <Link href="/" className="font-mono text-xs tracking-[0.22em] text-neutral-500 hover:text-neutral-900 transition-colors">
          QUOIN
        </Link>
        <span className="font-mono text-[11px] tracking-[0.22em] text-neutral-400 uppercase">Preview</span>
      </header>

      <main className="flex-1 px-8 md:px-14 py-10 md:py-14">
        <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,1.15fr)_420px] gap-12 md:gap-16 items-start">
          <section>
            <div className={`aspect-[4/5] w-full border bg-gradient-to-b ${tone} flex items-center justify-center`}>
              <div className="text-center px-8 max-w-lg">
                <p className="font-mono text-[11px] tracking-[0.22em] uppercase text-neutral-400 mb-4">Artwork Preview</p>
                <div className="mx-auto mb-6 h-[55%] max-h-[360px] w-[72%] border border-current/20 bg-white/60 shadow-[0_18px_50px_rgba(0,0,0,0.08)] flex items-center justify-center">
                  <div className="w-[78%] h-[78%] border border-dashed border-current/30 flex flex-col items-center justify-center px-6">
                    <p className="font-serif text-2xl md:text-4xl mb-2">{work.title}</p>
                    <p className="font-serif text-sm md:text-base opacity-70">{work.placeholderLabel}</p>
                  </div>
                </div>
                <p className="font-serif text-base md:text-lg text-neutral-500 max-w-md mx-auto leading-relaxed">
                  Placeholder example imagery for page design review. Final archival artwork, framing photography, and room-view assets to be inserted here.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-3 gap-px bg-neutral-200 border border-neutral-200 mt-4">
              {['Save', 'View in Room', 'Share'].map((label) => (
                <button
                  key={label}
                  type="button"
                  className="bg-white px-3 py-4 text-center font-mono text-[11px] tracking-[0.18em] uppercase text-neutral-600 hover:text-neutral-900 transition-colors"
                >
                  {label}
                </button>
              ))}
            </div>
          </section>

          <aside className="max-w-[420px]">
            <p className="font-serif text-[15px] text-neutral-500 mb-2">Quoin</p>
            <h1 className="font-serif text-3xl md:text-[38px] leading-tight mb-4">{work.title}, {work.year}</h1>

            <div className="space-y-1 text-[15px] text-neutral-600 mb-6">
              <p>{work.mediumLine}</p>
              <p>{work.sizeLine}</p>
              <p>{work.editionLine}</p>
            </div>

            <div className="space-y-3 border-y border-neutral-200 py-5 mb-6">
              {work.blurbLines.map((line) => (
                <p key={line} className="font-serif text-sm text-neutral-700">{line}</p>
              ))}
            </div>

            <div className="mb-6">
              <p className="font-serif text-[30px] leading-none">{work.priceLine}</p>
              <p className="font-serif text-sm text-neutral-500 mt-2">{work.priceNote}</p>
            </div>

            <div className="space-y-4 border border-neutral-200 p-5 mb-6">
              <div>
                <label className="block font-mono text-[11px] tracking-[0.18em] uppercase text-neutral-400 mb-2">Size</label>
                <div className="grid grid-cols-2 gap-2">
                  <button type="button" className="border border-neutral-900 px-3 py-3 text-left font-serif text-sm">18 × 24 in</button>
                  <button type="button" className="border border-neutral-300 px-3 py-3 text-left font-serif text-sm text-neutral-500">24 × 32 in</button>
                </div>
              </div>
              <div>
                <label className="block font-mono text-[11px] tracking-[0.18em] uppercase text-neutral-400 mb-2">Frame</label>
                <div className="grid grid-cols-3 gap-2">
                  <button type="button" className="border border-neutral-900 px-3 py-3 text-left font-serif text-sm">Unframed</button>
                  <button type="button" className="border border-neutral-300 px-3 py-3 text-left font-serif text-sm text-neutral-500">White Oak</button>
                  <button type="button" className="border border-neutral-300 px-3 py-3 text-left font-serif text-sm text-neutral-500">Matte Black</button>
                </div>
              </div>
            </div>

            <div className="space-y-3 mb-5">
              <a
                href={`mailto:press@byquoin.com?subject=${work.inquirySubject}`}
                className="block w-full bg-neutral-900 text-white text-center font-mono text-xs tracking-[0.18em] uppercase px-5 py-4 hover:bg-neutral-700 transition-colors"
              >
                Inquire to Purchase
              </a>
              <button
                type="button"
                className="block w-full border border-neutral-300 text-neutral-700 font-mono text-xs tracking-[0.18em] uppercase px-5 py-4 hover:border-neutral-500 transition-colors"
              >
                Request Release Notice
              </button>
            </div>
          </aside>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)] gap-10 md:gap-14 mt-16 border-t border-neutral-200 pt-10">
          <section>
            <h2 className="font-serif text-lg mb-5">About the work</h2>
            <dl className="space-y-4">
              {work.details.map(([term, value]) => (
                <div key={term} className="grid grid-cols-[150px_1fr] gap-4 text-sm">
                  <dt className="text-neutral-500">{term}</dt>
                  <dd className="text-neutral-800">{value}</dd>
                </div>
              ))}
            </dl>
          </section>

          <section>
            <div className="mb-4">
              <p className="font-serif text-2xl mb-1">{work.title}</p>
              <p className="font-serif text-sm text-neutral-500">{work.stadiumLine}</p>
            </div>

            <p className="font-serif text-[15px] leading-7 text-neutral-700 mb-6">{work.description}</p>

            <dl className="space-y-3 mb-6">
              {work.facts.map(([term, value]) => (
                <div key={term} className="grid grid-cols-[120px_1fr] gap-4 text-sm">
                  <dt className="text-neutral-500">{term}</dt>
                  <dd className="text-neutral-800">{value}</dd>
                </div>
              ))}
            </dl>

            <p className="font-serif text-sm italic text-neutral-500">{work.closingNote}</p>
          </section>
        </div>

        <section className="mt-20 border-t border-neutral-200 pt-10">
          <div className="mb-8 flex items-end justify-between gap-6">
            <div>
              <h2 className="font-serif text-[28px] leading-tight text-neutral-900">Other ballpark prints</h2>
              <p className="font-serif text-sm text-neutral-500 mt-2">
                Placeholder sections for future Quoin editions and additional stadium release pages.
              </p>
            </div>
            <span className="hidden md:block font-mono text-[11px] tracking-[0.22em] uppercase text-neutral-400">Series I</span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-px bg-neutral-200 border border-neutral-200">
            {otherPrints.map((print) => (
              <Link key={print.slug} href={`/works/${print.slug}`} className="bg-white p-6 min-h-[300px] flex flex-col hover:bg-neutral-50 transition-colors">
                <div className="aspect-[4/5] border border-neutral-200 bg-[#fafaf8] mb-5 flex items-center justify-center">
                  <span className="font-mono text-[11px] tracking-[0.18em] uppercase text-neutral-400">Preview</span>
                </div>
                <h3 className="font-serif text-xl text-neutral-900 mb-1">{print.title}</h3>
                <p className="font-serif text-sm text-neutral-500 mb-3">{print.locationLine}</p>
                <p className="font-serif text-sm leading-6 text-neutral-600 mt-auto">{print.placeholderLabel}</p>
              </Link>
            ))}
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  );
}
