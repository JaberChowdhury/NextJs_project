"use client";
import React, { useState, useEffect, useRef } from "react";
import { Button } from "@/components/ui/button"; // Optional shadcn import
import { Switch } from "@/components/ui/switch"; // Optional shadcn import
import { Label } from "@/components/ui/label"; // Optional shadcn import
import useEditor from "@/store/useEditor";

const Editor = () => {
  const { markdown, setMarkdown } = useEditor();
  const [lineNumbers, setLineNumbers] = useState([1]);
  const [textWrap, setTextWrap] = useState(true);
  const textareaRef = useRef<HTMLTextAreaElement>(null);
  const lineNumbersRef = useRef<HTMLDivElement>(null);

  // Update line numbers when content changes
  useEffect(() => {
    const lines = markdown.split("\n");
    const newLineNumbers = Array.from(
      { length: lines.length },
      (_, i) => i + 1
    );
    setLineNumbers(newLineNumbers.length > 0 ? newLineNumbers : [1]);

    const syncScroll = () => {
      if (lineNumbersRef.current && textareaRef.current) {
        lineNumbersRef.current.scrollTop = textareaRef.current.scrollTop;
      }
    };

    const textarea = textareaRef.current;
    if (textarea) {
      textarea.addEventListener("scroll", syncScroll);
    }

    return () => {
      if (textarea) {
        textarea.removeEventListener("scroll", syncScroll);
      }
    };
  }, [markdown]);

  const handleContentChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setMarkdown(e.target.value);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === "Tab") {
      e.preventDefault();
      const target = e.target as HTMLTextAreaElement;
      const { selectionStart, selectionEnd } = target;
      const newContent =
        markdown.substring(0, selectionStart) +
        "  " +
        markdown.substring(selectionEnd);
      setMarkdown(newContent);

      setTimeout(() => {
        if (textareaRef.current) {
          textareaRef.current.selectionStart = selectionStart + 2;
          textareaRef.current.selectionEnd = selectionStart + 2;
        }
      }, 0);
    }
  };

  const toggleTextWrap = () => {
    setTextWrap(!textWrap);
  };

  return (
    <div className="h-screen p-6 font-mono">
      {/* <h2 className="text-2xl font-bold mb-4">React Text Editor</h2> */}

      {/* Controls - can use either plain Tailwind or shadcn components */}
      <div className="flex items-center gap-4 mb-4">
        {/* Plain Tailwind version */}
        <button
          onClick={toggleTextWrap}
          className="px-4 py-2 bg-gray-100 hover:bg-gray-200 rounded-md border border-gray-300 text-sm"
        >
          {textWrap ? "Disable Text Wrap" : "Enable Text Wrap"}
        </button>

        {/* OR shadcn version (uncomment if using shadcn) */}
        <div className="flex items-center space-x-2">
          <Switch
            id="text-wrap"
            checked={textWrap}
            onCheckedChange={toggleTextWrap}
          />
          <Label htmlFor="text-wrap">Text Wrap</Label>
        </div>
      </div>

      {/* Editor */}
      <div className="flex border border-gray-300 rounded-md overflow-hidden h-full sticky">
        {/* Line numbers */}
        <div
          ref={lineNumbersRef}
          className="w-12 bg-gray-50 overflow-y-auto text-right py-2 pr-2 text-gray-500 select-none"
        >
          {lineNumbers.map((num) => (
            <div key={num} className="leading-6">
              {num}
            </div>
          ))}
        </div>

        {/* Text area */}
        <textarea
          ref={textareaRef}
          className={`flex-1 p-2 outline-none resize-none overflow-auto ${
            textWrap ? "whitespace-pre-wrap" : "whitespace-pre"
          }`}
          value={markdown}
          onChange={handleContentChange}
          onKeyDown={handleKeyDown}
          spellCheck="false"
          wrap={textWrap ? "soft" : "off"}
          placeholder="Start typing here..."
        />
      </div>

      {/* Status bar */}
      <div className="mt-2 text-sm text-gray-500">
        Lines: {lineNumbers.length} | Characters: {markdown.length}
      </div>
    </div>
  );
};

export default Editor;
