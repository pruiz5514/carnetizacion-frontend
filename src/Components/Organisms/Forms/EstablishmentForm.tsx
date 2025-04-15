import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'
import { useForm } from 'react-hook-form'
import Form from '../../Atoms/Form'
import FormField from '../../Molecules/FormField'
import Button from '../../Atoms/Button'
import { IPostEstablishmentsForm } from '../../../App/Core/application/dto/establishment/post-establishment.dto'
import { EstablismentService } from '../../../App/Infreaestructure/services/establishment.service'
import { useSelector } from 'react-redux'
import { RootState } from '../../../Redux/store'



const EstablishmentSchema = yup.object()
    .shape({
        fullname: yup
            .string().min(3, 'El nombre debe tener al menos 3 caracteres')
            .required('El nombre del encargado es requerido'),
        email: yup
            .string().email('Debe ser un correo valido')
            .required('El correo electronico es requerido'),
        phone_number: yup
            .number()
            .test(
                'len',
                'El número debe tener exactamente 9 dígitos',
                (value) => value !== undefined && value.toString().length === 9
            )
            .required('El número telefonico es requerido'),
        establishment_name: yup
            .string().min(3, 'El nombre del establecimiento debe tener al menos 3 caracteres')
            .required('El nombre del establecimiento es requerido'),
        establishment_address: yup
            .string().min(3, 'Digite una dirección válida.')
            .required('La dirección del establecimiento es requerida.'),
        password: yup 
            .string().min(3, 'La contraseña debe tener al menos 3 caracteres')
            .required('La constraseña es requerida'),
    })


interface IEstablishmentFormProps{
    closeModal: ()=> void
    getEstablishments: ()=> void
}

const EstablishmentForm:React.FC<IEstablishmentFormProps> = ({closeModal, getEstablishments}) => {
    const token = useSelector((state: RootState) => state.auth.token);
    const baseUrl = import.meta.env.VITE_BACK_HOST;
    if (!token) return;
    const useEstablishmentService = new EstablismentService(baseUrl,token)

    const handleCreate = async (data:IPostEstablishmentsForm) => {
        try{
            const establishment = {
                ...data,
                "role_id": 2
            }
            const response = await useEstablishmentService.postEstablishment('establishment', establishment);
            getEstablishments()
            closeModal()
            return response
        } catch(error){
            console.log(error)
        }
        
    }

    const {
        control, 
        handleSubmit,
        formState: {errors}
    } = useForm<IPostEstablishmentsForm>({
        mode: "onChange",
        reValidateMode: "onChange",
        resolver: yupResolver(EstablishmentSchema)
    })

  return (
    <Form onSubmit={handleSubmit(handleCreate)}>
        <FormField<IPostEstablishmentsForm>
            type="text"
            label="Nombre del encargado" 
            name="fullname"
            placeholder="Juan Rojas"
            error={errors.fullname}
            control={control}
        />
        <FormField<IPostEstablishmentsForm>
            type="email"
            label="Correo electronico" 
            name="email"
            placeholder="juan@getfit.com"
            error={errors.email}
            control={control}
        />
         <FormField<IPostEstablishmentsForm>
            type="number"
            label="Número telefonico" 
            name="phone_number"
            placeholder="612345678"
            error={errors.phone_number}
            control={control}
        />
        <FormField<IPostEstablishmentsForm>
            type="text"
            label="Nombre del estableciemiento" 
            name="establishment_name"
            placeholder="Fit4taal"
            error={errors.establishment_name}
            control={control}
        />
        <FormField<IPostEstablishmentsForm>
            type="text"
            label="Dirección del estableciemiento" 
            name="establishment_address"
            placeholder="Weena 505, Office 30.40, 3013 AL Rotterdam"
            error={errors.establishment_address}
            control={control}
        />
        <FormField<IPostEstablishmentsForm>
            type="password"
            label="Contraseña" 
            name="password"
            placeholder="********"
            error={errors.password}
            control={control}
        />

        <Button>Crear estableciemiento</Button>

    </Form>
  )
}

export default EstablishmentForm