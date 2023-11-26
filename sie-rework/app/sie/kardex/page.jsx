"use client";

import SieLayout from "@/components/SieLayout";
import React, { useEffect, useState } from "react";

const page = () => {
  const [subjects, setSubjects] = useState([]);

  const [orderedSubjects, setOrderedSubjects] = useState([]);

  useEffect(() => {
    fetch("/api/kardex/1")
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
  }, []);

  useEffect(() => {
    groupPerSemester();
  }, [subjects]);

  const groupPerSemester = () => {
    const semesters = {};

    subjects.forEach((subject) => {
      const semester = subject.materia_rel.semestre;
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
            <tr className="bg-primary text-white">
              {orderedSubjects.map((semester, index) => (
                <th key={index}>Semestre {index + 1}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {maxSubjectsList.map((subject, rowIndex) => (
              <tr key={rowIndex}>
                {orderedSubjects.map((subjectsList, index) => (
                  <td key={index}>
                    {subjectsList[rowIndex] && (
                      <>
                        <p className="text-start text-xs">
                          CRÉDITOS:{" "}
                          {subjectsList[rowIndex].materia_rel.creditos}
                        </p>
                        <p className="my-2">
                          {subjectsList[rowIndex].materia_rel.nombre}
                        </p>
                        <p className="text-left text-xs">
                          SEMESTRE:{" "}
                          {subjectsList[rowIndex].materia_rel.semestre}
                        </p>
                      </>
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
