import React from "react";
import { TextField } from "@mui/material";
import { useDispatch } from "react-redux";
export default function Search() {
  const dispatch = useDispatch();

  const changeHandler = (e) => {
    dispatch({ type: "SEARCH", searchInput: e.target.value });
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
