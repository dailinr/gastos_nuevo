
import { BrowserRouter, Routes, Route } from "react-router-dom"
import { Dashboard } from "./Pages/Dashboard"
import { Layout } from "./Layouts/Layout"
import { TableContainer } from "./components/TableContainer"

export default function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}> 
          <Route path='/' element={<Dashboard />} index />
          {/* <Route path='/home' element={<Dashboard />} /> */}
          <Route path='/ingresos' element={<TableContainer />} />
          <Route path='/gastos' element={<TableContainer />} />
        </Route>


      </Routes>

    </BrowserRouter>
  )
}