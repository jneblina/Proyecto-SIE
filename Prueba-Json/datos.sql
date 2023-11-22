INSERT INTO planestudios (nombrePlanEstudio) 
VALUES 
("ISIC-2010-224"),
("IEME-2010-210"),
("IELC-2010-211");

INSERT INTO modalidad (nombreModalidad)
VALUES
("Escolarizado"),
("Semiescolarizado"),
("A distancia");

INSERT INTO carreras (planEstudios, jefeDepartamento, creditos, nombre)
VALUES 
  (1, 'Juan Perez', 4, 'Ingeniería en Sistemas de Computación'),
  (2, 'Maria Rodriguez', 3, 'Ingeniería Civil'),
  (3, 'Luis Martinez', 5, 'Ingeniería Mecánica'),
  (1, 'Ana Gonzalez', 2, 'Ingeniería Eléctrica'),
  (3, 'Carlos Sanchez', 4, 'Ingeniería Química');
  
INSERT INTO materia (materiaPrevia, materiaDependiente, planEstudios, nombre, creditos)
VALUES 
  ('Matemáticas Básicas', 'Cálculo I', 1, 'Álgebra Lineal', 3),
  ('Cálculo I', 'Cálculo II', 2, 'Cálculo I', 4),
  ('Física I', 'Física II', 1, 'Física I', 5),
  ('Programación Básica', 'Estructuras de Datos', 3, 'Programación Avanzada', 4),
  ('Química General', 'Química Orgánica', 2, 'Química Inorgánica', 3);
  
  INSERT INTO estudiante (
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
) VALUES 
  ('2023001', 'Juan Pérez', 1, 'ABC123DEF456GHI78', 'A', '555-1234', 'juan.perez@gmail.com', 'juan@gmail.com', '2023-01-15', '2023-11-21', 'Activo', 'Escuela Secundaria XYZ', '1995-05-10', 'Ciudad de México', 'Calle 123, Colonia ABC', 1),
  ('2023002', 'María Rodríguez', 2, 'XYZ987ABC654DEF32', 'B', '555-5678', 'maria.rodriguez@gmail.com', 'maria@gmail.com', '2023-02-20', '2023-11-21', 'Activo', 'Preparatoria ABC', '1998-08-22', 'Guadalajara', 'Calle 456, Colonia XYZ', 2),
  ('2023003', 'Luis Martínez', 3, 'JKL456MNO789PQR01', 'C', '555-9012', 'luis.martinez@gmail.com', 'luis@gmail.com', '2023-03-25', '2023-11-21', 'No Activo', 'Escuela Secundaria 123', '1997-11-30', 'Monterrey', 'Calle 789, Colonia MNO', 3);


  
  
