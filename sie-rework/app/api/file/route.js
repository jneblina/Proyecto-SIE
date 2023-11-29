import { NextRequest, NextResponse } from "next/server";
import { writeFile } from 'fs/promises'
import { prisma } from "@/libs/prisma";
import { getSession } from "next-auth/react";

export async function POST(req){
    const session = await getSession({req})
    const data = await req.formData()
    const file = data.get('file')
    const type = data.get('type')
    
    if (!session || !session.user || !session.user.name) {
        return NextResponse.json({
          success: false,
          error: 'User session not found or user name not available.',
        });
      }
    

    const userId = Number(session.user.name);

    if (!file) {
        return NextResponse.json({ success: false, error: 'No se envio ningun archivo' });
    }

    // Verificar si el archivo es un PDF por la extensión
    const fileName = file.name.toLowerCase();
    if (!fileName.endsWith('.pdf')) {
        return NextResponse.json({ success: false, error: 'El archivo debe ser pdf' });
    }

    // También puedes verificar el tipo MIME del archivo
    const fileMimeType = file.type.toLowerCase();
    if (fileMimeType !== 'application/pdf') {
        return NextResponse.json({ success: false, error: 'El archivo debe ser pdf' });
    }

    const bytes = await file.arrayBuffer()
    const buffer = Buffer.from(bytes)

    const path = require('path');
    const filePath = path.join('/', 'tmp', file.name);

    await writeFile( filePath, buffer)
    console.log(`abre el archivo ${filePath}`)
    
    // Aqui ingresamos los datos a la db
    try{
        if(type == 1){
            const actaNacimiento = await prisma.documentos.upsert({
                where:{
                    idEstudiante: userId
                },
                update:{
                    actaNacimiento: filePath
                },
                create:{
                    actaNacimiento: filePath,
                    idEstudiante: userId
                }
            })
            return NextResponse.json({success:true, message: 'Acta de nacimiento guardada'})
        }
        if(type == 2){
            const certificadoBachillerato = await prisma.documentos.upsert({
                where:{
                    idEstudiante: userId
                },
                update:{
                    certificadoBachillerato: filePath
                },
                create:{
                    certificadoBachillerato: filePath,
                    idEstudiante: userId
                }
            })
            return NextResponse.json({success:true, message: 'Certificado de Bachillerato guardada=o'})
        }
        if(type == 3){
            const contratoEstudiante = await prisma.documentos.upsert({
                where:{
                    idEstudiante: userId
                },
                update:{
                    contratoEstudiante: filePath
                },
                create:{
                    contratoEstudiante: filePath,
                    idEstudiante: userId
                }
            })
            return NextResponse.json({success:true, message: 'Acta de nacimiento guardada'})
        }
        if(type == 4){
            const formatoCurp = await prisma.documentos.upsert({
                where:{
                    idEstudiante: userId
                },
                update:{
                    formatoActualizadoCurp: filePath
                },
                create:{
                    formatoActualizadoCurp: filePath,
                    idEstudiante: userId
                }
            })
            return NextResponse.json({success:true, message: 'Acta de nacimiento guardada'})
        }

    }catch(error){
        if (error instanceof Error)
            return NextResponse.json(error.message, { status: 500 });
    }
}