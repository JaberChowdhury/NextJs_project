import {
  Slide,
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
} from "@mui/material";
import { TransitionProps } from "@mui/material/transitions";
import React from "react";
type propsType = {
  children: React.ReactNode;
  content: React.ReactNode;
  isOpen: () => void;
  isClose: () => void;
  open: boolean;
  title?: string;
};
const Transition = React.forwardRef(function Transition(
  props: TransitionProps & {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    children: React.ReactElement<any, any>;
  },
  ref: React.Ref<unknown>
) {
  return <Slide direction="up" ref={ref} {...props} />;
});
const ModelView = ({
  children,
  content,
  isOpen,
  isClose,
  open,
  title = "",
}: propsType) => {
  return (
    <React.Fragment>
      <Button
        sx={{
          minWidth: { md: 250, xl: 350 },
        }}
        onClick={isOpen}
      >
        {children}
      </Button>
      <Dialog
        open={open}
        TransitionComponent={Transition}
        keepMounted
        onClose={isClose}
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogTitle>{title}</DialogTitle>
        <DialogContent>{content}</DialogContent>
        <DialogActions>
          <Button onClick={isClose}>Close</Button>
        </DialogActions>
      </Dialog>
    </React.Fragment>
  );
};

export default ModelView;
