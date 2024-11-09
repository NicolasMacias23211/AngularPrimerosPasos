export class producto{
    _id?: number;
    Nombre: string;
    Categoria: string;
    Ubicacion: string;
    Precio: number;


    constructor(Nombre: string, Categoria:string, Ubicacion:string, Precio: number){
        this.Nombre = Nombre;
        this.Categoria = Categoria;
        this.Ubicacion = Ubicacion;
        this.Precio = Precio;
    }

}