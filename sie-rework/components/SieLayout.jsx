"use client";

import React from "react";
import Nav from "./Nav";
import { useSession } from "next-auth/react";
import { redirect } from "next/navigation";

const SieLayout = ({ children }) => {
  const { status } = useSession({
    required: true,
    onUnauthenticated() {
      redirect("/");
    },
  });

  if (status === "loading") {
    return <div>Cargando...</div>;
  }

  return (
    <div className="flex flex-row">
      <Nav />
      <main className="flex-grow">{children}</main>
    </div>
  );
};

export default SieLayout;
