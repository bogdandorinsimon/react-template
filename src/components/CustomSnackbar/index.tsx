import { Box, Snackbar, Typography } from "@mui/material";
import MuiAlert from "@mui/material/Alert";
import React from "react";
import { SnackbarOptions } from "models/components";
import { sxStyles } from "./styles";

const SNACKBAR_AUTOHIDE_DURATION = 3000;

type Props = SnackbarOptions & {
  isOpen: boolean;
  onClose: () => void;
};

export const CustomSnackbar = ({
  type,
  title,
  message,
  isOpen,
  onClose,
  vertical = "bottom",
  horizontal = "right"
}: Props) => {
  const classes = sxStyles();

  const handleClose = (_: React.SyntheticEvent | Event, reason?: string) => {
    if (reason === "clickaway") {
      return;
    }

    onClose();
  };

  return (
    <Snackbar
      open={isOpen}
      autoHideDuration={SNACKBAR_AUTOHIDE_DURATION}
      onClose={handleClose}
      anchorOrigin={{ vertical, horizontal }}
    >
      <MuiAlert
        elevation={6}
        variant="filled"
        onClose={handleClose}
        severity={type}
        sx={classes.alert}
      >
        <Box sx={classes.title}>
          <Typography variant="subtitle">{title}</Typography>
        </Box>
        <Box>
          <Typography variant="body">{message}</Typography>
        </Box>
      </MuiAlert>
    </Snackbar>
  );
};
