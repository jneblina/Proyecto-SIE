"use client";

import SieLayout from "@/components/SieLayout";
import { Image } from "@nextui-org/react";
import { useEffect, useState } from "react";

export default function Sie() {
  const [estudiante, setEstudiante] = useState({});
  useEffect(() => {
    fetch("/api/estudiante/1")
      .then((response) => {
        if (!response.ok) {
          throw new Error("La solicitud no fue exitosa");
        }
        return response.json();
      })
      .then((data) => {
        setEstudiante(data);
      })
      .catch((error) => {
        console.error("Error en la solicitud:", error);
      });
  }, []);

  const {
    Nombre,
    Modalidad,
    FechaDeNacimiento,
    Situacion,
    CreditosAcumulados,
    Carrera,
    Creditos,
    PlanDeEstudios,
    PeriodoDeIngreso,
  } = estudiante;

  return (
    <SieLayout>
      <section className="mx-auto mt-8 max-w-7xl">
        <div className="grid grid-rows-2 gap-4 justify-center">
          <div className="flex flex-col items-center justify-center xl:flex-row space-y-6  xl:space-y-0 xl:space-x-6 max-w-5xl ">
            <Image
              width={330}
              height={330}
              className="rounded-full border-2 border-blue-700"
              src="https://st3.depositphotos.com/6672868/13701/v/450/depositphotos_137014128-stock-illustration-user-profile-icon.jpg"
              fallbackSrc="https://st3.depositphotos.com/6672868/13701/v/450/depositphotos_137014128-stock-illustration-user-profile-icon.jpg"
              alt="Foto de perfil"
            />
            <div className="grid lg:grid-rows-3 grid-cols-1 lg:grid-cols-2 gap-2 px-8 py-6 xl:px-12 xl:py-8 w-full font-bold rounded-md h-full bg-[#F0EFEB]">
              <p>
                Nombre: <span>{Nombre}</span>
              </p>

              <p>
                Modalidad: <span>{Modalidad}</span>
              </p>
              <p>
                Fecha de nacimiento: <span>{FechaDeNacimiento}</span>
              </p>
              <p>
                Situación: <span>{Situacion}</span>
              </p>
              <p>
                Créditos acumulados: <span>{CreditosAcumulados}</span>
              </p>
            </div>
          </div>
          <div className="grid lg:grid-rows-3 grid-cols-1 lg:grid-cols-2 px-8 py-6 xl:px-12 xl:py-8  font-bold rounded-md h-[40%] xl:h-full bg-[#F0EFEB] max-w-5xl ">
            <p>
              Carrera: <span>{Carrera}</span>
            </p>
            <p>
              Créditos: <span>{Creditos}</span>
            </p>
            <p>
              Plan de estudios: <span>{PlanDeEstudios}</span>
            </p>
            <p>
              Periodo de ingreso: <span>{PeriodoDeIngreso}</span>
            </p>
          </div>
        </div>
      </section>
    </SieLayout>
  );
}
