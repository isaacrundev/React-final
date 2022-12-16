import React, { useState } from "react";
import { TextField } from "@mui/material";

export default function Search() {
  const [input, setInput] = useState("");
  const changeHandler = (e) => {
    setInput(e.target.value);
  };

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
