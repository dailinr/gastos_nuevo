import { Header } from "./Header"
import { TableData } from "./TableData"
import { DatePicker } from './DatePicker'
import { Button } from "./ui/button"
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination"
import { Modal as ModalForm } from "../components/Modal"


export const TableContainer = () => {
  return (
    <div className="flex flex-col w-full">

        <section className="mt-5 mb-5 md:flex space-y-3 md:space-y-0 justify-between  items-center">
            <div className="text-2xl font-semibold">
                Gastos
            </div>
                <div className="flex gap-5 items-center ">
                <DatePicker width="w-[280px]" bg="hover:bg-white"/>

                <ModalForm />
            </div>
        </section>
        
        <TableData />


        <Pagination className="mt-5 justify-end">
            <PaginationContent>
                <PaginationItem >
                    <PaginationPrevious href="#" />
                </PaginationItem>
                <PaginationItem>
                    <PaginationLink href="#" isActive  >1</PaginationLink>
                </PaginationItem>
                <PaginationItem>
                    <PaginationEllipsis />
                </PaginationItem>
                <PaginationItem>
                    <PaginationNext href="#"  />
                </PaginationItem>
            </PaginationContent>
        </Pagination>

    </div>
  )
}
