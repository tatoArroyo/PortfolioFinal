export class Proyecto {
    id?: number;
    nombre: string;
    acercaproyec: string;
    img: string;


    constructor(nombre: string, acercaproyec: string, img: string){
    this.nombre = nombre;
    this.acercaproyec = acercaproyec;
    this.img = img;

}
}
