import { Cl_Estudiantes } from "./Cl_Estudiantes.js";

export class Cl_NotaPromedio extends Cl_Estudiantes{
    constructor(nombre, nota, cantidadMaterias, beca){
        super(nombre, nota, cantidadMaterias, beca);
    }
    notaPromedio(){
        if (this.cantidadMaterias != 0){
            return this.nota / this.cantidadMaterias;
        } else {
            return 0;
        }
    }
    Becado(){
        if (this.notaPromedio() >= 10) {
            return this.beca;
        } else {
            return "No le corresponde beca"
        }
    }
}