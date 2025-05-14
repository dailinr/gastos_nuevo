import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"
import type { Product } from "@/types"
import { Button } from "@/components/ui/button"

  
type props = {
    products: Product[]
}

export const TableData = ({ products } : props) => {
  return (
    <Table>
        
        <TableCaption>Productos de la factura</TableCaption>
        <TableHeader className="bg-gray-200">
            <TableRow>
                <TableHead >Producto</TableHead>
                <TableHead>Cantidad</TableHead>
                <TableHead>Precio</TableHead>
                <TableHead className="text-right pr-8">Action</TableHead>
            </TableRow>
        </TableHeader>
        <TableBody>
            {products.map(( { id, name, description, price }) => 
                <TableRow key={id}>
                    <TableCell className="font-medium">{name}</TableCell>
                    <TableCell>{description}</TableCell>
                    <TableCell>${price}</TableCell>
                    <TableCell className="text-right">
                        <Button variant="link" className="cursor-pointer text-red-500">
                            Eliminar
                        </Button>
                    </TableCell>
                </TableRow>
            )}
            
        </TableBody>
    </Table>

  )
}