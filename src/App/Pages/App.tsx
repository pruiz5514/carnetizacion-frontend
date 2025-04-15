import { Route, Routes } from "react-router-dom"
import Login from "./Public/Login"
import ProtectedRoute from "./ProtectedRoute"
import AdministratorDashboard from "./Private/Adminstrator/AdministratorDashboard"
import EstablishmentDashboard from "./Private/Establishment/EstablishmentDashboard"
import ApplyDiscount from "./Private/Establishment/ApplyDiscount"
import EstablishmentRecords from "./Private/Establishment/EstablishmentRecords"

function App() {
  return (
   <Routes>
      <Route path='/' element={<Login/>}/>

      <Route element={<ProtectedRoute/>}>
        <Route path="/administrator/dashboard" element={<AdministratorDashboard/>}/>
        <Route path="/establishment/dashboard" element={<EstablishmentDashboard/>}/>
        <Route path="apply-discount/:id" element={<ApplyDiscount/>}/>
        <Route path="/establishment/records" element={<EstablishmentRecords/>}/>
      </Route>
   </Routes>
  )
}

export default App
