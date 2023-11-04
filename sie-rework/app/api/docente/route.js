import { NextResponse } from "next/server";
import { prisma } from "@/libs/prisma";

export async function GET() {
    try {
      const docentes = await prisma.docente.findMany({
      });
      return NextResponse.json(docentes);
    } catch (error) {
      if (error instanceof Error)
        return NextResponse.json(error.message, { status: 500 });
    }
  }

  export async function POST(request) {
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
  
      const nuevoDocente = await prisma.docente.create({
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
  
      return NextResponse.json(nuevoDocente);
    } catch (error) {
      if (error instanceof Error)
        return NextResponse.json(error.message, { status: 500 });
    }
  }