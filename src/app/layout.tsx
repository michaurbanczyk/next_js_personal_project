import { AppRouterCacheProvider } from "@mui/material-nextjs/v14-appRouter";
import { ReactNode } from "react";
import SessionWrapper from "@/app/components/SessionWrapper/SessionWrapper";
import { MSWProvider } from "@/app/msw-provider";
import ReactQueryProvider from "./query-provider";
import { ThemeProvider } from "@mui/system";
import theme from "@/app/theme/theme";
import CssBaseline from "@mui/material/CssBaseline";
import Navbar from "@/app/components/Navbar/Navbar";

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <SessionWrapper>
      <html lang="en">
        <body
          style={{
            backgroundImage: `url("background3.webp")`,
            backgroundSize: "cover",
          }}
        >
          <AppRouterCacheProvider>
            <ThemeProvider theme={theme}>
              <CssBaseline />
              <ReactQueryProvider>
                <MSWProvider>
                  <Navbar />
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      padding: "80px",
                    }}
                  >
                    {children}
                  </div>
                </MSWProvider>
              </ReactQueryProvider>
            </ThemeProvider>
          </AppRouterCacheProvider>
        </body>
      </html>
    </SessionWrapper>
  );
}
