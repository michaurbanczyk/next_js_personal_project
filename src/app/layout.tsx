import { AppRouterCacheProvider } from "@mui/material-nextjs/v14-appRouter";
import { ReactNode } from "react";
import SessionWrapper from "@/components/SessionWrapper/SessionWrapper";
import { MSWProvider } from "@/app/msw-provider";
import ReactQueryProvider from "./query-provider";
import { ThemeProvider } from "@mui/system";
import theme from "@/app/theme/theme";
import CssBaseline from "@mui/material/CssBaseline";
import Navbar from "@/components/Navbar/Navbar";

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <SessionWrapper>
      <html lang="en" style={{ backgroundColor: "#fff" }}>
        <body>
          <AppRouterCacheProvider>
            <ThemeProvider theme={theme}>
              <CssBaseline />
              <ReactQueryProvider>
                <MSWProvider>
                  <Navbar />
                  {children}
                </MSWProvider>
              </ReactQueryProvider>
            </ThemeProvider>
          </AppRouterCacheProvider>
        </body>
      </html>
    </SessionWrapper>
  );
}
