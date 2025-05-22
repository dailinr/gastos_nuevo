import BarGraphic from "./BarGraphic"
import { gastoRecientes, gastos, ingresos } from "@/data/datos"
import { Component as BarChart } from "../components/BarChart"

export const BoardRight = () => {

  return (

    <div className="h-full overflow-auto">
      <div className="grid grid-rows-2 h-full gap-4  ">

        <section className="w-full h-full shadow bg-white rounded-xl flex flex-col justify-center">
          
          <BarChart />
        </section>

        <section className="w-full h-full shadow flex flex-col bg-white rounded-xl px-2 py-2 relative ">
          
          <i className='bx bx-right-arrow-alt text-xl absolute right-6 cursor-pointer text-[#9B9B9B] border border-[#9B9B9B] p-1 rounded-full'></i>
          <h1 className="text-md font-semibold px-2 py-1">Gastos Recientes</h1>

          <div className="overflow-auto px-2">
            {gastoRecientes.map(gasto => (
              <div key={gasto.id} className="border-b border-b-gray-200 py-2 flex">

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

      </div>
    </div>
  )
}
