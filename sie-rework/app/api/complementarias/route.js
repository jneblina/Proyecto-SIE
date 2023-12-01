import { NextResponse } from "next/server";
import { prisma } from "@/libs/prisma";

export async function GET(request) {
    try {
        const actividadcom = await prisma.actividadcom.findMany({
          include: {
            docente:true
          }
        })
      if (!actividadcom)
        return NextResponse.json(
          { message: "No hay actividades complementarias" },
          { status: 404 }
        );
      return NextResponse.json(actividadcom);
    } catch (error) {
      if (error instanceof Error)
        return NextResponse.json(error.message, { status: 500 });
    }
  }