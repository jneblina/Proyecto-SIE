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
    nombre,
    modalidad,
    fechaNacimiento,
    situacion,
    idCarrera,
    periodoIngreso,
  } = estudiante;

  const birthdate = new Date(fechaNacimiento.slice(0, -1));

  return (
    <SieLayout>
      <section className="mx-auto mt-8 max-w-7xl ">
        <div className="grid grid-rows-2 xl:grid-cols-4 auto-cols-auto gap-2  ">
          <div className="xl:col-span-1 flex flex-col items-center justify-start xl:flex-row space-y-6  xl:space-y-0 xl:space-x-6 ">
            <Image
              width={300}
              height={300}
              className="rounded-full border-2 border-blue-700"
              src="https://st3.depositphotos.com/6672868/13701/v/450/depositphotos_137014128-stock-illustration-user-profile-icon.jpg"
              fallbackSrc="https://st3.depositphotos.com/6672868/13701/v/450/depositphotos_137014128-stock-illustration-user-profile-icon.jpg"
              alt="Foto de perfil"
            />
          </div>

          <div className="xl:col-span-3 flex flex-col space-y-5 ">
            <div className="flex flex-col px-8 py-6 xl:py-8 w-full font-bold text-sm rounded-md h-full bg-white shadow-md">
              <h2 className="mb-2 text-lg">Datos generales</h2>
              <table className="w-full h-full text-left">
                <thead>
                  <tr>
                    <th></th>
                    <th></th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Nombre</td>
                    <td className="font-normal">{nombre}</td>
                    <td>Modalidad</td>
                    <td className="font-normal">{modalidad}</td>
                  </tr>
                  <tr>
                    <td>Fecha de nacimiento</td>
                    <td className="font-normal">
                      {birthdate.getDate().toString().padStart(2, "0")}-
                      {birthdate.getMonth().toString().padStart(2, "0")}-
                      {birthdate.getFullYear()}
                    </td>
                    <td>Situación</td>
                    <td className="font-normal">{situacion}</td>
                  </tr>
                  <tr>
                    <td>Periodo de ingreso</td>
                    <td className="font-normal">{periodoIngreso}</td>

                    <td>idCarrera</td>
                    <td className="font-normal">{idCarrera}</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>
    </SieLayout>
  );
}
