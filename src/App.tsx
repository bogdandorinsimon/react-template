import { QueryClient, QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";
import { BrowserRouter } from "react-router-dom";
import Header from "components/Header";
import { ThemeContextProvider } from "context/ThemeContextProvider";
import AppRoutes from "routes/AppRoutes";

const queryClient = new QueryClient();

const App = () => (
  <ThemeContextProvider>
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <Header />
        <AppRoutes />
      </BrowserRouter>
      <ReactQueryDevtools initialIsOpen={false} position="bottom-right" />
    </QueryClientProvider>
  </ThemeContextProvider>
);

export default App;
