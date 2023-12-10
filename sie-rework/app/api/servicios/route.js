import { NextResponse } from "next/server";
import { prisma } from "@/libs/prisma";

export const dynamic = "force-dynamic";

export async function GET(request) {
  try {
    const servicios = await prisma.servicios.findMany({});
    if (!servicios)
      return NextResponse.json(
        { message: "No existen servicios disponibles" },
        { status: 404 }
      );
    return NextResponse.json(servicios);
  } catch (error) {
    if (error instanceof Error)
      return NextResponse.json(error.message, { status: 500 });
  }
}

