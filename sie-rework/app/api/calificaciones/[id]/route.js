import { NextResponse } from "next/server";
import { prisma } from "@/libs/prisma";

export async function GET(request, { params: { id } }) {
    try {
        const calificaciones = await prisma.calificaciones.findMany({
          where: {
            idEstudiante: Number(id)
          },
          include:{
            materia: {
              select: {
                nombre: true
              }
            }
          }
        })
      if (!calificaciones)
        return NextResponse.json(
          { message: "Estudiante no encontrado" },
          { status: 404 }
        );
      return NextResponse.json(calificaciones);
    } catch (error) {
      if (error instanceof Error)
        return NextResponse.json(error.message, { status: 500 });
    }
  }