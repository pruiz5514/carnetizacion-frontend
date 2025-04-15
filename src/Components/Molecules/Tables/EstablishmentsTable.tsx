
import TableContainer from '../../Atoms/Table/TableContainer'
import Table from '../../Atoms/Table/Table'
import Thead from '../../Atoms/Table/Thead'
import Th from '../../Atoms/Table/Th'
import Tbody from '../../Atoms/Table/Tbody'
import Td from '../../Atoms/Table/Td'
import TrHead from '../../Atoms/Table/TrHead'
import TrBody from '../../Atoms/Table/TrBody'
import { IEstablishments } from '../../../App/Core/application/dto/establishment/get-establishments.dto'
import TableOptions from '../../Atoms/Table/TableOptions'
import { useState } from 'react'
import UpdateEstablishmentModal from '../../Organisms/Modals/UpdateEstablishmentModal'

interface IEstablishmentsTableProps{
    data: IEstablishments[]
    deleteEstablishment: (id:string)=>void
    getEstablishments: ()=> void
}

const EstablishmentsTable:React.FC<IEstablishmentsTableProps> = ({data, deleteEstablishment, getEstablishments}) => {

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
                <Th>Teléfono</Th>
                <Th>Dirección</Th>
                <Th>Encargado</Th>
                <Th>Fecha de ingreso</Th>
                <Th>Opciones</Th>
              </TrHead>
            </Thead>
            <Tbody>
              {
                data.map((establishment)=>(
                 <TrBody key={establishment.id}>
                    <Td>{establishment.establishment_name}</Td>
                    <Td>{establishment.email}</Td>
                    <Td>{establishment.phone_number}</Td>
                    <Td>{establishment.establishment_address}</Td>
                    <Td>{establishment.fullname}</Td>
                    <Td>
                        {new Date(establishment.createdAt).toLocaleString("es-CO", {
                            dateStyle: "medium"
                        })}
                    </Td>
                    <Td><TableOptions deleteEstablishment={(id)=>deleteEstablishment(id)} id={establishment.id} openModal={()=>openModal(establishment.id)}/> </Td>
                  </TrBody>
                ))
              }
            </Tbody>
        </Table>

        {
          updateModal && <UpdateEstablishmentModal getEstablishments={getEstablishments} establishmentId={idSelected} closeModal={()=>setUpdateModal(false)}/>
        }
    </TableContainer>
  )
}

export default EstablishmentsTable