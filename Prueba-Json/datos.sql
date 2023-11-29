INSERT INTO
    planestudios (nombrePlanEstudio)
VALUES ("ISIC-2010-224"), ("IEME-2010-210"), ("IELC-2010-211");

INSERT INTO
    modalidad (nombreModalidad)
VALUES ("Escolarizado"), ("Semiescolarizado"), ("A distancia");

INSERT INTO
    carreras (
        planEstudios,
        jefeDepartamento,
        creditos,
        nombre
    )
VALUES (
        1,
        'Juan Perez',
        4,
        'Ingeniería en Sistemas de Computación'
    ), (
        2,
        'Maria Rodriguez',
        3,
        'Ingeniería Civil'
    ), (
        3,
        'Luis Martinez',
        5,
        'Ingeniería Mecánica'
    ), (
        1,
        'Ana Gonzalez',
        2,
        'Ingeniería Eléctrica'
    ), (
        3,
        'Carlos Sanchez',
        4,
        'Ingeniería Química'
    );

INSERT INTO
    materia (
        materiaPrevia,
        materiaDependiente,
        planEstudios,
        nombre,
        creditos,
        semestre
    )
VALUES (
        'Matemáticas Básicas',
        'Cálculo I',
        1,
        'Álgebra Lineal',
        3,
        1
    ), (
        'Cálculo I',
        'Cálculo II',
        2,
        'Cálculo I',
        4,
        2
    ), (
        'Física I',
        'Física II',
        1,
        'Física I',
        5,
        3
    ), (
        'Programación Básica',
        'Estructuras de Datos',
        3,
        'Programación Avanzada',
        4,
        4
    ), (
        'Química General',
        'Química Orgánica',
        2,
        'Química Inorgánica',
        3,
        5
    );

INSERT INTO
    estudiante (
        numeroControl,
        nombre,
        modalidad,
        curp,
        fotoPerfil,
        telefono,
        correoInstitucional,
        correoPersonal,
        periodoIngreso,
        periodoActual,
        situacion,
        escuelaProcedencia,
        fechaNacimiento,
        ciudad,
        direccion,
        idCarrera
    )
VALUES (
        '2023001',
        'Juan Pérez',
        1,
        'ABC123DEF456GHI78',
        'A',
        '555-1234',
        'juan.perez@gmail.com',
        'juan@gmail.com',
        '2023-01-15',
        '2023-11-21',
        'Activo',
        'Escuela Secundaria XYZ',
        '1995-05-10',
        'Ciudad de México',
        'Calle 123, Colonia ABC',
        1
    ), (
        '2023002',
        'María Rodríguez',
        2,
        'XYZ987ABC654DEF32',
        'B',
        '555-5678',
        'maria.rodriguez@gmail.com',
        'maria@gmail.com',
        '2023-02-20',
        '2023-11-21',
        'Activo',
        'Preparatoria ABC',
        '1998-08-22',
        'Guadalajara',
        'Calle 456, Colonia XYZ',
        2
    ), (
        '2023003',
        'Luis Martínez',
        3,
        'JKL456MNO789PQR01',
        'C',
        '555-9012',
        'luis.martinez@gmail.com',
        'luis@gmail.com',
        '2023-03-25',
        '2023-11-21',
        'No Activo',
        'Escuela Secundaria 123',
        '1997-11-30',
        'Monterrey',
        'Calle 789, Colonia MNO',
        3
    );

INSERT INTO
    materia (
        planEstudios,
        nombre,
        creditos,
        semestre
    )
VALUES (
        1,
        'Introducción a la Programación',
        4,
        1
    ), (1, 'Álgebra Lineal', 3, 1), (1, 'Cálculo Diferencial', 4, 1), (1, 'Estructuras de Datos', 4, 2), (1, 'Cálculo Integral', 4, 2), (
        1,
        'Arquitectura de Computadoras',
        4,
        3
    ), (
        1,
        'Programación Orientada a Objetos',
        4,
        3
    ), (1, 'Sistemas Operativos', 4, 4), (
        1,
        'Análisis y Diseño de Algoritmos',
        4,
        4
    ), (
        1,
        'Redes de Computadoras',
        4,
        5
    ), (1, 'Base de Datos', 4, 5), (
        1,
        'Ingeniería de Software',
        4,
        6
    ), (
        1,
        'Interconexión de Redes',
        4,
        6
    ), (1, 'Desarrollo Web', 4, 7), (
        1,
        'Inteligencia Artificial',
        4,
        7
    ), (
        1,
        'Sistemas Distribuidos',
        4,
        8
    ), (
        1,
        'Seguridad Informática',
        4,
        8
    ), (
        1,
        'Programación Concurrente',
        4,
        9
    ), (
        1,
        'Diseño de Compiladores',
        4,
        9
    ), (
        1,
        'Administración de Proyectos de Software',
        3,
        1
    ), (
        1,
        'Ética en la Ingeniería de Sistemas',
        3,
        1
    ), (
        1,
        'Computación en la Nube',
        4,
        2
    ), (
        1,
        'Desarrollo de Aplicaciones Móviles',
        4,
        2
    ), (1, 'Big Data Analytics', 4, 3), (
        1,
        'Internet de las Cosas (IoT)',
        4,
        3
    ), (
        1,
        'Realidad Virtual y Aumentada',
        4,
        4
    ), (
        1,
        'Gestión de Servicios TI',
        3,
        4
    ), (
        1,
        'Análisis Forense Computacional',
        3,
        5
    ), (1, 'Robótica', 4, 5), (
        1,
        'Emprendimiento Tecnológico',
        3,
        6
    ), (
        1,
        'Inglés Técnico para Sistemas',
        3,
        6
    ), (
        1,
        'Proyecto de Investigación en Sistemas',
        4,
        7
    ), (
        1,
        'Tópicos Avanzados en Sistemas Computacionales',
        4,
        7
    ), (
        1,
        'Práctica Profesional Supervisada',
        6,
        8
    ), (
        1,
        'Seminario de Titulación',
        2,
        8
    ), (1, 'Desarrollo Web II', 5, 9), (1, 'Backend II', 5, 9);

INSERT INTO
    materiaestudiante (estudiante, materia, estado)
VALUES (2023001, 6, 1), (2023001, 7, 1), (2023001, 8, 1), (2023001, 9, 1), (2023001, 10, 1), (2023001, 11, 1), (2023001, 12, 1), (2023001, 13, 1), (2023001, 14, 1), (2023001, 15, 1), (2023001, 16, 1), (2023001, 17, 1), (2023001, 18, 1), (2023001, 19, 1), (2023001, 20, 1), (2023001, 21, 1), (2023001, 22, 1), (2023001, 23, 1), (2023001, 24, 1), (2023001, 25, 1), (2023001, 26, 1), (2023001, 27, 1), (2023001, 28, 1), (2023001, 29, 1), (2023001, 30, 1), (2023001, 31, 1), (2023001, 32, 1), (2023001, 33, 1), (2023001, 34, 1), (2023001, 35, 1), (2023001, 36, 1), (2023001, 37, 1), (2023001, 38, 1), (2023001, 39, 1), (2023001, 40, 1);

INSERT INTO
    docente (
        nombre,
        curp,
        direccion,
        telefono,
        correoPersonal,
        correoInstitucional,
        titulo,
        plazas,
        puesto,
        departamento
    )
VALUES (
        'Pako',
        'ABCD123456EFGHJKL',
        'Calle 123, Gobierno',
        '6461234567',
        'pako@gmail.com',
        'pako@ite.edu.mx',
        'Ingeniero en Sistemas',
        'Tiempo Completo',
        'Profesor',
        'Departamento de Informatica'
    ), (
        'María González',
        'EFGH567890ABCD12',
        'Avenida 456, Pueblo',
        '9876543210',
        'maria.gonzalez@yahoo.com',
        'maria.gonzalez@instituto.edu',
        'Maestría en Matemáticas',
        'Medio Tiempo',
        'Asistente',
        'Departamento de Matemáticas'
    ), (
        'Carlos Rodríguez',
        'JKLM987654POIU543',
        'Carrera 789, Villa',
        '5556667777',
        'carlos.rodriguez@hotmail.com',
        'carlos.rodriguez@instituto.edu',
        'Ingeniero en Mecanica',
        'Tiempo Completo',
        'Coordinador',
        'Departamento de Informática'
    ), (
        'Xenia',
        'ADFJS0142SKEJDLP',
        'Calle callesita, Ciudad',
        '6469876541',
        'xenia@gmail.com',
        'xenia@ite.edu.mx',
        'Ingeniera en Sistemas',
        'Tiempo Completo',
        'Profesor',
        'Departamento de Informática'
    );

INSERT INTO
    `sie`.`grupo` (
        `idMateria`,
        `paq`,
        `lunes`,
        `martes`,
        `jueves`,
        `viernes`,
        `salon`,
        `idDocente`
    )
VALUES (
        '41',
        '09E',
        '16:00 a 17:00',
        '16:00 a 17:00',
        '15:00 a 17:00',
        '16:00 a 17:00',
        'LC4',
        '4'
    ), (
        '42',
        '09E',
        '17:00 a 19:00',
        '17:00 a 19:00',
        NULL,
        '17:00 a 18:00',
        'LC5',
        '1'
    );

INSERT INTO
    `sie`.`grupoestudiante` (`idGrupo`, `idEstudiante`)
VALUES ('1', '2023001'), ('2', '2023001');