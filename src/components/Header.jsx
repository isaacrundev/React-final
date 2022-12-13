import React from "react";
import { AppBar, Toolbar, Button, Typography } from "@mui/material";
import SyncIcon from "@mui/icons-material/Sync";

export default function Header() {
  const clickhandler = () => {};

  return (
    <header>
      <AppBar>
        <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
          <Typography variant="h5">Title Here</Typography>
          <Button variant="contained" onClick={clickhandler}>
            <Typography>Reload</Typography>
            <SyncIcon />
          </Button>
        </Toolbar>
      </AppBar>
    </header>
  );
}
