import { SxProps } from "@mui/material";

type Props = {
  width: number;
  height: number;
};

export const sxStyles = ({
  width,
  height
}: Props): { [_: string]: SxProps } => ({
  icon: {
    width,
    height
  }
});
