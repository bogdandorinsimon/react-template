import { QueryClient, QueryClientProvider } from "react-query";
import { BrowserRouter } from "react-router-dom";
import { ConfirmationDialogProvider } from "context/ConfirmationDialogProvider";
import { ThemeProvider } from "context/ThemeProvider";
import Header from "layout/Header";
import AppRoutes from "routes/AppRoutes";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <ConfirmationDialogProvider>
      <ThemeProvider>
        <BrowserRouter>
          <Header />
          <AppRoutes />
        </BrowserRouter>
      </ThemeProvider>
    </ConfirmationDialogProvider>
  </QueryClientProvider>
);

export default App;
