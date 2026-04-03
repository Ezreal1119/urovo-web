import { create } from "zustand";

type ConsoleState = {
  logs: string[];
  hasNew: boolean;

  append: (msg: string) => void;
  clear: () => void;
  markRead: () => void;
};

export const useConsoleStore = create<ConsoleState>((set) => ({
  logs: [],
  hasNew: false,

  append: (msg) =>
    set((s) => ({
      logs: [...s.logs, msg],
      hasNew: true,
    })),

  clear: () => set({ logs: [], hasNew: false }),

  markRead: () => set({ hasNew: false }),
}));
