import { IoClose } from 'react-icons/io5';
import Modal from '../../Atoms/Modal/Modal'
import UpdateEstablishmentForm from '../Forms/UpdateEstablishmentForm';
import { useEffect, useState } from 'react';
import { IEstablishments } from '../../../App/Core/application/dto/establishment/get-establishments.dto';
import { useSelector } from 'react-redux';
import { RootState } from '../../../Redux/store';
import { EstablismentService } from '../../../App/Infreaestructure/services/establishment.service';

interface IUpdateEstablishmentsModalProps{
    closeModal: ()=> void;
    establishmentId: string
    getEstablishments: ()=> void
}


const UpdateEstablishmentModal:React.FC<IUpdateEstablishmentsModalProps> = ({closeModal, establishmentId, getEstablishments}) => {
  const token = useSelector((state: RootState) => state.auth.token);
  const baseUrl = import.meta.env.VITE_BACK_HOST;
  if (!token) return;
  const useEstablishmentService = new EstablismentService(baseUrl,token)

    const [establishment, setEstablishment] = useState<IEstablishments | null>(null)
    

    useEffect(() => {
        const getEstablishmentById = async () => {
            const data = await useEstablishmentService.getEstablishmentById('establishment', establishmentId);
            setEstablishment(data);
        };
        getEstablishmentById();
    }, []);

      if(!establishment) return

      const {id, role_id, createdAt, ...data} = establishment
  return (
    <Modal>
        <button onClick={closeModal} className="absolute top-2 right-2 text-4xl cursor-pointer"><IoClose /></button>
        <UpdateEstablishmentForm getEstablishments={getEstablishments} closeModal={closeModal} establishment={data} establishmentId={establishment.id}/>
    </Modal>
  )
}

export default UpdateEstablishmentModal