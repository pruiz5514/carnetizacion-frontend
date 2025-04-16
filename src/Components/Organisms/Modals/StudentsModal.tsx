import { IoClose } from 'react-icons/io5';
import Modal from '../../Atoms/Modal/Modal'
import StudentForms from '../Forms/StudentForm';

interface IStudentsModalProps{
    closeModal: ()=> void;
    getStudents: ()=> void
}

const StudentModal:React.FC<IStudentsModalProps> = ({closeModal, getStudents}) => {
  return (
    <Modal>
        <button onClick={closeModal} className="absolute top-2 right-2 text-4xl cursor-pointer"><IoClose /></button>
        <StudentForms getStudents={getStudents} closeModal={closeModal}/>
    </Modal>
  )
}

export default StudentModal