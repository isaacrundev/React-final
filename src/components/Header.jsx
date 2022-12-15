import React from "react";
import { AppBar, Toolbar, Button, Typography } from "@mui/material";
import SyncIcon from "@mui/icons-material/Sync";
import { useDispatch } from "react-redux";

export default function Header() {
  const dispatch = useDispatch();
  const clickhandler = () => {dispatch({type:})};

  return (
    <div>
      <AppBar>
        <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
          <Typography variant="h5">Title Here</Typography>
          <Button variant="contained" onClick={clickhandler}>
            <Typography>Reload</Typography>
            <SyncIcon />
          </Button>
        </Toolbar>
      </AppBar>
    </div>
  );
}
