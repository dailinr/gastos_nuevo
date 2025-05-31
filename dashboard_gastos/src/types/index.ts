import { z } from 'zod'
import { CuentaSemanaSchema, RecursosSemanaSchema } from '@/Schemas/cuentaSchema'

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

export type GastoReciente = {
  _id: string
  color: string
  colorText: string
  descripcion: string
  diaSemana: string
  valor: number,
  icon: string
}

export type ResumenSemana = {
  id: string
  // dia: valor
}

export type CuentaActual = z.infer<typeof CuentaSemanaSchema>

export type GastosSemana = z.infer<typeof RecursosSemanaSchema>
export type IngresosSemana = z.infer<typeof RecursosSemanaSchema>