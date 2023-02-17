import { create } from "zustand";
import { ELang, Eng, ILang, Vn } from "../Lang";

interface ILangStore {
  lang: number;
  langs: ILang | null;
  switchLang(l: number): void;
}

const useLangStore = create<ILangStore>((set) => ({
  lang: ELang.eng,
  langs: Eng,
  switchLang: (l) => {
    if (l === ELang.eng) set((state) => ({ ...state, lang: l, langs: Eng }));
    else if (l === ELang.vn) set((state) => ({ ...state, lang: l, langs: Vn }));
  },
}));

export default useLangStore;
