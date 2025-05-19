import { Calendar, Home, Inbox, Settings } from "lucide-react"

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuAction,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarTrigger,
} from "@/components/ui/sidebar"

// Menu items.
const items = [
  {
    title: "Dashboard",
    url: "#",
    icon: Home,
  },
  {
    title: "Ingresos",
    url: "#",
    icon: Inbox,
  },
  {
    title: "Gastos",
    url: "#",
    icon: Calendar,
  },
  {
    title: "Configuracion",
    url: "#",
    icon: Settings,
  },
]

export function AppSidebar() {
  return (
    <Sidebar collapsible="icon" className="h-full p-4 ">
      
      <SidebarContent className="rounded-lg shadow p-2">
        <SidebarTrigger />
        <SidebarGroup className="group-data-[collapsible=icon]:hidden ">
          <SidebarGroupLabel>Application</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {items.map((item) => (
                <SidebarMenuItem key={item.title} >
                  <SidebarMenuButton asChild >
                    <a href={item.url} className="py-5">
                      <item.icon />
                      <span>{item.title}</span>
                    </a>
                  </SidebarMenuButton>
                   <SidebarMenuAction className="peer-data-[active=true]/menu-button:opacity-100" />
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  )
}
