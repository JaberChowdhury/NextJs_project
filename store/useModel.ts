// zustand store
import React from "react";
import { create } from "zustand";

type Model = {
  open: boolean;
  isOpen: () => void;
  isClose: () => void;
  children: React.ReactNode;
  content: React.ReactNode;
  updateChildren: (children: React.ReactNode) => void;
  updateContent: (content: React.ReactNode) => void;
};
export const useModel = create<Model>((set) => ({
  open: false,
  isOpen: () => set(() => ({ open: true })),
  isClose: () => set(() => ({ open: false })),
  children: "",
  content: "",
  updateChildren: (children) => set(() => ({ children: children })),
  updateContent: (content) => set(() => ({ content: content })),
}));

export default useModel;
