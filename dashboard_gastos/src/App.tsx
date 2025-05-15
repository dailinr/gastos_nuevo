import { SidebarProvider} from "@/components/ui/sidebar"
import { AppSidebar } from "@/components/AppSidebar"
import { Dashboard } from "./components/Dashboard"


function App() {

  return (
    <SidebarProvider>
      <AppSidebar/>
      
      <Dashboard />
    </SidebarProvider>
  )
}

export default App