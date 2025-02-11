import { Language } from "@/types/language";
import { ThemeName } from "@/types/style";
import { create } from "zustand";

type StoreType = {
  theme: ThemeName;
  language: Language;
  codestring: string;
  lineNumber: boolean;
  wrapLines: boolean;
  wrapLongLines: boolean;
  updateTheme: (data: ThemeName | Language) => void;
  updateLanguage: (data: Language | ThemeName) => void;
  updateLineNumber: () => void;
  updateWrapLines: () => void;
  updateWrapLongLines: () => void;
};

const useStore = create<StoreType>()((set) => ({
  theme: "atelierSavannaLight",
  language: "javascript",
  lineNumber: false,
  codestring: "console.log('Hello World!')",
  wrapLines: true,
  wrapLongLines: true,
  // inc: () => set((state) => ({ count: state.count + 1 })),
  updateTheme: (data: ThemeName) => set((state) => ({ ...state, theme: data })),
  updateLanguage: (data: Language) =>
    set((state) => ({ ...state, language: data })),
  updateLineNumber: () =>
    set((state) => ({ ...state, lineNumber: !state.lineNumber })),
  updateWrapLines: () =>
    set((state) => ({ ...state, wrapLines: !state.wrapLines })),
  updateWrapLongLines: () =>
    set((state) => ({ ...state, wrapLongLines: !state.wrapLongLines })),
}));

export default useStore;
