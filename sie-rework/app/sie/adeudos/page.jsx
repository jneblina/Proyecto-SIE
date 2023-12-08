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
import { IconCoin, IconSpeakerphone } from "@tabler/icons-react";
import Loading from "@/components/Loading";

const Adeudos = () => {
  const [debts, setDebts] = useState([]);
  const { data: session } = useSession();
  const [loading, setLoading] = useState(true);

  const fetchDebts = (studentId) => {
    fetch(`/api/adeudos/${studentId}`)
      .then((response) => {
        if (!response.ok) {
          throw new Error("La solicitud no fue exitosa");
        }
        return response.json();
      })
      .then((data) => {
        setDebts(data);
        setLoading(false)
      })
      .catch((error) => {
        console.error("Error en la solicitud:", error);
        setLoading(true)
      });
  };

  useEffect(() => {
    if (session) {
      fetchDebts(session.user.name);
    }
  }, [session]);

  return (
    <SieLayout>
      {
        loading ? (
          <Loading />
        ) : (<section className="mx-auto mt-4 xl:mt-8 max-w-7xl h-full overflow-auto px-2 bg-red">
        <div className="shadow-md bg-white rounded-md p-2">
          <div className="flex gap-2 flex-row mb-2 items-center justify-center text-lg">
            <IconCoin /> <p>Adeudos</p>
          </div>
          <Table
            isStriped
            radius="sm"
            shadow="none"
  
            aria-label="Tabla de Adeudos"
            className="w-auto text-center"
          >
            <TableHeader>
              <TableColumn className="bg-tertiary text-white uppercase text-xs leading-normal xl:text-sm">
                ID Adeudo
              </TableColumn>
              <TableColumn className="bg-tertiary text-white uppercase text-xs leading-normal xl:text-sm">
                Estudiante
              </TableColumn>
              <TableColumn className="bg-tertiary text-white uppercase text-xs leading-normal xl:text-sm">
                Fecha
              </TableColumn>
              <TableColumn className="bg-tertiary text-white uppercase text-xs leading-normal xl:text-sm">
                Departamento
              </TableColumn>
              <TableColumn className="bg-tertiary text-white uppercase text-xs leading-normal xl:text-sm">
                Descripción
              </TableColumn>
              <TableColumn className="bg-tertiary text-white uppercase text-xs leading-normal xl:text-sm">
                Cantidad
              </TableColumn>
            </TableHeader>
            <TableBody>
              {debts.map((adeudo) => (
                <TableRow key={adeudo.idAdeudos}>
                  <TableCell>{adeudo.idAdeudos}</TableCell>
                  <TableCell>{adeudo.estudianteAdeudo}</TableCell>
                  <TableCell>{adeudo.fecha}</TableCell>
                  <TableCell>{adeudo.departamento}</TableCell>
                  <TableCell>{adeudo.descripcion}</TableCell>
                  <TableCell>{adeudo.cantidad}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
          <div className="flex flex-col mb-2 items-start text-sm m-4">
            <span className="bg-green-200 p-1  rounded">
              Adeudos Pendientes al: 2023-12-01{" "}
            </span>
            <span className="bg-green-200 p-1 my-1  rounded">
              Fecha Asignada para Reinscripción: Sin Asignar
            </span>
            <span className="bg-red-200 p-1  rounded">
              NOTA: Con adeudos no podrá Reinscribirse
            </span>
          </div>
        </div>
      </section>)
      }
    </SieLayout>
  );
};

export default Adeudos;
