"use client";

import React, { useEffect } from "react";
import Nav from "./Nav";
import { useSession } from "next-auth/react";
import { redirect } from "next/navigation";
import HeaderNav from "./HeaderNav";
import Link from "next/link";

const SieLayout = ({ children }) => {
  const { data: session, status } = useSession({
    required: true,
    onUnauthenticated() {
      redirect("/error");
    },
  });

  const isSessionValid =
    session &&
    session.expires &&
    new Date(session.expires).getTime() > Date.now();

  if (status === "loading") {
    return (
      <div className="fixed inset-0 flex items-center justify-center z-50">
        <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-[#6A1B31]"></div>
      </div>
    );
  }

  if (!isSessionValid) {
    return (
      <div className="min-h-screen flex flex-col justify-center items-center">
        <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-2 rounded-md mb-4">
          <p className="font-bold text-xl">¡Error!</p>
          <p>La sesión ha caducado</p>
        </div>
        <Link href="/">
          <p className="text-blue-500 hover:underline">
            Regresar a la página principal
          </p>
        </Link>
      </div>
    );
  }

  return (
    <div className="flex flex-col">
      <HeaderNav />

      <main className="flex-grow min-h-screen bg-[#F5F0EA]">{children}</main>
    </div>
  );
};

export default SieLayout;
