import { categories } from "@/data/categories"
import {getSemana } from "@/Services/cuenta-service"
import type { Category, CuentaActual, GastoReciente } from "@/types"
import type { StateCreator } from "zustand"

export type cuentaSliceType = {
    cuentaActual: CuentaActual
    fetchSemana: () => Promise<void>
    categoriesSemana: Category[]
    setCategories: () => void
    gastosRecientes: GastoReciente[]
    setGastosRecientes: () => void
    // resumeSemana: ResumenSemana[]
}

export const createCuentaSlice : StateCreator<cuentaSliceType> = (set, get) => ({
    cuentaActual: {} as CuentaActual,
    categoriesSemana: [],
    gastosRecientes: [],

    fetchSemana: async () => {
        const cuentaActual = await getSemana()
        set({
            cuentaActual
        })
    },

    setCategories: () => {

        const categoriesSemana : Category[] = categories.map(category => {
            const match = get().cuentaActual.categoriasGastos?.find(c => 
                c.etiqueta.toLowerCase() === category.name.toLowerCase()
            )
            return{
                ...category,
                amount: match ? match.totalCategoria : 0
            }
        }) || [];

        set({
            categoriesSemana
        })
    },

    setGastosRecientes: () => {

        const gastosRecientes : GastoReciente[] = get().cuentaActual.gastos?.map(gasto => {

            const match = categories.find(c => 
                c.name.toLowerCase() === gasto.etiqueta.toLowerCase() 
            ) || categories.filter(c => c.name.toLowerCase() === "otros")[0] 

            return {
                _id: gasto._id,
                descripcion: gasto.descripcion,
                diaSemana: gasto.diaSemana,
                valor: gasto.valor,
                color: match.color ,
                colorText:  match.colorText,
                icon:  match.icon 
            }   

        }) || [];

        set({
            gastosRecientes
        })
    }

})