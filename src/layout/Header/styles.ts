import { SxProps } from "@mui/material";
import { theme } from "theme/theme";

const HEADER_HEIGHT = 74;

export const sxStyles = (): { [_: string]: SxProps } => ({
  appBar: {
    zIndex: 3000,
    bgcolor: theme.palette.white.main,
    boxShadow: 0,
    height: HEADER_HEIGHT
  },
  toolbar: {
    height: "100%",
    pl: 6
  },
  title: {
    ml: 6
  },
  container: {
    width: "100%",
    height: "100%"
  }
});
