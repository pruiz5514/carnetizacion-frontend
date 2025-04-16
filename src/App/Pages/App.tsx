import { Route, Routes } from "react-router-dom"
import Login from "./Public/Login"
import ProtectedRoute from "./ProtectedRoute"
import EstablishmentDashboard from "./Private/Establishment/EstablishmentDashboard"
import ApplyDiscount from "./Private/Establishment/ApplyDiscount"
import EstablishmentRecords from "./Private/Establishment/EstablishmentRecords"
import AdministratorEstablishments from "./Private/Adminstrator/AdministratorEstablishments"
import Establishment from "./Private/Adminstrator/Establishment"
import AdminstratorStudents from "./Private/Adminstrator/AdminstratorStudents"
import StudentRecords from "./Private/Adminstrator/StudentRecords"

function App() {
  return (
   <Routes>
      <Route path='/' element={<Login/>}/>

      <Route element={<ProtectedRoute/>}>
        <Route path="/administrator/establishments" element={<AdministratorEstablishments/>}/>
        <Route path="/establishment/dashboard" element={<EstablishmentDashboard/>}/>
        <Route path="apply-discount/:id" element={<ApplyDiscount/>}/>
        <Route path="/establishment/records" element={<EstablishmentRecords/>}/>
        <Route path="/administrator/establishments/:id" element={<Establishment/>}/>
        <Route path="/administrator/students" element={<AdminstratorStudents/>}/>
        <Route path="/administrator/students/:id" element={<StudentRecords/>}/>
      </Route>
   </Routes>
  )
}

export default App
