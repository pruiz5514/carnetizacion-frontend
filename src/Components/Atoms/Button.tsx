interface IButtonProps{
    children: React.ReactNode
    onClick?: ()=> void
    width?: string
}

const Button:React.FC<IButtonProps> = ({children, onClick, width}) => {
  return (
    <button onClick={(event) => {
      event.stopPropagation();
      if (onClick) onClick(); 
    }}  className= {`bg-orange text-white px-3 py-2 rounded-lg cursor-pointer ${width}`}> {children} </button>
  )
}

export default Button