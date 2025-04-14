interface IFormProps{
    children: React.ReactNode;
    onSubmit: (event: React.FormEvent<HTMLFormElement>)=> void
    id? : string
}

const Form:React.FC<IFormProps> = ({children, onSubmit, id}) => {
  return (
    <form className="w-full flex flex-col gap-5" onSubmit={onSubmit} id={id}>
        {children}
    </form>
  )
}

export default Form