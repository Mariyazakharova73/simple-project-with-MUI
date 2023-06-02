import React, { useState } from "react";
import AddIcon from "@mui/icons-material/Add";
import Tooltip from "@mui/material/Tooltip";
import { Zoom } from "@mui/material";
import { StyledBox, StyledFab } from "./AddIconStyles";
import Modal from "@mui/material/Modal";
import Backdrop from "@mui/material/Backdrop";
import Form from "./Form";
import MuiAlert from "@mui/material/Alert";
import Snackbar from "@mui/material/Snackbar";

const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

const Add = () => {
  const [openModal, setOpenModal] = useState(false);
  const [openAlert, setOpenAlert] = useState(false);
  const handleOpenModal = () => setOpenModal(true);
  const handleCloseModal = () => setOpenModal(false);

  const handleOpenAlert = () => {
    setOpenAlert(true);
  };

  const handleCloseAlert = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpenAlert(false);
  };

  return (
    <>
      <Tooltip
        title="Add"
        placement="top"
        arrow
        TransitionComponent={Zoom}
        onClick={handleOpenModal}
      >
        <StyledFab color="secondary" aria-label="add">
          <AddIcon />
        </StyledFab>
      </Tooltip>
      <Modal
        open={openModal}
        onClose={handleCloseModal}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        slots={{ backdrop: Backdrop }}
        slotProps={{
          backdrop: {
            timeout: 500,
          },
        }}
      >
        <StyledBox>
          <Form handleCloseModal={handleCloseModal} handleOpenAlert={handleOpenAlert}/>
        </StyledBox>
      </Modal>
      <Snackbar open={openAlert} autoHideDuration={3000} onClose={handleCloseAlert}>
        <Alert onClose={handleCloseAlert} severity="success" sx={{ width: "100%" }}>
          This is a success message!
        </Alert>
      </Snackbar>
    </>
  );
};

export default Add;
