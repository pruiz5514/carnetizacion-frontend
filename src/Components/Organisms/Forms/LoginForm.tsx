import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'
import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'
import { LoginService } from '../../../App/Infreaestructure/services/login.service'
import { ILogin } from '../../../App/Core/application/dto/login/login.dto'
import FormField from '../../Molecules/FormField'
import Button from '../../Atoms/Button'
import { useDispatch } from 'react-redux'
import { login } from '../../../Redux/features/authSlice'
import Form from '../../Atoms/Form'


const LoginSchema = yup.object()
    .shape({
        email: yup
            .string().email('Debe ser un correo valido')
            .required('El correo electronico es requerido'),
        password: yup 
            .string()
            .required('La constraseña es requerida'),
    })

const useLoginService = new LoginService()

const LoginForm = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const handleLogin = async (data:ILogin) => {
        try{
            const response = await useLoginService.login('auth/login', data);
            dispatch(login({user: response.user.email, role: response.user.role ,token:response.token, id: response.user.id}))
            if(response.user.role === "Administrator"){
                navigate('/administrator/establishments')
            }else{
                navigate('/establishment/dashboard')
            }
        } catch(error){
            reset({ email: "", password: "" })
        }
        
    }

    const {
        control, 
        handleSubmit,
        reset,
        formState: {errors}
    } = useForm<ILogin>({
        mode: "onChange",
        reValidateMode: "onChange",
        resolver: yupResolver(LoginSchema)
    })

  return (
    <Form onSubmit={handleSubmit(handleLogin)}>
        <FormField<ILogin>
            type="email"
            label="Correo electronico" 
            name="email"
            placeholder="juan@fit4taal.com"
            error={errors.email}
            control={control}
        />
        <FormField<ILogin>
            type="password"
            label="Contraseña" 
            name="password"
            placeholder="********"
            error={errors.password}
            control={control}
        />

        <Button>Iniciar sesión</Button>

    </Form>
  )
}

export default LoginForm