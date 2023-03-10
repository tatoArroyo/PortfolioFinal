export class persona{

    id?: number;
    nombre: string;
    apellido: string;
    img: string;
    domicilio: string;
    descripcion: string;
    correo: string;

    constructor(nombre: string, apellido: string, img: string, domicilio: string, descripcion: string, correo: string){
this.nombre = nombre;
this.apellido = apellido;
this.img = img;
this.domicilio = domicilio;
this.descripcion = descripcion;
this.correo = correo;
    }
    }