import * as React from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import FormControl from "@mui/material/FormControl";
import { useDispatch } from "react-redux";

const eightdigitrandom = () => Math.floor(10000000 + Math.random() * 90000000);

export default function AddNewModal() {
  const [open, setOpen] = React.useState(false);
  const [id, setId] = React.useState("");
  const [title, setTitle] = React.useState("");
  const [state, setState] = React.useState("");
  const [url, setUrl] = React.useState("");
  const [createdAt, setCreatedAt] = React.useState("");
  const [updatedAt, setUpdatedAt] = React.useState("");

  const dispatch = useDispatch();

  const handleClickOpen = () => {
    setOpen(true);
    setId(eightdigitrandom);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleSubmit = () => {
    dispatch({
      type: "ADD_NEW",
      newData: {
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
        Add New
      </Button>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Add New Issue</DialogTitle>
        <DialogContent>
          <FormControl>
            <TextField
              id="id"
              label="Id"
              type="text"
              value={id}
              fullWidth
              variant="standard"
              disabled={true}
            />
            <TextField
              autoFocus
              id="title"
              label="Title"
              type="text"
              fullWidth
              variant="standard"
              required={true}
              onChange={(e) => {
                setTitle(e.target.value);
              }}
            />
            <TextField
              id="state"
              label="State"
              type="text"
              fullWidth
              variant="standard"
              required={true}
              onChange={(e) => {
                setState(e.target.value);
              }}
            />
            <TextField
              id="url"
              label="Url"
              type="text"
              fullWidth
              variant="standard"
              onChange={(e) => {
                setUrl(e.target.value);
              }}
            />
            <TextField
              id="createdAt"
              label="Created at"
              type="text"
              fullWidth
              variant="standard"
              onChange={(e) => {
                setCreatedAt(e.target.value);
              }}
            />
            <TextField
              id="updatedAt"
              label="Updated at"
              type="text"
              fullWidth
              variant="standard"
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
