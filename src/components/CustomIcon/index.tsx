import { SvgIcon, SvgIconProps } from "@mui/material";
import { sxStyles } from "./styles";

type IconSize = "x-small" | "small" | "medium" | "large" | "x-large";

type IconSizeValues = { [key in IconSize]: { width: number; height: number } };

const iconSizes: IconSizeValues = {
  "x-small": { width: 16, height: 16 },
  small: { width: 20, height: 20 },
  medium: { width: 24, height: 24 },
  large: { width: 26, height: 26 },
  "x-large": { width: 42, height: 42 }
};

type Props = Omit<SvgIconProps, "size"> & {
  size?: IconSize;
};

export const CustomIcon = ({ size = "medium", ...props }: Props) => {
  const classes = sxStyles({
    width: iconSizes[size].width,
    height: iconSizes[size].height
  });

  return <SvgIcon sx={classes.icon} {...props} />;
};
