"use client";
import SieLayout from "@/components/SieLayout";
import React, { useEffect, useState } from "react";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";
import { useSession } from "next-auth/react";
import Loading from "@/components/Loading";
import { Spinner } from "@nextui-org/spinner";

const Horario = () => {
  const [horario, setHorario] = useState([]);
  const { data: session } = useSession();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`/api/horarios/${session?.user.name}`)
      .then((response) => {
        if (!response.ok) {
          throw new Error("La solicitud no fue exitosa");
        }
        return response.json();
      })
      .then((data) => {
        setHorario(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error en la solicitud:", error);
        setLoading(true);
      });
  }, [session?.user.name]);

  const daysOfWeek = [
    "lunes",
    "martes",
    "miercoles",
    "jueves",
    "viernes",
    "sabado",
  ];

  const studentInfo = {
    nombre: "Juan Pérez",
    carrera: "Ingeniería en Informática",
  };

  const handlePrint = () => {
    const input = document.getElementById("horario-table");

    html2canvas(input).then((canvas) => {
      const imgData = canvas.toDataURL("image/png");
      const pdf = new jsPDF("p", "mm", "letter");

      const width = pdf.internal.pageSize.getWidth();
      const height = (canvas.height * width) / canvas.width;

      pdf.setFontSize(12);
      pdf.text(`Nombre del estudiante: ${studentInfo.nombre}`, 15, 10);
      pdf.text(`Carrera: ${studentInfo.carrera}`, 15, 18);

      pdf.addImage(imgData, "PNG", 10, 30, width - 20, height);

      pdf.save("horario.pdf");
    });
  };

  return (
    <SieLayout>
      {loading ? (
        <Loading />
      ) : (
        <section className="mx-auto mt-8 max-w-7xl h-full  overflow-auto">
          <div>
            <table id="horario-table" className="min-w-full border bg-white">
              <thead>
                <tr className="bg-tertiary text-white font-medium">
                  <th className="border py-2 px-4">Grupo</th>
                  <th className="border py-2 px-4">Materia</th>
                  <th className="border py-2 px-4">Docente</th>
                  {daysOfWeek.map((day) => (
                    <th key={day} className="border py-2 px-4">
                      {day.charAt(0).toUpperCase() + day.slice(1)}
                    </th>
                  ))}
                  <th className="border py-2 px-4">Salon</th>
                </tr>
              </thead>
              <tbody>
                {horario.map((clase) => (
                  <tr key={clase.idGrupo}>
                    <td className="border py-2 px-4">{clase.paq}</td>
                    <td className="border py-2 px-4">{clase.materia.nombre}</td>
                    <td className="border py-2 px-4">{clase.docente.nombre}</td>
                    {daysOfWeek.map((day) => (
                      <td key={day} className="border py-2 px-4">
                        {clase[day] || ""}
                      </td>
                    ))}
                    <td className="border py-2 px-4">{clase.salon}</td>
                  </tr>
                ))}
              </tbody>
            </table>
            <button
              onClick={handlePrint}
              className="mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            >
              Imprimir PDF
            </button>
          </div>
          <div className="mx-auto mt-8 max-w-7xl h-full  overflow-auto bg-white">
            <table className="min-w-full border bg-white text-center">
              <thead>
                <tr className="bg-tertiary text-white font-medium">
                  <th className="border py-2 px-4">Periodo</th>
                  <th className="border py-2 px-4">Documento</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>2023-1</td>
                  <td>Horario 2023-1.pdf</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>
      )}
    </SieLayout>
  );
};

export default Horario;
