"use client";
import { NextUIProvider } from "@nextui-org/react";
import { SessionProvider } from "next-auth/react";

export function Providers({ children }) {
  return (
    <NextUIProvider>
      <SessionProvider refetchInterval={5 * 60} refetchOnWindowFocus={true}>
        {children}
      </SessionProvider>
    </NextUIProvider>
  );
}
