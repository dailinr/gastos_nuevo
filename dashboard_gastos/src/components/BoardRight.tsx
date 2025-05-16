import BarGraphic from "./BarGraphic"
import { gastos, ingresos } from "@/data/datos"

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

    <div className="col-span-2 md:col-span-1  h-full overflow-auto">
      <div className="grid grid-rows-[minmax(0,_1fr)_minmax(0,_1fr)] grid-cols-1 h-full xl:grid-cols-1 gap-4  ">

        <section className="w-full h-full shadow bg-white rounded-xl px-5 py-2 flex flex-col overflow-auto">
          <BarGraphic ingresos={ingresos} gastos={gastos} />

        
        </section>

        {/* <div className="w-full md:h-[150px] shadow bg-white rounded-xl"></div> */}

        <section className="w-full h-full shadow flex flex-col bg-white rounded-xl px-5 py-2 overflow-auto relative ">
            <div className="">
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
              </div>
          
        </section>

        {/* <div className="w-full h-full shadow bg-white rounded-xl"></div> */}
      </div>
    </div>
  )
}
