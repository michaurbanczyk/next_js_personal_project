import { AppRouterCacheProvider } from "@mui/material-nextjs/v14-appRouter";
import { ReactNode } from "react";
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
      <html lang="en" style={{ backgroundColor: "#343a40" }}>
        <body
          style={{
            margin: "100px",
            height: "800px",
            display: "block",
            boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px",
            backgroundColor: "#dee2e6",
            padding: "20px",
            borderRadius: "20px",
            fontFamily: "'Roboto', sans-serif",
            color: "black",
          }}
        >
          <AppRouterCacheProvider>
            <ReactQueryProvider>
              <MSWProvider>
                {/*<Navbar />*/}
                <h1
                  style={{
                    margin: "auto",
                    textAlign: "center",
                    border: "10px solid",
                    borderImageSlice: "1",
                    borderWidth: "3px",
                    paddingBottom: "10px",
                    width: "50%",
                    borderStyle: "solid",
                    borderLeft: "0",
                    borderRight: "0",
                    borderTop: "0",
                    borderImageSource:
                      "linear-gradient(to left, #9b9ea1, #dee2e6)",
                    marginBottom: "20px",
                  }}
                >
                  Expense Tracker
                </h1>
                {children}
              </MSWProvider>
            </ReactQueryProvider>
          </AppRouterCacheProvider>
        </body>
      </html>
    </SessionWrapper>
  );
}
