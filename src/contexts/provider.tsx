import { Context } from "./context";
import { useState } from "react";
import { IVoices } from "../types";

export const Provider = ({ children }: { children: JSX.Element }) => {

  const [isInputValue, setInputValue] = useState<string | null>(null);
  const [isVoices, setVoices] = useState<IVoices[] | []>([]);
  const [isVoice, setVoice] = useState<IVoices | null>(null);
  const [isRate, setRate] = useState<number>(0);

  return(
    <Context.Provider
      value={{
        isInputValue,
        setInputValue,
        isVoices, 
        setVoices,
        isVoice,
        setVoice,
        isRate,
        setRate
      }}
    >
      {children}
    </Context.Provider>
  );
}