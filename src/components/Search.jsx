import React from "react";
import { TextField } from "@mui/material";
import { useDispatch } from "react-redux";
import { crudActions } from "./redux/redux-toolkit";

export default function Search() {
  const dispatch = useDispatch();

  const changeHandler = (e) => {
    dispatch(
      crudActions.search(e.target.value)
      // { type: "SEARCH", searchInput: e.target.value }
    );
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
