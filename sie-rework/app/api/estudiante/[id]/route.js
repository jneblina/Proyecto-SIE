import { NextResponse } from "next/server";

export function GET(request, { params }){
    
    const estudiante = {
        "NumeroDeControl": "19760723",
        "PlanDeEstudios": "ISIC-2010-224 DE 260 CREDITOS",
        "Tutor": "",
        "Nombre": "Antonio Vazquez Saucedo",
        "Modalidad": "Presencial",
        "ModuloDeEspecialidad": [
            "Desarrollo de Frontend",
            "Desarrollo de Backend"
        ],
        "Curp": "VASA010114HBCBLNA6",
        "Carrera": "Ingeniería en sistemas computacionales",
        "Creditos": 260,
        "Foto": "base64_encoded_image_data_here",
        "Telefono": "6461924812",
        "CorreoInstitucional": "al19760723@ite.edu.mx",
        "CorreoPersonal": "vazqueztony079@gmail.com",
        "PeriodoDeIngreso": "AGODIC2019",
        "PeriodoActual": "AGODIC2023",
        "Situacion": "Vigente",
        "CreditosAcumulados": 240,
        "EscuelaDeProcedencia": "CET-MAR 11",
        "FechaDeNacimiento": "2001-06-07",
        "Ciudad": "Ensenada",
        "Direccion": [
            {
                "Calle": "Calle 8 #760",
                "Colonia": "Territorio Sur",
                "CP": "22860"
            }
        ]
      }
      
    return NextResponse.json(estudiante)
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