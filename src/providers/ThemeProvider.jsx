"use client";

import React from "react";
import { ThemeProvider as NextThemesProvider } from "next-themes";
import { Provider } from "react-redux";
import { store } from "@/Redux/store";
import { Toaster } from "react-hot-toast";
import TanstackProvider from "./TanstackProvider";
import { TooltipProvider } from "@/components/ui/tooltip";

export function ThemeProvider({ children, ...props }) {
  return (
    <NextThemesProvider {...props}>
      <TanstackProvider>
                <TooltipProvider>

        <Provider store={store}>
          {children}
          <Toaster position="top-center" reverseOrder={false} />
        </Provider>
        </TooltipProvider>
      </TanstackProvider>
    </NextThemesProvider>
  );
}
