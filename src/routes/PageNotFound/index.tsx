import { Typography } from "@mui/material";
import { useTranslate } from "hooks/useTranslate";

const PageNotFound = () => {
  const { translate } = useTranslate();

  return (
    <Typography>
      {translate("common.page_not_found", "Page not found!")}
    </Typography>
  );
};

export default PageNotFound;
