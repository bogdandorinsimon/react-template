import React from "react";
import ReactDOM from "react-dom/client";
import { LocaleContextProvider } from "translations/LocaleContext";
import App from "./App";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <LocaleContextProvider>
      <App />
    </LocaleContextProvider>
  </React.StrictMode>
);
