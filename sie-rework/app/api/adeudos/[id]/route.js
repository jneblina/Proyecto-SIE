import { NextResponse } from "next/server";
import { prisma } from "@/libs/prisma";

export async function GET(request, { params: { id } }) {
  try {
    const adeudos = await prisma.adeudos.findMany({
        where: {
            estudianteAdeudo: Number(id)
        }
    });
    if (!adeudos)
      return NextResponse.json(
        { message: "No tienes adeudos" },
        { status: 404 }
      );
    return NextResponse.json(adeudos);
  } catch (error) {
    if (error instanceof Error)
      return NextResponse.json(error.message, { status: 500 });
  }
}