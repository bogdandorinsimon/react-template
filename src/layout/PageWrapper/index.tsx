import { Box, Typography } from "@mui/material";
import { ReactNode } from "react";
import { LoadingIndicator } from "components/LoadingIndicator";
import { useTranslate } from "hooks/useTranslate";
import { sxStyles } from "./styles";

type Props = {
  children: ReactNode;
  isLoading?: boolean;
  isError?: boolean;
  error?: Nullable<string>;
};

export const PageWrapper = ({
  children,
  isLoading = false,
  isError = false,
  error = null
}: Props) => {
  const { translate } = useTranslate();
  const classes = sxStyles();

  const renderPageContent = () => {
    if (isLoading) {
      return <LoadingIndicator />;
    }

    if (isError) {
      return (
        <Typography variant="h2">
          {error ??
            translate(
              "app.error",
              "An error has occurred, please retry later!"
            )}
        </Typography>
      );
    }

    return children;
  };

  return <Box sx={classes.container}>{renderPageContent()}</Box>;
};
