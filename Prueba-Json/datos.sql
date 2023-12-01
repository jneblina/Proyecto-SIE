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
    MATERIA (
        planEstudios,
        nombre,
        creditos,
        semestre
    )
Values (1, ' Calculo Diferencial', 5, 1), (
        1,
        ' Fundamentos De Programacion',
        5,
        1
    ), (1, ' Taller De Etica', 4, 1), (
        1,
        ' Matematicas Discretas',
        5,
        1
    ), (
        1,
        ' Taller De Administracion',
        4,
        1
    ), (
        1,
        ' Fundamentos De Investigacion',
        4,
        1
    );

INSERT INTO
    MATERIA (
        planEstudios,
        nombre,
        creditos,
        semestre
    )
Values (1, ' Calculo Integral', 5, 2), (
        1,
        ' Programacion Orientada A Objetos',
        5,
        2
    ), (
        1,
        ' Contabilidad Financiera',
        4,
        2
    ), (1, ' Quimica', 4, 2), (1, ' Algebra Lineal', 5, 2), (
        1,
        ' Probabilidad Y Estadisticas',
        5,
        2
    );

INSERT INTO
    MATERIA (
        planEstudios,
        nombre,
        creditos,
        semestre
    )
VALUES (1, ' Calculo Vectorial', 5, 3), (1, ' Estructura De Datos', 5, 3), (1, ' Cultura Empresarial', 4, 3), (
        1,
        ' Investigacion De Operaciones',
        4,
        3
    ), (
        1,
        ' Desarrollo Sustentable',
        5,
        3
    ), (1, ' Fisica Gneral', 5, 3), (
        1,
        ' Principios Electricos Y Aplicaciones Digitales',
        5,
        3
    );

INSERT INTO
    MATERIA (
        planEstudios,
        nombre,
        creditos,
        semestre
    )
VALUES (
        1,
        ' Ecuaciones Diferenciales',
        5,
        4
    ), (1, ' Metodos Numericos', 4, 4), (
        1,
        ' Topicos Avanzados De Programacion',
        5,
        4
    ), (1, ' Simulacion', 5, 4), (
        1,
        ' Arquitectura De Computadoras',
        5,
        4
    ), (
        1,
        ' Fundamentos De Base De Datos',
        5,
        4
    ), (1, ' Sistemas Operativos', 4, 4);

INSERT INTO
    MATERIA (
        planEstudios,
        nombre,
        creditos,
        semestre
    )
VALUES (
        1,
        ' Lenguajes Y Automatas 1',
        5,
        5
    ), (
        1,
        'fundamentos De Telecomunicaciones',
        4,
        5
    ), (
        1,
        ' Fundamenos De Ingeneria De Software',
        4,
        5
    ), (1, ' Programacion Web', 5, 5), (1, 'graficacion', 4, 5), (
        1,
        ' Taller De Base De Datos',
        4,
        5
    ), (
        1,
        't Aller De Sistemas Operativos',
        4,
        5
    );

INSERT INTO
    MATERIA(
        planEstudios,
        nombre,
        creditos,
        semestre
    )
VALUES (
        1,
        ' Lenguaje Y Automatas 2',
        5,
        6
    ), (
        1,
        ' Redes De Computadoras',
        5,
        6
    ), (
        1,
        ' Ingeneria De Software',
        5,
        6
    ), (
        1,
        ' Lenguajes De Interfaz',
        4,
        6
    ), (
        1,
        ' Taller De Investigacion 1',
        4,
        6
    ), (
        1,
        ' Administracion De Base De Datos',
        5,
        6
    );

INSERT INTO
    MATERIA (
        planEstudios,
        nombre,
        creditos,
        semestre
    )
VALUES (
        1,
        ' Programacion Logica Y Funcional',
        4,
        7
    ), (
        1,
        ' Conmutacion Y Enrutamiento En Redes De Datos',
        5,
        7
    ), (
        1,
        ' Gestionn De Proyectos De Software',
        6,
        7
    ), (
        1,
        ' Sistemas Programables',
        4,
        7
    ), (
        1,
        ' Taller De Investigacion 2',
        4,
        7
    );

INSERT INTO
    MATERIA (
        planEstudios,
        nombre,
        creditos,
        semestre
    )
VALUES (
        1,
        ' Inteligencia Artificial',
        4,
        8
    ), (
        1,
        ' Administración De Redes',
        4,
        8
    );

INSERT INTO
    MATERIA (
        planEstudios,
        nombre,
        creditos,
        semestre
    )
VALUES (1, 'Desarrollo Web II', 5, 9), (1, 'Backend II', 5, 9);

INSERT INTO
    estudiante (
        idEstudiante,
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