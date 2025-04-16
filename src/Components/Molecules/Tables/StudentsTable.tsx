import TableContainer from '../../Atoms/Table/TableContainer'
import Table from '../../Atoms/Table/Table'
import Thead from '../../Atoms/Table/Thead'
import TrHead from '../../Atoms/Table/TrHead'
import Th from '../../Atoms/Table/Th'
import Tbody from '../../Atoms/Table/Tbody'
import TrBody from '../../Atoms/Table/TrBody'
import Td from '../../Atoms/Table/Td'
import { IStudents } from '../../../App/Core/application/dto/student/get-students.dto'

interface IStudentsTableProps{
    data: IStudents[]
}

const StudentsTable: React.FC<IStudentsTableProps> = ({data}) => {
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
                    {/* <Td><TableOptions deleteEstablishment={(id)=>deleteEstablishment(id)} id={establishment.id} openModal={()=>openModal(establishment.id)}/> </Td> */}
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