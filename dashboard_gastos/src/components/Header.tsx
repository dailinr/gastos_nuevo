import 'boxicons/css/boxicons.min.css';

export const Header  = () => {
    const nombre = "Dailin Romero";


  return (
    <div className="h-[70px] col-span-2">
        <div className="bg-white h-full w-full flex items-center justify-between rounded-lg p-4 shadow">
           
            <div className='flex space-x-4  items-center'>
                <img className="w-10 h-10 rounded-full object-cover object-center" 
                    src="/perfil.avif" alt="Rounded avatar" 
                />

                <div className="block">
                    <p className='text-[#666666] text-[12px]'>Bienvenido de vuelta</p>
                    <h1 className="text-black text-xl font-semibold">
                        {nombre}
                    </h1>
                </div>
            </div>

            <div className='space-x-2'>
                <button
                    type="button"
                    className="cursor-pointer text-[#9B9B9B] border border-[#DADADA] hover:bg-[#DADADA] hover:text-[#9B9B9B] hover:border-[#DADADA] focus:bg-[#DADADA] focus:text-[#9B9B9B] focus:border-[#DADADA] focus:ring-4 focus:outline-none focus:ring-[#9B9B9B]/50 font-medium rounded-full text-sm p-2.5 text-center inline-flex items-center justify-center dark:border-[#9B9B9B] dark:text-[#DADADA] dark:hover:bg-[#9B9B9B] dark:hover:text-[#DADADA] dark:hover:border-[#9B9B9B] dark:focus:bg-[#9B9B9B] dark:focus:text-[#DADADA] dark:focus:border-[#9B9B9B] dark:focus:ring-[#9B9B9B]/50 h-10 w-10"
                >
                    <i className='bx bx-bell text-xl' ></i>
                </button>
                <button
                    type="button"
                    className="cursor-pointer text-[#9B9B9B] border border-[#DADADA] hover:bg-[#DADADA] hover:text-[#9B9B9B] hover:border-[#DADADA] focus:bg-[#DADADA] focus:text-[#9B9B9B] focus:border-[#DADADA] focus:ring-4 focus:outline-none focus:ring-[#9B9B9B]/50 font-medium rounded-full text-sm p-2.5 text-center inline-flex items-center justify-center dark:border-[#9B9B9B] dark:text-[#DADADA] dark:hover:bg-[#9B9B9B] dark:hover:text-[#DADADA] dark:hover:border-[#9B9B9B] dark:focus:bg-[#9B9B9B] dark:focus:text-[#DADADA] dark:focus:border-[#9B9B9B] dark:focus:ring-[#9B9B9B]/50 h-10 w-10"
                >
                    <i className='bx bx-cog text-xl'></i>
                </button>
                
            </div>
        </div>
    </div>
  )
}
