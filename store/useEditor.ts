import { create } from "zustand";

interface USE_EDITOR_STATE {
  markdown: string;
  setMarkdown: (data: string) => void;
  clearMarkdown: () => void;
}

const useEditor = create<USE_EDITOR_STATE>((set) => ({
  markdown: `Here’s a basic example of a Markdown table and code block:
  
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
  
  
  `,
  setMarkdown: (data) => set((state) => ({ ...state, markdown: data })),
  clearMarkdown: () => set((state) => ({ ...state, markdown: "" })),
}));

export default useEditor;
