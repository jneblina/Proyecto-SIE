import { NextResponse } from "next/server";
import { prisma } from "@/libs/prisma";

export async function GET() {
  try {
    const estudiantes = await prisma.estudiante.findMany({
      include:{
        modalidad_estudiante_modalidadTomodalidad : {select: {
          nombreModalidad: true
        }},
        carreras: {
          select: {
            nombre: true
          },
        
        },
      }
      
    });
    return NextResponse.json(estudiantes);
  } catch (error) {
    if (error instanceof Error)
      return NextResponse.json(error.message, { status: 500 });
  }
}

export async function POST(request) {
  try {
    const {
      numeroControl,
      nombre,
      modalidad,
      curp,
      fotoPerfil,
      telefono,
      correoInstitucional,
      correoPersonal,
      periodoIngreso,
      periodoActual,
      situacion,
      escuelaProcedencia,
      fechaNacimiento,
      ciudad,
      direccion,
      idCarrera,
      documentos,
      carreras,
    } = await request.json();

    const nuevoEstudiante = await prisma.estudiante.create({
      data: {
        numeroControl,
        nombre,
        modalidad,
        curp,
        fotoPerfil,
        telefono,
        correoInstitucional,
        correoPersonal,
        periodoIngreso,
        periodoActual,
        situacion,
        escuelaProcedencia,
        fechaNacimiento,
        ciudad,
        direccion,
        idCarrera,
        documentos,
        carreras,
      },
    });

    return NextResponse.json(nuevoEstudiante);
  } catch (error) {
    if (error instanceof Error)
      return NextResponse.json(error.message, { status: 500 });
  }
}