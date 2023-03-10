export class Experiencias {

    id?: number;
    nombreE: string;
    descripcionE: string;
    inicio: string;
    fin: string;
    puesto: string;
    img: string;


    constructor(nombreE: string, descripcionE: string, inicio: string, fin: string, puesto: string, img: string){
    this.nombreE = nombreE;
    this.descripcionE = descripcionE;
    this.inicio = inicio;
    this.fin = fin;
    this.puesto = puesto;
    this.img = img;
}
}
