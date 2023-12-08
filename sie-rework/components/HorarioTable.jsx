"use client";
import React, { useEffect, useState } from "react";
import { useSession } from "next-auth/react";
import SieLayout from "@/components/SieLayout";
import { IconClock } from "@tabler/icons-react";
import {
  Table,
  TableHeader,
  TableBody,
  TableColumn,
  TableRow,
  TableCell,
  Button,
} from "@nextui-org/react";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";

const HorarioTable = () => {
  const [schedules, setSchedules] = useState([]);
  const { data: session } = useSession();

  const fetchSchedules = (studentId) => {
    fetch(`/api/horarios/${studentId}`)
      .then((response) => {
        if (!response.ok) {
          throw new Error("La solicitud no fue exitosa");
        }
        return response.json();
      })
      .then((data) => {
        setSchedules(data);
      })
      .catch((error) => {
        console.error("Error en la solicitud:", error);
      });
  };

  useEffect(() => {
    if (session) {
      fetchSchedules(session.user.name);
    }
  }, [session]);

  const daysOfWeek = [
    "lunes",
    "martes",
    "miercoles",
    "jueves",
    "viernes",
    "sabado",
  ];

  const filteredDaysOfWeek = daysOfWeek.filter((day) =>
    schedules.some((clase) => clase[day] !== null)
  );

  return (
    <Table
      id="horario-table"
      isStriped
      radius="sm"
      shadow="none"
      aria-label="Tabla de Horario"
      className="w-full"
    >
      <TableHeader>
        <TableColumn className="uppercase text-xs leading-normal xl:text-sm">
          Grupo
        </TableColumn>
        <TableColumn className="uppercase text-xs leading-normal xl:text-sm">
          Materia
        </TableColumn>
        <TableColumn className="uppercase text-xs leading-normal xl:text-sm">
          Docente
        </TableColumn>

        {filteredDaysOfWeek.map((day) => (
          <TableColumn
            key={day}
            className="uppercase text-xs leading-normal xl:text-sm"
          >
            {day.charAt(0).toUpperCase() + day.slice(1)}
          </TableColumn>
        ))}
        <TableColumn className="uppercase text-xs leading-normal xl:text-sm">
          Salon
        </TableColumn>
      </TableHeader>
      <TableBody>
        {schedules.map((clase) => (
          <TableRow key={clase.idGrupo}>
            <TableCell>{clase.paq}</TableCell>
            <TableCell>{clase.materia.nombre}</TableCell>
            <TableCell>{clase.docente.nombre}</TableCell>
            {filteredDaysOfWeek.map((day) => (
              <TableCell key={day}>{clase[day] || ""}</TableCell>
            ))}
            <TableCell>{clase.salon}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};

export default HorarioTable;
