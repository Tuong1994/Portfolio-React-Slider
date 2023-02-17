import { VN, Vn } from "./VN";
import { ENG, Eng } from "./ENG";

export enum ELang {
  eng = 1,
  vn = 2,
}

export type ILang = VN | ENG | undefined;

export { Vn, Eng };
