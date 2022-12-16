import * as React from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import FormControl from "@mui/material/FormControl";
import EditIcon from "@mui/icons-material/Edit";
import { useDispatch } from "react-redux";

export default function EditModal({ rowData }) {
  const [open, setOpen] = React.useState(false);
  const [id, setId] = React.useState(rowData?.id);
  const [title, setTitle] = React.useState(rowData?.title);
  const [state, setState] = React.useState(rowData?.state);
  const [url, setUrl] = React.useState(rowData?.url);
  const [createdAt, setCreatedAt] = React.useState(rowData?.createdAt);
  const [updatedAt, setUpdatedAt] = React.useState(rowData?.updatedAt);

  const dispatch = useDispatch();

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleSubmit = () => {
    dispatch({
      type: "EDIT",
      editData: {
        id: id,
        title: title,
        state: state,
        url: url,
        createdAt: createdAt,
        updatedAt: updatedAt,
      },
    });
    setOpen(false);
  };

  return (
    <div>
      <Button variant="outlined" onClick={handleClickOpen}>
        <EditIcon />
      </Button>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Edit Issue</DialogTitle>
        <DialogContent>
          <FormControl>
            <TextField
              margin="dense"
              id="id"
              label="Id"
              type="text"
              fullWidth
              variant="standard"
              required={true}
              defaultValue={id}
              disabled={true}
            />{" "}
            <TextField
              margin="dense"
              id="title"
              label="Title"
              type="text"
              fullWidth
              variant="standard"
              required={true}
              defaultValue={title}
              onChange={(e) => {
                setTitle(e.target.value);
              }}
            />
            <TextField
              margin="dense"
              id="state"
              label="State"
              type="text"
              fullWidth
              variant="standard"
              required={true}
              defaultValue={state}
              onChange={(e) => {
                setState(e.target.value);
              }}
            />
            <TextField
              margin="dense"
              id="url"
              label="Url"
              type="text"
              fullWidth
              variant="standard"
              defaultValue={url}
              onChange={(e) => {
                setUrl(e.target.value);
              }}
            />
            <TextField
              margin="dense"
              id="createdAt"
              label="Created at"
              type="text"
              fullWidth
              variant="standard"
              defaultValue={createdAt}
              onChange={(e) => {
                setCreatedAt(e.target.value);
              }}
            />
            <TextField
              margin="dense"
              id="updatedAt"
              label="Updated at"
              type="text"
              fullWidth
              variant="standard"
              defaultValue={updatedAt}
              onChange={(e) => {
                setUpdatedAt(e.target.value);
              }}
            />
          </FormControl>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={handleSubmit}>Submit</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
