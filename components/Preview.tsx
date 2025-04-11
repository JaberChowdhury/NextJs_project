"use client";

import React from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import remarkFrontmatter from "remark-frontmatter";
import rehypeRaw from "rehype-raw";
import rehypeHighlight from "rehype-highlight";
import "highlight.js/styles/github.css";
import useEditor from "@/store/useEditor";
import { Table, TableCell, TableHead } from "./ui/table";

const Preview = () => {
  const { markdown } = useEditor();
  return (
    <div
      style={{
        padding: "1rem",
        backgroundColor: "#ffffff",
        borderRadius: "8px",
        fontFamily: "Arial, sans-serif",
      }}
    >
      <ReactMarkdown
        children={markdown}
        remarkPlugins={[remarkGfm, remarkFrontmatter]}
        rehypePlugins={[rehypeRaw, rehypeHighlight]}
        components={{
          // code({ node, inline, className, children, ...props }) {
          code({ node, className, children, ...props }) {
            const match = /language-(\w+)/.exec(className || "");
            return match ? (
              <pre
                style={{
                  backgroundColor: "#f6f8fa",
                  padding: "1rem",
                  borderRadius: "8px",
                }}
              >
                <code className={className} {...props}>
                  {children}
                </code>
              </pre>
            ) : (
              <code
                className={className}
                style={{
                  backgroundColor: "#f6f8fa",
                  padding: "0.2rem",
                  borderRadius: "4px",
                }}
                {...props}
              >
                {children}
              </code>
            );
          },
          table: ({ node, ...props }) => (
            <table
              style={{
                borderCollapse: "collapse",
                width: "100%",
              }}
              {...props}
            />
            // <Table {...props} />
          ),
          th: ({ node, ...props }) => (
            <th
              style={{
                border: "1px solid #ccc",
                padding: "8px",
                backgroundColor: "#f6f8fa",
                textAlign: "left",
              }}
              {...props}
            />
            // <TableHead {...props} />
          ),
          td: ({ node, ...props }) => (
            <td
              style={{
                border: "1px solid #ccc",
                padding: "8px",
              }}
              {...props}
            />
            // <TableCell {...props} />
          ),
          h1: ({ node, ...props }) => <h1 className="text-6xl" {...props} />,
          h2: ({ node, ...props }) => <h2 className="text-5xl" {...props} />,
          h3: ({ node, ...props }) => <h3 className="text-4xl" {...props} />,
          h4: ({ node, ...props }) => <h4 className="text-3xl" {...props} />,
          h5: ({ node, ...props }) => <h5 className="text-2xl" {...props} />,
          h6: ({ node, ...props }) => <h6 className="text-xl" {...props} />,
        }}
      />
    </div>
  );
};

export default Preview;
