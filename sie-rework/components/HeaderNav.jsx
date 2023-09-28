"use client";

import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem,
  Button,
} from "@nextui-org/react";
import { signOut } from "next-auth/react";
import Link from "next/link";
import { useParams, usePathname } from "next/navigation";

const HeaderNav = () => {
  const pathname = usePathname();

  const routes = [
    {
      route: "/sie",
      name: "Inicio",
    },
    {
      route: "/sie/datos-generales",
      name: "Perfil",
    },
    {
      route: "/sie/carga-documentos",
      name: "Documentos",
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
      name: "Act. Complementarias",
    },
    {
      route: "/sie/adeudos-a-dptos",
      name: "Adeudos",
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
      name: "Servicios",
    },
    {
      route: "/sie/evaluacion-docente",
      name: "Evaluación Docente",
    },
  ];

  return (
    <header>
      <Navbar
        classNames={{
          item: [
            "flex",
            "relative",
            "h-full",

            "items-center",
            "bg-primary",
            "items-center",
            "text-white",

            "data-[active=true]:after:content-['']",
            "data-[active=true]:after:absolute",
            "data-[active=true]:after:bottom-0",
            "data-[active=true]:after:left-0",
            "data-[active=true]:after:right-0",
            "data-[active=true]:after:h-[4px]",
            "data-[active=true]:after:rounded-[2px]",
            "data-[active=true]:after:bg-tertiary",
          ],
        }}
        className="flex bg-primary text-white justify-center"
      >
        <NavbarContent>
          <NavbarMenuToggle aria-label="Abrir menu" />
          <NavbarBrand>
            <p className="font-bold text-inherit">Todo</p>
          </NavbarBrand>
        </NavbarContent>

        <NavbarContent
          className="hidden sm:flex gap-4 w-fit mx-4"
          justify="center"
        >
          <NavbarItem isActive={pathname === "/sie"}>
            <Link href={"/sie"}>Inicio</Link>
          </NavbarItem>
          <NavbarItem isActive={pathname === "/sie/horario"}>
            <Link href={"/sie/horario"}>Horario</Link>
          </NavbarItem>
          <NavbarItem isActive={pathname === "/sie/calificaciones"}>
            <Link href={"/sie/calificaciones"}>Calificaciones</Link>
          </NavbarItem>
          <NavbarItem isActive={pathname === "/sie/kardex"}>
            <Link href={"/sie/calificaciones"}>Kardex</Link>
          </NavbarItem>
          <NavbarItem isActive={pathname === "/sie/reinscripciones"}>
            <Link href={"/sie/reinscripciones"}>Reinscripciones</Link>
          </NavbarItem>
          <NavbarItem isActive={pathname === "/sie/residencias"}>
            <Link href={"/sie/residencias"}>Residencias</Link>
          </NavbarItem>
        </NavbarContent>
        <NavbarContent className="flex" justify="end">
          <Button
            onClick={() => signOut({ redirect: true, callbackUrl: "/" })}
            className="bg-secondary text-white font-semibold hover:bg-secondary/40"
          >
            Cerrar sesión
          </Button>
        </NavbarContent>
        <NavbarMenu>
          {routes.map((item, index) => (
            <NavbarMenuItem key={`${item}-${index}`}>
              <Link className="w-full" href={item.route} size="lg">
                {item.name}
              </Link>
            </NavbarMenuItem>
          ))}
        </NavbarMenu>
      </Navbar>
    </header>
  );
};

export default HeaderNav;
