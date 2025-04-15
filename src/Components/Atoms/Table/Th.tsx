interface IThProps{
    children: React.ReactNode
}

const Th: React.FC<IThProps> = ({children}) => {
  return (
    <th className="p-3 text-xl font-semibold tracking-wide text-left" >
        {children}
    </th>
  )
}

export default Th