import type { Preview } from "@storybook/react";
import React from "react";
import { BrowserRouter } from "react-router-dom";
import { ConfirmationDialogProvider } from "../src/context/ConfirmationDialogProvider";
import { LocaleContextProvider } from "../src/context/LocaleContext";
import { SideDrawerProvider } from "../src/context/SideDrawerProvider";
import { SnackbarProvider } from "../src/context/SnackbarProvider";
import { ThemeProvider } from "../src/context/ThemeProvider";

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/
      }
    }
  },
  decorators: [
    (Story) => (
      <BrowserRouter>
        <ThemeProvider>
          <LocaleContextProvider>
            <ConfirmationDialogProvider>
              <SnackbarProvider>
                <SideDrawerProvider>
                  <Story />
                </SideDrawerProvider>
              </SnackbarProvider>
            </ConfirmationDialogProvider>
          </LocaleContextProvider>
        </ThemeProvider>
      </BrowserRouter>
    )
  ]
};

export default preview;
