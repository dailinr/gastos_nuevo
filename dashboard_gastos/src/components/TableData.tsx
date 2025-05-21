import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"
import { ingresos } from "@/data/datos"
import { Edit, Trash } from "@mynaui/icons-react"


export const TableData = () => {
  return (
    <Table>
        
        <TableCaption></TableCaption>
        <TableHeader >
            <TableRow >
                <TableHead className="pl-5" >Fecha</TableHead>
                <TableHead>Etiqueta</TableHead>
                <TableHead>Descripcion</TableHead>
                <TableHead>Valor</TableHead>
                <TableHead className="text-right pr-8">Action</TableHead>
            </TableRow>
        </TableHeader>
        <TableBody>
            {ingresos.map(( { id, diaSemana, valor }) => 
                <TableRow key={id}>
                    <TableCell className="font-semibold pl-5">30-05-2025</TableCell>
                    <TableCell>Transporte</TableCell>
                    <TableCell>de ida a la universidad</TableCell>
                    <TableCell>${valor}</TableCell>
                    <TableCell className="flex justify-end pr-8 gap-2">
                        
                        <Trash className="size-5.5  cursor-pointer text-red-500" />
                        <Edit className="size-5  cursor-pointer text-blue-800" />
                        
                    </TableCell>
                </TableRow>
            )}
            
        </TableBody>
    </Table>

  )
}