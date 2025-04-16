interface SelectProps{
    children: React.ReactNode;
    id?: string;
    name?:string;
    onChange?: (event: React.ChangeEvent<HTMLSelectElement>) => void;
    value?: string;
    error?:  string;
}


const Select:React.FC<SelectProps> = ({children, id, name, onChange, value}) => {
  return (
    <select className="w-full border border-solid border-lightGray h-12 px-4 rounded-lg focus:outline-none" name={name} id={id} onChange={onChange} value={value} required>
        {children}
    </select>
  )
}

export default Select