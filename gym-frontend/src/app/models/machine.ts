export class Machine {
  constructor(
    public _id: string,
    public nombre: string,
    public uso: string,
    public musculo: string,
    public imagen: string,
    public rating: number, // <--- Agregado
    public comentarios: any[], // <--- Agregado
    public fecha: any
  ){}
}