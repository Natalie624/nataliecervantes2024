// app/privacy/page.tsx

import React, { ReactNode } from "react";
import { getLegalContentBySlug } from "../utils/contentful";
import { documentToReactComponents, Options } from "@contentful/rich-text-react-renderer";
import { BLOCKS, INLINES, MARKS, Document, Node } from "@contentful/rich-text-types";



const options: Options = {
  renderMark: {
    [MARKS.BOLD]: (text: ReactNode) => <b className="text-[18px] text-black">{text}</b>,
    [MARKS.ITALIC]: (text: ReactNode) => <i className="text-black font-semibold">{text}</i>,
  },
  renderNode: {
    [INLINES.HYPERLINK]: (node: Node, children: React.ReactNode) => {
      const url = node.data.uri;
      return (
        <a href={url} target="_blank" rel="noopener noreferrer" className="text-blue-500 underline">
          {children}
        </a>
      );
    },
    [BLOCKS.OL_LIST]: (_node: Node, children: React.ReactNode) => (
      <ol className="list-decimal pl-8 mb-4 text-black">{children}</ol>
    ),
    [BLOCKS.HEADING_1]: (_node: Node, children: React.ReactNode) => (
      <h1 className="text-[28px] text-black">{children}</h1>
    ),
    [BLOCKS.HEADING_2]: (_node: Node, children: React.ReactNode) => (
      <h2 className="text-[24px] text-black mb-4 mt-8">{children}</h2>
    ),
    [BLOCKS.PARAGRAPH]: (_node: Node, children: React.ReactNode) => (
      <p className="mb-4 text-slate-800 leading-relaxed">{children}</p>
    ),
  },
};

const PrivacyPage = async () => {
  const { legalHeader, legalDescription } = await getLegalContentBySlug("privacy-policy-pulsecheck");

  return (
    <main className="min-h-screen bg-white px-6 py-24 md:px-20 text-gray-800 pt-[120px]">
      <section className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-6">{legalHeader}</h1>

        {legalDescription.nodeType === "document" ? (
          documentToReactComponents(legalDescription, options)
        ) : (
          <p>Content not available</p>
        )}
      </section>
    </main>
  );
};

export default PrivacyPage;
