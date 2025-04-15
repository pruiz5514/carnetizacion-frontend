interface ITableContainerProps{
    children: React.ReactNode
}

const TableContainer:React.FC<ITableContainerProps> = ({children}) => {
  return (
    <div className="hidden md:block overflow-x-auto">
        {children}
    </div>
  )
}

export default TableContainer