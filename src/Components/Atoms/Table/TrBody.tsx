interface ITrTrBodyProps{
    children: React.ReactNode
}

const TrBody: React.FC<ITrTrBodyProps> = ({children}) => {
  return (
    <tr className="w-full border-b">
        {children}
    </tr>
  )
}

export default TrBody