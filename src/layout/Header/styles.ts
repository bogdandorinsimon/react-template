import { SxProps } from "@mui/material";

const sxStyles = (): { [_: string]: SxProps } => ({
  container: {
    paddingX: 3
  },
  logoText: {
    mx: 2,
    display: { xs: "none", md: "flex" },
    fontWeight: 700,
    letterSpacing: ".3rem",
    color: "inherit",
    textDecoration: "none",
    cursor: "pointer"
  },
  pageButton: {
    my: 2,
    color: "white",
    display: "block"
  }
});

export default sxStyles;
