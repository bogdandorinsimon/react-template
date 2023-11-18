import { useContext } from "react";
import { SideDrawerContext } from "./index";

export const useSideDrawer = () => {
  const openSideDrawer = useContext(SideDrawerContext);

  if (!openSideDrawer) {
    throw new Error("useSideDrawer must be used within a SideDrawerProvider");
  }

  return openSideDrawer;
};
