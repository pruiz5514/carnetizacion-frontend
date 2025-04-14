import { useEffect, useState } from 'react'
import EstablishmentLayout from './EstablishmentLayout'
import { useNavigate, useParams } from 'react-router-dom';
import { StudentService } from '../../../Infreaestructure/services/student.service';
import { IStudentById } from '../../../Core/application/dto/student/get-student-byId.dto';
import { useSelector } from 'react-redux';
import { RootState } from '../../../../Redux/store';
import { ScanService } from '../../../Infreaestructure/services/scan.service';

export default function ApplyDiscount() {
  const { id } = useParams(); 
  const [student, setStudent] = useState <IStudentById | null>(null);

  const token = useSelector((state: RootState) => state.auth.token);
  const establishmentId = useSelector((state: RootState) => state.auth.id)
  const baseUrl = import.meta.env.VITE_BACK_HOST;
  if (!token) return;

  const useStudentService = new StudentService(baseUrl, token);
  const useScanService = new ScanService(baseUrl, token);

  const navigate = useNavigate();

  useEffect(()=>{
    const getStudent = async()=>{
        if(!id) return
        setStudent(await useStudentService.getStudentById('student', id))
    }
    getStudent()
  },[])

  const createScanRegister = async()=>{
    console.log(student?.id)
    console.log(establishmentId)
    if(!student?.id || !establishmentId) return
    const newScan = {
        student_id: student?.id,
        establishment_id: establishmentId,
        discount_applied: true,
    }
    await useScanService.scan('scan',newScan)
    navigate('/establishment/dashboard')
  }

  return (
    <EstablishmentLayout>
        <section className='w-full flex justify-center py-7 px-6'>
            {
                !student ? <p>No se encontro el estudiante</p> :
                <div className='w-full min-w-[300px] max-w-[700px] px-6 py-8 border border-solid border-lightGray rounded-lg flex flex-col gap-5'>
                    <h3 className="text-center text-3xl font-bold">{student?.fullname}</h3>
                    <div className="text-lg flex flex-col gap-2">
                        <p> <span className='font-bold'>Correo electronico:</span> {student?.email}</p>
                        <p> <span className='font-bold'>Estado del estudiante: </span>{student?.active ? 'Activo' : 'Inctivo'}</p>
                    </div>
                    <div className="flex gap-5 w-full justify-center ">
                        <button onClick={()=>createScanRegister()} className="bg-softElectricBlue text-white px-3 py-2 rounded-lg cursor-pointer">Aplicar descuento</button>
                        <button onClick={()=>navigate('/establishment/dashboard')} className="bg-warningRed text-white px-3 py-2 rounded-lg cursor-pointer">Cancelar</button>
                    </div>
                </div>
            }
            
        </section>
    </EstablishmentLayout>
  )
}
