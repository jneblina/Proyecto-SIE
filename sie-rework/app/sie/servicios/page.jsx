"use client";
import React, { useEffect, useState } from "react";
import { useSession } from "next-auth/react";
import SieLayout from "@/components/SieLayout";
import {
  Table,
  TableHeader,
  TableBody,
  TableColumn,
  TableRow,
  TableCell,
} from "@nextui-org/react";
import { Button } from "@nextui-org/react";
import { IconCreditCardPay } from "@tabler/icons-react";
import Loading from "@/components/Loading";

const Servicios = () => {
  const [services, setServices] = useState([]);
  const [catalogServices, setCatalogServices] = useState([]);
  const { data: session } = useSession();
  const [loading, setLoading] = useState(true);

  const fetchAllServices = (studentId) => {
    Promise.all([fetch(`/api/servicios/${studentId}`), fetch("/api/servicios")])
      .then(([servicesResponse, catalogServicesResponse]) => {
        if (!servicesResponse.ok || !catalogServicesResponse.ok) {
          throw new Error("Al menos una de las solicitudes no fue exitosa");
        }
        return Promise.all([
          servicesResponse.json(),
          catalogServicesResponse.json(),
        ]);
      })
      .then(([servicesData, catalogServicesData]) => {
        setServices(servicesData);
        setCatalogServices(catalogServicesData);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error en la solicitud de servicios:", error);
        setLoading(true);
      });
  };

  useEffect(() => {
    if (session) {
      fetchAllServices(session.user.name);
    }
  }, [session]);

  return (
    <SieLayout>
      {loading ? (
        <Loading />
      ) : (
        <section className="mx-auto mt-4 xl:mt-8 max-w-7xl h-full overflow-auto px-2 bg-red">
          <div className="shadow-md bg-white rounded-md p-2">
            <div className="flex gap-2 flex-row mb-2 items-center justify-center text-lg">
              <IconCreditCardPay /> <p>Servicios</p>
            </div>
            <div>
              <div className="px-4 items-center justify-start text-lg">
                <p>Mis Servicios</p>
              </div>
              <Table
                isStriped
                radius="sm"
                shadow="none"
                aria-label="Tabla de Servicios"
                className="w-full"
              >
                <TableHeader>
                  <TableColumn className="bg-tertiary text-white uppercase text-xs leading-normal xl:text-sm">
                    Folio
                  </TableColumn>
                  <TableColumn className="bg-tertiary text-white uppercase text-xs leading-normal xl:text-sm">
                    Código de Servicio
                  </TableColumn>
                  <TableColumn className="bg-tertiary text-white uppercase text-xs leading-normal xl:text-sm">
                    Descripción
                  </TableColumn>
                  <TableColumn className="bg-tertiary text-white uppercase text-xs leading-normal xl:text-sm">
                    Importe
                  </TableColumn>
                  <TableColumn className="bg-tertiary text-white uppercase text-xs leading-normal xl:text-sm">
                    Vigencia
                  </TableColumn>
                  <TableColumn className="bg-tertiary text-white uppercase text-xs leading-normal xl:text-sm">
                    Solicitado
                  </TableColumn>
                  <TableColumn className="bg-tertiary text-white uppercase text-xs leading-normal xl:text-sm">
                    Validado
                  </TableColumn>
                  <TableColumn className="bg-tertiary text-white uppercase text-xs leading-normal xl:text-sm">
                    Sucursal
                  </TableColumn>
                  <TableColumn className="bg-tertiary text-white uppercase text-xs leading-normal xl:text-sm">
                    Autorizado
                  </TableColumn>
                </TableHeader>
                <TableBody>
                  {services.map((service) => (
                    <TableRow key={service.idServiciosEstudiante}>
                      <TableCell>{service.folio}</TableCell>
                      <TableCell>{service.servicios.codigo}</TableCell>
                      <TableCell>{service.servicios.descripcion}</TableCell>
                      <TableCell>{service.servicios.importe}</TableCell>
                      <TableCell>{service.vigencia}</TableCell>
                      <TableCell>{service.solicitado}</TableCell>
                      <TableCell>{service.validado}</TableCell>
                      <TableCell>{service.sucursal}</TableCell>
                      <TableCell>
                        <span
                          className={
                            service.autorizado === "Si"
                              ? "bg-green-200 p-2 rounded"
                              : service.autorizado === "No"
                              ? "bg-red-200 p-2 rounded"
                              : ""
                          }
                        >
                          {service.autorizado}
                        </span>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
          </div>
          <div className="shadow-md bg-white rounded-md p-2 my-2 xl:my-8">
            <div className="px-4 items-center justify-start text-lg">
              <p>Catálogo de servicios</p>
            </div>
            <Table
              radius="sm"
              color="success"
              selectionMode="unique"
              shadow="none"
              aria-label="Catálogo de Servicios"
              className="w-full "
            >
              <TableHeader>
                <TableColumn className="bg-tertiary text-white uppercase text-xs leading-normal xl:text-sm">
                  Código de Servicio
                </TableColumn>
                <TableColumn className="bg-tertiary text-white uppercase text-xs leading-normal xl:text-sm">
                  Descripción
                </TableColumn>
                <TableColumn className="bg-tertiary text-white uppercase text-xs leading-normal xl:text-sm">
                  Importe
                </TableColumn>
                <TableColumn className="bg-tertiary text-white uppercase text-xs leading-normal xl:text-sm">
                  Vigencia
                </TableColumn>
              </TableHeader>
              <TableBody>
                {catalogServices.map((catalogService) => (
                  <TableRow key={catalogService.idServicios}>
                    <TableCell>{catalogService.codigo}</TableCell>
                    <TableCell>{catalogService.descripcion}</TableCell>
                    <TableCell>{catalogService.importe}</TableCell>
                    <TableCell>{catalogService.vigencia}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
            <div className="flex flex-col xl:flex-row items-center justify-center w-full">
              <Button className="xl:m-4 bg-blue-500 text-white">
                Imprimir para Pago
              </Button>
              <Button className="my-2 xl:m-4 bg-blue-500 text-white">
                Pagar en Línea
              </Button>
              <Button className="xl:m-4 bg-blue-500 text-white">
                Eliminar Servicio
              </Button>
            </div>
          </div>
        </section>
      )}
    </SieLayout>
  );
};

export default Servicios;
