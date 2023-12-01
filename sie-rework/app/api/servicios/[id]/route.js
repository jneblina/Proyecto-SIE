import { NextResponse } from "next/server";
import { prisma } from "@/libs/prisma";

export async function GET(request, { params: { id } }) {
  try {
    const servicios = await prisma.serviciosestudiante.findFirst({
      where: {
        estudianteServicio: Number(id),
      },
      include: {
        servicios: true,
      },
    });
    if (!servicios)
      return NextResponse.json(
        { message: "No tienes historial de servicios" },
        { status: 404 }
      );
    return NextResponse.json(servicios);
  } catch (error) {
    if (error instanceof Error)
      return NextResponse.json(error.message, { status: 500 });
  }
}