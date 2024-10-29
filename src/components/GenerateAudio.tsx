import { Button } from "@mui/material";
import { useContext } from "react";
import { Context } from "../contexts/context";
import useSpeechSynthesis from "../hooks/useSpeechSynthesis";

export default function GenerateAudio() {

  const {
    isInputValue,
    isRate,
    isVoice
  } = useContext(Context);

  const {
    synth,
    textToSpeech
  } = useSpeechSynthesis();

  return (
    <Button
      id="basic-button"
      size="small"
      variant="outlined"
      onClick={() => textToSpeech({ text: isInputValue!, rate: isRate, voice: isVoice, synth: synth })}
      sx={{
        color: "rgb(238, 238, 238)",
        borderColor: "rgb(238, 238, 238, .5)",
        ":hover": {
          backgroundColor: "rgb(33, 33, 33, .8)"
        }
      }}
    >
      Gerar áudio
    </Button>
  )
}