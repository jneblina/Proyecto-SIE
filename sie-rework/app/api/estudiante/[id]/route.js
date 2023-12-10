import { NextResponse } from "next/server";
import { prisma } from "@/libs/prisma";

export async function GET(request, { params: { id } }) {
  try {
    const estudiante = await prisma.estudiante.findFirst({
      where: { idEstudiante: Number(id) },
      include: {
        modalidad_estudiante_modalidadTomodalidad: {
          select: {
            nombreModalidad: true,
          },
        },
        carreras: {
          select: {
            nombre: true,
          },
        },
      },
    });
    if (!estudiante)
      return NextResponse.json(
        { message: "Estudiante no encontrado" },
        { status: 404 }
      );
    return NextResponse.json(estudiante);
  } catch (error) {
    if (error instanceof Error)
      return NextResponse.json(error.message, { status: 500 });
  }
}

export async function PUT(request, { params: { id } }) {
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

    const estudiante = await prisma.estudiante.update({
      where: {
        idEstudiante: Number(id),
      },
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

    if (estudiante == null) {
      return NextResponse.json({ message: `El alumno ${id} no existe` });
    }
  } catch (error) {
    if (error instanceof Error)
      return NextResponse.json(error.message, { status: 500 });
  }
}

export async function DELETE(request, { params: { id } }) {
  try {
    const estudiante = await prisma.estudiante.delete({
      where: {
        idEstudiante: Number(id),
      },
    });
    if (estudiante == null) {
      return NextResponse.json(
        { message: `El alumno ${id} no existe` },
        { status: 404 }
      );
    }
    return NextResponse.json({ message: `El alumno ${id} ha sido eliminado` });
  } catch (error) {
    if (error instanceof Error)
      return NextResponse.json(error.message, { status: 500 });
  }
}
