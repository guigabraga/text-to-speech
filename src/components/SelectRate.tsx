import { Button, Menu, MenuItem } from "@mui/material";
import { useState, useContext } from "react";
import { Context } from "../contexts/context";

export default function SelectRate() {

  const {
    isRate,
    setRate
  } = useContext(Context);

  let arrayRate = [1];
  for (let i = 1; i < 10; i++) {
    arrayRate.push(Number(`1.${i}`))
  }

  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const selectRate = (data: number) => {
    setRate(data);
    handleClose();
  };

  return(
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
        {isRate === 0 ? "Selecione uma velocidade" : `Velocidade ${isRate}`}
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
        {arrayRate?.map((item, index) => {
          return(
            <MenuItem
              key={index}
              onClick={() => selectRate(item)}
              sx={{
                "&.MuiMenuItem-root": {
                  color: "rgb(238, 238, 238)"
                },
                "&.MuiMenuItem-root: hover": {
                  backgroundColor: "black"
                }
              }}
            >
              {item}
            </MenuItem>
          );
        })}
      </Menu>
    </div>
  );
}