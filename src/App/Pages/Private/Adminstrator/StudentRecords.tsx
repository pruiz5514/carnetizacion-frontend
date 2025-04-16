import { useParams } from "react-router-dom";
import AdministratorLayout from "./AdministratorLayout"
import { useSelector } from "react-redux";
import { RootState } from "../../../../Redux/store";
import { ScanService } from "../../../Infreaestructure/services/scan.service";
import { useEffect, useState } from "react";
import { IScanStudents } from "../../../Core/application/dto/scan/get-scan-student.dto";
import StudentsRecordsTable from "../../../../Components/Molecules/Tables/StudentsRecordsTable";

function StudentRecords() {
    const { id } = useParams(); 
    const token = useSelector((state: RootState) => state.auth.token);
    const baseUrl = import.meta.env.VITE_BACK_HOST;
    if (!token || !id) return;
  
    const useScanService = new ScanService(baseUrl, token);
    
    const [records, setRecords] = useState<IScanStudents[]>([])
  
    useEffect(()=>{
      const getRecords = async()=>{
        setRecords(await useScanService.getByStudentId('scan/student',id))
      }
      getRecords()
    },[])

  return (
    <AdministratorLayout>
        <h1 className="text-5xl text-center mb-8">Historial de registros</h1>

        <StudentsRecordsTable data={records}/>
    </AdministratorLayout>
  )
}

export default StudentRecords