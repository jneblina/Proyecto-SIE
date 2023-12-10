import { NextResponse } from "next/server";
import { prisma } from "@/libs/prisma";

export async function GET(request, { params: { id } }) {
    try {
        const calificaciones = await prisma.residencias.findFirst({
          where: {
            estudianteRes: Number(id)
          },  
        })
      if (!calificaciones)
        return NextResponse.json(
          { message: "No tienes residencias validas" },
          { status: 404 }
        );
      return NextResponse.json(calificaciones);
    } catch (error) {
      if (error instanceof Error)
        return NextResponse.json(error.message, { status: 500 });
    }
  }