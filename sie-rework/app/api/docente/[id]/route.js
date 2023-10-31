import { NextResponse } from "next/server";

export async function GET(request, {params: {id}}){
    try {
        const docente = await prisma.docente.findUnique({where: {id}});
        if (!docente) return NextResponse.json({message: "Docente no encontrado"}, {status: 404});
        return NextResponse.json(docente);
    } catch (error) {
        if(error instanceof Error) return NextResponse.json(error.message, {status: 500});
    }
}

export function PUT(request, { params }){
    console.log(params)
    return NextResponse.json({
        message: `actualizando docente ${params.id}`
    })
}

export function DELETE(request, {params}){
    console.log(params)
    return NextResponse.json({
        message: `eliminando docente ${params.id}`
    })
}