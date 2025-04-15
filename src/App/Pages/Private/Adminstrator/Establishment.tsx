import { useParams } from "react-router-dom";
import AdministratorLayout from "./AdministratorLayout"
import { useSelector } from "react-redux";
import { RootState } from "../../../../Redux/store";
import { ScanService } from "../../../Infreaestructure/services/scan.service";
import { useEffect, useState } from "react";
import { IScanByEstablishment } from "../../../Core/application/dto/scan/get-scan-establishment.dto";
import EstablishemtRecordsTable from "../../../../Components/Molecules/Tables/EstablishemtRecordsTable";

function Establishment() {
    const { id } = useParams(); 
    const token = useSelector((state: RootState) => state.auth.token);
    const baseUrl = import.meta.env.VITE_BACK_HOST;
    if (!token || !id) return;
  
    const useScanService = new ScanService(baseUrl, token);
    
    const [records, setRecords] = useState<IScanByEstablishment[]>([])
  
    useEffect(()=>{
      const getRecords = async()=>{
        setRecords(await useScanService.getByEstablishmentId('scan/establishment',id))
      }
      getRecords()
    },[])

  return (
    <AdministratorLayout>
        <h1 className="text-5xl text-center mb-8">Historial de registros</h1>

        <EstablishemtRecordsTable data={records}/>
    </AdministratorLayout>
  )
}

export default Establishment