import { Box, CircularProgress } from "@mui/material";
import { sxStyles } from "./styles";

export const LoadingIndicator = () => {
  const classes = sxStyles();

  return (
    <Box sx={classes.container}>
      <CircularProgress />
    </Box>
  );
};
