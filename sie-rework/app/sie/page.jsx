"use client";
import SieLayout from "@/components/SieLayout";
import { Image } from "@nextui-org/react";
import { useEffect, useState } from "react";
import { useSession } from "next-auth/react";
import { IconClock, IconId, IconSpeakerphone } from "@tabler/icons-react";
import HorarioTable from "@/components/HorarioTable";
import Loading from "@/components/Loading";

export default function Sie() {
  const [estudiante, setEstudiante] = useState({});
  const [loading, setLoading] = useState(true);
  const { data: session } = useSession();

  useEffect(() => {
    if (session?.user.name) {
      fetch(`/api/estudiante/${session?.user.name}`)
        .then((response) => {
          if (!response.ok) {
            throw new Error("La solicitud no fue exitosa");
          }
          return response.json();
        })
        .then((data) => {
          setEstudiante(data);
          setLoading(false);
        })
        .catch((error) => {
          console.error("Error en la solicitud:", error);
          setLoading(true);
        });
    }
  }, [session?.user.name]);

  const {
    nombre,
    modalidad_estudiante_modalidadTomodalidad,
    fechaNacimiento,
    situacion,
    carreras,
    periodoIngreso,
    curp,
    telefono,
    correoInstitucional,
    correoPersonal,
    periodoActual,
    escuelaProcedencia,
    ciudad,
    direccion,
  } = estudiante;

  const birthdate = new Date(fechaNacimiento?.slice(0, -1));

  return (
    <SieLayout>
      {loading ? (
        <Loading />
      ) : (
        <section className="mx-auto mt-4 xl:mt-8 max-w-7xl h-full ">
          <div className="items-center grid  xl:grid-cols-4  gap-2 xl:col-span-3  flex-row h-full overflow-auto shadow-md  mx-2 bg-white rounded-md">
            <div className="hidden xl:block xl:col-span-1 flex-col space-y-6 xl:space-y-2 xl:space-x-6 xl:ml-8">
              <Image
                className="rounded-full border-1  xl:w-full"
                src="https://st3.depositphotos.com/6672868/13701/v/450/depositphotos_137014128-stock-illustration-user-profile-icon.jpg"
                fallbackSrc="https://st3.depositphotos.com/6672868/13701/v/450/depositphotos_137014128-stock-illustration-user-profile-icon.jpg"
                alt="Foto de perfil"
              />
            </div>

            <div className="xl:col-span-3 flex flex-col h-full overflow-auto">
              <div className="flex flex-col px-4 py-6 xl:py-6 w-full text-base rounded-md h-full bg-white">
                <div className="flex gap-2 flex-row mb-2 items-center">
                  <IconId /> <p>Datos generales</p>
                </div>
                <div className="text-gray-700">
                  <div className="grid md:grid-cols-2 text-sm">
                    <div className="grid grid-cols-2">
                      <div className="px-4 py-2 font-semibold">Nombre</div>
                      <div className="py-2">{nombre}</div>
                    </div>

                    <div className="grid grid-cols-2">
                      <div className="px-4 py-2 font-semibold">Modalidad</div>
                      <div className="py-2">
                        {
                          modalidad_estudiante_modalidadTomodalidad?.nombreModalidad
                        }
                      </div>
                    </div>

                    <div className="grid grid-cols-2">
                      <div className="px-4 py-2 font-semibold">
                        Fecha de nacimiento
                      </div>
                      <div className="py-2">
                        {birthdate.getDate().toString().padStart(2, "0")}-
                        {birthdate.getMonth().toString().padStart(2, "0")}-
                        {birthdate.getFullYear()}
                      </div>
                    </div>

                    <div className="grid grid-cols-2">
                      <div className="px-4 py-2 font-semibold">Situación</div>
                      <div className="py-2">{situacion}</div>
                    </div>

                    <div className="grid grid-cols-2">
                      <div className="px-4 py-2 font-semibold">
                        Periodo de ingreso
                      </div>
                      <div className="py-2">{periodoIngreso}</div>
                    </div>

                    <div className="grid grid-cols-2">
                      <div className="px-4 py-2 font-semibold">
                        Periodo actual
                      </div>
                      <div className="py-2">{periodoActual}</div>
                    </div>

                    <div className="grid grid-cols-2">
                      <div className="px-4 py-2 font-semibold">
                        Correo institucional
                      </div>
                      <div className="py-2 text-xs xl:text-sm">
                        {correoInstitucional}
                      </div>
                    </div>

                    <div className="grid grid-cols-2">
                      <div className="px-4 py-2 font-semibold">
                        Correo personal
                      </div>
                      <div className=" py-2 text-xs xl:text-sm">
                        {correoPersonal}
                      </div>
                    </div>

                    <div className="grid grid-cols-2">
                      <div className="px-4 py-2 font-semibold">Carrera</div>
                      <div className="py-2">{carreras?.nombre}</div>
                    </div>

                    <div className="grid grid-cols-2">
                      <div className="px-4 py-2 font-semibold">
                        Escuela de procedencia
                      </div>
                      <div className="py-2">{escuelaProcedencia}</div>
                    </div>

                    <div className="grid grid-cols-2">
                      <div className="px-4 py-2 font-semibold">CURP</div>
                      <div className="py-2">{curp}</div>
                    </div>

                    <div className="grid grid-cols-2">
                      <div className="px-4 py-2 font-semibold">Telefono</div>
                      <div className="py-2">{telefono}</div>
                    </div>

                    <div className="grid grid-cols-2">
                      <div className="px-4 py-2 font-semibold">Direccion</div>
                      <div className="py-2">{direccion}</div>
                    </div>

                    <div className="grid grid-cols-2">
                      <div className="px-4 py-2 font-semibold">Ciudad</div>
                      <div className="py-2">{ciudad}</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="my-4 px-2 items-center sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 h-full w-full">
            <div className="shadow-md rounded-md bg-white p-4 ">
              <div className="">
                <div className="flex gap-2 flex-row mb-2 items-center text-base">
                  <IconSpeakerphone /> <p>Avisos</p>
                </div>
                <p className="text-gray-600">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
                  quam velit...
                </p>
              </div>
            </div>
          </div>
          <div className="my-4 px-2 items-center sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 h-full w-full">
            <div className="shadow-md rounded-md bg-white p-4">
              <div className="flex gap-2 flex-row mb-2 items-center text-base ">
                <IconClock /> <p>Horario</p>
              </div>
              <HorarioTable />
            </div>
          </div>
        </section>
      )}
    </SieLayout>
  );
}
