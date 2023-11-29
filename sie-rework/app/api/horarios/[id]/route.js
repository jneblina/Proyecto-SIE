import { NextResponse } from "next/server";
import { prisma } from "@/libs/prisma";


export async function GET(request, { params: { id } }) {
    try{
        const grupos = await prisma.grupoestudiante.findMany({
            where: {
                idEstudiante : Number(id)
            }
        })

        if (!grupos) return NextResponse.json({message: "No tienen grupos asignados"})

        const uniqueIdGrupos = [...new Set(grupos.map((grupo) => grupo.idGrupo))];
        
        const grupoDetailsPromises = uniqueIdGrupos.map(async (idGrupo) => {
            const grupoDetails = await prisma.grupo.findUnique({
                where: {
                    idGrupo: idGrupo
                },
                include:{
                    materia: {
                        select: {
                            nombre: true,
                            creditos: true,
                            semestre: true
                        }
                    },
                    docente: {
                        select: {
                            nombre: true
                        }
                    }
                }
            });
            return grupoDetails;
        });

        const grupoDetails = await Promise.all(grupoDetailsPromises);

        return NextResponse.json(grupoDetails)

    }catch(error){
        if (error instanceof Error) return NextResponse.json(error.message, { status: 500 })
    }
}