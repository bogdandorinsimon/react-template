import { ROUTER_PATH } from "helpers/constants";
import { useLocation } from "react-router-dom";
import { useTranslate } from "./useTranslate";

export const usePageTitle = () => {
  const { translate } = useTranslate();
  const { pathname } = useLocation();

  switch (pathname) {
    case ROUTER_PATH.PRODUCTS:
      return translate("products.title", "Products");

    default:
      return "";
  }
};
