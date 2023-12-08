"use client";
import React, { useEffect, useState } from "react";
import { useSession } from "next-auth/react";
import SieLayout from "@/components/SieLayout";
import { IconCheckupList } from "@tabler/icons-react";
import {
  Table,
  TableHeader,
  TableBody,
  TableColumn,
  TableRow,
  TableCell,
  Button,
} from "@nextui-org/react";

const page = () => {
  const { data: session } = useSession();

  return (
    <SieLayout>
      <section className="mx-auto mt-4 xl:mt-8 max-w-7xl h-full overflow-auto px-2 bg-red">
        <div className="shadow-md bg-white rounded-md p-2">
          <div className="flex gap-2 flex-row mb-2 items-center justify-center text-lg">
            <IconCheckupList /> <p>Evaluacion Docente</p>
          </div>
          <Table
            id="eval-table"
            isStriped
            radius="sm"
            shadow="none"
            aria-label="Tabla de Evaluacion"
            className="w-full"
          >
            <TableHeader>
              <TableColumn className="bg-tertiary text-white uppercase text-xs leading-normal xl:text-sm">
                Clave
              </TableColumn>
              <TableColumn className="bg-tertiary text-white uppercase text-xs leading-normal xl:text-sm">
                Materia
              </TableColumn>
              <TableColumn className="bg-tertiary text-white uppercase text-xs leading-normal xl:text-sm">
                Docente
              </TableColumn>

              <TableColumn className="bg-tertiary text-white uppercase text-xs leading-normal xl:text-sm">
                Respuestas
              </TableColumn>
            </TableHeader>
            <TableBody>
              <TableRow key="1">
                <TableCell>2304</TableCell>
                <TableCell>Desarrollo WEB II</TableCell>
                <TableCell>
                <Button className="bg-blue-500  rounded text-white">
                    Xenia Padilla Madrid
                  </Button>
                </TableCell>
                <TableCell>SR</TableCell>
              </TableRow>
              <TableRow key="2">
                <TableCell>2304</TableCell>
                <TableCell>Desarrollo BACKEND II</TableCell>
                <TableCell>
                <Button className="bg-blue-500 rounded text-white">
                Guillermo Alejandro Chavez
                  </Button>
                </TableCell>
                <TableCell>SR</TableCell>
              </TableRow>
            </TableBody>
          </Table>
          
        </div>

        <div className="shadow-md bg-white rounded-md p-2 my-2 xl:my-8">
        <div className="px-4 items-center justify-start text-lg">
            <p>Mis Evaluaciones</p>
          </div>
          <Table
            id="evaldoc-table"
            isStriped
            radius="sm"
            shadow="none"
            aria-label="Tabla de Evaluaciones"
            className="w-full bg-white text-center"
          >
            <TableHeader>
              <TableColumn className="bg-tertiary text-white uppercase text-xs leading-normal xl:text-sm">
                Inicia
              </TableColumn>
              <TableColumn className="bg-tertiary text-white uppercase text-xs leading-normal xl:text-sm">
                Termina
              </TableColumn>
              <TableColumn className="bg-tertiary text-white uppercase text-xs leading-normal xl:text-sm ">
                Descripción
              </TableColumn>
              <TableColumn className="bg-tertiary text-white uppercase text-xs leading-normal xl:text-sm ">
                Preguntas
              </TableColumn>
            </TableHeader>
            <TableBody>
              <TableRow key="1">
                <TableCell>2023-11-06</TableCell>
                <TableCell> 2023-12-03</TableCell>
                <TableCell>Evaluación Docente</TableCell>
                <TableCell> 48</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </div>
      </section>
    </SieLayout>
  );
};

export default page;
