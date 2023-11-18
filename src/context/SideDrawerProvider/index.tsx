import { ReactNode, createContext, useMemo, useState } from "react";
import { SideDrawer } from "components/SideDrawer";
import { SideDrawerOptions } from "models/components";

type OpenDrawerSignature = {
  openSideDrawer: (options: SideDrawerOptions) => void;
  closeSideDrawer: () => void;
};

export const SideDrawerContext =
  createContext<Optional<OpenDrawerSignature>>(undefined);

type Props = {
  children: ReactNode;
};

export const SideDrawerProvider = ({ children }: Props): JSX.Element => {
  const [open, setOpen] = useState(false);
  const [drawerOptions, setDrawerOptions] = useState<SideDrawerOptions>({
    content: "",
    title: ""
  });

  const contextValue = useMemo(() => {
    return {
      openSideDrawer: (options: SideDrawerOptions) => {
        setDrawerOptions(options);
        setOpen(true);
      },
      closeSideDrawer: () => {
        setOpen(false);
      }
    };
  }, []);

  return (
    <SideDrawerContext.Provider value={contextValue}>
      <SideDrawer
        open={open}
        onClose={contextValue.closeSideDrawer}
        {...drawerOptions}
      />
      {children}
    </SideDrawerContext.Provider>
  );
};
