import { SxProps } from "@mui/material";

export const sxStyles = (): { [_: string]: SxProps } => ({
  root: {
    width: "100%",
    height: "100vh"
  },
  content: {
    display: "flex",
    flexGrow: 1,
    overflow: "auto"
  }
});
