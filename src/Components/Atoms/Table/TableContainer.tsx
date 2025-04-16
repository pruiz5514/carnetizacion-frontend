interface ITableContainerProps{
    children: React.ReactNode
}

const TableContainer:React.FC<ITableContainerProps> = ({children}) => {
  return (
    <div className="overflow-x-auto pb-8">
        {children}
    </div>
  )
}

export default TableContainer