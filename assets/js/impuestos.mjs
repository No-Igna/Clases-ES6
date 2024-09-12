export class Impuesto{
    constructor(montoBrutoAnual,deducciones){
        this._montoBrutoAnual= montoBrutoAnual;
        this._deducciones = deducciones;
    }
    //getter y setter montoBrutoAnual
    get montoBrutoAnual(){
        return this._montoBrutoAnual;
    }
    set montoBrutoAnual(nuevoMontoBrutoAnual){
        this._montoBrutoAnual=nuevoMontoBrutoAnual;
    }
    //getter y setter deducciones
    get deducciones(){
        return this._deducciones;
    }
    set deducciones(nuevaDeducciones){
        this._deducciones=nuevaDeducciones;
    }
};