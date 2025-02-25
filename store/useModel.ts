// zustand store
import React from "react";
import { create } from "zustand";

type Model = {
  open: boolean;
  isOpen: () => void;
  isClose: () => void;
  content: React.ReactNode;
  updateContent: (content: React.ReactNode) => void;
};
export const useModel = create<Model>((set) => ({
  open: false,
  isOpen: () => set(() => ({ open: true })),
  isClose: () => set(() => ({ open: false })),
  content: "",
  updateContent: (content) => set(() => ({ content: content })),
}));

export default useModel;
