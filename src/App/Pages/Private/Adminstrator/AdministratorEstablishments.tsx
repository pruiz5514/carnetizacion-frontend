import { useSelector } from "react-redux";
import EstablishmentsTable from "../../../../Components/Molecules/Tables/EstablishmentsTable"
import AdministratorLayout from "./AdministratorLayout"
import { RootState } from "../../../../Redux/store";
import { EstablismentService } from "../../../Infreaestructure/services/establishment.service";
import { useEffect, useState } from "react";
import { IEstablishments } from "../../../Core/application/dto/establishment/get-establishments.dto";
import EstablismentModal from "../../../../Components/Organisms/Modals/EstablismentModal";

function AdministratorEstablishments() {
  const token = useSelector((state: RootState) => state.auth.token);
  const establishmentId = useSelector((state: RootState) => state.auth.id)
  const baseUrl = import.meta.env.VITE_BACK_HOST;
  if (!token || !establishmentId) return;

  const useEstablishmentService = new EstablismentService(baseUrl, token)

  const [establishments, setEstablishments] = useState<IEstablishments[]>([])

  const [openModal, setOpenModal] = useState(false)

  const deleteEstablishment = async(id:string)=>{
    await useEstablishmentService.deleteEstablishment('establishment',id)
  }

  useEffect(()=>{
    const getEstablishments = async()=>{
        setEstablishments( await useEstablishmentService.getEstablisments('establishment'));
    }
    getEstablishments()
  },[])

  return (
    <AdministratorLayout>
      <h1 className="text-5xl text-center mb-8">Establecimientos</h1>

      <div className="w-full flex justify-center mb-8">
        <button onClick={()=>setOpenModal(true)} className="bg-orange text-white px-3 py-2 rounded-lg cursor-pointer text-2xl">Agregar establecimiento</button>
      </div>

      {openModal && <EstablismentModal closeModal={()=>setOpenModal(false)}/>}

      <EstablishmentsTable deleteEstablishment={(id)=>deleteEstablishment(id)} data={establishments}/>
    </AdministratorLayout>
  )
}

export default AdministratorEstablishments