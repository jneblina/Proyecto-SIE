"use client"
import React, { useEffect, useState } from "react";
import { useSession } from "next-auth/react";
import SieLayout from "@/components/SieLayout";
import Loading from "@/components/Loading";

const ResidenciasPage = () => {
  const [residencia, setResidencia] = useState([]);
  const { data: session } = useSession();
  const [loading, setLoading] = useState(true);

  const fetchResidencia = (studentId) => {
    fetch(`/api/residencias/${studentId}`)
      .then((response) => {
        if (!response.ok) {
          throw new Error("La solicitud no fue exitosa");
        }
        return response.json();
      })
      .then((data) => {
        setResidencia(data);
        setLoading(false)
      })
      .catch((error) => {
        console.error("Error en la solicitud:", error);
        setLoading(true)
      });
  };

  useEffect(() => {
    if (session) {
      fetchResidencia(session.user.name);
    }
  }, [session]);

  return (
    <SieLayout>
      {
        loading ? (
          <Loading /> 
        ): (<section className="mx-auto mt-4 xl:mt-8 max-w-7xl h-full overflow-auto">
        <div className="bg-white shadow-md rounded p-6">
          <h1 className="text-lg font-bold mb-4 text-center">Detalles de la Residencia</h1>
          {residencia && (
            <div className="overflow-x-auto">
              <table className="min-w-full border border-gray-300">
                <tbody>
                  <tr>
                    <td className="p-3 border-r border-gray-300">
                      <strong>ID de Residencias:</strong>
                    </td>
                    <td className="p-3">
                      {residencia.idResidencias}
                    </td>
                  </tr>
                  <tr>
                    <td className="p-3 border-r border-gray-300">
                      <strong>Estudiante:</strong>
                    </td>
                    <td className="p-3">
                      {residencia.estudianteRes}
                    </td>
                  </tr>
                  <tr>
                    <td className="p-3 border-r border-gray-300">
                      <strong>Fecha de Solicitud:</strong>
                    </td>
                    <td className="p-3">
                      {residencia.fechaSolicitud}
                    </td>
                  </tr>
                  <tr>
                    <td className="p-3 border-r border-gray-300">
                      <strong>Proyecto:</strong>
                    </td>
                    <td className="p-3">
                      {residencia.proyecto}
                    </td>
                  </tr>
                  <tr>
                    <td className="p-3 border-r border-gray-300">
                      <strong>Duración:</strong>
                    </td>
                    <td className="p-3">
                      {residencia.duracion}
                    </td>
                  </tr>
                  <tr>
                    <td className="p-3 border-r border-gray-300">
                      <strong>Empresa:</strong>
                    </td>
                    <td className="p-3">
                      {residencia.empresa}
                    </td>
                  </tr>
                  <tr>
                    <td className="p-3 border-r border-gray-300">
                      <strong>Asesor Externo:</strong>
                    </td>
                    <td className="p-3">
                      {residencia.asesorExterno}
                    </td>
                  </tr>
                  <tr>
                    <td className="p-3 border-r border-gray-300">
                      <strong>Asesor Interno:</strong>
                    </td>
                    <td className="p-3">
                      {residencia.asesorInterno}
                    </td>
                  </tr>
                  <tr>
                    <td className="p-3 border-r border-gray-300">
                      <strong>Revisor:</strong>
                    </td>
                    <td className="p-3">
                      {residencia.revisor}
                    </td>
                  </tr>
                  <tr>
                    <td className="p-3 border-r border-gray-300">
                      <strong>Dictamen:</strong>
                    </td>
                    <td className="p-3">
                      {residencia.dictamen}
                    </td>
                  </tr>
                  <tr>
                    <td className="p-3 border-r border-gray-300">
                      <strong>Calificación:</strong>
                    </td>
                    <td className="p-3">
                      {residencia.calificacion}
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          )}
          {!residencia && (
            <p className="text-center mt-4">No se encontraron datos de residencia para este estudiante.</p>
          )}
        </div>
      </section>)
      }
    </SieLayout>
  );
};

export default ResidenciasPage;
