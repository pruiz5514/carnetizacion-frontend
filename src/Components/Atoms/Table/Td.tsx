interface ITdProps{
    children: React.ReactNode
}

const Td: React.FC<ITdProps> = ({children}) => {
  return (
    <td className="p-3 text-lg text-gray-700">
        {children}
    </td>
  )
}

export default Td