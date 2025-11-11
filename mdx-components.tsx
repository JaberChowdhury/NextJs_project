import { ComponentPropsWithoutRef } from "react";
import Link from "next/link";
import { highlight } from "sugar-high";

// --- Type Definitions ---
// Using ComponentPropsWithoutRef ensures all default props (like id, etc.)
// are accepted and passed down.

type HeadingProps = ComponentPropsWithoutRef<"h1">;
type ParagraphProps = ComponentPropsWithoutRef<"p">;
type ListProps = ComponentPropsWithoutRef<"ul">;
type ListItemProps = ComponentPropsWithoutRef<"li">;
type AnchorProps = ComponentPropsWithoutRef<"a">;
type BlockquoteProps = ComponentPropsWithoutRef<"blockquote">;
type PreProps = ComponentPropsWithoutRef<"pre">;
type CodeProps = ComponentPropsWithoutRef<"code">;
type TableProps = ComponentPropsWithoutRef<"table">;
type ThProps = ComponentPropsWithoutRef<"th">;
type TdProps = ComponentPropsWithoutRef<"td">;
type HrProps = ComponentPropsWithoutRef<"hr">;
type ImgProps = ComponentPropsWithoutRef<"img">;
type KbdProps = ComponentPropsWithoutRef<"kbd">;

// --- Component Map ---

const components = {
  // Headings
  h1: (props: HeadingProps) => (
    <h1 className="font-medium pt-12 mb-4 text-3xl " {...props} />
  ),
  h2: (props: HeadingProps) => (
    <h2
      className="text-gray-800 dark:text-zinc-200 font-medium mt-10 mb-4 text-2xl"
      {...props}
    />
  ),
  h3: (props: HeadingProps) => (
    <h3
      className="text-gray-800 dark:text-zinc-200 font-medium mt-8 mb-3 text-xl"
      {...props}
    />
  ),
  h4: (props: HeadingProps) => (
    <h4
      className="text-gray-800 dark:text-zinc-200 font-medium mt-6 mb-2 text-lg"
      {...props}
    />
  ),
  h5: (props: HeadingProps) => (
    <h5
      className="text-gray-800 dark:text-zinc-200 font-medium mt-4 mb-1 text-base"
      {...props}
    />
  ),
  h6: (props: HeadingProps) => (
    <h6
      className="text-gray-700 dark:text-zinc-300 font-medium mt-4 mb-1 text-sm"
      {...props}
    />
  ),

  // Text
  p: (props: ParagraphProps) => (
    <p
      className="text-gray-800 dark:text-zinc-300 leading-relaxed my-4"
      {...props}
    />
  ),
  em: (props: ComponentPropsWithoutRef<"em">) => (
    <em className="italic" {...props} />
  ),
  strong: (props: ComponentPropsWithoutRef<"strong">) => (
    <strong className="font-medium" {...props} />
  ),

  // Lists
  ol: (props: ListProps) => (
    <ol
      className="text-gray-800 dark:text-zinc-300 list-decimal pl-6 space-y-2 my-4"
      {...props}
    />
  ),
  ul: (props: ListProps) => (
    <ul
      className="text-gray-800 dark:text-zinc-300 list-disc pl-6 space-y-1 my-4"
      {...props}
    />
  ),
  li: (props: ListItemProps) => <li className="pl-1" {...props} />,

  // Links
  a: ({ href, children, ...props }: AnchorProps) => {
    const className =
      "text-blue-500 hover:text-blue-700 dark:text-blue-400 hover:dark:text-blue-300 underline underline-offset-2 decoration-blue-500/30 dark:decoration-blue-400/30 hover:decoration-blue-500/50 dark:hover:decoration-blue-400/50 transition-colors";

    if (href?.startsWith("/")) {
      return (
        <Link href={href} className={className} {...props}>
          {children}
        </Link>
      );
    }
    if (href?.startsWith("#")) {
      return (
        <a href={href} className={className} {...props}>
          {children}
        </a>
      );
    }
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={className}
        {...props}
      >
        {children}
      </a>
    );
  },

  // Code
  pre: (props: PreProps) => (
    <pre
      className="bg-gray-100 dark:bg-zinc-800/80 rounded-lg p-4 my-4 overflow-x-auto text-sm"
      {...props}
    />
  ),
  code: ({ children, className, ...props }: CodeProps) => {
    const codeString = children as string;

    // Check if it's a code block (mdx adds `language-...`)
    const isBlock = className?.startsWith("language-");

    if (isBlock) {
      // It's a code block. Highlight it.
      const codeHTML = highlight(codeString.trim());
      return (
        <code
          className={className} // Pass through language-js etc.
          dangerouslySetInnerHTML={{ __html: codeHTML }}
          {...props}
        />
      );
    }

    // It's inline code. Just style it.
    return (
      <code
        className="bg-gray-200 dark:bg-zinc-700 rounded-md px-1.5 py-0.5 text-sm font-mono text-gray-800 dark:text-zinc-200"
        {...props}
      >
        {children}
      </code>
    );
  },

  // Other Elements
  blockquote: (props: BlockquoteProps) => (
    <blockquote
      className="my-4 ml-2 border-l-3 border-gray-300 dark:border-zinc-600 pl-4 text-gray-700 dark:text-zinc-400"
      {...props}
    />
  ),
  hr: (props: HrProps) => (
    <hr className="my-8 border-gray-300 dark:border-zinc-700" {...props} />
  ),
  img: (props: ImgProps) => (
    <img
      className="rounded-lg shadow-md my-4 max-w-full"
      alt={props.alt || ""} // Add default alt
      {...props}
    />
  ),
  kbd: (props: KbdProps) => (
    <kbd
      className="bg-gray-200 dark:bg-zinc-700 rounded-md px-1.5 py-0.5 text-sm font-mono text-gray-800 dark:text-zinc-200 border-b-2 border-gray-300 dark:border-zinc-600 shadow-sm"
      {...props}
    />
  ),

  // Standard Markdown Tables
  table: (props: TableProps) => (
    <div className="overflow-x-auto my-6">
      <table
        className="w-full border-collapse border border-gray-300 dark:border-zinc-600"
        {...props}
      />
    </div>
  ),
  th: (props: ThProps) => (
    <th
      className="border border-gray-300 dark:border-zinc-600 px-4 py-2 text-left font-medium bg-gray-100 dark:bg-zinc-800"
      {...props}
    />
  ),
  td: (props: TdProps) => (
    <td
      className="border border-gray-300 dark:border-zinc-600 px-4 py-2"
      {...props}
    />
  ),

  // Your Custom Table Component (Styled to match)
  Table: ({ data }: { data: { headers: string[]; rows: string[][] } }) => (
    <div className="overflow-x-auto my-6">
      <table className="w-full border-collapse border border-gray-300 dark:border-zinc-600">
        <thead>
          <tr>
            {data.headers.map((header, index) => (
              <th
                key={index}
                className="border border-gray-300 dark:border-zinc-600 px-4 py-2 text-left font-medium bg-gray-100 dark:bg-zinc-800"
              >
                {header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.rows.map((row, index) => (
            <tr key={index}>
              {row.map((cell, cellIndex) => (
                <td
                  key={cellIndex}
                  className="border border-gray-300 dark:border-zinc-600 px-4 py-2"
                >
                  {cell}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  ),
};

// --- Exports ---

declare global {
  type MDXProvidedComponents = typeof components;
}

export function useMDXComponents(): MDXProvidedComponents {
  return components;
}
