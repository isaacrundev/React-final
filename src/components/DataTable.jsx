import * as React from "react";
import { DataGrid } from "@mui/x-data-grid";
import store from "./redux";
import { useSelector } from "react-redux";

const columns = [
  { field: "id", headerName: "ID", width: 150 },
  { field: "title", headerName: "Title", width: 300 },
  { field: "state", headerName: "State", width: 100 },
  {
    field: "url",
    headerName: "Url",
    width: 300,
  },
  {
    field: "createdAt",
    headerName: "Created at",
    width: 100,
  },
  {
    field: "updatedAt",
    headerName: "Updated at",
    width: 100,
  },
];

export default function DataTable() {
  const issueData = useSelector((state) => state.initialIssueData);

  return (
    <div
      style={{
        height: 500,
        width: "100%",
      }}
    >
      <DataGrid
        rows={issueData}
        columns={columns}
        pageSize={10}
        rowsPerPageOptions={[5]}
      />
    </div>
  );
}
