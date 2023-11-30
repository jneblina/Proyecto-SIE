"use client";

import SieLayout from "@/components/SieLayout";
import { useSession } from "next-auth/react";
import React, { useEffect, useState } from "react";

const page = () => {
  const [subjects, setSubjects] = useState([]);

  const [orderedSubjects, setOrderedSubjects] = useState([]);

  const { data: session } = useSession();

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
      })
      .catch((error) => {
        console.error("Error en la solicitud:", error);
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

  return (
    <SieLayout>
      <section className="mx-auto mt-8 max-w-[1600px] h-full overflow-auto ">
        <table className="kardex">
          <thead>
            <tr className="bg-tertiary text-white font-medium">
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
                      subjectsList[rowIndex] ? "hover:bg-[#90e0ef]" : ""
                    }`}
                    key={index}
                  >
                    {subjectsList[rowIndex] && (
                      <div className="flex flex-col items-start max-w-[178px] h-[121px] p-2 ">
                        <p className="text-start text-xs">
                          CRÉDITOS:{" "}
                          {
                            subjectsList[rowIndex]
                              .materia_materiaestudiante_materiaTomateria
                              .creditos
                          }
                        </p>
                        <p className="flex text-start items-center h-full">
                          {
                            subjectsList[rowIndex]
                              .materia_materiaestudiante_materiaTomateria.nombre
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
      </section>
    </SieLayout>
  );
};

export default page;
