import * as React from "react";
import { DataGrid } from "@mui/x-data-grid";
import { useSelector } from "react-redux";
import EditModal from "./list_components/modals/EditModal";
import RemoveModal from "./list_components/modals/RemoveModal";

const columns = [
  {
    field: "id",
    headerName: "ID",
    // width: 150
    flex: 1,
  },
  {
    field: "title",
    headerName: "Title",
    //  width: 500
    flex: 1,
  },
  {
    field: "state",
    headerName: "State",
    // width: 100
    flex: 1,
  },
  {
    field: "url",
    headerName: "Url",
    // width: 400,
    flex: 1,
  },
  {
    field: "createdAt",
    headerName: "Created at",
    // width: 100,
    flex: 1,
  },
  {
    field: "updatedAt",
    headerName: "Updated at",
    // width: 100,
    flex: 1,
  },
  {
    field: "edit",
    headerName: "Edit",
    // width: 150,
    flex: 1,
    sortable: false,
    renderCell: (issueDataRow) => {
      return (
        <>
          <EditModal rowData={issueDataRow.row} />
          <RemoveModal rowData={issueDataRow.row} />
        </>
      );
    },
  },
];

export default function DataTable() {
  const issueData = useSelector((state) => state);

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
