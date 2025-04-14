import { RxHamburgerMenu } from "react-icons/rx"
import { useState } from "react"
import { Link } from "react-router-dom"
import HeaderAside from "../Molecules/HeaderAside"

interface IHeaderProps{
    children: React.ReactNode
    linkLogo : string
}

export const Header: React.FC<IHeaderProps> = ({children, linkLogo}) => {
  const [header, setHeader] = useState(false);

  return (
    <header className="w-full bg-royalBlue h-[85px] flex items-center justify-center fixed top-0 z-40 ">
        <nav className="max-w-[1600px] w-full px-4 flex justify-between items-center">
            <Link to={linkLogo}><h1 className="text-white text-4xl flex"> Fit4taal </h1></Link>
            <div>
                <button onClick={()=>setHeader(true)} className="text-white text-2xl md:hidden" ><RxHamburgerMenu /></button>
                <ul className="hidden md:flex gap-10 text-lg text-white items-center ">
                    {children}
                   
                </ul>
                <div className=" md:hidden">
                    {
                        header ? (
                            <HeaderAside closeAside={()=>setHeader(false)}>
                                {children}
                            </HeaderAside>
                        ) : '' 
                    }
                </div>
            </div>
        </nav>
    </header>
  )
}
