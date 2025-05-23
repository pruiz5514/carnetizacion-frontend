import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'
import { useForm } from 'react-hook-form'
import Form from '../../Atoms/Form'
import FormField from '../../Molecules/FormField'
import Button from '../../Atoms/Button'
import { useSelector } from 'react-redux'
import { RootState } from '../../../Redux/store'
import { IPostStudents } from '../../../App/Core/application/dto/student/post-student.dto'
import FormFiledSelect from '../../Molecules/FormFieldSelect'
import { StudentService } from '../../../App/Infreaestructure/services/student.service'



const StudentSchema = yup.object()
    .shape({
        fullname: yup
            .string().min(3, 'El nombre debe tener al menos 3 caracteres')
            .required('El nombre del encargado es requerido'),
        email: yup
            .string().email('Debe ser un correo valido')
            .required('El correo electronico es requerido'),
        qr_code : yup
            .string().min(5,"Debe tener al menos 5 caracteres")
            .required('El código es requerido'),
        active: yup
            .boolean().required('El estado es requerido')
    })


interface IStudentFormProps{
    closeModal: ()=> void
    getStudents: ()=> void
}

const StudentForms:React.FC<IStudentFormProps> = ({closeModal, getStudents}) => {
    const token = useSelector((state: RootState) => state.auth.token);
    const baseUrl = import.meta.env.VITE_BACK_HOST;
    if (!token) return;
    const useStudentService = new StudentService(baseUrl,token)

    const handleCreate = async (data:IPostStudents) => {
        try{
            const response = await useStudentService.postStudent('student', data);
            getStudents()
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
    } = useForm<IPostStudents>({
        mode: "onChange",
        reValidateMode: "onChange",
        resolver: yupResolver(StudentSchema)
    })

  return (
    <Form onSubmit={handleSubmit(handleCreate)}>
        <FormField<IPostStudents>
            type="text"
            label="Nombre del estudiante" 
            name="fullname"
            placeholder="Juan Rojas"
            error={errors.fullname}
            control={control}
        />
        <FormField<IPostStudents>
            type="email"
            label="Correo electronico" 
            name="email"
            placeholder="juan@fit4taal.com"
            error={errors.email}
            control={control}
        />
         <FormField<IPostStudents>
            type="text"
            label="Código QR" 
            name="qr_code"
            placeholder="612345678"
            error={errors.qr_code}
            control={control}
        />
        <FormFiledSelect<IPostStudents>
            label='Estado'
            name='active'
            error={errors.active}
            control={control}
        >
          <option value="" selected disabled>Estado</option>
          <option value={"true"} >Activo</option>
          <option value={"false"} >Inactivo</option>
        </FormFiledSelect>

        <Button>Crear estudiante</Button>

    </Form>
  )
}

export default StudentForms