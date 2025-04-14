import { Control, Controller, FieldError, FieldValues, Path } from "react-hook-form";
import Input from "../Atoms/Input";


interface IPropsFormField<T extends FieldValues> {
    label: string;
    type: string;
    name: Path<T>;
    control?: Control<T>;
    error?: FieldError ;
    id?: string;
    placeholder?: string;
  }


  const FormField = <T extends FieldValues>({
    label,
    type,
    name,
    control,
    error,
    id,
    placeholder,
  }: IPropsFormField<T>) => {
    return (
      <div className="flex flex-col gap-2">
          <label htmlFor={id || label.toLowerCase()} > {label}</label>
  
          <Controller
            name={name}
            control={control}
            render={({ field }) => (
                <Input
                    id={id || label.toLowerCase()}
                    type={type}
                    error={error?.message}
                    placeholder={placeholder || `Ingrese su ${label.toLowerCase()}`}
                    {...field}
                />
            )}
        />
      </div>
      
    )
  }

export default FormField