import { NextResponse } from "next/server";

export async function GET(request, {params: {id}}){
    try {
        const administrativo = await prisma.administrativo.findUnique({where: {id}});
        if (!administrativo) return NextResponse.json({message: "Administrativo no encontrado"}, {status: 404});
        return NextResponse.json(administrativo);
    } catch (error) {
        if(error instanceof Error) return NextResponse.json(error.message, {status: 500});
    }
}

export function PUT(request, { params }){
    console.log(params)
    return NextResponse.json({
        message: `actualizando adminstrativo ${params.id}`
    })
}

export function DELETE(request, {params}){
    console.log(params)
    return NextResponse.json({
        message: `eliminando administrativo ${params.id}`
    })
}

