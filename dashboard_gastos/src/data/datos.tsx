export type recurso = {
    id: number
    valor : number
    diaSemana: string
}

export const ingresos : recurso[] = [
    {
        id: 1,
        valor: 3545,
        diaSemana: 'lunes'
    },
    {
        id: 2,
        valor: 3545,
        diaSemana: 'martes'
    },
    {
        id: 3,
        valor: 3545,
        diaSemana: 'miercoles'
    },
];

export const gastos : recurso[] = [
    {
        id: 1,
        valor: 1500,
        diaSemana: 'lunes'
    },
    {
        id: 2,
        valor: 2000,
        diaSemana: 'viernes'
    },
    {
        id: 3,
        valor: 3900,
        diaSemana: 'miercoles'
    },
]