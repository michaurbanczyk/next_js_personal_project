import { AppRouterCacheProvider } from "@mui/material-nextjs/v14-appRouter";
import { ReactNode } from "react";
import Navbar from "@/components/Navbar/Navbar";
import SessionWrapper from "@/components/SessionWrapper/SessionWrapper";
import { MSWProvider } from "@/app/msw-provider";
import ReactQueryProvider from "./query-provider";

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <SessionWrapper>
      <html lang="en">
        <body style={{ margin: 0 }}>
          <AppRouterCacheProvider>
          <ReactQueryProvider>
            <MSWProvider>
              <Navbar />
              
              {children}
              
            </MSWProvider>
            </ReactQueryProvider>
          </AppRouterCacheProvider>
        </body>
      </html>
    </SessionWrapper>
  );
}
