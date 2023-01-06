import React from "react";
import { AppBar, Toolbar, Button, Typography } from "@mui/material";
import SyncIcon from "@mui/icons-material/Sync";
import { useDispatch } from "react-redux";
import { crudActions } from "./redux/redux-toolkit";

export default function Header() {
  const dispatch = useDispatch();
  const clickHandler = () => {
    dispatch(crudActions.reload());
  };

  return (
    <>
      <AppBar>
        <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
          <Typography variant="h5">Title Here</Typography>
          <Button variant="contained" onClick={clickHandler}>
            <Typography>Reload</Typography>
            <SyncIcon />
          </Button>
        </Toolbar>
      </AppBar>
    </>
  );
}
