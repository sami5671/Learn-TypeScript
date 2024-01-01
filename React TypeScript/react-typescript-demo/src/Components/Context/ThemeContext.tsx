import { createContext } from "react";
import { theme } from "./Theme";

type themeContextProviderProps = {
  children: React.ReactNode;
};
export const themeContext = createContext(theme);

const ThemeContext = ({ children }: themeContextProviderProps) => {
  return (
    <themeContext.Provider value={theme}>{children}</themeContext.Provider>
  );
};

export default ThemeContext;
