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
import Loading from "@/components/Loading";

const Horario = () => {
  const [schedules, setSchedules] = useState([]);
  const { data: session } = useSession();
  const [loading, setLoading] = useState(true);

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
        setLoading(false)
      })
      .catch((error) => {
        console.error("Error en la solicitud:", error);
        setLoading(true)
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

  const studentInfo = {
    nombre: session?.user.email.fullName,
  };

  const handlePrint = () => {
    const input = document.getElementById("horario-table");

    html2canvas(input, { scale: 2, logging: true }).then((canvas) => {
      const imgData = canvas.toDataURL("image/png");
      const pdf = new jsPDF("p", "mm", "letter");

      const width = pdf.internal.pageSize.getWidth();
      const height = (canvas.height * width) / canvas.width;

      // Añadir espacio para el encabezado
      pdf.setFontSize(16);
      pdf.text(`Horario - Periodo 2023 2`, width / 2, 15, { align: "center" });

      // Añadir información del estudiante
      pdf.setFontSize(12);
      pdf.text(`Nombre del estudiante: ${studentInfo.nombre}`, 15, 25);

      // Añadir la imagen centrada
      pdf.addImage(
        imgData,
        "PNG",
        (width - (width - 30)) / 2,
        40,
        width - 30,
        height
      );

      // Guardar el archivo PDF
      pdf.save("horario.pdf");
    });
  };

  const filteredDaysOfWeek = daysOfWeek.filter(day =>
    schedules.some(clase => clase[day] !== null)
  );

  return (
    <SieLayout>
      {loading ? (
        <Loading />
      ) : (
        <section className="mx-auto mt-4 xl:mt-8 max-w-7xl h-full overflow-auto px-2 bg-red">
          <div className="shadow-md bg-white rounded-md p-2">
            <div className="flex gap-2 flex-row mb-2 items-center justify-center text-lg">
              <IconClock /> <p>Horario</p>
            </div>
            <Table
              id="horario-table"
              isStriped
              radius="sm"
              shadow="none"
              aria-label="Tabla de Horario"
              className="w-full"
            >
              <TableHeader>
                <TableColumn className="bg-tertiary text-white uppercase text-xs leading-normal xl:text-sm">
                  Grupo
                </TableColumn>
                <TableColumn className="bg-tertiary text-white uppercase text-xs leading-normal xl:text-sm">
                  Materia
                </TableColumn>
                <TableColumn className="bg-tertiary text-white uppercase text-xs leading-normal xl:text-sm">
                  Docente
                </TableColumn>
                {filteredDaysOfWeek.map((day) => (
                  <TableColumn
                    key={day}
                    className="bg-tertiary text-white uppercase text-xs leading-normal xl:text-sm"
                  >
                    {day.charAt(0).toUpperCase() + day.slice(1)}
                  </TableColumn>
                ))}
                <TableColumn className="bg-tertiary text-white uppercase text-xs leading-normal xl:text-sm">
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
            <div className="flex flex-col items-center w-full">
              <Button
                onClick={handlePrint}
                color="primary"
                variant="contained"
                className="mt-4 bg-blue-500 text-white"
              >
                Horario en PDF
              </Button>
            </div>
          </div>

          <div className="shadow-md bg-white rounded-md p-2 my-2 xl:my-8">
            <Table
              id="horario-table"
              isStriped
              radius="sm"
              shadow="none"
              aria-label="Tabla de Horario"
              className="w-full bg-white text-center"
            >
              <TableHeader>
                <TableColumn className="bg-tertiary text-white uppercase text-xs leading-normal xl:text-sm w-1/3 xl:w-1/2">
                  Periodo
                </TableColumn>
                <TableColumn className="bg-tertiary text-white uppercase text-xs leading-normal xl:text-sm w-2/3 xl:w-1/2">
                  Documento PDF
                </TableColumn>
              </TableHeader>
              <TableBody>
                <TableRow key="1">
                  <TableCell>2023-2</TableCell>
                  <TableCell>
                    <Button
                      onClick={handlePrint}
                      className="bg-blue-500 p-1 rounded text-white"
                    >
                      Horario 2023-2.pdf
                    </Button>
                  </TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </div>
        </section>
      )}
    </SieLayout>
  );
};

export default Horario;
