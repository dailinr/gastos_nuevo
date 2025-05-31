import { Progress } from "@/components/ui/progress"
import { Card } from "../components/Card"
// import { DonutChart } from "../components/DonaChart"
import { useAppStore } from "@/Stores/useAppStore"
import type { Category } from "@/types"
import { Component as BarChart } from "../components/BarChart"
import { useEffect} from "react"
import { Spinner } from "@/components/Spinner"

export const Dashboard = () => {
  
  const { cuentaActual, categoriesSemana, setCategories, gastosRecientes, setGastosRecientes } = useAppStore()

  useEffect(() => {
    setCategories()
    setGastosRecientes()
  },[cuentaActual])

  
  const cards : Category[] = cuentaActual ? [
    {
      id: 1,
      name: "Ingresos",
      icon: "business-finance-corporate-22-svgrepo-com",
      amount: cuentaActual.totalIngresos,
      color: "bg-[#C7E9F9]",
      colorText: "text-[#C7E9F9]"
    },
    {
      id: 2,
      name: "Gastos",
      icon: "business-finance-corporate-26-svgrepo-com",
      amount: cuentaActual.totalGastos,
      color: "bg-[#FFD9D9]",
      colorText: "text-[#FFD9D9]"
    },
    {
      id: 3,
      name: "Acumulado",
      icon: "finance-svgrepo-com",
      amount: cuentaActual.totalSemanal,
      color: "bg-[#CFF3AF]",
      colorText: "text-[#CFF3AF]"
    },
  ] : []

  return (
    <main className="flex-1 grid grid-cols-1 md:grid-cols-[57%_1fr] gap-4 md:overflow-hidden">

      <div className="h-full overflow-auto">
        <div className="grid grid-rows-[110px_200px_minmax(0,_1fr)] grid-cols-3 gap-4 h-full">
          {cards.map(card => (
            <Card key={card.id} data={card} type="card" />
          ))}
  
          <div className="col-span-3 grid grid-cols-2 gap-4 h-full">
              {/* Grafica resumen de gastos  */}
            <section className="bg-white rounded-xl shadow px-4 py-2 h-full relative flex flex-col overflow-auto">
                <i className='bx bx-right-arrow-alt text-xl absolute right-4 cursor-pointer text-[#9B9B9B] border border-[#9B9B9B] p-1 rounded-full'></i>
                <h1 className="text-md font-semibold pt-1">Resumen de Gastos</h1>
                <p className="text-gray-500 mb-2 font-semibold text-[12px]">último mes</p>
                <div className="flex gap-x-3 ">
                  <div className="w-full">
                      {/* <img src="/grafico.jpg" alt="" />   */}
                    {/* <DonutChart /> */}
                  </div>
                  <div className="flex flex-col mx-auto mr-0">
                    {categoriesSemana.map(cat => cat.amount > 0 && (

                      <div key={cat.id} className="flex items-center">
                        <i className={`bx bxs-circle ${cat.colorText} text-[8px] mr-1`}/>
                        <span className="text-[12px] align-center">{cat.name}</span> 
                      </div>
                    ))}
                  </div>
                </div> 
            </section>
  
            {/* Progreso de ahorros */}
            <section className="bg-white rounded-xl shadow px-4 py-2 h-full relative flex flex-col overflow-auto">
              <div className=" flex-1k">
                <i className='bx bx-right-arrow-alt text-xl absolute right-4 cursor-pointer text-[#9B9B9B] border border-[#9B9B9B] p-1 rounded-full'></i>
                <h1 className="text-md font-semibold pt-1">Metas de Ahorro</h1>
                <p className="text-gray-500 font-semibold mb-3 text-md">$15,900</p>
                  <Progress value={90} />
                  <div className="w-full h-[45px] rounded-lg bg-[#F6F6FA] text-xl flex items-center justify-center mt-4">
                    $25,000
                  </div>
              </div>
            </section>
          </div>
  
          <div className="bg-white col-span-3 rounded-xl shadow px-4 py-2 h-full relative flex flex-col">
            <i className='bx bx-right-arrow-alt text-xl absolute right-4 cursor-pointer text-[#9B9B9B] border border-[#9B9B9B] p-1 rounded-full'></i>
            <h1 className="text-md font-semibold pt-1">Gastos por Categoria</h1>
            <p className="text-gray-500 mb-2 font-semibold text-[12px]">último mes</p>
            <div className="flex-1 overflow-auto ">
              <div className="flex flex-wrap gap-y-4 h-full items-center justify-between ">
                {categoriesSemana.length === 0 ? (
                  <Spinner />
                ): 
                (categoriesSemana.map(category => {
                  return <Card key={category.id} data={category} type="category" />;
                }))}
              </div>
            </div>
          </div>
          
        </div>
      </div>

      <div className="h-full overflow-auto">
        <div className="grid grid-rows-2 h-full gap-4  ">
  
          <section className="w-full h-full shadow bg-white rounded-xl flex flex-col justify-center">
            {cuentaActual ? (
              <BarChart />
            ):(
              <Spinner />
            )}
          </section>
  
          <section className="w-full h-full shadow-2xl flex flex-col bg-white rounded-xl px-2 py-2 relative ">
            <i className='bx bx-right-arrow-alt text-xl absolute right-6 cursor-pointer text-[#9B9B9B] border border-[#9B9B9B] p-1 rounded-full'></i>
            <h1 className="text-md font-semibold px-2 py-1">Gastos Recientes</h1>
              
            {gastosRecientes.length === 0 ? (
              <Spinner />
            ): 
            (<div className="overflow-auto px-2">
              {gastosRecientes.map(gasto => (
                <div key={gasto._id} className="border-b border-b-gray-200 py-2 flex">
                  
                  <div className={` ${gasto.color} rounded-full p-3 mr-3 md:mr-2 mb-2 md:mb-0 flex-shrink-0`}>

                    <div className={` w-4 h-4 rounded-full flex items-center justify-center `}>
                      <i className={`${gasto.icon} ${gasto.colorText} text-[18px] font-bold md:text-[18px]`}></i>
                    </div>
                  </div>

                  <div>
                    <p className="text-[14px] ">{gasto.descripcion}</p>
                    <p className="text-[12px] text-gray-500 ">{gasto.diaSemana}</p>
                  </div>
                  <p className="text-red-600 text-sm mx-auto mr-0">-${gasto.valor}</p>
                </div>
              ))}
            </div>)
            }
          </section>
  
        </div>
      </div>

    </main>
  )
}
