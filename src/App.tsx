import { Box, Stack } from "@mui/material";
import Label from "./components/Label";

export default function App() {

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
          maxWidth: 400
        }}
      >
        <Stack
          direction='column'
          spacing={1}
        >
          <Label />
        </Stack>
      </Box>
    </Box>
  );
}
