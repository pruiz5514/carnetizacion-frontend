import Button from "../Button"

interface ITableOptionsProps{
  openModal: ()=>void
}

const TableOptions:React.FC<ITableOptionsProps> = ({openModal}) => {
  return (
    <div className="flex gap-3">
        <button className="bg-softElectricBlue text-white px-3 py-2 rounded-lg cursor-pointer">Ver más</button>
        <Button onClick={openModal}>Editar</Button>
        <button className="bg-warningRed text-white px-3 py-2 rounded-lg cursor-pointer">Ver más</button>
    </div>
  )
}

export default TableOptions