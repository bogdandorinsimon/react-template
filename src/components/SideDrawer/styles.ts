import { SxProps, Theme } from "@mui/material";
import { theme } from "theme/theme";

const DRAWER_WIDTH = 728;

export const sxStyles = (): { [_: string]: SxProps<Theme> } => ({
  drawerContainer: {
    width: "100vw",
    height: "100vh",
    maxWidth: DRAWER_WIDTH
  },
  content: {
    height: "100%",
    p: 6
  },
  header: {
    px: 6,
    py: 4,
    boxShadow: ` 2px 0px 10px 0px ${theme.palette.black.main}`
  }
});
