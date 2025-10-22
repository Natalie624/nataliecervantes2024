// components/HomepageSection.tsx
'use client';

import Image from 'next/image';
import Link from 'next/link';
import CalendlyButton from '@/components/CalendlyButton';
import { ReactNode } from 'react';
import { BLOCKS, INLINES, MARKS, Node } from '@contentful/rich-text-types';
import { documentToReactComponents, Options } from '@contentful/rich-text-react-renderer';
import type { HomepageSectionData } from '../app/utils/contentful';

// Reuse blog styling for rich text
const richTextOptions: Options = {
  renderMark: {
    [MARKS.BOLD]: (text: ReactNode) => <b className="text-[18px] text-violet-500">{text}</b>,
    [MARKS.ITALIC]: (text: ReactNode) => <i className="text-white font-semibold">{text}</i>,
  },
  renderNode: {
    [INLINES.HYPERLINK]: (node: Node, children: React.ReactNode) => {
      const url = (node as any).data.uri as string;
      return (
        <a href={url} target="_blank" rel="noopener noreferrer" className="text-blue-500 underline">
          {children}
        </a>
      );
    },
    [BLOCKS.UL_LIST]: (_node: Node, children: React.ReactNode) => (
      <ul className="list-disc pl-8 mb-4 text-white text-left">{children}</ul>
    ),
     [BLOCKS.OL_LIST]: (_node: Node, children: React.ReactNode) => (
      <ol className="list-decimal pl-8 mb-4 text-white text-left">{children}</ol>
    ),
    [BLOCKS.LIST_ITEM]: (_node: Node, children: React.ReactNode) => (
      <li className="text-left mb-1">{children}</li>
    ),

    [BLOCKS.HEADING_1]: (_n: Node, ch: React.ReactNode) => <h1 className="text-[28px] text-white">{ch}</h1>,
    [BLOCKS.HEADING_2]: (_n: Node, ch: React.ReactNode) => (
      <h2 className="text-[24px] text-violet-500 mb-4 mt-8">{ch}</h2>
    ),
    [BLOCKS.PARAGRAPH]: (_n: Node, ch: React.ReactNode) => (
      <p className="mb-4 text-white leading-relaxed">{ch}</p>
    ),
  },
};

type Props = {
  section: HomepageSectionData;
  index: number; // for alternating layout
};

export default function HomepageSection({ section, index }: Props) {
  const { header, body, imageUrl, ctaUrl, ctaLabel } = section;
  const hasImage = Boolean(imageUrl);
  const isOdd = index % 2 === 1;

  // Layout: alternate image/text on desktop; stack on mobile
  // If no image, left justify the text and span full width
  const wrapperDir = hasImage ? (isOdd ? 'md:flex-row-reverse' : 'md:flex-row') : 'md:flex-row';
  const textColClasses = hasImage
    ? 'md:w-1/2 w-full'
    : 'w-full';
  const textInnerClasses = hasImage ? 'mx-0' : 'mx-0 text-left';

  // Section 4 (index 3) fallback CTA → Calendly if no CMS URL provided
  const shouldShowCalendly = !ctaUrl && index === 3;

  return (
    <section className="w-full bg-zinc-950 py-16 md:py-24">
      <div className={`container mx-auto px-6 md:px-10 lg:px-16 flex flex-col ${wrapperDir} items-center gap-10`}>
        {/* Image col */}
        {hasImage && (
          <div className="md:w-1/2 w-full flex justify-center">
            <Image
              src={imageUrl!}
              alt={header}
              width={800}
              height={600}
              className="rounded-2xl w-full h-auto max-w-2xl"
            />
          </div>
        )}

        {/* Text col */}
        <div className={`${textColClasses} flex flex-col ${textInnerClasses}`}>
          <h2 className={`text-white font-semibold leading-tight ${hasImage ? 'text-3xl md:text-4xl' : 'text-3xl md:text-5xl'}`}>
            {header}
          </h2>

          <div className={`mt-6 text-white font-family-inter ${hasImage ? '' : 'mx-auto max-w-3xl'} 
                        [&_ul]:text-left [&_ol]:text-left [&_li]:text-left`}>
            {documentToReactComponents(body, richTextOptions)}
          </div>

          {/* CTA */}
          <div className={`mt-8 ${hasImage ? (isOdd ? 'md:justify-start' : 'md:justify-start') : 'justify-center'} flex`}>
            {ctaUrl ? (
              <Link
                href={ctaUrl}
                className="rounded-[20px] bg-blue-500 hover:bg-blue-400 px-5 py-3 text-white text-base inline-flex items-center justify-center"
              >
                {ctaLabel || 'Learn More'}
              </Link>
            ) : shouldShowCalendly ? (
              <CalendlyButton
                label={ctaLabel || 'Book a Call'}
                className="rounded-[20px] bg-blue-500 hover:bg-blue-400 px-5 py-3 text-white text-base inline-flex items-center justify-center"
              />
            ) : null}
          </div>
        </div>
      </div>
    </section>
  );
}
