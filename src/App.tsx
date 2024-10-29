import { Box, Stack, Grow } from "@mui/material";
import { useEffect, useContext } from "react";
import Label from "./components/Label";
import InputText from "./components/InputText";
import SelectVoice from "./components/SelectVoice";
import SelectRate from "./components/SelectRate";
import GenerateAudio from "./components/GenerateAudio";
import useSpeechSynthesis from "./hooks/useSpeechSynthesis";
import { Context } from "./contexts/context";

export default function App() {

  const {
    synth,
    getVoices
  } = useSpeechSynthesis();

  const {
    isRate,
    isVoice,
    isInputValue
  } = useContext(Context);

  useEffect(() => {
    getVoices(synth)
  }, [synth]);

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh"
      }}
    >
      <Box
        sx={{
          width: "100%",
          maxWidth: 500,
          margin: 2
        }}
      >
        <Stack
          direction="column"
          spacing={3}
        >
          <Label />
          <InputText />
          <Stack
            direction="column"
            spacing={2}
          >
            <Stack
              direction="row"
              alignItems="center"
              spacing={2}
            >
              <SelectVoice />
              <SelectRate />
            </Stack>
              <Grow
                in={isRate && isVoice && isInputValue ? true : false}
              >
                <Box>
                  <GenerateAudio />
                </Box>
            </Grow>
          </Stack>
        </Stack>
      </Box>
    </Box>
  );
}
