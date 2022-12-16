import * as React from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import FormControl from "@mui/material/FormControl";
import { useDispatch } from "react-redux";

const eightdigitrandom = () => {
  Math.floor(10000000 + Math.random() * 90000000);
};

export default function AddNewModal() {
  const [open, setOpen] = React.useState(false);
  const dispatch = useDispatch();

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleSubmit = (e) => {
    dispatch({
      type: "ADD_NEW",
      newData: {
        id: 12345678,
        title: "docs: call interval methods explicitly from window",
        state: "open",
        url: "https://api.github.com/repos/angular/angular/issues/48459",
        createdAt: "2022-12-12T21:05:11Z",
        updatedAt: "2022-12-13T21:02:45Z",
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
              autoFocus
              id="id"
              label="Id"
              type="text"
              value={eightdigitrandom}
              fullWidth
              variant="standard"
              disabled={true}
            />
            <TextField
              id="title"
              label="Title"
              type="text"
              fullWidth
              variant="standard"
              required={true}
            />
            <TextField
              id="state"
              label="State"
              type="text"
              fullWidth
              variant="standard"
              required={true}
            />
            <TextField
              id="url"
              label="Url"
              type="text"
              fullWidth
              variant="standard"
            />
            <TextField
              id="createdAt"
              label="Created at"
              type="text"
              fullWidth
              variant="standard"
            />
            <TextField
              id="updatedAt"
              label="Updated at"
              type="text"
              fullWidth
              variant="standard"
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
