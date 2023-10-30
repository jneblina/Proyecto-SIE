import { NextResponse } from "next/server";

export async function GET(){
    try {
        const docentes = await prisma.docente.findMany();
        return NextResponse.json(docentes);
    } catch (error) {
        if(error instanceof Error) return NextResponse.json(error.message, {status: 500});
    }
}
export function POST(){
    return NextResponse.json({
        message: "creando docente..."
    })
}