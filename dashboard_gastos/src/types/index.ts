export type Recurso = {
    id: number
    valor : number
    diaSemana: string
}

export type Category = {
    id: number
    name: string
    icon: string
    amount: number
    color: string
    colorText: string
}

export interface GastoReciente {
  id: number
  svg: string
  nombre: string
  fecha: string
  valor: number
}