import { IoClose } from 'react-icons/io5';
import Modal from '../../Atoms/Modal/Modal'
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../../Redux/store';
import UpdateStudentForm from '../Forms/UpdateStudentForm';
import { StudentService } from '../../../App/Infreaestructure/services/student.service';
import { IStudents } from '../../../App/Core/application/dto/student/get-students.dto';

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

    const [student, setStudent] = useState<IStudents | null>(null)
    

    useEffect(() => {
        const getStudentById = async () => {
            const data = await useStudentService.getStudentById('student/id', studentId);
            setStudent(data);
        };
        getStudentById();
    }, []);

      if(!student) return

  return (
    <Modal>
        <button onClick={closeModal} className="absolute top-2 right-2 text-4xl cursor-pointer"><IoClose /></button>
        <UpdateStudentForm getStudents={getStudents} closeModal={closeModal} student={student} studentId={student.id}/>
    </Modal>
  )
}

export default UpdateStudentModal