import { Stack } from "@mui/material";
import { Suspense } from "react";
import { Outlet } from "react-router-dom";
import { LoadingIndicator } from "components/LoadingIndicator";
import { sxStyles } from "./styles";

export const AuthLayout = () => {
  const classes = sxStyles();

  return (
    <Stack sx={classes.root}>
      <Suspense fallback={<LoadingIndicator />}>
        <Outlet />
      </Suspense>
    </Stack>
  );
};
