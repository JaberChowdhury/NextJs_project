"use client";

import React from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import remarkFrontmatter from "remark-frontmatter";
import rehypeRaw from "rehype-raw";
import rehypeHighlight from "rehype-highlight";
import "highlight.js/styles/github.css"; // Import GitHub theme for syntax highlighting

const Editor = () => {
  const content = `Here’s a basic example of a Markdown table and code block:

### Markdown Table:

\`\`\`markdown
| Name   | Age | City        |
|--------|-----|-------------|
| Alice  | 30  | New York    |
| Bob    | 25  | Los Angeles |
| Carol  | 28  | Chicago     |
\`\`\`

This will render as:

| Name   | Age | City        |
|--------|-----|-------------|
| Alice  | 30  | New York    |
| Bob    | 25  | Los Angeles |
| Carol  | 28  | Chicago     |

### Code Block:

\`\`\`javascript
// This is a JavaScript code block
function greet(name) {
  console.log('Hello, ' + name + '!');
}
greet('Alice');
\`\`\`

This renders as:

\`\`\`javascript
// This is a JavaScript code block
function greet(name) {
  console.log('Hello, ' + name + '!');
}
greet('Alice');
\`\`\`



\`\`\` cpp
#include <iostream>
using namespace std;

int main() {
  cout << "Hello World!";
  return 0;
}
\`\`\`


\`\`\` java
public class Main {
  public static void main(String[] args) {
    System.out.println("Hello World");
  }
}
\`\`\`


`;
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
        children={content}
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
          ),
          td: ({ node, ...props }) => (
            <td
              style={{
                border: "1px solid #ccc",
                padding: "8px",
              }}
              {...props}
            />
          ),
        }}
      />
    </div>
  );
};

export default Editor;
