import { QueryClient, QueryClientProvider } from "react-query";
import { BrowserRouter } from "react-router-dom";
import { ThemeContextProvider } from "context/ThemeContextProvider";
import Header from "layout/Header";
import AppRoutes from "routes/AppRoutes";

const queryClient = new QueryClient();

const App = () => (
  <ThemeContextProvider>
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <Header />
        <AppRoutes />
      </BrowserRouter>
    </QueryClientProvider>
  </ThemeContextProvider>
);

export default App;
