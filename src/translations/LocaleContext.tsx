import flatten from "flat";
import { isUndefined } from "lodash";
import { ReactNode, createContext, useContext, useMemo, useState } from "react";
import { IntlProvider } from "react-intl";
import en from "./en.json";

const DEFAULT_LOCALE = "en";

export type Locale = "en";
export type SetLocaleFn = (locale: Locale) => void;
export type LocaleContextState = { locale: Locale; setLocale: SetLocaleFn };

export const LocaleContext = createContext<LocaleContextState | undefined>(
  undefined
);

export const LocaleContextProvider = ({
  children
}: {
  children: ReactNode;
}): JSX.Element => {
  const [locale, setLocale] = useState<Locale>(DEFAULT_LOCALE);

  const localizedMessages: Record<string, string> = useMemo(() => {
    const messages = {
      en
    };

    return flatten(messages[locale]);
  }, [locale]);

  const localeContextValue = useMemo(
    () => ({
      locale,
      setLocale
    }),
    [locale, setLocale]
  );

  return (
    <LocaleContext.Provider value={localeContextValue}>
      <IntlProvider locale={locale} messages={localizedMessages}>
        {children}
      </IntlProvider>
    </LocaleContext.Provider>
  );
};
LocaleContextProvider.displayName = "LocaleContextProviderComponent";

export const useLocaleContext = () => {
  const CTX = useContext(LocaleContext);

  if (isUndefined(CTX)) {
    throw new Error(
      "LocaleContext must be used within a provider, consider wrapping a parent with 'LocaleContextProvider'"
    );
  }

  return CTX;
};
