import { Link, useNavigate } from "react-router-dom"
import { useDispatch } from "react-redux"
import { logout } from "../../../../Redux/features/authSlice";
import { persistor } from "../../../../Redux/store";
import { Header } from "../../../../Components/Organisms/Header";
import Button from "../../../../Components/Atoms/Button";



interface IEstablishmentLayoutProps {
    children: React.ReactNode
}

const EstablishmentLayout:React.FC<IEstablishmentLayoutProps> = ({children}) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const logOut = () => {
    dispatch(logout());
    persistor.purge()
    navigate('/')
  }

  return (
    <>
        <Header linkLogo="/establishment/dashboard">
            <li><Link to='/establishment/dashboard'>Inicio</Link></li>
            <li><Link to='/establishment/records'>Registros</Link></li>
            <li><Button onClick={logOut} >Cerrar sesión</Button></li>
        </Header>
        <main className="w-full min-h-[100vh] flex justify-center">
            <div className="w-full max-w-[1600px] px-4 mt-[120px]">
                {children}
            </div>
        </main>
    </>
  )
}

export default EstablishmentLayout