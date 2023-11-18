import { Typography } from "@mui/material";
import { useTranslate } from "hooks/useTranslate";

export const ErrorPage = () => {
  const { translate } = useTranslate();

  return (
    <Typography>{translate("common.error", "An error occurred!")} </Typography>
  );
};
