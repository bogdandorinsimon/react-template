import { useCallback, useState } from "react";

type DisclosureOptions = {
  defaultIsOpen?: boolean;
};

const DEFAULT_OPTIONS: DisclosureOptions = {
  defaultIsOpen: false
};

export const useDisclosure = (options: DisclosureOptions = DEFAULT_OPTIONS) => {
  const [isOpen, setIsOpen] = useState(options.defaultIsOpen);

  const onClose = useCallback(() => setIsOpen(false), []);
  const onOpen = useCallback(() => setIsOpen(true), []);

  const onToggle = useCallback(() => {
    const action = isOpen ? onClose : onOpen;
    action();
  }, [isOpen, onOpen, onClose]);

  return { isOpen: !!isOpen, onOpen, onClose, onToggle };
};
