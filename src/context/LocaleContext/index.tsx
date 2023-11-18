import flatten from "flat";
import { ReactNode, createContext, useMemo, useState } from "react";
import { IntlProvider } from "react-intl";
import en from "translations/en.json";

const DEFAULT_LOCALE = "en";

type Locale = "en";
type SetLocaleFn = (locale: Locale) => void;
type LocaleContextState = { locale: Locale; setLocale: SetLocaleFn };

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
