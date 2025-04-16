import { useSelector } from 'react-redux';
import AdministratorLayout from './AdministratorLayout'
import { RootState } from '../../../../Redux/store';
import { StudentService } from '../../../Infreaestructure/services/student.service';
import { useEffect, useState } from 'react';
import { IStudents } from '../../../Core/application/dto/student/get-students.dto';
import StudentsTable from '../../../../Components/Molecules/Tables/StudentsTable';
import StudentModal from '../../../../Components/Organisms/Modals/StudentsModal';

function AdminstratorStudents() {
    const token = useSelector((state: RootState) => state.auth.token);
    const baseUrl = import.meta.env.VITE_BACK_HOST;
    if (!token) return;

    const useStudentServie = new StudentService(baseUrl, token);

    const [students, setStudents] = useState<IStudents[]>([]);
    const [openModal, setOpenModal] = useState(false)

    const getStudents = async()=>{
        setStudents(await useStudentServie.getAllStudents('student'))
    }

    const deleteStudent = async(id:string)=>{
        await useEstablishmentService.deleteEstablishment('establishment',id)
        setEstablishments(prev => prev.filter(est => est.id !== id));
      }
    

    useEffect(()=>{
        getStudents();
    },[])

  return (
    <AdministratorLayout>
        <h1 className="text-5xl text-center mb-8">Estudiantes</h1>

        <div className="w-full flex justify-center mb-8">
            <button onClick={()=>setOpenModal(true)} className="bg-orange text-white px-3 py-2 rounded-lg cursor-pointer text-2xl">Agregar estudiante</button>
        </div>

        {openModal && <StudentModal getStudents={getStudents} closeModal={()=>setOpenModal(false)}/>}

        <StudentsTable data={students}/>
    </AdministratorLayout>
  )
}

export default AdminstratorStudents