export class Estudio {

    id?: number;
    titulo: string;
    fin: number;
    nombreE: string;
    descripcionE: string;
    img: string;

    constructor(nombreE: string, descripcionE: string, titulo: string, fin: number, img: string){
    this.nombreE = nombreE;
    this.descripcionE = descripcionE;
    this.titulo = titulo;
    this.fin = fin;
    this.img = img;
}
}
