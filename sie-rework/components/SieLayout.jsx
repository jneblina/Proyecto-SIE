"use client";

import React from "react";
import Nav from "./Nav";
import { useSession } from "next-auth/react";
import { redirect } from "next/navigation";

const SieLayout = ({ children }) => {
  const { status } = useSession({
    required: true,
    onUnauthenticated() {
      redirect("/error");
    },
  });

  if (status === "loading") {
    return (
      <div className="fixed inset-0 flex items-center justify-center z-50">
        <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-[#6A1B31]"></div>
      </div>
    );
  }

  return (
    <div className="flex flex-row">
      <Nav />
      <main className="flex-grow">{children}</main>
    </div>
  );
};

export default SieLayout;
