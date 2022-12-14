import * as React from "react";
import { DataGrid } from "@mui/x-data-grid";
import store from "./redux/index";

const columns = [
  { field: "id", headerName: "ID", width: 70 },
  { field: "title", headerName: "Title", width: 130 },
  { field: "state", headerName: "State", width: 130 },
  {
    field: "url",
    headerName: "Url",
    width: 90,
  },
  {
    field: "createdAt",
    headerName: "Created at",
    width: 90,
  },
  {
    field: "updatedAt",
    headerName: "Updated at",
    width: 90,
  },
];

const rows = store.getState();
// [
//   {
//     id: 1487834584,
//     title: "docs: updated docs , removed unnecessary imports and empty methods",
//     state: "open",
//     url: "https://api.github.com/repos/angular/angular/issues/48428",
//     createdAt: "2022-12-09T03:00:01Z",
//     updatedAt: "2022-12-10T05:41:53Z",
//   },
// ];

export default function DataTable() {
  return (
    <div style={{ height: 400, width: "100%" }}>
      <DataGrid
        rows={rows}
        columns={columns}
        pageSize={5}
        rowsPerPageOptions={[5]}
        checkboxSelection
      />
    </div>
  );
}
