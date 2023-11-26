"use client";

import {
  Button,
  Avatar,
  Dropdown,
  DropdownMenu,
  DropdownItem,
  DropdownTrigger,
} from "@nextui-org/react";

import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem,
} from "@nextui-org/navbar";
import { signOut, useSession } from "next-auth/react";

import { useParams, usePathname, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { IconMenu, IconMenu2, IconX } from "@tabler/icons-react";
import Link from "next/link";

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
    route: "/sie/kardex",
    name: "Kardex",
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
        <NavbarMenuItem key={index}>
          <Link className="w-full" href={item.route}>
            {item.name}
          </Link>
        </NavbarMenuItem>
      ))}
      {userRoutes.map((item, index) => (
        <NavbarMenuItem key={index}>
          <Link className="w-full" href={item.route}>
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

  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? "hidden" : "auto";

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isMenuOpen]);

  return (
    <header>
      <Navbar
        onMenuOpenChange={setIsMenuOpen}
        maxWidth="2xl"
        height={"3rem"}
        className="bg-primary"
      >
        <NavbarContent>
          <button
            className="text-gray-400 p-1 hidden lg:flex rounded-md border-gray-400 border transition-colors hover:border-white"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <IconMenu2 size={25} />
          </button>

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
            <DropdownItem key="profile" textValue="logout" color="default">
              <Link href="/sie/datos-generales">Perfil</Link>
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
        onMenuOpenChange={setIsMenuOpen}
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
        <button
          className="text-gray-400 lg:hidden p-1 rounded-md border-gray-400 border transition-colors hover:border-white"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <IconMenu2 size={25} />
        </button>
        <NavbarBrand className="lg:hidden">
          <p className="font-bold text-inherit">Todo</p>
        </NavbarBrand>

        <NavbarContent
          className="hidden lg:flex gap-4 mx-4 items-center"
          justify="center"
        >
          {routes.map((item, index) => (
            <NavbarItem key={index} isActive={pathname === item.route}>
              <Link
                className="text-sm font-medium text-white transition-colors hover:text-tertiary"
                href={item.route}
              >
                {item.name}
              </Link>
            </NavbarItem>
          ))}
        </NavbarContent>

        <MenuNavBar />
      </Navbar>

      <div
        className={`fixed inset-0 items-start flex justify-start  bg-zinc-950/30 transition-transform z-40 ${
          !isMenuOpen && "invisible"
        } `}
        onClick={() => setIsMenuOpen(!isMenuOpen)}
      >
        <aside
          className={`absolute flex flex-col w-[320px] bg-[#fefcfb] h-full rounded-r-xl overflow-auto  shadow-xl duration-500 ease-out transition-all ${
            !isMenuOpen && "-translate-x-full"
          }`}
          onClick={(e) => e.stopPropagation()}
        >
          <div className="w-full px-4 py-2 justify-between items-center flex ">
            <h2 className="text-2xl font-semibold">MENÚ</h2>
            <button
              className="rounded-full  hover:bg-gray-400/40 p-1"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <IconX className="cursor-pointer" size={30} />
            </button>
          </div>
          <nav className="flex flex-col px-4">
            <p className="font-semibold text-gray-500 ">SERVICIOS</p>
            <ul className="px-2">
              {routes.map((item, index) => (
                <li
                  key={index}
                  className="flex rounded-lg font-medium text-lg  hover:text-white hover:bg-secondary"
                >
                  <Link className="p-2 w-full h-full" href={item.route}>
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>

            <p className="font-semibold text-gray-500 mt-4">ALUMNO</p>
            <ul className="px-2">
              {userRoutes.map((item, index) => (
                <li
                  key={index}
                  className="flex rounded-lg font-medium text-lg  hover:text-white hover:bg-secondary"
                >
                  <Link className="p-2 w-full h-full" href={item.route}>
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </aside>
      </div>
    </header>
  );
};

export default HeaderNav;
