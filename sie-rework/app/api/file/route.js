import { NextRequest, NextResponse } from "next/server";
import { writeFile } from 'fs/promises'

export async function POST(request){
    const data = await request.formData()
    const file = data.get('file')
    
    if(!file){
        NextResponse.json({success:false})
    }

    const bytes = await file.arrayBuffer()
    const buffer = Buffer.from(bytes)

    const path = require('path');
    const filePath = path.join('/', 'tmp', file.name);

    await writeFile( filePath, buffer)
    console.log(`abre el archivo ${filePath}`)

    return NextResponse.json({success:true})
    

}