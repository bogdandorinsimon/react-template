import { useCallback } from "react";
import { useIntl } from "react-intl";

export type TranslateFnSignature = (
  messageId: string,
  defaultMessage: string,
  optionalValues?: Parameters<ReturnType<typeof useIntl>["formatMessage"]>["1"]
) => string;

export const useTranslate = () => {
  const { formatMessage } = useIntl();

  const translate = useCallback(
    (messageId, defaultMessage, optionalValues) => {
      return formatMessage(
        { id: messageId, defaultMessage },
        { ...optionalValues }
      );
    },
    [formatMessage]
  ) as TranslateFnSignature;

  return { translate };
};
