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
  Avatar,
  Dropdown,
  DropdownMenu,
  DropdownItem,
  DropdownTrigger,
} from "@nextui-org/react";
import { signOut, useSession } from "next-auth/react";
import Link from "next/link";
import { useParams, usePathname, useRouter } from "next/navigation";
import { useState } from "react";

const userRoutes = [
  {
    route: "/sie/datos-generales",
    name: "Perfil",
  },

  {
    route: "/sie/kardex",
    name: "Kardex",
  },
  {
    route: "/sie/grupos-actuales",
    name: "Grupos Actuales",
  },
  {
    route: "/sie/adeudos",
    name: "Adeudos",
  },
  {
    route: "/sie/residencias",
    name: "Residencias",
  },

  {
    route: "/sie/carga-documentos",
    name: "Documentos",
  },

  {
    route: "/sie/actividades-complementarias",
    name: "Act. Complementarias",
  },
];

const routes = [
  {
    route: "/sie",
    name: "Inicio",
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
    route: "/sie/encuesta-de-carga",
    name: "Encuesta de Carga",
  },
  {
    route: "/sie/reinscripciones",
    name: "Reinscripciones",
  },

  {
    route: "/sie/servicios",
    name: "Servicios",
  },
  {
    route: "/sie/evaluacion-docente",
    name: "Evaluación Docente",
  },
];

const MenuNavBar = () => {
  return (
    <NavbarMenu className="mt-12">
      {routes.map((item, index) => (
        <NavbarMenuItem key={`${item}-${index}`}>
          <Link className="w-full" href={item.route} size="lg">
            {item.name}
          </Link>
        </NavbarMenuItem>
      ))}
      {userRoutes.map((item, index) => (
        <NavbarMenuItem key={`${item}-${index}`}>
          <Link className="w-full" href={item.route} size="lg">
            {item.name}
          </Link>
        </NavbarMenuItem>
      ))}
    </NavbarMenu>
  );
};

const HeaderNav = () => {
  const pathname = usePathname();
  const router = useRouter();
  const { data: session } = useSession();

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header>
      <Navbar
        onMenuOpenChange={setIsMenuOpen}
        maxWidth="2xl"
        height={"3rem"}
        className="bg-primary"
      >
        <NavbarContent>
          <NavbarMenuToggle
            className="text-white hidden lg:flex"
            aria-label={isMenuOpen ? "Cerrar menu" : "Abrir menu"}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          />
          <NavbarBrand>
            <p className="font-bold text-white ml-1 hidden sm:flex">
              SISTEMA DE INTEGRACIÓN ESCOLAR
            </p>
            <p className="font-bold text-white ml-1 sm:hidden">SIE</p>
          </NavbarBrand>
        </NavbarContent>

        <Dropdown placement="bottom-end">
          <DropdownTrigger>
            <div className="flex flex-row items-center space-x-3 hover:cursor-pointer">
              <Avatar
                isBordered
                as={"button"}
                className="transition-transform"
                color="secondary"
                name="Albatro Jose"
                size="sm"
              />
              <p className="font-bold text-white ml-1 ">Usuario</p>
            </div>
          </DropdownTrigger>
          <DropdownMenu aria-label="Profile Actions" variant="flat">
            <DropdownItem
              key="user-info"
              textValue="user-info"
              className="h-14 gap-2"
            >
              <p className="font-semibold">Iniciaste sesión como:</p>
              <p className="font-semibold">{session?.user.email}</p>
            </DropdownItem>
            <DropdownItem
             
              key="profile"
              textValue="logout"
              color="default"
            >
              <Link href='/sie/datos-generales'>Perfil</Link>
            </DropdownItem>

           

            <DropdownItem
              onClick={() => signOut({ redirect: true, callbackUrl: "/" })}
              key="logout"
              textValue="logout"
              color="danger"
            >
              Cerrar sesión
            </DropdownItem>
          </DropdownMenu>
        </Dropdown>

        <MenuNavBar />
      </Navbar>
      <Navbar
        maxWidth="2xl"
        height={"3rem"}
        classNames={{
          item: [
            "flex",
            "relative",
            "h-full",

            "items-center",
            "bg-primary",

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
        <NavbarMenuToggle className="lg:hidden" aria-label="Abrir menu" />
        <NavbarBrand className="lg:hidden">
          <p className="font-bold text-inherit">Todo</p>
        </NavbarBrand>

        <NavbarContent
          className="hidden lg:flex gap-4 mx-4 items-center"
          justify="center"
        >
          {routes.map((item, index) => (
            <NavbarItem key={index} isActive={pathname === item.route}>
              <Link className="text-sm" href={item.route}>
                {item.name}
              </Link>
            </NavbarItem>
          ))}
        </NavbarContent>

        <MenuNavBar />
      </Navbar>
    </header>
  );
};

export default HeaderNav;
