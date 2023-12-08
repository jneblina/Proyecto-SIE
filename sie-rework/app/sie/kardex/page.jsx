"use client";
import SieLayout from "@/components/SieLayout";
import { useSession } from "next-auth/react";
import { IconTable } from "@tabler/icons-react";
import { Button } from "@nextui-org/react";
import React, { useEffect, useState } from "react";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";
import Loading from "@/components/Loading";

const page = () => {
  const [subjects, setSubjects] = useState([]);

  const [orderedSubjects, setOrderedSubjects] = useState([]);

  const { data: session } = useSession();
  const [loading, setLoading] = useState(true);

  const fetchKardex = (studentId) => {
    fetch(`/api/kardex/${studentId}`)
      .then((response) => {
        if (!response.ok) {
          throw new Error("La solicitud no fue exitosa");
        }
        return response.json();
      })
      .then((data) => {
        setSubjects(data);
        setLoading(false)
      })
      .catch((error) => {
        console.error("Error en la solicitud:", error);
        setLoading(true)
      });
  };

  useEffect(() => {
    if (session) {
      fetchKardex(session.user.name);
    }
  }, [session]);

  useEffect(() => {
    groupPerSemester();
  }, [subjects]);

  const groupPerSemester = () => {
    const semesters = {};

    subjects.forEach((subject) => {
      const semester =
        subject.materia_materiaestudiante_materiaTomateria.semestre;
      if (!semesters[semester]) {
        semesters[semester] = [];
      }
      semesters[semester].push(subject);
    });

    const listOfLists = Object.values(semesters);
    setOrderedSubjects(listOfLists);
  };

  const maxSubjectsList = orderedSubjects.reduce((maxList, currentList) => {
    return currentList.length > maxList.length ? currentList : maxList;
  }, []);

  const getCellColor = (estado) => {
    switch (estado) {
      case 1:
        return "bg-blue-200";
      case 2:
        return "bg-green-200";
      case 3:
        return "bg-gray-200";
      default:
        return "";
    }
  };
  const studentInfo = {
    nombre: session?.user.email.fullName,
  };

  const handlePrint = () => {
    const input = document.getElementById("kardex-table");
  
    html2canvas(input, { scale: 2, logging: true }).then((canvas) => {
      const imgData = canvas.toDataURL("image/png");
      const pdf = new jsPDF("p", "mm", "letter");
  
      const width = pdf.internal.pageSize.getWidth();
      const height = (canvas.height * width) / canvas.width;
  
      // Añadir espacio para el encabezado
      pdf.setFontSize(16);
      pdf.text(`Kardex`, width / 2, 15, { align: "center" });
  
      // Añadir información del estudiante
      pdf.setFontSize(12);
      pdf.text(`Nombre del estudiante: ${studentInfo.nombre}`, 15, 25);
  
      // Añadir la imagen centrada
      pdf.addImage(imgData, "PNG", (width - (width - 30)) / 2, 40, width - 30, height);
  
      // Guardar el archivo PDF
      pdf.save("kardex.pdf");
    });
  };

  return (
    <SieLayout>
      {
        loading ? (
          <Loading />
        ): (
          <section className="xl:mx-auto bg-white mx-4 mt-4 mb-4 xl:mt-8 max-w-7xl h-full px-2 shadow-md rounded-md p-2">
        <div className="overflow-auto h-full p-2 rounded-md flex flex-col">
          <div className="flex gap-2 flex-row mb-2 items-center justify-center text-lg">
            <IconTable /> <p>Kardex</p>
          </div>
          <table id="kardex-table">
            <thead>
              <tr className="bg-tertiary text-white text-sm xl:text-sm xl:font-light">
                {orderedSubjects.map((semester, index) => (
                  <th key={index}>Semestre {index + 1}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {maxSubjectsList.map((subject, rowIndex) => (
                <tr key={rowIndex}>
                  {orderedSubjects.map((subjectsList, index) => (
                    <td
                      className={`${
                        subjectsList[rowIndex]
                          ? "hover:bg-[#90e0ef] border border-gray-500"
                          : ""
                      } ${
                        subjectsList[rowIndex]
                          ? getCellColor(subjectsList[rowIndex].estado)
                          : ""
                      }`}
                      key={index}
                    >
                      {subjectsList[rowIndex] && (
                        <div className="flex flex-col items-start h-[85px] w-[135px] p-2">
                          <p className="text-start text-xs">
                            CRÉDITOS:{" "}
                            {
                              subjectsList[rowIndex]
                                .materia_materiaestudiante_materiaTomateria
                                .creditos
                            }
                          </p>
                          <p className="flex text-xs text-start items-center h-full">
                            {
                              subjectsList[rowIndex]
                                .materia_materiaestudiante_materiaTomateria
                                .nombre
                            }
                          </p>
                        </div>
                      )}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="flex items-start text-sm px-2">
          <span className="bg-green-200 p-1  rounded">Cursando</span>
          <span className="bg-blue-200 p-1 mx-1  rounded">Cursada</span>
          <span className="bg-gray-200 p-1  rounded">Sin Cursar</span>
        </div>
        <div className="flex flex-col items-center w-full">
          <Button
          onClick={handlePrint}
            color="primary"
            variant="contained"
            className="mt-4 bg-blue-500 text-white"
          >
            Kardex en PDF
          </Button>
        </div>
      </section>
        )
      }
    </SieLayout>
  );
};

export default page;