import { NextResponse } from "next/server";

export async function GET(request,{ params: { id } }) {
  try {
    const docente = await prisma.docente.findFirst({
      where: { idDocente: Number(id) },
    });
    if (!docente)
      return NextResponse.json(
        { message: `Docente ${id} no encontrado` },
        { status: 404 }
      );
    return NextResponse.json(docente);
  } catch (error) {
    if (error instanceof Error)
      return NextResponse.json(error.message, { status: 500 });
  }
}

export async function PUT(request, { params: { id } }) {
  try {
    const {
      nombre,
      curp,
      direccion,
      telefono,
      correoPersonal,
      correoInstitucional,
      titulo,
      plazas,
      puesto,
      departamento,
    } = await request.json();

    const docente = await prisma.docente.update({
      where: {
        idDocente: Number(id),
      },
      data: {
        nombre,
        curp,
        direccion,
        telefono,
        correoPersonal,
        correoInstitucional,
        titulo,
        plazas,
        puesto,
        departamento,
      },
    });

    if (docente == null) {
      return NextResponse.json({ message: `El Docente ${id} no existe` });
    }
  } catch (error) {
    if (error instanceof Error)
      return NextResponse.json(error.message, { status: 500 });
  }
}

export async function DELETE(request, { params: { id } }) {
  try {
    const docente = await prisma.docente.delete({
      where: {
        idDocente: Number(id),
      },
    });
    if (docente == null) {
      return NextResponse.json(
        { message: `El Docente ${id} no existe` },
        { status: 404 }
      );
    }
    return NextResponse.json({ message: `El Docente ${id} ha sido eliminado` });
  } catch (error) {
    if (error instanceof Error)
      return NextResponse.json(error.message, { status: 500 });
  }
}
