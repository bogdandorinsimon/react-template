import {
  Box,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Typography
} from "@mui/material";
import { useTranslate } from "hooks/useTranslate";
import { DialogOptions } from "models/components";
import { sxStyles } from "./styles";

type Props = DialogOptions & {
  isOpen: boolean;
  onConfirm: () => void;
  onClose: () => void;
};

export const ConfirmationDialog = ({
  isOpen,
  title,
  description,
  confirmText,
  cancelText,
  onConfirm,
  onClose
}: Props) => {
  const classes = sxStyles();
  const { translate } = useTranslate();

  const renderConfirmationText = () => {
    return confirmText ?? translate("common.delete", "Delete");
  };

  const renderCancelText = () => {
    return cancelText ?? translate("common.cancel", "Cancel");
  };

  return (
    <Dialog open={isOpen} onClose={onClose} maxWidth="sm" fullWidth>
      <DialogTitle>
        <Typography variant="subtitle">{title}</Typography>
      </DialogTitle>
      <DialogContent sx={classes.contentSpacing} dividers>
        <DialogContentText color="text.primary">
          <Box>
            <Typography variant="subtitle">{description} </Typography>
          </Box>
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button autoFocus onClick={onClose}>
          {renderCancelText()}
        </Button>
        <Button variant="contained" onClick={onConfirm}>
          {renderConfirmationText()}
        </Button>
      </DialogActions>
    </Dialog>
  );
};
