import React from "react";
import { TextField } from "@mui/material";
import { Warning } from "@mui/icons-material";

export default function Search() {
  const changeHandler = () => {};

  return (
    <div>
      <TextField
        id="standard-basic"
        label="Search here"
        color="primary"
        variant="standard"
        onChange={changeHandler}
      />
    </div>
  );
}
