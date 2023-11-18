import { AlertColor } from "@mui/material/Alert";
import { createContext, useState, ReactNode, useMemo } from "react";
import { SnackbarOptions } from "models/components";
import { CustomSnackbar } from "../../components/CustomSnackbar";

type SnackbarContextType = {
  openSnackbar: (options: SnackbarOptions) => void;
  closeSnackbar: () => void;
};

export const SnackbarContext =
  createContext<Optional<SnackbarContextType>>(undefined);

type Props = {
  children: ReactNode;
};

export const SnackbarProvider = ({ children }: Props): JSX.Element => {
  const [isOpen, setIsOpen] = useState(false);
  const [type, setType] = useState<AlertColor>("success");
  const [title, setTitle] = useState("");
  const [message, setMessage] = useState<string | undefined>("");
  const [vertical, setVertical] = useState<"bottom" | "top">();
  const [horizontal, setHorizontal] = useState<"center" | "right" | "left">();

  const contextValue = useMemo(() => {
    return {
      openSnackbar: (options: SnackbarOptions) => {
        setType(options.type);
        setTitle(options.title);
        setMessage(options.message);
        setVertical(options.vertical);
        setHorizontal(options.horizontal);
        setIsOpen(true);
      },
      closeSnackbar: () => {
        setIsOpen(false);
      }
    };
  }, []);

  return (
    <SnackbarContext.Provider value={contextValue}>
      {children}
      {isOpen && (
        <CustomSnackbar
          type={type}
          title={title}
          message={message}
          isOpen={isOpen}
          onClose={contextValue.closeSnackbar}
          vertical={vertical}
          horizontal={horizontal}
        />
      )}
    </SnackbarContext.Provider>
  );
};
