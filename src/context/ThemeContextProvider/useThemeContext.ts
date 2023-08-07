import { useContext } from "react";
import { ThemeContext } from ".";

const useThemeContext = () => {
  const context = useContext(ThemeContext);
  // prettier-ignore
  const ERROR_MSG = "BulkUploadContext must be used within a provider, consider wrapping a parent with 'BulkUploadContextProvider'";

  if (context === undefined) {
    throw new Error(ERROR_MSG);
  }

  return context;
};

export default useThemeContext;
