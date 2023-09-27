"use client";

import SieLayout from "@/components/SieLayout";
import { signOut, useSession } from "next-auth/react";

export default function Sie() {
  const { data: session } = useSession();
  return (
    <SieLayout>
      <div className="h-[5%] text-white font-semibold text-lg p-2 bg-green-950 text-center">
        Sistema de Integración Escolar (SIE)
      </div>
      <div className="p-2">
        <h1>{session ? `Hola ${session.user.email}!` : "Hola albatro!"}</h1>
        <button
          className="bg-[#8D0D30] w-fit px-6 py-2 rounded text-white text-sm font-semibold"
          onClick={() => signOut({ redirect: true, callbackUrl: "/" })}
        >
          Cerrar sesión
        </button>
      </div>
    </SieLayout>
  );
}
