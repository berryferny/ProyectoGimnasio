export class Machine {
  constructor(
    public _id: string,
    public nombre: string,
    public uso: string,
    public musculo: string,
    public imagen: string,
    public rating: number,
    public comentarios: any[],
    public estado: string, // <--- AGREGA ESTA LÍNEA
    public fecha: any
  ){}
}