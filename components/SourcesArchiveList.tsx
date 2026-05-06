'use client';

import Image from 'next/image';
import { useMemo, useState } from 'react';
import HairlineRule from '@/components/HairlineRule';
import type { Archive } from '@/content/archives';

const previewImages = [
  '/images/sources/archive-preview-1.jpg',
  '/images/sources/archive-preview-2.jpg',
  '/images/sources/archive-preview-3.jpg',
  '/images/sources/archive-preview-4.jpg',
] as const;

export default function SourcesArchiveList({ archives }: { archives: Archive[] }) {
  const archivePreviews = useMemo(
    () => archives.map((archive, index) => ({ ...archive, previewImage: previewImages[index] ?? null })),
    [archives],
  );

  const [activeIndex, setActiveIndex] = useState<number | null>(0);

  const activePreview =
    activeIndex !== null && archivePreviews[activeIndex]?.previewImage ? archivePreviews[activeIndex] : null;

  const previewFrame = (className: string) => (
    <div className={className}>
      <div className="relative aspect-[4/5] w-full overflow-hidden bg-paper">
        {archivePreviews.slice(0, 4).map((archive, i) => {
          if (!archive.previewImage) return null;

          const isVisible = activeIndex === i;

          return (
            <div
              key={archive.previewImage}
              className={`absolute inset-0 transition-opacity duration-500 ease-out ${
                isVisible ? 'opacity-100' : 'opacity-0'
              }`}
            >
              <Image
                src={archive.previewImage}
                alt={archive.name}
                fill
                sizes="(max-width: 1023px) 100vw, (min-width: 1280px) 28vw, (min-width: 1024px) 24vw, 0px"
                className="object-cover"
                priority={i === 0}
              />
              <div className="absolute inset-0 bg-paper/10" />
            </div>
          );
        })}

        <div
          className={`absolute inset-0 border border-inkFaint/30 transition-opacity duration-300 ${
            activePreview ? 'opacity-100' : 'opacity-0'
          }`}
        />
      </div>
    </div>
  );

  return (
    <div className="lg:grid lg:grid-cols-[minmax(0,680px)_minmax(280px,1fr)] lg:gap-16 xl:gap-24">
      <div>
        {previewFrame('mb-10 lg:hidden')}
        <div className="flex flex-col">
        {archivePreviews.map((archive, i) => {
          return (
            <div key={archive.name}>
              <div
                className="py-6"
                onMouseEnter={() => archive.previewImage && setActiveIndex(i)}
                onFocus={() => archive.previewImage && setActiveIndex(i)}
                onClick={() => archive.previewImage && setActiveIndex(i)}
              >
                <h2
                  tabIndex={0}
                  className={`font-serif font-bold text-base text-ink mb-2 leading-snug transition-opacity ${
                    archive.previewImage ? 'cursor-pointer hover:opacity-70' : ''
                  }`}
                >
                  {archive.name}
                </h2>
                <p className="font-serif text-sm text-inkSoft leading-relaxed mb-3">{archive.description}</p>
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
              {i < archivePreviews.length - 1 && <HairlineRule />}
            </div>
          );
        })}
        </div>
      </div>

      <aside className="hidden lg:block">
        <div className="sticky top-28">{previewFrame('')}</div>
      </aside>
    </div>
  );
}
