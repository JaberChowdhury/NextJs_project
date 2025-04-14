import React from "react";
import { create } from "zustand";

export type ModalType = {
  isOpen: boolean;
  title: string;
  component: React.ReactNode | null;
  setComponent: (data: React.ReactNode) => void;
  setTitle: (data: string) => void;
  openModal: () => void;
  closeModal: () => void;
};

const useModal = create<ModalType>((set) => {
  return {
    isOpen: false,
    title: "Todo",
    component: null,
    setTitle: (data) => set((state) => ({ ...state, title: data })),
    setComponent: (data) =>
      set(() => ({
        component: data,
      })),
    openModal: () => {
      set(() => ({
        isOpen: true,
      }));
    },
    closeModal: () => {
      set(() => ({
        isOpen: false,
      }));
    },
  };
});

export default useModal;
