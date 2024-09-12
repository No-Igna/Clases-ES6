export class Cliente{
    constructor(nombre,impuesto){
        this._nombre=nombre;
        this._impuesto=impuesto;
    }
    //getter y setter nombre
    get nombre(){
        return this._nombre;
    }
    set nombre(nuevoNombre){
        this._nombre=nuevoNombre;
    }
    //metodo para realizar el calculo solicitado, usando los valores que se encuentran en la clase Impuesto.
    calculoImpuesto(){
        return (this._impuesto.montoBrutoAnual-this._impuesto.deducciones)*21/100;
    }
}