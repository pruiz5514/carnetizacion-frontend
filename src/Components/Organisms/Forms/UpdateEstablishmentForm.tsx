import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'
import { useForm } from 'react-hook-form'
import Form from '../../Atoms/Form'
import FormField from '../../Molecules/FormField'
import Button from '../../Atoms/Button'
import { EstablismentService } from '../../../App/Infreaestructure/services/establishment.service'
import { useSelector } from 'react-redux'
import { RootState } from '../../../Redux/store'
import { IPutEstablishments } from '../../../App/Core/application/dto/establishment/put-establishment.dto'

const UpdateEstablishmentSchema = yup.object()
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
    })


interface IEstablishmentFormProps{
    closeModal: ()=> void
    establishment: IPutEstablishments
    establishmentId: string
    getEstablishments: ()=> void
}

const UpdateEstablishmentForm:React.FC<IEstablishmentFormProps> = ({closeModal, establishment, establishmentId, getEstablishments}) => {
    const token = useSelector((state: RootState) => state.auth.token);
    console.log(token)
    const baseUrl = import.meta.env.VITE_BACK_HOST;
    if (!token) return;
    const useEstablishmentService = new EstablismentService(baseUrl,token)

    const handleUpdate = async (data:IPutEstablishments) => {
        try{
            const response = await useEstablishmentService.updateEstablishment('establishment',establishmentId, data);
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
        formState: {errors},
    } = useForm<IPutEstablishments>({
        mode: "onChange",
        reValidateMode: "onChange",
        resolver: yupResolver(UpdateEstablishmentSchema),
        defaultValues: establishment
    })
  return (
    <Form onSubmit={handleSubmit(handleUpdate)}>
        <FormField<IPutEstablishments>
            type="text"
            label="Nombre del encargado" 
            name="fullname"
            placeholder="Juan Rojas"
            error={errors.fullname}
            control={control}
        />
        <FormField<IPutEstablishments>
            type="email"
            label="Correo electronico" 
            name="email"
            placeholder="juan@getfit.com"
            error={errors.email}
            control={control}
        />
         <FormField<IPutEstablishments>
            type="number"
            label="Número telefonico" 
            name="phone_number"
            placeholder="612345678"
            error={errors.phone_number}
            control={control}
        />
        <FormField<IPutEstablishments>
            type="text"
            label="Nombre del estableciemiento" 
            name="establishment_name"
            placeholder="Fit4taal"
            error={errors.establishment_name}
            control={control}
        />
        <FormField<IPutEstablishments>
            type="text"
            label="Dirección del estableciemiento" 
            name="establishment_address"
            placeholder="Weena 505, Office 30.40, 3013 AL Rotterdam"
            error={errors.establishment_address}
            control={control}
        />

        <Button>Editar estableciemiento</Button>

    </Form>
  )
}

export default UpdateEstablishmentForm