import { Box, Stack } from "@mui/material";
import { Suspense } from "react";
import { Outlet } from "react-router-dom";
import { LoadingIndicator } from "components/LoadingIndicator";
import { Header } from "layout/Header";
import { sxStyles } from "./styles";

export const MainLayout = () => {
  const classes = sxStyles();

  return (
    <Stack sx={classes.root}>
      <Header />
      <Box sx={classes.content}>
        <Suspense fallback={<LoadingIndicator />}>
          <Outlet />
        </Suspense>
      </Box>
    </Stack>
  );
};
