import Link from 'next/link';
import SiteFooter from '@/components/SiteFooter';

export const metadata = {
  title: 'Shibe Park — Quoin',
  description: 'Product page study for a Quoin architectural print edition.',
};

const details = [
  ['Materials', 'Archival pigment print on acid-free cotton rag paper'],
  ['Size', '18 × 24 in | 46 × 61 cm'],
  ['Rarity', 'Numbered edition of 250'],
  ['Medium', 'Architectural print'],
  ['Signature', 'Numbered and stamped by Quoin'],
  ['Certificate of authenticity', 'Included as a letterpress provenance card'],
  ['Frame', 'Available framed in white oak or matte black'],
  ['Publisher', 'Quoin'],
];

const stadiumFacts = [
  ['Location', 'Philadelphia, Pennsylvania'],
  ['Opened', '1909'],
  ['Later name', 'Connie Mack Stadium'],
  ['Primary tenants', 'Philadelphia Athletics; Philadelphia Phillies'],
  ['Status', 'Demolished'],
];

const otherPrints = [
  {
    title: 'Ebbets Field',
    subtitle: 'Brooklyn, New York',
    note: 'Placeholder for upcoming release page',
  },
  {
    title: 'Original Yankee Stadium',
    subtitle: 'Bronx, New York',
    note: 'Placeholder for flagship stadium edition',
  },
  {
    title: 'Forbes Field',
    subtitle: 'Pittsburgh, Pennsylvania',
    note: 'Placeholder for future ballpark print',
  },
  {
    title: 'Polo Grounds',
    subtitle: 'Upper Manhattan, New York',
    note: 'Placeholder for future ballpark print',
  },
];

export default function ShibeParkPage() {
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
            <div className="aspect-[4/5] w-full bg-[#f8f8f6] border border-neutral-200 flex items-center justify-center">
              <div className="text-center px-8">
                <p className="font-mono text-[11px] tracking-[0.22em] uppercase text-neutral-400 mb-4">Image Preview</p>
                <h2 className="font-serif text-3xl md:text-5xl text-neutral-700 mb-3">Shibe Park</h2>
                <p className="font-serif text-base md:text-lg text-neutral-500 max-w-md mx-auto leading-relaxed">
                  Product-image placeholder for the inaugural Quoin edition. Final archival artwork and framing photography to be inserted here.
                </p>
              </div>
            </div>
          </section>

          <aside className="max-w-[420px]">
            <p className="font-serif text-[15px] text-neutral-500 mb-2">Quoin</p>
            <h1 className="font-serif text-3xl md:text-[38px] leading-tight mb-4">Shibe Park, 1909</h1>

            <div className="space-y-1 text-[15px] text-neutral-600 mb-6">
              <p>Archival pigment print on acid-free cotton rag paper</p>
              <p>18 × 24 in | 46 × 61 cm</p>
              <p>Edition of 250</p>
            </div>

            <div className="space-y-3 border-y border-neutral-200 py-5 mb-6">
              <p className="font-serif text-sm text-neutral-700">Part of the first Quoin series of architectural prints drawn from primary archival reference.</p>
              <p className="font-serif text-sm text-neutral-700">Includes a letterpress provenance card citing the archival sources consulted.</p>
            </div>

            <div className="mb-6">
              <p className="font-serif text-[30px] leading-none">US$245</p>
              <p className="font-serif text-sm text-neutral-500 mt-2">Unframed. Framed editions from US$425.</p>
            </div>

            <div className="space-y-3 mb-5">
              <a
                href="mailto:press@byquoin.com?subject=Shibe%20Park%20inquiry"
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

            <div className="grid grid-cols-3 gap-px bg-neutral-200 border border-neutral-200 mb-10">
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

            <section className="border-t border-neutral-200 pt-6 mb-10">
              <h2 className="font-serif text-lg mb-5">About the work</h2>
              <dl className="space-y-4">
                {details.map(([term, value]) => (
                  <div key={term} className="grid grid-cols-[150px_1fr] gap-4 text-sm">
                    <dt className="text-neutral-500">{term}</dt>
                    <dd className="text-neutral-800">{value}</dd>
                  </div>
                ))}
              </dl>
            </section>

            <section className="border-t border-neutral-200 pt-6">
              <div className="mb-4">
                <p className="font-serif text-2xl mb-1">Shibe Park</p>
                <p className="font-serif text-sm text-neutral-500">Philadelphia ballpark, opened 1909</p>
              </div>

              <p className="font-serif text-[15px] leading-7 text-neutral-700 mb-6">
                Opened in 1909, Shibe Park helped define the modern American ballpark. Its concrete-and-steel construction,
                formal exterior, and civic scale marked a break from the earlier wooden grounds of professional baseball.
                For Quoin, it is a near-ideal first subject: a stadium where architecture, urban ambition, and sporting memory meet.
              </p>

              <dl className="space-y-3 mb-6">
                {stadiumFacts.map(([term, value]) => (
                  <div key={term} className="grid grid-cols-[120px_1fr] gap-4 text-sm">
                    <dt className="text-neutral-500">{term}</dt>
                    <dd className="text-neutral-800">{value}</dd>
                  </div>
                ))}
              </dl>

              <p className="font-serif text-sm italic text-neutral-500">
                Drawn from archival reference and conceived as part of Quoin’s first series on the great American sporting venues.
              </p>
            </section>
          </aside>
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
              <div key={print.title} className="bg-white p-6 min-h-[300px] flex flex-col">
                <div className="aspect-[4/5] border border-neutral-200 bg-[#fafaf8] mb-5 flex items-center justify-center">
                  <span className="font-mono text-[11px] tracking-[0.18em] uppercase text-neutral-400">Coming Soon</span>
                </div>
                <h3 className="font-serif text-xl text-neutral-900 mb-1">{print.title}</h3>
                <p className="font-serif text-sm text-neutral-500 mb-3">{print.subtitle}</p>
                <p className="font-serif text-sm leading-6 text-neutral-600 mt-auto">{print.note}</p>
              </div>
            ))}
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  );
}
