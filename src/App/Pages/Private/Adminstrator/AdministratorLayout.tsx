import { Link, useNavigate } from "react-router-dom"
import { useDispatch } from "react-redux"
import { logout } from "../../../../Redux/features/authSlice";
import { persistor } from "../../../../Redux/store";
import { Header } from "../../../../Components/Organisms/Header";
import Button from "../../../../Components/Atoms/Button";



interface IAdministratorLayoutProps {
    children: React.ReactNode
}

const AdministratorLayout:React.FC<IAdministratorLayoutProps> = ({children}) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const logOut = () => {
    dispatch(logout());
    persistor.purge()
    navigate('/')
  }

  return (
    <>
        <Header linkLogo="/administrator/establishments">
            <li><Link to='/administrator/establishments'>Establecimientos</Link></li>
            <li><Link to='/administrator/students'>Estudiantes</Link></li>
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

export default AdministratorLayout