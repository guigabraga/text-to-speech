import { useContext } from "react";
import { Context } from "../contexts/context";
import { ITextToSpeech } from "../types";

export default function useSpeechSynthesis() {

  const {
    setVoices
  } = useContext(Context);

  const synth = window.speechSynthesis;

  const getVoices = (data: any) => {
    const voices = data.getVoices()
    const arrayFilter = voices.filter((e: any) => e.lang === "pt-BR")
    setVoices(arrayFilter);
    return;
  };

  const textToSpeech = (data: ITextToSpeech) => {

    const synth = window.speechSynthesis;
    
    const utterThis = new SpeechSynthesisUtterance(data.text);
    utterThis.lang = "pt-BR";
    utterThis.rate = data.rate;
    utterThis.volume = 1;
    utterThis.voice = data.voice
    synth.speak(utterThis);

  };

  return {
    synth,
    getVoices,
    textToSpeech
  }
}

