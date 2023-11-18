import { TypographyOptions } from "@mui/material/styles/createTypography";

declare module "@mui/material/Typography" {
  interface TypographyPropsVariantOverrides {
    subtitle?: true;
    body?: true;
  }
}

export const typography: TypographyOptions = {
  fontFamily: "IBM Plex Sans",
  h1: {
    fontSize: 34,
    lineHeight: "51px",
    fontWeight: 500,
    textTransform: "none"
  },
  h2: {
    fontSize: 24,
    lineHeight: "36px",
    fontWeight: 500,
    textTransform: "none"
  },
  h3: {
    fontSize: 24,
    lineHeight: "30px",
    fontWeight: 500,
    textTransform: "none"
  },
  h4: undefined,
  h5: undefined,
  h6: undefined,
  subtitle: {
    fontSize: 16,
    lineHeight: "24px",
    fontWeight: 400,
    textTransform: "none"
  },
  body: {
    fontSize: 16,
    lineHeight: "24px",
    fontWeight: 400,
    textTransform: "none"
  },
  overline: {
    fontSize: 12,
    lineHeight: "18px",
    fontWeight: 400,
    letterSpacing: 0.4,
    textTransform: "none"
  },
  caption: {
    fontSize: 12,
    lineHeight: "18px",
    fontWeight: 600,
    textTransform: "none"
  }
};
