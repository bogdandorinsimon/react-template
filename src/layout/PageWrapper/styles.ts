import { SxProps } from "@mui/material";
import { theme } from "theme/theme";

export const sxStyles = (): { [_: string]: SxProps } => ({
  container: {
    flexGrow: 1,
    p: "24px 40px 24px 16px",
    bgcolor: theme.palette.white.main,
    overflow: "auto",
    position: "relative"
  }
});
