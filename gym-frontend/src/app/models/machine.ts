export class Machine {
  constructor(
    public _id: string,
    public name: string,
    public muscle: string,
    public description: string,
    public image: string,
    public rating: number,
    public comentarios: any[],
    public fecha: any,
    public estado: string = 'disponible' // Agregado para que no truene el HTML
  ){}
}