import { ReactNode, createContext, useCallback, useState } from "react";
import { ConfirmationDialog } from "components/ConfirmationDialog";
import { useDisclosure } from "hooks/useDisclosure";
import { DialogOptions } from "models/components";

type CallbackFunctionType = (value: boolean | PromiseLike<boolean>) => void;

type OpenDialogSignature = (
  options: DialogOptions,
  callbackFunction: CallbackFunctionType
) => void;

export const ConfirmationDialogContext =
  createContext<Optional<OpenDialogSignature>>(undefined);

type Props = {
  children: ReactNode;
};

export const ConfirmationDialogProvider = ({
  children
}: Props): JSX.Element => {
  const [dialogOptions, setDialogOptions] =
    useState<Optional<DialogOptions>>(undefined);
  const [callbackFunction, setCallbackFunction] =
    useState<CallbackFunctionType>(() => {});

  const { isOpen, onOpen, onClose } = useDisclosure();

  const openDialog: OpenDialogSignature = useCallback((options, res) => {
    onOpen();
    setDialogOptions(options);
    setCallbackFunction(() => res);
  }, []);

  const handleConfirm = () => {
    onClose();
    callbackFunction(true);
  };

  const handleClose = () => {
    onClose();
    callbackFunction(false);
  };

  return (
    <ConfirmationDialogContext.Provider value={openDialog}>
      <ConfirmationDialog
        isOpen={isOpen}
        onConfirm={handleConfirm}
        onClose={handleClose}
        {...dialogOptions}
      />
      {children}
    </ConfirmationDialogContext.Provider>
  );
};
