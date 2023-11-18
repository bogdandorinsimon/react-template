import { AppBar, Box, Toolbar, Typography } from "@mui/material";
import { usePageTitle } from "hooks/usePageTitle";
import { sxStyles } from "./styles";

export const Header = () => {
  const classes = sxStyles();
  const pageTitle = usePageTitle();

  return (
    <AppBar position="relative" sx={classes.appBar}>
      <Toolbar disableGutters sx={classes.toolbar}>
        <Box
          display="flex"
          flexDirection="row"
          justifyContent="space-between"
          alignItems="center"
          sx={classes.container}
        >
          <Box
            display="flex"
            flexDirection="row"
            justifyContent="row"
            alignItems="center"
          >
            <Typography variant="h2" sx={classes.title} color="text.primary">
              {pageTitle}
            </Typography>
          </Box>
        </Box>
      </Toolbar>
    </AppBar>
  );
};
