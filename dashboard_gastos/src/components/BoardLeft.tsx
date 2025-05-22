import { Progress } from "@/components/ui/progress"
import { Card } from "./Card"
import { cards, categories } from "@/data/categories"
import { DonutChart } from "./DonaChart"

export const BoardLeft = () => {

  return (

    <div className="h-full overflow-auto">
      <div className="grid grid-rows-[110px_200px_minmax(0,_1fr)] grid-cols-3 gap-4 h-full">

        {cards.map(card => (
          <Card 
            key={card.id} amount={card.amount} label={card.name}
            icon={card.icon}
            color={card.color} type="card"
          />
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
                  <DonutChart />
                </div>

                <div className="flex flex-col mx-auto mr-0">
                  {categories.map(cat => cat.amount > 0 && (
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

              {categories.map(category => (
                <Card 
                  key={category.id}
                  amount={category.amount} label={category.name}
                  icon={category.icon}
                  color={category.color} type="category" 
                />
              ))}

            </div>
          
          </div>
        </div>
        
      </div>

    </div>
  )
}