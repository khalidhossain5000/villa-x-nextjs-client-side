"use client";

import React from "react";
import { ThemeProvider as NextThemesProvider } from "next-themes";
import { Provider } from "react-redux";
import { store } from "@/Redux/store";

export function ThemeProvider({ children, ...props }) {
  return (
    <NextThemesProvider {...props}>
      <Provider store={store} >
        {children}
      </Provider>
    </NextThemesProvider>
  );
}
