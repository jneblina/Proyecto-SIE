"use client";
import React, { useEffect, useState } from "react";
import { useSession } from "next-auth/react";
import SieLayout from "@/components/SieLayout";
import Loading from "@/components/Loading";
import {
  Table,
  TableHeader,
  TableBody,
  TableColumn,
  TableRow,
  TableCell,
} from "@nextui-org/react";

import { IconBriefcase2 } from "@tabler/icons-react";

const ResidenciasPage = () => {
  const [residencia, setResidencia] = useState([]);
  const { data: session } = useSession();
  const [loading, setLoading] = useState(true);

  const fetchResidencia = (studentId) => {
    fetch(`/api/residencias/${studentId}`)
      .then((response) => {
        if (!response.ok) {
          throw new Error("La solicitud no fue exitosa");
        }
        return response.json();
      })
      .then((data) => {
        setResidencia(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error en la solicitud:", error);
        setLoading(true);
      });
  };

  useEffect(() => {
    if (session) {
      fetchResidencia(session.user.name);
    }
  }, [session]);

  const tableRows = [
    { label: "ID de Residencias", value: residencia.idResidencias },
    { label: "Estudiante", value: residencia.estudianteRes },
    { label: "Fecha de Solicitud", value: residencia.fechaSolicitud },
    { label: "Proyecto", value: residencia.proyecto },
    { label: "Duración", value: residencia.duracion },
    { label: "Empresa", value: residencia.empresa },
    { label: "Asesor Externo", value: residencia.asesorExterno },
    { label: "Asesor Interno", value: residencia.asesorInterno },
    { label: "Revisor", value: residencia.revisor },
    { label: "Dictamen", value: residencia.dictamen },
    { label: "Calificacion", value: residencia.calificacion },
  ];

  return (
    <SieLayout>
      {loading ? (
        <Loading />
      ) : (
        <section className="mx-auto mt-4 xl:mt-8 max-w-7xl h-full overflow-auto">
          <div className="bg-white shadow-md rounded p-4">
            <div className="flex gap-2 flex-row mb-2 items-center justify-center text-lg">
              <IconBriefcase2 /> <p>Residencias</p>
            </div>
            {residencia && (
              <div className="overflow-x-auto">
                <Table
                  isStriped
                  radius="sm"
                  shadow="none"
                  aria-label="Detalles de la Residencia"
                  className="w-full mt-2"
                >
                  <TableHeader>
                    <TableColumn className="bg-tertiary text-white uppercase text-xs leading-normal xl:text-sm"></TableColumn>
                    <TableColumn className="bg-tertiary text-white uppercase text-xs leading-normal xl:text-sm">
                      Datos de la Residencia
                    </TableColumn>
                  </TableHeader>
                  <TableBody>
                    {tableRows.map((row, index) => (
                      <TableRow key={index}>
                        <TableCell>{row.label}</TableCell>
                        <TableCell>{row.value}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </div>
            )}
            {!residencia && (
              <p className="text-center mt-4">
                No se encontraron datos de residencia para este estudiante.
              </p>
            )}
          </div>
        </section>
      )}
    </SieLayout>
  );
};

export default ResidenciasPage;
