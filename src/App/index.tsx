import { CssBaseline } from "@mui/material";
import { QueryClient, QueryClientProvider } from "react-query";
import { BrowserRouter } from "react-router-dom";
import { ConfirmationDialogProvider } from "context/ConfirmationDialogProvider";
import { LocaleContextProvider } from "context/LocaleContext";
import { SideDrawerProvider } from "context/SideDrawerProvider";
import { SnackbarProvider } from "context/SnackbarProvider";
import { ThemeProvider } from "context/ThemeProvider";
import { AppRoutes } from "routes/AppRoutes";

const queryClient = new QueryClient();

export const App = () => {
  return (
    <LocaleContextProvider>
      <BrowserRouter>
        <QueryClientProvider client={queryClient}>
          <ThemeProvider>
            <ConfirmationDialogProvider>
              <SnackbarProvider>
                <SideDrawerProvider>
                  <CssBaseline />
                  <AppRoutes />
                </SideDrawerProvider>
              </SnackbarProvider>
            </ConfirmationDialogProvider>
          </ThemeProvider>
        </QueryClientProvider>
      </BrowserRouter>
    </LocaleContextProvider>
  );
};
