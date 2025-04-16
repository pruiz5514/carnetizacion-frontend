import { IoClose } from 'react-icons/io5';
import Modal from '../../Atoms/Modal/Modal'
import UpdateEstablishmentForm from '../Forms/UpdateEstablishmentForm';
import { useEffect, useState } from 'react';
import { IEstablishments } from '../../../App/Core/application/dto/establishment/get-establishments.dto';
import { useSelector } from 'react-redux';
import { RootState } from '../../../Redux/store';
import { EstablismentService } from '../../../App/Infreaestructure/services/establishment.service';
import UpdateStudentForm from '../Forms/UpdateStudentForm';
import { StudentService } from '../../../App/Infreaestructure/services/student.service';

interface IUpdateStudentModalProps{
    closeModal: ()=> void;
    studentId: string
    getStudents: ()=> void
}


const UpdateStudentModal:React.FC<IUpdateStudentModalProps> = ({closeModal, studentId, getStudents}) => {
  const token = useSelector((state: RootState) => state.auth.token);
  const baseUrl = import.meta.env.VITE_BACK_HOST;
  if (!token) return;
  const useStudentService = new StudentService(baseUrl,token)

    const [establishment, setEstablishment] = useState<IEstablishments | null>(null)
    

    useEffect(() => {
        const getEstablishmentById = async () => {
            const data = await useEstablishmentService.getEstablishmentById('student', studentId);
            setEstablishment(data);
        };
        getEstablishmentById();
    }, []);

      if(!establishment) return

      const {id, role_id, createdAt, ...data} = establishment
  return (
    <Modal>
        <button onClick={closeModal} className="absolute top-2 right-2 text-4xl cursor-pointer"><IoClose /></button>
        <UpdateStudentForm getStudents={getStudents} closeModal={closeModal} student={data} establishmentId={establishment.id}/>
    </Modal>
  )
}

export default UpdateStudentModal