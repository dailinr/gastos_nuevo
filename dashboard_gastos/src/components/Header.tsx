import 'boxicons/css/boxicons.min.css';
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
// import { CogFour, Bell, Search } from "@mynaui/icons-react";

export const Header  = ({ section }: {section : string}) => {
    const nombre = "Dailin";

  return (
    <div className="flex-shrink-0 ">
        <div className=" flex items-center justify-between gap-2 ">

            {section === "home" ? ( 
                <>
                <div >
                    <h1 className="text-black text-xl font-semibold">
                        Hola, {nombre}!
                    </h1>
                    <p className='text-[#666666] text-[12px]'>27 de Marzo del 2025</p>
                </div> 

                <Tabs defaultValue="account" >
                    <TabsList className="mx-auto bg-[#DFDFDF] ">
                        <TabsTrigger value="account">Semana</TabsTrigger>
                        <TabsTrigger value="password">Mes</TabsTrigger>
                    </TabsList>
                </Tabs> 
                </>
            ):(
                <div className="max-w-md flex-1  ">   
                <label htmlFor="default-search" className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
                <div className="relative">
                    <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                        {/* <Search />  */}
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-5.5">
                            <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
                        </svg>

                    </div>
                    
                    <input type="search" id="default-search" 
                        className="bg-white block w-full p-2.5 ps-10 text-sm text-gray-900 border border-gray-200 rounded-3xl  focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" 
                        placeholder="Search " required 
                    />
                </div>
            </div> 
            )}

            <div className='flex gap-2'>
                <button
                    type="button"
                    className="cursor-pointer h-10 w-10 bg-white shadow-sm text-[#444444]    hover:bg-[#DADADA] hover:text-[#444444] hover:border-[#DADADA] focus:bg-[#DADADA] focus:text-[#444444] focus:border-[#DADADA] focus:ring-4 focus:outline-none focus:ring-[#9B9B9B]/50 font-medium rounded-full text-sm p-2.5 text-center inline-flex items-center justify-center dark:border-[#9B9B9B] dark:text-[#DADADA] dark:hover:bg-[#9B9B9B] dark:hover:text-[#DADADA] dark:hover:border-[#9B9B9B] dark:focus:bg-[#9B9B9B] dark:focus:text-[#DADADA] dark:focus:border-[#9B9B9B] dark:focus:ring-[#9B9B9B]/50 "
                >
                    {/* <i className='bx bx-bell text-xl' ></i> */}
                    {/* <Bell /> */}
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M14.857 17.082a23.848 23.848 0 0 0 5.454-1.31A8.967 8.967 0 0 1 18 9.75V9A6 6 0 0 0 6 9v.75a8.967 8.967 0 0 1-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 0 1-5.714 0m5.714 0a3 3 0 1 1-5.714 0" />
                    </svg>

                </button>
                <button
                    type="button"
                    className="cursor-pointer h-10 w-10 bg-white shadow-sm text-[#444444] hover:bg-[#DADADA] hover:text-[#444444] hover:border-[#DADADA] focus:bg-[#DADADA] focus:text-[#444444] focus:border-[#DADADA] focus:ring-4 focus:outline-none focus:ring-[#9B9B9B]/50 font-medium rounded-full text-sm p-2.5 text-center inline-flex items-center justify-center dark:border-[#9B9B9B] dark:text-[#DADADA] dark:hover:bg-[#9B9B9B] dark:hover:text-[#DADADA] dark:hover:border-[#9B9B9B] dark:focus:bg-[#9B9B9B] dark:focus:text-[#DADADA] dark:focus:border-[#9B9B9B] dark:focus:ring-[#9B9B9B]/50 "
                >
                    {/* <i className='bx bx-cog text-xl'></i> */}
                    {/* <CogFour /> */}
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.325.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 0 1 1.37.49l1.296 2.247a1.125 1.125 0 0 1-.26 1.431l-1.003.827c-.293.241-.438.613-.43.992a7.723 7.723 0 0 1 0 .255c-.008.378.137.75.43.991l1.004.827c.424.35.534.955.26 1.43l-1.298 2.247a1.125 1.125 0 0 1-1.369.491l-1.217-.456c-.355-.133-.75-.072-1.076.124a6.47 6.47 0 0 1-.22.128c-.331.183-.581.495-.644.869l-.213 1.281c-.09.543-.56.94-1.11.94h-2.594c-.55 0-1.019-.398-1.11-.94l-.213-1.281c-.062-.374-.312-.686-.644-.87a6.52 6.52 0 0 1-.22-.127c-.325-.196-.72-.257-1.076-.124l-1.217.456a1.125 1.125 0 0 1-1.369-.49l-1.297-2.247a1.125 1.125 0 0 1 .26-1.431l1.004-.827c.292-.24.437-.613.43-.991a6.932 6.932 0 0 1 0-.255c.007-.38-.138-.751-.43-.992l-1.004-.827a1.125 1.125 0 0 1-.26-1.43l1.297-2.247a1.125 1.125 0 0 1 1.37-.491l1.216.456c.356.133.751.072 1.076-.124.072-.044.146-.086.22-.128.332-.183.582-.495.644-.869l.214-1.28Z" />
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                    </svg>
                </button>
                <img className="w-10 h-10 rounded-full object-cover object-center shadow cursor-pointer"
                    src="/perfil.avif" alt="Rounded avatar" 
                />
            </div>
        </div>
    </div>
  )
}
