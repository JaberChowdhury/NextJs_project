import React from "react";
import { create } from "zustand";

type storeType = {
  isOpen: boolean;
  setOpen: () => void;
  data: React.ReactNode | string;
  changeData: (data: React.ReactNode) => void;
};

const useStore = create<storeType>((set) => ({
  isOpen: false,
  setOpen: () => set((state) => ({ isOpen: !state.isOpen })),
  data: "AlarmSmoke",
  changeData: (data) => set((state) => ({ data })),
}));

export default useStore;
