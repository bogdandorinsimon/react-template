import { ReactNode, createContext, useMemo, useState } from "react";

type Theme = "dark" | "light";
type ThemeContextValue = {
  theme: Theme;
  setTheme: (newTheme: Theme) => void;
};

export const ThemeContext = createContext<ThemeContextValue>({
  theme: "light",
  setTheme: () => {}
});

type Props = {
  children: ReactNode;
};

export const ThemeProvider = ({ children }: Props): JSX.Element => {
  const [theme, setTheme] = useState<Theme>("light");

  const themeContextValue = useMemo(
    () => ({
      theme,
      setTheme
    }),
    [theme, setTheme]
  );

  return (
    <ThemeContext.Provider value={themeContextValue}>
      {children}
    </ThemeContext.Provider>
  );
};
