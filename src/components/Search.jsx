import React, { useState } from "react";
import { TextField } from "@mui/material";
import { useSelector } from "react-redux";

export default function Search() {
  const [searchInput, setSearchinput] = useState("");

  const selector = useSelector((state) => state);

  const changeHandler = (e) => {
    setSearchinput(e.target.value);
    const filtered = selector.filter((item) => item);

    console.log(filtered);
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
