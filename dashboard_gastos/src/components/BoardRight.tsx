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

    <div className="col-span-1 ">
        <div className="grid grid-rows-[auto_1fr] grid-cols-1 xl:grid-cols-2 gap-4 ">

          <div className="w-full md:h-[150px] shadow bg-white rounded-xl"></div>

          <div className="w-full md:h-[150px] shadow bg-white rounded-xl"></div>

          <section className="w-full h-full shadow bg-white rounded-xl px-4 py-2">
            <h1 className="text-md py-2">Gastos Recientes</h1>

            {gastoReciente.map(gasto => (
              <div key={gasto.id} className="border border-b-gray-200 py-2 flex ">

                <div className={` bg-[#CFF3AF] rounded-full p-2 mr-0 md:mr-2 mb-2 md:mb-0 flex-shrink-0`}>
                  <div className={`w-3 h-3 md:w-5 md:h-5 text-black`}>
                    <img src={`/${gasto.svg}.svg`} alt={gasto.svg} />
                  </div>
                </div>

                <div>
                  <p className="text-[12px] ">{gasto.nombre}</p>
                  <p className="text-[10px] text-gray-500 ">{gasto.fecha}</p>
                </div>

                <p className="text-red-600 text-sm mx-auto mr-0">-${gasto.valor}</p>

              </div>
            ))}
            
          </section>

          <div className="w-full h-full shadow bg-white rounded-xl"></div>
        </div>
    </div>
  )
}
