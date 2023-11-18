import { useContext } from "react";
import { SnackbarContext } from "./index";

export const useSnackbar = () => {
  const openSnackbar = useContext(SnackbarContext);

  if (!openSnackbar) {
    throw new Error("useSnackbar must be used within a SnackbarProvider");
  }

  return openSnackbar;
};
