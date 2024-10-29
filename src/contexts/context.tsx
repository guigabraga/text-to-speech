import { createContext } from "react";
import { IVoices } from "../types";

export type ContextType = {
  isInputValue: string | null,
  setInputValue: React.Dispatch<React.SetStateAction<string | null>>
  isVoices: IVoices[] | [],
  setVoices: React.Dispatch<React.SetStateAction<IVoices[] | []>>
  isVoice: IVoices | null,
  setVoice: React.Dispatch<React.SetStateAction<IVoices | null>>
  isRate: number,
  setRate: React.Dispatch<React.SetStateAction<number>>
}

export const Context = createContext<ContextType>(null!);