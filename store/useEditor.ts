import { create } from "zustand";
import { markdowndata } from "./constant/markdowndata";

interface USE_EDITOR_STATE {
  markdown: string;
  setMarkdown: (data: string) => void;
  clearMarkdown: () => void;
}

const useEditor = create<USE_EDITOR_STATE>((set) => ({
  markdown: markdowndata,
  setMarkdown: (data) => set((state) => ({ ...state, markdown: data })),
  clearMarkdown: () => set((state) => ({ ...state, markdown: "" })),
}));

export default useEditor;
