import { NextResponse } from "next/server";
import { prisma } from "@/libs/prisma";

export async function GET(request, { params: { id } }) {
  try {
    const complementarias = await prisma.actividadcom.findMany({
      where: {
        estudianteAct: Number(id),
      },
      include: {
        docente: {
          select: {
            nombre: true,
          },
        },
      },
    });
    if (!complementarias)
      return NextResponse.json(
        { message: "No tienes actividades complementarias" },
        { status: 404 }
      );
    return NextResponse.json(complementarias);
  } catch (error) {
    if (error instanceof Error)
      return NextResponse.json(error.message, { status: 500 });
  }
}