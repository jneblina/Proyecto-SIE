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

const HeaderNav = () => {
  const pathname = usePathname();
  const router = useRouter();
  const { data: session } = useSession();

  const userRoutes = [
    {
      route: "/sie/datos-generales",
      name: "Perfil",
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
      route: "/sie/grupos-actuales",
      name: "Grupos Actuales",
    },
    {
      route: "/sie/adeudos-a-dptos",
      name: "Adeudos",
    },
    {
      route: "/sie/residencias",
      name: "Residencias",
    },
  ];

  const routes = [
    {
      route: "/sie",
      name: "Inicio",
    },

    {
      route: "/sie/carga-documentos",
      name: "Documentos",
    },

    {
      route: "/sie/actividades-complementarias",
      name: "Act. Complementarias",
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
      <Navbar maxWidth="2xl" height={"3rem"} className="bg-primary">
        <NavbarContent>
          <NavbarBrand>
            <p className="font-bold text-white ml-1 hidden sm:flex">
              SISTEMA DE INTEGRACIÓN ESCOLAR
            </p>
            <p className="font-bold text-white ml-1 sm:hidden">SIE</p>
          </NavbarBrand>
        </NavbarContent>
        <NavbarContent as="div" justify="end">
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
              <DropdownItem key="profile" className="h-14 gap-2">
                <p className="font-semibold">Iniciaste sesión como:</p>
                <p className="font-semibold">{session?.user.email}</p>
              </DropdownItem>

              {userRoutes.map((item, key) => (
                <DropdownItem
                  onClick={() => router.push(item.route)}
                  key={key}
                  color="default"
                >
                  {item.name}
                </DropdownItem>
              ))}

              <DropdownItem
                onClick={() => signOut({ redirect: true, callbackUrl: "/" })}
                key="logout"
                color="danger"
              >
                Cerrar sesión
              </DropdownItem>
            </DropdownMenu>
          </Dropdown>
        </NavbarContent>
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
        <NavbarContent className="lg:hidden">
          <NavbarMenuToggle aria-label="Abrir menu" />
          <NavbarBrand>
            <p className="font-bold text-inherit">Todo</p>
          </NavbarBrand>
        </NavbarContent>

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
      </Navbar>
    </header>
  );
};

export default HeaderNav;
