import { Progress } from "@/components/ui/progress"
import { Card } from "./Card"

import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"

const categories = [
  {
    id: 1,
    color: "text-red-500",
    nombre: "Comida"
  },
  {
    id: 2,
    color: "text-green-500",
    nombre: "Transporte"
  },
  {
    id: 3,
    color: "text-purple-500",
    nombre: "Casa"
  },
  {
    id: 4,
    color: "text-blue-500",
    nombre: "Universidad"
  },

]


export const BoardLeft = () => {

  return (
    <div className="col-span-2 grid grid-rows-[40px_minmax(0,_1fr)] md:col-span-1 overflow-auto  h-full">
      
      <Tabs defaultValue="account" className="w-full pb-[12px] ">
        <TabsList className="mx-auto bg-[#DFDFDF] ">
          <TabsTrigger value="account">Semana</TabsTrigger>
          <TabsTrigger value="password">Mes</TabsTrigger>
        </TabsList>
      </Tabs> 

      <div className="grid grid-rows-[110px_160px_minmax(0,_1fr)] grid-cols-3 gap-4 h-full">

        <Card amount={5800} label="Gastos" svg="business-finance-corporate-22-svgrepo-com" color="bg-[#C7E9F9]" type="card" />
        <Card amount={9500} label="Ingresos" svg="business-finance-corporate-26-svgrepo-com" color="bg-[#FFD9D9]" type="card" />
        <Card amount={18000} label="Acumulado" svg="finance-svgrepo-com" color="bg-[#CFF3AF]" type="card" />

        <div className="col-span-3 grid grid-cols-2 gap-4 h-full">

          <section className="bg-white rounded-xl shadow px-4 py-2 h-full relative flex flex-col overflow-auto">
            <div className="">

            <i className='bx bx-right-arrow-alt text-xl absolute right-4 cursor-pointer text-[#9B9B9B] border border-[#9B9B9B] p-1 rounded-full'></i>
            <h1 className="text-md font-semibold pt-1">Resumen de Gastos</h1>
            <p className="text-gray-500 mb-2 font-semibold text-[12px]">último mes</p>

            <div className="flex gap-x-3 px-8">
              <div className="w-20 h-20">
                <img src="/grafico.jpg" alt="" />
              </div>

              <div className="flex flex-col mx-auto mr-0">
                {categories.map(cat => (
                  <div key={cat.id} className="flex items-center">
                    <i className={`bx bxs-circle ${cat.color} text-[8px] mr-1`}/>
                    <span className="text-[12px] align-center">{cat.nombre}</span> 
                  </div>
                ))}
              </div>
            </div>

            </div>

          </section>

          <section className="bg-white rounded-xl shadow px-4 py-2 h-full relative flex flex-col overflow-auto">

            <i className='bx bx-right-arrow-alt text-xl absolute right-4 cursor-pointer text-[#9B9B9B] border border-[#9B9B9B] p-1 rounded-full'></i>
            <h1 className="text-md font-semibold pt-1">Metas de Ahorro</h1>
            <p className="text-gray-500 font-semibold mb-3 text-md">$15,900</p>
            <Progress value={90} />
            <div className="w-full h-[45px] rounded-lg bg-[#F6F6FA] text-xl flex items-center justify-center mt-4">
              $25,000
            </div>
            </section>
        </div>

        <div className="bg-white col-span-3 rounded-xl shadow px-4 py-2 h-full relative flex flex-col overflow-auto">
          <div>
            <i className='bx bx-right-arrow-alt text-xl absolute right-4 cursor-pointer text-[#9B9B9B] border border-[#9B9B9B] p-1 rounded-full'></i>
            <h1 className="text-md font-semibold pt-1">Gastos por Categoria</h1>
            <p className="text-gray-500 mb-1.5 font-semibold text-[12px]">último mes</p>

            <div className="h-max gap-x-2 flex">
              <Card amount={5800} label="Gastos" svg="business-finance-corporate-22-svgrepo-com" color="bg-red-500" type="category" />
              <Card amount={9500} label="Ingresos" svg="business-finance-corporate-26-svgrepo-com" color="bg-purple-500" type="category" />
              <Card amount={18000} label="Acumulado" svg="finance-svgrepo-com" color="bg-blue-500"  type="category" />
              <Card amount={18000} label="Acumulado" svg="finance-svgrepo-com" color="bg-blue-500"  type="category" />
            </div>
          </div>
        </div>
        
      </div>
    </div>
  )
}