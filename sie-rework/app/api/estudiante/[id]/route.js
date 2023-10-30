import { NextResponse } from "next/server";

export async function GET(request, {params: {id}}){
    try {
        const estudiante = await prisma.estudiante.findUnique({where: {id}});
        if (!estudiante) return NextResponse.json({message: "Estudiante no encontrado"}, {status: 404});
        return NextResponse.json(estudiante);
    } catch (error) {
        if(error instanceof Error) return NextResponse.json(error.message, {status: 500});
    }
}

export function PUT(request, { params }){
    console.log(params)
    return NextResponse.json({
        message: `actualizando estudiante ${params.id}`
    })
}

export function DELETE(request, {params}){
    console.log(params)
    return NextResponse.json({
        message: `eliminando estudiante ${params.id}`
    })
}