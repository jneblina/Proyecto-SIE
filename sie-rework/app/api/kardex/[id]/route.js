import { NextResponse } from "next/server";
import { prisma } from "@/libs/prisma";

export async function GET(request, { params: { id } }) {
  try {
    const kardex = await prisma.materiaestudiante.findMany({
      where: { estudiante: Number(id) },
      include: {
        materia_materiaestudiante_materiaTomateria: true,
      },
    });
    if (!kardex)
      return NextResponse.json(
        { message: "Estudiante no encontrado" },
        { status: 404 }
      );
    return NextResponse.json(kardex);
  } catch (error) {
    if (error instanceof Error)
      return NextResponse.json(error.message, { status: 500 });
  }
}