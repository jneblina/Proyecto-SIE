import { NextRequest, NextResponse } from "next/server";
import { writeFile } from 'fs/promises'

export async function POST(request){
    const data = await request.formData()
    const file = data.get('file')
    
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

    return NextResponse.json({success:true, message: `El archivo se guardo correctamente`})
    
}