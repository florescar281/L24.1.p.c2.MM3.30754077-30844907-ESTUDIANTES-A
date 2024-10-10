import { Cl_NotaPromedio } from "./Cl_NotaPromedio.js";

export class Cl_Main {
    constructor() {
        this.salida = document.getElementById("salida");
        this.iniciar();
    }

    iniciar() {
        let notaPromedio = new Cl_NotaPromedio("Mary", 132, 8, 30);
        let notaPromedio2 = new Cl_NotaPromedio("Alirio", 315, 35, "No le corresponde");

        this.salida.innerHTML += `
        <p>
            Nombre del estudiante: ${notaPromedio.nombre}
            Acumulado de notas: ${notaPromedio.nota}
            Cantidad de materias: ${notaPromedio.cantidadMaterias}
            Nota promedio: ${notaPromedio.notaPromedio()}
            Mary recibe una beca de ${notaPromedio.becado()}
            <br>
            <br> Nombre del estudiante: ${notaPromedio2.nombre}
            Acumulado de notas: ${notaPromedio2.nota}
            Cantidad de materias: ${notaPromedio2.cantidadMaterias}
            Nota promedio: ${notaPromedio2.notaPromedio()}
            Mary recibe una beca de ${notaPromedio2.becado()} 
        </p>
        `
    }
}