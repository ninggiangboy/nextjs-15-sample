import { create } from "zustand";

type State = {
  count: number;
};

type Action = {
  inc: () => void;
  reset: () => void;
};

export const useStore = create<State & Action>()((set) => ({
  count: 0,
  inc: () => set((state) => ({ count: state.count + 1 })),
  reset: () => set({ count: 0 }),
}));
