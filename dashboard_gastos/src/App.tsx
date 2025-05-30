// import { SidebarProvider} from "@/components/ui/sidebar"
// import { AppSidebar } from "@/components/AppSidebar"
// import { Header } from "./components/Header"
// import { BoardLeft } from "./components/BoardLeft"
// import { BoardRight } from "./components/BoardRight"
// import { TableContainer } from "./components/TableContainer"


// function App() {
//   let section = "home";

//   return (

//     <SidebarProvider>
    
//       <AppSidebar/>

//       <section className="flex flex-col w-full h-screen py-5 px-5 md:pl-2 md:pr-6 gap-4 ">
        
//         {section === "home" ? (
//           <>
//             <Header section="home" /> 
//             <main className="flex-1 grid grid-cols-1 md:grid-cols-[57%_1fr] gap-4 md:overflow-hidden">
//               <BoardLeft />
//               <BoardRight />
//             </main> 
//           </>
//         ): ( 
//           <>
//             <Header section="table" /> 
//             <TableContainer /> 
//           </>
//         )}
        
//       </section>

//     </SidebarProvider>
//   )
// }

// export default App