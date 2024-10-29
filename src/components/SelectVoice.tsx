import { Button, Menu, MenuItem } from "@mui/material";
import { useState, useContext } from "react";
import { Context } from "../contexts/context";
import { IVoices } from "../types";

export default function SelectVoice() {

  const {
    isVoices,
    setVoice,
    isVoice
  } = useContext(Context);

  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const selectVoice = (data: IVoices) => {
    setVoice(data);
    handleClose();
  };

  return (
    <div>
      <Button
        id="basic-button"
        aria-controls={open ? 'basic-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
        size="small"
        variant="outlined"
        sx={{
          color: "rgb(238, 238, 238)",
          borderColor: "rgb(238, 238, 238, .5)",
          ":hover": {
            backgroundColor: "rgb(33, 33, 33, .8)"
          }
        }}
      >
        {isVoice?.name || "Selecione uma voz"}
      </Button>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
        sx={{
          "& .MuiPaper-root": {
            backgroundColor: "#292929",
            border: "solid 1px rgb(189, 189, 189, .1)"
          }
        }}
      >
        {isVoices?.map((item, index) => {
          return(
            <MenuItem
              key={index}
              onClick={() => selectVoice(item)}
              sx={{
                "&.MuiMenuItem-root": {
                  color: "rgb(238, 238, 238)"
                },
                "&.MuiMenuItem-root: hover": {
                  backgroundColor: "black"
                }
              }}
            >
              {item.name}
            </MenuItem>
          );
        })}
      </Menu>
    </div>
  );
}