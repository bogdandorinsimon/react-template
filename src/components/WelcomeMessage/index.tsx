import { Typography } from "@mui/material";
import sxStyles from "./styles";

type Props = {
  message: string;
};

const WelcomeMessage = ({ message }: Props) => {
  const classes = sxStyles();

  return <Typography sx={classes.message}>{message}</Typography>;
};

export default WelcomeMessage;
