import { Card } from "./Card"

interface gastoReciente {
  id: number
  svg: string
  nombre: string
  fecha: string
  valor: number
}

const gastoReciente : gastoReciente[] = [
  {
    id: 1,
    svg: "business-finance-corporate-22-svgrepo-com",
    nombre: "Empanadas",
    fecha: "ayer",
    valor: 5646
  },
  {
    id: 2,
    svg: "business-finance-corporate-22-svgrepo-com",
    nombre: "Empanadas",
    fecha: "ayer",
    valor: 5646
  },
  {
    id: 3,
    svg: "business-finance-corporate-22-svgrepo-com",
    nombre: "Empanadas",
    fecha: "ayer",
    valor: 5646
  },
  {
    id: 4,
    svg: "business-finance-corporate-22-svgrepo-com",
    nombre: "Empanadas",
    fecha: "ayer",
    valor: 5646
  },
]

export const BoardRight = () => {

  return (

    <div className="col-span-2 md:col-span-1  h-full">
      <div className="grid grid-rows-[150px_1fr] grid-cols-1 h-full xl:grid-cols-1 gap-4 ">

        <section className="w-full md:h-full shadow bg-white rounded-xl px-5 py-2 relative">
          <i className='bx bx-right-arrow-alt text-xl absolute right-4 cursor-pointer text-[#9B9B9B] border border-[#9B9B9B] p-1 rounded-full'></i>
            <h1 className="text-md font-semibold pt-1">Gastos por Categoria</h1>
            <p className="text-gray-500 mb-2 font-semibold text-[12px]">último mes</p>

            <div className="flex gap-x-5">
              <Card amount={5800} label="Gastos" svg="business-finance-corporate-22-svgrepo-com" color="bg-red-500" type="category" />
              <Card amount={9500} label="Ingresos" svg="business-finance-corporate-26-svgrepo-com" color="bg-purple-500" type="category" />
              <Card amount={18000} label="Acumulado" svg="finance-svgrepo-com" color="bg-blue-500"  type="category" />
            </div>
        </section>

        {/* <div className="w-full md:h-[150px] shadow bg-white rounded-xl"></div> */}

        <section className="w-full h-full shadow bg-white rounded-xl px-5 py-2 relative">
          <i className='bx bx-right-arrow-alt text-xl absolute right-4 cursor-pointer text-[#9B9B9B] border border-[#9B9B9B] p-1 rounded-full'></i>
          <h1 className="text-md font-semibold py-1">Gastos Recientes</h1>

          {gastoReciente.map(gasto => (
            <div key={gasto.id} className="border border-b-gray-200 py-2 flex ">

              <div className={` bg-[#CFF3AF] rounded-full p-2 mr-3 md:mr-2 mb-2 md:mb-0 flex-shrink-0`}>
                <div className={`w-3 h-3 md:w-6 md:h-6 text-black`}>
                  <img src={`/${gasto.svg}.svg`} alt={gasto.svg} />
                </div>
              </div>

              <div>
                <p className="text-[14px] ">{gasto.nombre}</p>
                <p className="text-[12px] text-gray-500 ">{gasto.fecha}</p>
              </div>

              <p className="text-red-600 text-sm mx-auto mr-0">-${gasto.valor}</p>

            </div>
          ))}
          
        </section>

        {/* <div className="w-full h-full shadow bg-white rounded-xl"></div> */}
      </div>
    </div>
  )
}
