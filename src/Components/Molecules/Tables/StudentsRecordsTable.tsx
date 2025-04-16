
import TableContainer from '../../Atoms/Table/TableContainer'
import Table from '../../Atoms/Table/Table'
import Thead from '../../Atoms/Table/Thead'
import Th from '../../Atoms/Table/Th'
import Tbody from '../../Atoms/Table/Tbody'
import Td from '../../Atoms/Table/Td'
import TrHead from '../../Atoms/Table/TrHead'
import TrBody from '../../Atoms/Table/TrBody'
import { IScanStudents } from '../../../App/Core/application/dto/scan/get-scan-student.dto'

interface IStudentsRecordsTableProps{
  data: IScanStudents[]
}

const StudentsRecordsTable:React.FC<IStudentsRecordsTableProps> = ({data}) => {
  return (
    <TableContainer>
        <Table>
            <Thead>
              <TrHead>
                <Th>Establecimiento</Th>
                <Th>Email</Th>
                <Th>Dirección</Th>
                <Th>Fecha de compra</Th>
              </TrHead>
            </Thead>
            <Tbody>
              {
                data.map((records)=>(
                 <TrBody key={records.id}>
                    <Td>{records.establishment.establishment_name}</Td>
                    <Td>{records.establishment.email}</Td>
                    <Td>{records.establishment.establishment_address}</Td>
                    <Td>{new Date(records.scanned_at).toLocaleString("es-CO", {
                      dateStyle: "medium",
                      timeStyle: "short"
                    })}</Td>
                  </TrBody>
                ))
              }
              
            </Tbody>
        </Table>
    </TableContainer>
  )
}

export default StudentsRecordsTable