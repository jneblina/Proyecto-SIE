import Link from "next/link";
import React from "react";

const Nav = () => {
  const routes = [
    {
      route: "/sie",
      name: "Inicio",
    },
    {
      route: "/sie/datos-generales",
      name: "Datos generales",
    },
    {
      route: "/sie/carga-documentos",
      name: "Carga de documentos",
    },
    {
      route: "/sie/horario",
      name: "Horario",
    },
  ];

  return (
    <aside className="bg-[#6A1B31] w-[16%] min-w-fit h-screen">
      {/* Rutas del dashboard */}
      <nav className="p-4 text-[#DAC6A4] font-semibold text-lg">
        <ul>
          {routes.map((item, index) => (
            <li key={index}>
              <Link
                className="flex flex-row gap-x-2 p-2 rounded-md hover:bg-[#ffffff3d] duration-100"
                href={item.route}
              >
                {item.name}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  );
};

export default Nav;
