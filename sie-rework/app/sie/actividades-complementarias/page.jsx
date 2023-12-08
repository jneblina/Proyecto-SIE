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
import { IconCoin } from "@tabler/icons-react";
import Loading from "@/components/Loading";

const Page = () => {
  const [actividades, setActividades] = useState([]);
  const { data: session } = useSession();
  const [loading, setLoading] = useState(true);

  const fetchActividades = (studentId) => {
    fetch(`/api/complementarias/${studentId}`)
      .then((response) => {
        if (!response.ok) {
          throw new Error("La solicitud no fue exitosa");
        }
        return response.json();
      })
      .then((data) => {
        setActividades(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error en la solicitud:", error);
        setLoading(true);
      });
  };

  useEffect(() => {
    if (session) {
      fetchActividades(session.user.name);
    }
  }, [session]);

  return (
    <SieLayout>
      {
        loading ? (
          <Loading />
          
          ): (<section className="mx-auto mt-4 xl:mt-8 max-w-7xl h-full overflow-auto px-2 bg-red">
        <div className="shadow-md bg-white rounded-md p-2">
          <div className="flex gap-2 flex-row mb-2 items-center justify-center text-lg">
            <IconCoin /> <p>Actividades Complementarias</p>
          </div>

          <Table
            isStriped
            radius="sm"
            shadow="none"
            aria-label="Tabla de Actividades Complementarias"
            className="w-full"
          >
            <TableHeader>
              <TableColumn className="bg-tertiary text-white uppercase text-xs leading-normal xl:text-sm">Nombre de la Actividad</TableColumn>
              <TableColumn className="bg-tertiary text-white uppercase text-xs leading-normal xl:text-sm">Docente Responsable</TableColumn>
              <TableColumn className="bg-tertiary text-white uppercase text-xs leading-normal xl:text-sm">Créditos</TableColumn>
              <TableColumn className="bg-tertiary text-white uppercase text-xs leading-normal xl:text-sm">Horas</TableColumn>
              <TableColumn className="bg-tertiary text-white uppercase text-xs leading-normal xl:text-sm">Calificación</TableColumn>
            </TableHeader>
            <TableBody>
              {actividades.map((actividad) => (
                <TableRow key={actividad.idActividadCom}>
                  <TableCell>{actividad.nombreActividad}</TableCell>
                  <TableCell>{actividad.docente.nombre}</TableCell>
                  <TableCell>{actividad.creditos}</TableCell>
                  <TableCell>{actividad.horas}</TableCell>
                  <TableCell>{actividad.calificacion}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </section>)
      }
    </SieLayout>
  );
};

export default Page;
