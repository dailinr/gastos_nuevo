import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import * as DialogPrimitive from "@radix-ui/react-dialog"
import { DatePicker } from "./DatePicker"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { categories } from "@/data/categories"


export function Modal() {
  return (
    <Dialog >
      <DialogTrigger asChild>
        <Button className="cursor-pointer">Agregar Gasto</Button>
      </DialogTrigger>

      <DialogContent className="sm:max-w-[425px] bg-white">
        <DialogHeader>
          <DialogTitle>Nuevo Gasto</DialogTitle>
          <DialogDescription>
            Guardalo cuando hayas terminado
          </DialogDescription>
        </DialogHeader>

        <div className="py-3 space-y-6">

          <div className=" flex flex-col gap-2">
            <Label htmlFor="name">
              Ingresar valor
            </Label>
            <Input
              id="name"
              type="number"
              defaultValue="0"
              className="bg-background"
            />
          </div>

          <div className=" flex flex-col gap-2">
            <Label htmlFor="name">
              Ingresar categoria
            </Label>
            <Select>
              <SelectTrigger className="w-full bg-background cursor-pointer">
                <SelectValue placeholder="Selecciona una categoria" />
              </SelectTrigger>
              <SelectContent>
                {categories.map(cat => (
                  <SelectItem key={cat.id} value={cat.name}>{cat.name}</SelectItem>
                ))}
              </SelectContent>
            </Select>

          </div>

          <div className=" flex flex-col gap-2">
            <Label htmlFor="name">
              Ingresar fecha
            </Label>
            <DatePicker width="w-full" bg="bg-background"/>
          </div>

          <div className=" flex flex-col gap-2">
            <Label htmlFor="name">
              Ingresar una descripcion
            </Label>
            <Textarea className="w-full bg-background " />
          </div>
          
        </div>

        <DialogFooter>

            <DialogPrimitive.Close >
                <Button variant="secondary" className="w-full">Cancelar</Button>
            </DialogPrimitive.Close>
            <Button type="submit">Guardar Gasto</Button>
        </DialogFooter>

      </DialogContent>
    </Dialog>
  )
}
