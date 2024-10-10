export class Cl_Estudiantes{
    constructor(nombre, nota, cantidadMaterias, beca){
        this.nombre = nombre;
        this.nota = nota;
        this.cantidadMaterias = cantidadMaterias;
        this.beca = beca;
    }

    set nota(nota){
        this._nota = nota;
    }

    get nota(){
        return this._nota;
    }

    set cantidadMaterias(cantidadMaterias){ 
        this._cantidadMaterias = cantidadMaterias;
    }

    get cantidadMaterias(){ 
        return this._cantidadMaterias;
    }

    set nombre(nombre){ 
        this._nombre = nombre;
    }

    get nombre(){ 
        return this._nombre;
    }
}