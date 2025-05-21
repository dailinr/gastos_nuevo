import 'boxicons/css/boxicons.min.css';
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { CogFour, Bell, Search } from "@mynaui/icons-react";

export const Header  = () => {
    const nombre = "Dailin";

  return (
    <div className="flex-shrink-0 ">
        <div className=" flex items-center justify-between gap-2 ">

            {/* <div >
                <h1 className="text-black text-xl font-semibold">
                    Hola, {nombre}!
                </h1>
                <p className='text-[#666666] text-[12px]'>27 de Marzo del 2025</p>
            </div> */}

            <div className="max-w-md flex-1  ">   
                <label htmlFor="default-search" className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
                <div className="relative">
                    <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                        <Search /> 
                    </div>
                    
                    <input type="search" id="default-search" 
                        className="bg-white block w-full p-2.5 ps-10 text-sm text-gray-900 border border-gray-200 rounded-3xl  focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" 
                        placeholder="Search " required 
                    />
                </div>
            </div> 

            {/* <Tabs defaultValue="account" >
                <TabsList className="mx-auto bg-[#DFDFDF] ">
                    <TabsTrigger value="account">Semana</TabsTrigger>
                    <TabsTrigger value="password">Mes</TabsTrigger>
                </TabsList>
            </Tabs>  */}
           

            <div className='flex gap-2'>
                <button
                    type="button"
                    className="cursor-pointer h-10 w-10 bg-white shadow-sm text-[#444444]    hover:bg-[#DADADA] hover:text-[#444444] hover:border-[#DADADA] focus:bg-[#DADADA] focus:text-[#444444] focus:border-[#DADADA] focus:ring-4 focus:outline-none focus:ring-[#9B9B9B]/50 font-medium rounded-full text-sm p-2.5 text-center inline-flex items-center justify-center dark:border-[#9B9B9B] dark:text-[#DADADA] dark:hover:bg-[#9B9B9B] dark:hover:text-[#DADADA] dark:hover:border-[#9B9B9B] dark:focus:bg-[#9B9B9B] dark:focus:text-[#DADADA] dark:focus:border-[#9B9B9B] dark:focus:ring-[#9B9B9B]/50 "
                >
                    {/* <i className='bx bx-bell text-xl' ></i> */}
                    <Bell />

                </button>
                <button
                    type="button"
                    className="cursor-pointer h-10 w-10 bg-white shadow-sm text-[#444444] hover:bg-[#DADADA] hover:text-[#444444] hover:border-[#DADADA] focus:bg-[#DADADA] focus:text-[#444444] focus:border-[#DADADA] focus:ring-4 focus:outline-none focus:ring-[#9B9B9B]/50 font-medium rounded-full text-sm p-2.5 text-center inline-flex items-center justify-center dark:border-[#9B9B9B] dark:text-[#DADADA] dark:hover:bg-[#9B9B9B] dark:hover:text-[#DADADA] dark:hover:border-[#9B9B9B] dark:focus:bg-[#9B9B9B] dark:focus:text-[#DADADA] dark:focus:border-[#9B9B9B] dark:focus:ring-[#9B9B9B]/50 "
                >
                    {/* <i className='bx bx-cog text-xl'></i> */}
                    <CogFour />

                </button>
                <img className="w-10 h-10 rounded-full object-cover object-center shadow cursor-pointer"
                    src="/perfil.avif" alt="Rounded avatar" 
                />
            </div>
        </div>
    </div>
  )
}
