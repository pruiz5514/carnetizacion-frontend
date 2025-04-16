import TableContainer from '../../Atoms/Table/TableContainer'
import Table from '../../Atoms/Table/Table'
import Thead from '../../Atoms/Table/Thead'
import TrHead from '../../Atoms/Table/TrHead'
import Th from '../../Atoms/Table/Th'
import Tbody from '../../Atoms/Table/Tbody'
import TrBody from '../../Atoms/Table/TrBody'
import Td from '../../Atoms/Table/Td'
import { IStudents } from '../../../App/Core/application/dto/student/get-students.dto'
import TableOptions from '../../Atoms/Table/TableOptions'
import { useState } from 'react'

interface IStudentsTableProps{
    data: IStudents[]
    deleteStudent: (id:string)=>void
}

const StudentsTable: React.FC<IStudentsTableProps> = ({data,deleteStudent}) => {
    const [updateModal, setUpdateModal] = useState(false);
  
    const [idSelected, setIdSelected] = useState('');
  
    const openModal = (id:string)=>{
      setIdSelected(id)
      setUpdateModal(true)
    }
  return (
    <TableContainer>
        <Table>
            <Thead>
            <TrHead>
                <Th>Nombre</Th>
                <Th>Email</Th>
                <Th>Código QR</Th>
                <Th>Estado</Th>
                <Th>Fecha de ingreso</Th>
                <Th>Opciones</Th>
            </TrHead>
            </Thead>
            <Tbody>
            {
                data.map((student)=>(
                <TrBody key={student.id}>
                    <Td>{student.fullname}</Td>
                    <Td>{student.email}</Td>
                    <Td>{student.email}</Td>
                    <Td>{student.active ? 'Activo' : 'Inactivo'} </Td>
                    <Td>
                        {new Date(student.createdAt).toLocaleString("es-CO", {
                            dateStyle: "medium"
                        })}
                    </Td>
                    <Td><TableOptions deleteEstablishment={(id)=>deleteStudent(id)} id={student.id} openModal={()=>openModal(student.id)}/> </Td>
                </TrBody>
                ))
            }
            </Tbody>
        </Table>

        {/* {
        updateModal && <UpdateEstablishmentModal getEstablishments={getEstablishments} establishmentId={idSelected} closeModal={()=>setUpdateModal(false)}/>
        } */}
    </TableContainer>
  )
}

export default StudentsTable