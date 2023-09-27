import Link from "next/link";
import React, { useState } from "react";

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
    {
      route: "/sie/calificaciones",
      name: "Calificaciones",
    },
    {
      route: "/sie/kardex",
      name: "Kardex",
    },
    {
      route: "/sie/actividades-complementarias",
      name: "Actividades Complementarias",
    },
    {
      route: "/sie/adeudos-a-dptos",
      name: "Adeudos a Departamentos",
    },
    {
      route: "/sie/grupos-actuales",
      name: "Grupos Actuales",
    },
    {
      route: "/sie/encuesta-de-carga",
      name: "Encuesta de Carga",
    },
    {
      route: "/sie/reinscripciones",
      name: "Reinscripciones",
    },
    {
      route: "/sie/residencias",
      name: "Residencias",
    },
    {
      route: "/sie/pago-de-servicios",
      name: "Pago de Servicios",
    },
    {
      route: "/sie/evaluacion-docente",
      name: "Evaluación Docente",
    },
  ];

  // Estado para controlar la visibilidad del menú
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Función para cambiar el estado del menú
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <aside
      className={`bg-[#6A1B31] w-${
        isMenuOpen ? "100%" : "16%"
      } min-w-fit h-screen flex flex-col`}
    >
      {/*Botón para dispositivos móviles*/}
      <button
        className={`md:hidden text-[#DAC6A4] hover:text-white ${
          isMenuOpen ? "text-xl" : "text-2xl"
        } p-4 flex ${isMenuOpen ? "justify-end" : "justify-center"}`}
        onClick={toggleMenu}
      >
        {isMenuOpen ? "✕" : "☰"}
      </button>
      {/* Rutas del dashboard */}
      <nav
        className={`p-4 text-[#DAC6A4] font-semibold ${
          isMenuOpen ? "text-base" : "text-lg"
        } ${isMenuOpen ? "" : "hidden md:block"}`}
      >
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
