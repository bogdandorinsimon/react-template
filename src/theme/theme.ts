import { createTheme } from "@mui/material";
import { palette } from "./palette";
import { typography } from "./typography";

export const theme = createTheme({
  breakpoints: {
    values: {
      xs: 0,
      sm: 350,
      md: 700,
      lg: 1025,
      xl: 1536
    }
  },
  spacing: (factor: number) => `${4 * factor}px`,
  typography: {
    button: {
      textTransform: "none"
    },
    ...typography
  },
  palette
});
