import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle
} from "@mui/material";
import { DialogOptions } from "context/ConfirmationDialogProvider";

type Props = DialogOptions & {
  isOpen: boolean;
  onConfirm: () => void;
  onClose: () => void;
};

const ConfirmationDialog = ({
  isOpen,
  title,
  description,
  confirmText,
  cancelText,
  onConfirm,
  onClose
}: Props) => {
  if (!title || !description || !confirmText || !cancelText) {
    return null;
  }

  return (
    <Dialog open={isOpen} onClose={onClose}>
      <DialogTitle>{title}</DialogTitle>
      <DialogContent>
        <DialogContentText>{description}</DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button autoFocus onClick={onClose}>
          {cancelText}
        </Button>
        <Button onClick={onConfirm}>{confirmText}</Button>
      </DialogActions>
    </Dialog>
  );
};

export default ConfirmationDialog;
