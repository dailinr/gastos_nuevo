import { Card } from "./Card"


export const BoardLeft = () => {

  return (
    <div className="col-span-1 pt-10 h-full">
      <div className="grid grid-rows-[auto_1fr_1fr] grid-cols-3 gap-4 h-full">

        <Card amount={5800} label="Gastos" svg="business-finance-corporate-22-svgrepo-com" color="#C7E9F9" />
        <Card amount={9500} label="Ingresos" svg="business-finance-corporate-26-svgrepo-com" color="#FFD9D9" />
        <Card amount={18000} label="Acumulado" svg="finance-svgrepo-com" color="#CFF3AF" />

        <div className="col-span-3 grid grid-cols-2 gap-4 h-full">
          <div className="bg-white rounded-xl shadow p-4 h-full">Fila 2 - Col 1</div>
          <div className="bg-white rounded-xl shadow p-4 h-full">Fila 2 - Col 2</div>
        </div>

        <div className="bg-white col-span-3 rounded-xl shadow p-4 h-full">Fila 3 - Col 1</div>
      </div>
    </div>
  )
}
