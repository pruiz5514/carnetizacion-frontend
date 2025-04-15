interface ITrTrHeadProps{
    children: React.ReactNode
}

const TrHead: React.FC<ITrTrHeadProps> = ({children}) => {
  return (
    <tr className="w-full border-b-2">
        {children}
    </tr>
  )
}

export default TrHead