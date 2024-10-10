export class Cl_Estudiantes{
    constructor(nombre, nota, cantidadMaterias, beca){
        this.nombre = nombre;
        this.nota = nota;
        this.cantidadMaterias = cantidadMaterias;
        this.beca = beca;
    }

    set nota(nota){
        this.nota = nota;
    }

    get nota(){
        return this.nota;
    }

    set cantidadMaterias(cantidadMaterias){ 
        this.cantidadMaterias = cantidadMaterias;
    }

    get cantidadMaterias(){ 
        return this.cantidadMaterias;
    }

    set nombre(nombre){ 
        this.nombre = nombre;
    }

    get nombre(){ 
        return this.nombre;
    }
}