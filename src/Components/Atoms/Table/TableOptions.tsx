import Button from "../Button"

interface ITableOptionsProps{
  openModal: ()=>void
  deleteEstablishment: (id:string)=>void
  id:string
}

const TableOptions:React.FC<ITableOptionsProps> = ({openModal, deleteEstablishment,id}) => {
  return (
    <div className="flex gap-3">
        <button className="bg-softElectricBlue text-white px-3 py-2 rounded-lg cursor-pointer">Ver más</button>
        <Button onClick={openModal}>Editar</Button>
        <button onClick={()=>deleteEstablishment(id)} className="bg-warningRed text-white px-3 py-2 rounded-lg cursor-pointer">Eliminar</button>
    </div>
  )
}

export default TableOptions