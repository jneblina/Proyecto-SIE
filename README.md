# Proyecto-SIE

## Roles en la empresa:
- Frontend: Corona Hugo 19760611 y Muro Alan 19760602
- Backend: Flores Adrián 19760555 y Rulfo Diego 19760621
- Base de datos: Neblina Jan 19760610 y Vázquez Antonio 19760723
- QA: Calderón Jorge 19760591, Rodríguez Aleida 19760549

Deploy en Railway: https://sie-production.up.railway.app/

## Contenido
- Instrucciones
- Links
- Objetivo
- Metas
- No-metas
- Background
- Diseño detallado
  - Solucion 1
    - Frontend
    - Backend
  - Solucion 2
    - Frontend
    - Backend
- Consideraciones

## Instrucciones

Estas son las instrucciones para ejecutar este proyecto:

1. Clona el repositorio desde GitHub:

> git clone https://github.com/jneblina/Proyecto-SIE

2. Navega al directorio del proyecto:

> cd sie-rework

3. Instala las dependencias necesarias:

> npm i

4. Para agregar la base de datos, dirigete a la carpeta de Prueba-json, descarga el archivo sie.sql e importalo en tu proyecto.

5. Inicia la aplicación

> npm build
> npm start --p 3001

6. Al estar conectado con el internet de la escuela (Wifi ITE 5.0) abre tu navegador web y accede a http://10.4.8.58/3001 para usar la aplicación.

## Links
- https://trello.com/b/wnWOtn5t/sie-20
- https://docs.google.com/spreadsheets/d/16c-oPELes9e_3i2mursy1_Ji5GWLwH0I5jPJaYJcHwo/edit?pli=1#gid=1425102191

## Objetivo
El objetivo principal de este proyecto es desarrollar un sistema de control escolar integral que atienda las necesidades de profesores, administrativos y alumnos en un entorno educativo. Este sistema tiene como finalidad mejorar la eficiencia y la calidad de la gestión académica y administrativa en la institución educativa, facilitando el seguimiento y registro de información clave relacionada con el proceso educativo. 

## Metas
- Implementación de Módulos Académicos: Desarrollar módulos que permitan la gestión de calificaciones, asistencias, tareas y evaluaciones para profesores y alumnos.
- Acceso Multiplataforma: Garantizar que el sistema sea accesible desde múltiples dispositivos y navegadores web para brindar flexibilidad a los usuarios.
- Comunicación Eficiente: Facilitar la comunicación entre profesores, administrativos, alumnos y padres a través de mensajes, notificaciones y anuncios en tiempo real.
- Seguridad de Datos: Establecer medidas de seguridad sólidas, como autenticación segura y encriptación de datos, para proteger la información confidencial.
- Información Transparente: Proporcionar a los usuarios acceso claro y actualizado a la información académica y administrativa relevante.
- Reportes y Análisis: Desarrollar herramientas de generación de reportes y análisis de datos para ayudar a la administración en la toma de decisiones informadas.
- Interfaz Intuitiva: Diseñar una interfaz de usuario fácil de usar que requiera una curva de aprendizaje mínima.
## No-metas
- Desarrollo de Juegos Educativos: El proyecto no tiene como objetivo desarrollar juegos educativos o actividades extracurriculares.
- Administración de Recursos Humanos: No se incluirán módulos para la gestión del personal docente y administrativo de la institución educativa.
- Ventas de Servicios Educativos: El sistema no estará destinado a la gestión de ventas de servicios educativos o matrículas.
- Inclusión de Funcionalidades de Redes Sociales: No se planea integrar funcionalidades de redes sociales o características que no estén directamente relacionadas con la gestión escolar.
- Gestión de Recursos Físicos: No se incluirán herramientas para la gestión de recursos físicos, como el mantenimiento de edificios o la administración de suministros.
- Desarrollo de Contenido Educativo: El proyecto no abarcará la creación de contenido educativo, como lecciones o materiales de estudio.
- Desarrollo de Hardware Específico: No se desarrollará hardware específico para este sistema; se centrará en aplicaciones y acceso basado en la web.

## Background
El proyecto de sistema de control escolar surge en respuesta a la necesidad de modernizar y eficientizar la gestión académica y administrativa en las instituciones educativas. Tradicionalmente, la documentación de calificaciones, asistencias y comunicación se ha realizado manualmente, lo que puede resultar en errores y falta de transparencia. Con la tecnología en constante evolución y la creciente conectividad, este proyecto tiene como objetivo desarrollar un sistema versátil y seguro que automatice procesos, mejore la comunicación entre profesores, administrativos, alumnos y padres de familia, y brinde acceso rápido y fácil a la información relevante. La implementación de esta solución tiene el potencial de revolucionar la educación al fomentar un entorno más efectivo y conectado, centrado en el éxito del estudiante.

## Solución
### Frontend

### Inicio de sesión
![Iniciar sesion](https://i.imgur.com/WZARs9E.png)

### Página de inicio
![Inicio](https://i.imgur.com/bBk9i6c.png)

### Kardex
![Kardex](https://i.imgur.com/MT9opCu.png)

### Horario
![Horario](https://i.imgur.com/0N8JY49.png)

### Calificaciones
![Calificaciones](https://i.imgur.com/iWasIEO.png)

### Servicios
![Servicios](https://i.imgur.com/mwHlTO9.png)

### Evaluación Docente
![EvaluacionDocente](https://i.imgur.com/G0tpbqB.png)

### Adeudos
![Adeudos](https://i.imgur.com/BtSaDuf.png)

### Residencias
![Residencias](https://i.imgur.com/oFi2mTd.png)

### Documentos
![Documentos](https://i.imgur.com/JTb8CdX.png)

### Actividades Complementarias
![ActividadesComplementarias](https://i.imgur.com/qHvaALr.png)

### Backend

### Diagrama entidad relación
![DiagramaER](https://i.imgur.com/otj55Ku.png)

## Consideraciones
- Requisitos de los Usuarios: Comprender las necesidades y expectativas de profesores, administrativos, alumnos y padres de familia es fundamental. Realiza encuestas o entrevistas para recopilar sus requisitos y asegúrate de que el sistema satisfaga sus necesidades.
- Escalabilidad: Asegúrate de que el sistema sea escalable para adaptarse al crecimiento de la institución educativa. Debe ser capaz de gestionar un número creciente de usuarios, cursos y datos a lo largo del tiempo.
- Seguridad de Datos: La protección de datos sensibles es crítica. Implementa medidas sólidas de seguridad, como cifrado, autenticación de usuarios y auditorías de acceso, para garantizar la confidencialidad y la integridad de la información.
- Interoperabilidad: El sistema debe ser compatible con otras herramientas y sistemas utilizados en la institución educativa, como sistemas de gestión de aprendizaje (LMS) o sistemas de administración.
- Usabilidad y Experiencia del Usuario (UX): Diseña una interfaz de usuario intuitiva y amigable que requiera una curva de aprendizaje mínima. La experiencia del usuario debe ser positiva para fomentar la adopción del sistema.
- Capacitación y Soporte: Planifica programas de capacitación para usuarios y proporciona un sistema eficaz de soporte técnico para resolver problemas y responder preguntas.
- Cumplimiento Legal: Asegúrate de que el sistema cumpla con las leyes y regulaciones de protección de datos y privacidad aplicables en tu región.
- Respaldo y Recuperación de Datos: Establece políticas y procedimientos para respaldar y recuperar datos en caso de fallos o pérdidas de información.
- Pruebas Rigurosas: Realiza pruebas exhaustivas del sistema antes de su implementación para identificar y corregir posibles errores y problemas de rendimiento.
- Presupuesto y Recursos: Define un presupuesto claro y asigna los recursos necesarios para el desarrollo, implementación y mantenimiento continuo del sistema.
- Participación de los Usuarios: Involucra a los usuarios en el proceso de desarrollo para obtener retroalimentación y ajustar el sistema según sus necesidades.
- Plan de Implementación: Elabora un plan detallado de implementación que incluya una estrategia de migración de datos, una hoja de ruta de lanzamiento y un período de transición suave.
- Evaluación Continua: Planifica la evaluación y mejora continua del sistema después de su implementación para asegurarte de que siga siendo efectivo y cumpla con los objetivos establecidos.
