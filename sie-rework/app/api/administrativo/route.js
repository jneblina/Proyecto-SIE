import { NextResponse } from "next/server";

export async function GET(){
    try {
        const administrativos = await prisma.administrativo.findMany();
        return NextResponse.json(administrativos);
    } catch (error) {
        if(error instanceof Error) return NextResponse.json(error.message, {status: 500});
    }
}

export function POST(){
    return NextResponse.json({
        message: "creando administrativo..."
    })
}