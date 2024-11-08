"use client";

import { ThemeProvider } from "@mui/material";
import React from "react";
import theme from "../theme/theme";
import { Provider } from "react-redux";
import { store } from "@/redux/store";
import dynamic from "next/dynamic";

const Providers = ({ children }: { children: React.ReactNode }) => {
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </Provider>
  );
};

// export default Providers;
export default dynamic(() => Promise.resolve(Providers), { ssr: false });
