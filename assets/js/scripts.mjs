//tuve que cambiar el formato del archivo a mjs para que permita el uso de import y export.
//e importe las clases Cliente e Impuesto.
import {Cliente} from "./cliente.mjs";
import {Impuesto} from './impuestos.mjs';
//instancie un Impuesto para pasarlo como argumento a la clase cliente
let impuestosCliente1= new Impuesto(20000,10000);
console.log(impuestosCliente1);
//instancie un nuevo Cliente con el impuesto definido anteriormente 
let cliente1= new Cliente("Pancracio Panadero",impuestosCliente1);
console.log(cliente1);
//se llama el metodo calculoImpuesto() de la clase Cliente.
console.log(cliente1.calculoImpuesto());
