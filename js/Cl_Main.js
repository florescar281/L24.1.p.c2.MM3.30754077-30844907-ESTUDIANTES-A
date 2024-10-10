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
            Nombre del estudiante: ${notaPromedio.nombre}<br>
            Acumulado de notas: ${notaPromedio.nota}<br>
            Cantidad de materias: ${notaPromedio.cantidadMaterias}<br>
            Nota promedio: ${notaPromedio.notaPromedio()}<br>
            Mary recibe una beca de ${notaPromedio.Becado()}<br>
            <br>
            <br> Nombre del estudiante: ${notaPromedio2.nombre}<br>
            Acumulado de notas: ${notaPromedio2.nota}<br>
            Cantidad de materias: ${notaPromedio2.cantidadMaterias}<br>
            Nota promedio: ${notaPromedio2.notaPromedio()}<br>
            Mary recibe una beca de ${notaPromedio2.Becado()} <br>
        </p>
        `
    }
}