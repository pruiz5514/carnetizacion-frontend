import { Link } from "react-router-dom"
import Button from "../Button"

interface ITableOptionsProps{
  openModal: ()=>void
  deleteEstablishment: (id:string)=>void
  link:string
  id:string
}

const TableOptions:React.FC<ITableOptionsProps> = ({openModal, deleteEstablishment,id,link}) => {
  return (
    <div className="flex gap-3">
        <Link to={`${link}/${id}`}><button className="bg-softElectricBlue text-white px-3 py-2 rounded-lg cursor-pointer">Ver más</button></Link>
        <Button onClick={openModal}>Editar</Button>
        <button onClick={()=>deleteEstablishment(id)} className="bg-warningRed text-white px-3 py-2 rounded-lg cursor-pointer">Eliminar</button>
    </div>
  )
}

export default TableOptions