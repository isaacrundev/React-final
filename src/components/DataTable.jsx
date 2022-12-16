import * as React from "react";
import { DataGrid } from "@mui/x-data-grid";
import { useSelector } from "react-redux";
import EditModal from "./list_components/modals/EditModal";
import RemoveModal from "./list_components/modals/RemoveModal";

const columns = [
  { field: "id", headerName: "ID", width: 150 },
  { field: "title", headerName: "Title", width: 500 },
  { field: "state", headerName: "State", width: 100 },
  {
    field: "url",
    headerName: "Url",
    width: 400,
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
  {
    field: "edit",
    headerName: "Edit",
    width: 150,
    sortable: false,
    renderCell: () => {
      return (
        <>
          <EditModal />
          <RemoveModal />
        </>
      );
    },
  },
];

export default function DataTable() {
  const issueData = useSelector((state) => state.issueData);

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
