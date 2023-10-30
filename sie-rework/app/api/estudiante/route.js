import { NextResponse } from "next/server";

export async function GET(){
    try {
        const estudiantes = await prisma.estudiante.findMany();
        return NextResponse.json(estudiantes);
    } catch (error) {
        if(error instanceof Error) return NextResponse.json(error.message, {status: 500});
    }
}

export function POST(){
    return NextResponse.json({
        message: "creando estudiantes..."
    })
}