import { PaletteColorOptions, PaletteColor } from "@mui/material";

declare module "@mui/material/styles" {
  interface TypographyVariants {
    subtitle: React.CSSProperties;
    body: React.CSSProperties;
  }

  interface TypographyVariantsOptions {
    subtitle?: React.CSSProperties;
    body?: React.CSSProperties;
  }

  interface Palette {
    white: PaletteColor;
    black: PaletteColor;
  }
  interface PaletteOptions {
    white?: PaletteColorOptions;
    black?: PaletteColorOptions;
  }
}

declare module "@mui/material/SvgIcon" {
  interface SvgIconPropsColorOverrides {
    white: true;
    black: true;
  }
}
