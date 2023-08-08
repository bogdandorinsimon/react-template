import { Box, Typography } from "@mui/material";
import { AxiosError } from "axios";
import { ReactNode } from "react";
import { useTranslate } from "hooks/useTranslate";
import sxStyles from "./styles";

type Props = {
  children: ReactNode;
  isLoading?: boolean;
  isError?: boolean;
  error?: Nullable<AxiosError>;
};

const PageWrapper = ({
  children,
  isLoading = false,
  isError = false,
  error = null
}: Props) => {
  const { translate } = useTranslate();
  const classes = sxStyles();

  if (isLoading) {
    return (
      <Typography variant="h2">
        {translate("app.loading", "Loading...")}
      </Typography>
    );
  }

  if (isError) {
    return (
      <Typography variant="h2">
        {error
          ? error.message
          : translate(
              "app.error",
              "An error has occurred, please retry later!"
            )}
      </Typography>
    );
  }

  return <Box sx={classes.root}>{children}</Box>;
};

export default PageWrapper;
