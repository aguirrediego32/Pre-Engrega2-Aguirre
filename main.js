const alumnos = [];
let id = 0;

class Alumno {
  constructor(nombre, apellido, nota1, nota2, nota3) {
    id++;
    this.idAlumno = id;
    this.nombre = nombre;
    this.apellido = apellido;
    this.nota1 = nota1;
    this.nota2 = nota2;
    this.nota3 = nota3;
  }
  promedio() {
    return (this.nota1 + this.nota2 + this.nota3) / 3;
  }

  estaAprobado() {
    return this.promedio() >= 7;
  }
}

function cargarAlumno() {
  let alumnoNuevo = obtenerDatosAlumno();
  alumnos.push(alumnoNuevo);
}

function verAlumnosAprobados() {
  const alumnoAprobados = alumnos.filter((unAlumno) => unAlumno.estaAprobado());
  if (alumnoAprobados.length > 0) {
    let mensaje = "Los alumnos aprobados son \n";
    for (const alumno of alumnoAprobados) {
      mensaje +=
        alumno.nombre +
        " " +
        alumno.apellido +
        " - promedio: " +
        alumno.promedio() +
        "\n";
    }
    alert(mensaje);
  } else {
    alert("No hay alumnos aprobados");
  }
}

function verAlumnosDesaprobados() {
  const alumnoDesaprobados = alumnos.filter(
    (unAlumno) => !unAlumno.estaAprobado()
  );
  if (alumnoDesaprobados.length > 0) {
    let mensaje = "Los alumnos desaprobados son \n";
    for (const alumno of alumnoDesaprobados) {
      mensaje +=
        alumno.nombre +
        " " +
        alumno.apellido +
        " - promedio: " +
        alumno.promedio() +
        "\n";
    }
    alert(mensaje);
  } else {
    alert("No hay alumnos desaprobados");
  }
}

function obtenerDatosAlumno() {
  let nombre = prompt("Ingresa el nombre del alumno");
  let apellido = prompt("Ingresa el apellido del alumno");
  let nota1 = parseFloat(prompt("Ingresa la primer nota"));
  let nota2 = parseFloat(prompt("Ingresa la segunda nota"));
  let nota3 = parseFloat(prompt("Ingresa la tercer nota"));

  let objetoAlumno = new Alumno(nombre, apellido, nota1, nota2, nota3);
  return objetoAlumno;
}

function menu() {
  const OPCION = prompt(
    "Bienvenido, seleccione una opción (ESC para salir)\n1 Agregar datos del alumno\n2 Ver alumnos que aprobaron\n3 Ver alumnos que desaprobaron"
  );
  return OPCION;
}

function procesarOpcion(opcionSeleccionada) {
  if (opcionSeleccionada.toLowerCase() === "esc") {
    alert("Gracias por usar la app");
  } else {
    switch (parseInt(opcionSeleccionada)) {
      case 1:
        //Cargar datos del alumno
        cargarAlumno();
        break;
      case 2:
        //Obtener alumnos aprobados
        verAlumnosAprobados();
        break;
      case 3:
        //Obtener alumnos desaprobados
        verAlumnosDesaprobados();
        break;
      default:
        alert("Se ingresó una opción invalida");
        break;
    }
  }
}

function main() {
  let opcion;
  do {
    opcion = menu();
    procesarOpcion(opcion);
  } while (opcion.toLowerCase() != "esc");
}

main();
