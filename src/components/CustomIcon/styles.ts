import { SxProps, Theme } from "@mui/material";

type Props = {
  width: number;
  height: number;
};

export const sxStyles = ({
  width,
  height
}: Props): { [_: string]: SxProps<Theme> } => ({
  icon: {
    width,
    height
  }
});
