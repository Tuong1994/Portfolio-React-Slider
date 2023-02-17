import { create } from "zustand";

export enum ETheme {
  green = 1,
  red = 2,
  purple = 3,
}

interface IThemeStore {
  mode: boolean;
  theme: number;
  switchMode(s: boolean): void;
  switchColor(s: number): void;
}

const useThemeStore = create<IThemeStore>((set) => ({
  mode: true,
  theme: ETheme.green,
  switchMode: (s) => set((state) => ({ ...state, mode: s })),
  switchColor: (s) => set((state) => ({ ...state, theme: s })),
}));

export default useThemeStore;
