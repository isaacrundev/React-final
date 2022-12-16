import React from "react";
import Search from "./Search";
import DataTable from "./DataTable";
import AddNewModal from "./AddNewModal";
import { Box } from "@mui/material";

export default function MainSection() {
  return (
    <Box sx={{ mt: "5rem", flexDirection: "row" }}>
      <Search />
      <AddNewModal />
      <DataTable />
    </Box>
  );
}
