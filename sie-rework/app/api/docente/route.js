import { NextResponse } from "next/server";

export function GET(){
    const docentes = [
        {
            "NumeroDeControl": "19760610",
            "PlanDeEstudios": "ISIC-2010-224 DE 260 CREDITOS",
            "Tutor": "",
            "Nombre": "Jan Marlon Neblina Villegas",
            "Modalidad": "Presencial",
            "ModuloDeEspecialidad": [
                "Desarrollo de Frontend",
                "Desarrollo de Backend"
            ],
            "Curp": "NEVJ010114HBCBLNA8",
            "Carrera": "Ingeniería en sistemas computacionales",
            "Creditos": 260,
            "Foto": "base64_encoded_image_data_here",
            "Telefono": "6351134336",
            "CorreoInstitucional": "al19760610@ite.edu.mx",
            "CorreoPersonal": "janneblina7@gmail.com",
            "PeriodoDeIngreso": "AGODIC2019",
            "PeriodoActual": "AGODIC2023",
            "Situacion": "Vigente",
            "CreditosAcumulados": 240,
            "EscuelaDeProcedencia": "CBTis 41",
            "FechaDeNacimiento": "2001-01-14",
            "Ciudad": "Ensenada",
            "Direccion": [
                {
                    "Calle": "Isabel la catolica #126",
                    "Colonia": "Villas del Real IV",
                    "CP": "22785"
                }
            ]
          },
          {
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
          },
          {
            "NumeroDeControl": "19760611",
            "PlanDeEstudios": "ISIC-2010-224 DE 260 CREDITOS",
            "Tutor": "",
            "Nombre": "Hugo Alejandro Corona Ruvalcaba",
            "Modalidad": "Presencial",
            "ModuloDeEspecialidad": [
                "Desarrollo de Frontend",
                "Desarrollo de Backend"
            ],
            "Curp": "BIJA010114HBCBLNC3",
            "Carrera": "Ingeniería en sistemas computacionales",
            "Creditos": 260,
            "Foto": "base64_encoded_image_data_here",
            "Telefono": "6461982634",
            "CorreoInstitucional": "al19760611@ite.edu.mx",
            "CorreoPersonal": "hugocrown666@gmail.com",
            "PeriodoDeIngreso": "AGODIC2019",
            "PeriodoActual": "AGODIC2023",
            "Situacion": "Vigente",
            "CreditosAcumulados": 240,
            "EscuelaDeProcedencia": "CETis 74",
            "FechaDeNacimiento": "1999-11-09",
            "Ciudad": "Ensenada",
            "Direccion": [
                {
                    "Calle": "Calle Windson #100",
                    "Colonia": "Villas del Real IV",
                    "CP": "22785"
                }
            ]
          }
    
    ]
    return NextResponse.json(docentes)
}

export function POST(){
    return NextResponse.json({
        message: "creando docente..."
    })
}