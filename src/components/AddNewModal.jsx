import * as React from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import FormControl from "@mui/material/FormControl";

export default function AddNewModal() {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleSubmit = (e) => {
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
              margin="dense"
              id="id"
              label="Id"
              type="text"
              fullWidth
              variant="standard"
              required={true}
            />{" "}
            <TextField
              margin="dense"
              id="title"
              label="Title"
              type="text"
              fullWidth
              variant="standard"
              required={true}
            />
            <TextField
              margin="dense"
              id="state"
              label="State"
              type="text"
              fullWidth
              variant="standard"
              required={true}
            />
            <TextField
              margin="dense"
              id="url"
              label="Url"
              type="text"
              fullWidth
              variant="standard"
            />
            <TextField
              margin="dense"
              id="createdAt"
              label="Created at"
              type="text"
              fullWidth
              variant="standard"
            />
            <TextField
              margin="dense"
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
