import { Outlet, useLocation } from "react-router-dom" 
import { SidebarProvider } from "@/components/ui/sidebar"
import { AppSidebar } from "@/components/AppSidebar"
import { Header } from "@/components/Header";
import { useMemo } from "react";

export const Layout = () => {

  const {pathname} = useLocation();
  const isHome = useMemo(() => pathname === '/', [pathname]);

  return (
    <SidebarProvider>
    
      <AppSidebar/>

      <section className="flex flex-col w-full h-screen py-5 px-5 md:pl-2 md:pr-6 gap-4 ">
       
        <Header section={isHome ? 'home' : ''} /> 
        <Outlet /> 
        
      </section>

    </SidebarProvider>
  )
}