
import TableContainer from '../../Atoms/Table/TableContainer'
import Table from '../../Atoms/Table/Table'
import Thead from '../../Atoms/Table/Thead'
import Th from '../../Atoms/Table/Th'
import Tbody from '../../Atoms/Table/Tbody'
import Td from '../../Atoms/Table/Td'
import TrHead from '../../Atoms/Table/TrHead'
import TrBody from '../../Atoms/Table/TrBody'
import { IScanByEstablishment } from '../../../App/Core/application/dto/scan/get-scan-establishment.dto'

interface IEstablishemtRecordsTableProps{
  data: IScanByEstablishment[]
}

const EstablishemtRecordsTable:React.FC<IEstablishemtRecordsTableProps> = ({data}) => {
  return (
    <TableContainer>
        <Table>
            <Thead>
              <TrHead>
                <Th>Estudiante</Th>
                <Th>Email</Th>
                <Th>Fecha</Th>
              </TrHead>
            </Thead>
            <Tbody>
              {
                data.map((records)=>(
                 <TrBody key={records.id}>
                    <Td>{records.student.fullname}</Td>
                    <Td>{records.student.email}</Td>
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

export default EstablishemtRecordsTable