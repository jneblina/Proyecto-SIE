import { NextResponse } from "next/server";
import { prisma } from "@/libs/prisma";

export async function GET() {
  try {

    const kardex = await prisma.materiaestudiante.findMany({
      include: {
        materia_materiaestudiante_materiaTomateria : 
            true
        
      }
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