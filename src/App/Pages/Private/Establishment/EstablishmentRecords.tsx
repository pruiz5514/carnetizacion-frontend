import { useEffect, useState } from "react";
import EstablishemtRecordsTable from "../../../../Components/Molecules/Tables/EstablishemtRecordsTable";
import EstablishmentLayout from "./EstablishmentLayout";
import { IScanByEstablishment } from "../../../Core/application/dto/scan/get-scan-establishment.dto";
import { useSelector } from "react-redux";
import { RootState } from "../../../../Redux/store";
import { ScanService } from "../../../Infreaestructure/services/scan.service";

export default function EstablishmentRegister() {
  const token = useSelector((state: RootState) => state.auth.token);
  const establishmentId = useSelector((state: RootState) => state.auth.id)
  const baseUrl = import.meta.env.VITE_BACK_HOST;
  if (!token || !establishmentId) return;

  const useScanService = new ScanService(baseUrl, token);
  
  const [records, setRecords] = useState<IScanByEstablishment[]>([])

  useEffect(()=>{
    const getRecords = async()=>{
      setRecords(await useScanService.getByEstablishmentId('scan/establishment',establishmentId))
    }
    getRecords()
  },[])

  return (
    <EstablishmentLayout>
        <h1 className="text-5xl text-center mb-8">Historial de registros</h1>

        <EstablishemtRecordsTable data={records}/>

    </EstablishmentLayout>
  )
}
