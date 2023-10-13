"use client";
import { NextUIProvider } from "@nextui-org/react";
import { SessionProvider } from "next-auth/react";

export function Providers({ children }) {
  return (
    <NextUIProvider>
      <SessionProvider
        refetchInterval={60 * 7}
        refetchWhenOffline={false}
        refetchOnWindowFocus={true}
      >
        {children}
      </SessionProvider>
    </NextUIProvider>
  );
}
