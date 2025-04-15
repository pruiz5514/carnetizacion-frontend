interface InputProps extends React.InputHTMLAttributes<HTMLInputElement>{
    placeholder ?: string;
    type?: string; 
    name?: string;
    error?: string;
}

const Input = ({
    placeholder,
    type = "text",
    name, 
    error,
    ...props
}: InputProps) => {
  return (
    <div className="flex flex-col gap-2">
        <input
            type={type}
            name = {name}
            placeholder= {placeholder}
            {...props}
            className="w-full border border-solid border-lightGray h-12 px-4 rounded-lg focus:outline-none"
        />
        {error && <p className="text-warningRed">{error}</p>}
    </div>
  )
}

export default Input