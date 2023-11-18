import { ThemeProvider as MuiThemeProvider } from "@mui/material";
import { ReactNode } from "react";
import { theme } from "theme/theme";

type Props = {
  children: ReactNode;
};

export const ThemeProvider = ({ children }: Props): JSX.Element => {
  return <MuiThemeProvider theme={theme}>{children}</MuiThemeProvider>;
};
