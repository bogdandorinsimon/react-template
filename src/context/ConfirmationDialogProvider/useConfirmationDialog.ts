import { useContext } from "react";
import { DialogOptions } from "models/components";
import { ConfirmationDialogContext } from "./index";

export const useConfirmationDialog = () => {
  const openDialog = useContext(ConfirmationDialogContext);

  if (!openDialog) {
    throw new Error(
      "ConfirmationDialog must be used within a provider, consider wrapping a parent with 'ConfirmationDialogProvider'"
    );
  }

  const getConfirmation = (options: DialogOptions) =>
    new Promise<boolean>((resolve) => {
      openDialog({ ...options }, resolve);
    });

  return { getConfirmation };
};
