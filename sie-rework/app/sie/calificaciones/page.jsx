"use client";
import React, { useEffect, useState } from "react";
import { useSession } from "next-auth/react"; // Asegúrate de importar correctamente tu hook de sesión
import SieLayout from "@/components/SieLayout";
import { IconFileCheck } from "@tabler/icons-react";
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

const CalificacionesPage = () => {
  const [calificaciones, setCalificaciones] = useState([]);
  const { data: session } = useSession();
  const [promedioTotal, setPromedioTotal] = useState(0);
  const [loading, setLoading] = useState(true);

  const calcularPromedio = (calificacion) => {
    const { primerP, segundoP, tercerP, cuartoP, quintoP } = calificacion;
    const promedio = (primerP + segundoP + tercerP + cuartoP + quintoP) / 5;

    return promedio.toFixed(2);
  };

  const calcularPromedioMateria = (materiaCalificaciones) => {
    const totalParciales = materiaCalificaciones.length;
    const sumaPromedios = materiaCalificaciones.reduce(
      (acumulador, calificacion) =>
        acumulador + parseFloat(calcularPromedio(calificacion)),
      0
    );

    return (sumaPromedios / totalParciales).toFixed(2);
  };

  const fetchCalificaciones = (studentId) => {
    fetch(`/api/calificaciones/${studentId}`)
      .then((response) => {
        if (!response.ok) {
          throw new Error("La solicitud no fue exitosa");
        }
        return response.json();
      })
      .then((data) => {
        const calificacionesOrdenadas = data.sort(
          (a, b) => a.idMateria - b.idMateria
        );
        setCalificaciones(calificacionesOrdenadas);
        setLoading(false);

        const promediosMaterias = calificacionesOrdenadas.map((materia) =>
          calcularPromedioMateria([materia])
        );
        const promedioTotalCalculado =
          promediosMaterias.reduce(
            (acumulador, promedio) => acumulador + parseFloat(promedio),
            0
          ) / promediosMaterias.length;

        setPromedioTotal(promedioTotalCalculado.toFixed(2));
      })
      .catch((error) => {
        console.error("Error en la solicitud:", error);
        setLoading(true);
      });
  };

  useEffect(() => {
    if (session) {
      fetchCalificaciones(session.user.name);
    }
  }, [session]);

  const studentInfo = {
    nombre: session?.user.email.fullName,
  };

  const handlePrint = () => {
    const input = document.getElementById("calificaciones-table");

    html2canvas(input, { scale: 2, logging: true }).then((canvas) => {
      const imgData = canvas.toDataURL("image/png");
      const pdf = new jsPDF("p", "mm", "letter");

      const width = pdf.internal.pageSize.getWidth();
      const height = (canvas.height * width) / canvas.width;

      // Añadir espacio para el encabezado
      pdf.setFontSize(16);
      pdf.text(`Informe de Calificaciones - Periodo 2023 2`, width / 2, 15, {
        align: "center",
      });

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
      pdf.save("calificaciones.pdf");
    });
  };

  return (
    <SieLayout>
      {loading ? (
        <Loading />
      ) : (
        <section className="mx-auto mt-4 xl:mt-8 max-w-7xl h-full overflow-auto px-2">
          <div className="shadow-md bg-white rounded-md p-2">
            <div className="flex gap-2 flex-row mb-2 items-center justify-center text-lg">
              <IconFileCheck /> <p>Calificaciones</p>
            </div>
            <Table
              id="calificaciones-table"
              isStriped
              radius="sm"
              shadow="none"
              aria-label="Tabla de Calificaciones"
              className="w-full"
            >
              <TableHeader>
                <TableColumn className="bg-tertiary text-white uppercase text-xs leading-normal xl:w-full xl:text-sm">
                  Materia
                </TableColumn>
                <TableColumn className="bg-tertiary text-white uppercase text-xs leading-normal sm:w-1/6 md:w-1/6 lg:w-1/6 xl:w-1/6 xl:text-sm">
                  1er Parcial
                </TableColumn>
                <TableColumn className="bg-tertiary text-white uppercase text-xs leading-normal sm:w-1/6 md:w-1/6 lg:w-1/6 xl:w-1/6 xl:text-sm">
                  2do Parcial
                </TableColumn>
                <TableColumn className="bg-tertiary text-white uppercase text-xs leading-normal sm:w-1/6 md:w-1/6 lg:w-1/6 xl:w-1/6 xl:text-sm">
                  3er Parcial
                </TableColumn>
                <TableColumn className="bg-tertiary text-white uppercase text-xs leading-normal sm:w-1/6 md:w-1/6 lg:w-1/6 xl:w-1/6 xl:text-sm">
                  4to Parcial
                </TableColumn>
                <TableColumn className="bg-tertiary text-white uppercase text-xs leading-normal sm:w-1/6 md:w-1/6 lg:w-1/6 xl:w-1/6 xl:text-sm">
                  5to Parcial
                </TableColumn>
                <TableColumn className="bg-tertiary text-white uppercase text-xs leading-normal sm:w-1/6 md:w-1/6 lg:w-1/6 xl:w-1/6 xl:text-sm">
                  Final
                </TableColumn>
              </TableHeader>
              <TableBody>
                {calificaciones.map((calificacion) => (
                  <TableRow key={calificacion.idCalificaciones}>
                    <TableCell>{calificacion.materia.nombre}</TableCell>
                    <TableCell>{calificacion.primerP}</TableCell>
                    <TableCell>{calificacion.segundoP}</TableCell>
                    <TableCell>{calificacion.tercerP}</TableCell>
                    <TableCell>{calificacion.cuartoP}</TableCell>
                    <TableCell>{calificacion.quintoP}</TableCell>
                    <TableCell>
                      <span
                        className={
                          calcularPromedio(calificacion) >= 70
                            ? "bg-green-200 p-1 rounded"
                            : calcularPromedio(calificacion) > 0
                            ? "bg-red-200 p-1 rounded"
                            : ""
                        }
                      >
                        {calcularPromedio(calificacion)}
                      </span>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
            <div className="flex flex-row my-2 items-center text-md mx-4">
              <p>
                Promedio:{" "}
                {calificaciones.some(
                  (calificacion) => calcularPromedio(calificacion) < 70
                )
                  ? "No Aprobatorio"
                  : promedioTotal}
              </p>
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
                      Calificaciones 2023-2.pdf
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

export default CalificacionesPage;
