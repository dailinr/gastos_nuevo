"use client"

// import { TrendingUp } from "lucide-react"
import { Bar, BarChart, CartesianGrid, XAxis } from "recharts"

import {
    Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart"
import { useAppStore } from "@/Stores/useAppStore"
import { formatDateGrap } from "@/Services/formatDate"
import { Spinner } from "./Spinner"

const chartData = [
  { day: "Lunes", ingreso: 186, gasto: 80 },
  { day: "Martes", ingreso: 305, gasto: 200 },
  { day: "Miercoles", ingreso: 237, gasto: 120 },
  { day: "Jueves", ingreso: 73, gasto: 190 },
  { day: "Friday", ingreso: 209, gasto: 130 },
  { day: "Sabado", ingreso: 214, gasto: 140 },
  { day: "Domingo", ingreso: 214, gasto: 140 },
]

const chartConfig = {
  ingreso: {
    label: "Ingresos",
    // color: "#818cf8",
    color: "#a5b4fc"
  },
  gasto: {
    label: "Gastos",
    color: "#4f46e5",
  },
} satisfies ChartConfig

export function Component() {

  const { cuentaActual } = useAppStore()

  if(!cuentaActual || !cuentaActual.cuenta){
    return ( <Spinner />)
  }

  const fechaInicial = formatDateGrap(cuentaActual.cuenta?.fechaInicial?.toString() || "")
  const fechaFinal = formatDateGrap(cuentaActual.cuenta?.fechaFinal?.toString() || "")

  return (
    // <div >
    <Card className=" h-full ">
      <CardHeader>
        <CardTitle>Grafica resumen de la semana</CardTitle>
        <CardDescription>{fechaInicial} - {fechaFinal}</CardDescription>
      </CardHeader>
      <CardContent className="w-full  overflow-auto">
        <ChartContainer config={chartConfig} className="h-full w-full">
          <BarChart accessibilityLayer data={chartData}>
            <CartesianGrid vertical={false} />
            <XAxis
              dataKey="day"
              tickLine={false}
              tickMargin={10}
              axisLine={false}
              tickFormatter={(value) => value.slice(0, 3)}
            />
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent indicator="dashed" />}
            />
            <Bar dataKey="ingreso" fill="var(--color-ingreso)" radius={4} />
            <Bar dataKey="gasto" fill="var(--color-gasto)" radius={4} />
          </BarChart>
        </ChartContainer>
      </CardContent>
      {/* <CardFooter className="flex-col items-start gap-2 text-sm">
        <div className="flex gap-2 font-medium leading-none">
          Trending up by 5.2% this month <TrendingUp className="h-4 w-4" />
        </div>
        <div className="leading-none text-muted-foreground">
          Showing total visitors for the last 6 months
        </div>
      </CardFooter> */}
      </Card>
    // </div>
  )
}
