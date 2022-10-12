import React, { MouseEventHandler } from "react";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import Modal from "@mui/material/Modal";
import "./modal.css";

interface ModalProps {
  open: boolean;
  handleClose: MouseEventHandler<HTMLButtonElement>;
  style?: React.CSSProperties;
  childrenStyle?: React.CSSProperties;
  lg: number;
  md: number;
  sm: number;
  xs: number;
  disablePortal?: boolean;
  children: React.ReactNode;
}

const CustomModal: React.FC<ModalProps> = (props) => {
  const {
    open,
    lg,
    md,
    sm,
    xs,
    style,
    handleClose,
    disablePortal,
    childrenStyle,
    children,
  } = props;
  return (
    <div>
      <Modal open={open} onClose={handleClose} disablePortal={disablePortal}>
        <Grid
          container
          justifyContent="center"
          alignItems="center"
          className="backdrop"
        >
          <Grid item lg={lg} md={md} sm={sm} xs={xs} style={style}>
            <Paper style={childrenStyle}>{children}</Paper>
          </Grid>
        </Grid>
      </Modal>
    </div>
  );
};

export default CustomModal;
